import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import {
    randomBytes,
    randomUUID,
    createHash
} from "crypto";

import pool from "../config/db.js";
import authenticate from "../middleware/authMiddleware.js";

const router = express.Router();

const REFRESH_DAYS = 7;

const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/api/auth",
    maxAge: REFRESH_DAYS * 24 * 60 * 60 * 1000
};

// Hash refresh token before storing it in database
const hashToken = (token) => {
    return createHash("sha256")
        .update(token)
        .digest("hex");
};

// Generate access token
const generateAccessToken = (user) => {
    return jwt.sign(
        { role: user.role },
        process.env.ACCESS_TOKEN_SECRET,
        {
            subject: String(user.id),
            expiresIn: "15m",
            issuer: "auth-practice",
            audience: "auth-users"
        }
    );
};

// Generate random refresh token
const generateRefreshToken = () => {
    return randomBytes(64).toString("hex");
};

// ----------------------------------
// REGISTER
// ----------------------------------

router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        if (password.length < 8) {
            return res.status(400).json({
                message: "Password must be at least 8 characters"
            });
        }

        const existingUser = await pool.query(
            "SELECT id FROM users WHERE email = $1",
            [email]
        );

        if (existingUser.rows.length > 0) {
            return res.status(409).json({
                message: "Email already registered"
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await pool.query(
            `INSERT INTO users (name, email, password)
             VALUES ($1, $2, $3)
             RETURNING id, name, email, role`,
            [name, email, hashedPassword]
        );

        res.status(201).json({
            message: "Registration successful",
            user: result.rows[0]
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Registration failed"
        });
    }
});

// ----------------------------------
// LOGIN
// ----------------------------------

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const result = await pool.query(
            "SELECT * FROM users WHERE email = $1",
            [email]
        );

        if (result.rows.length === 0) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const user = result.rows[0];

        // Compare entered password with hashed password
        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        // Generate tokens
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken();

        // Create session
        const sessionId = randomUUID();

        await pool.query(
            `INSERT INTO sessions
             (id, user_id, refresh_token_hash, expires_at,
              user_agent, ip_address)
             VALUES ($1, $2, $3, NOW() + INTERVAL '7 days', $4, $5)`,
            [
                sessionId,
                user.id,
                hashToken(refreshToken),
                req.get("user-agent") || null,
                req.ip
            ]
        );

        // Store refresh token in HTTP-only cookie
        res.cookie(
            "refreshToken",
            refreshToken,
            cookieOptions
        );

        res.status(200).json({
            message: "Login successful",
            accessToken,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Login failed"
        });
    }
});

// ----------------------------------
// REFRESH ACCESS TOKEN
// ----------------------------------

router.post("/refresh", async (req, res) => {
    try {
        const oldRefreshToken = req.cookies.refreshToken;

        if (!oldRefreshToken) {
            return res.status(401).json({
                message: "Refresh token missing"
            });
        }

        const oldHash = hashToken(oldRefreshToken);

        // Find valid session
        const result = await pool.query(
            `SELECT s.id, s.user_id, u.role
             FROM sessions s
             JOIN users u ON s.user_id = u.id
             WHERE s.refresh_token_hash = $1
             AND s.revoked_at IS NULL
             AND s.expires_at > NOW()`,
            [oldHash]
        );

        if (result.rows.length === 0) {
            res.clearCookie("refreshToken", cookieOptions);

            return res.status(401).json({
                message: "Invalid or expired refresh token"
            });
        }

        const session = result.rows[0];

        // Generate new tokens
        const newRefreshToken = generateRefreshToken();
        const newHash = hashToken(newRefreshToken);

        // Rotate refresh token atomically
        const updated = await pool.query(
            `UPDATE sessions
             SET refresh_token_hash = $1,
                 expires_at = NOW() + INTERVAL '7 days'
             WHERE id = $2
             AND refresh_token_hash = $3
             AND revoked_at IS NULL
             AND expires_at > NOW()
             RETURNING id`,
            [newHash, session.id, oldHash]
        );

        if (updated.rows.length === 0) {
            res.clearCookie("refreshToken", cookieOptions);

            return res.status(401).json({
                message: "Refresh token already used or expired"
            });
        }

        const accessToken = generateAccessToken({
            id: session.user_id,
            role: session.role
        });

        // Replace old refresh cookie
        res.cookie(
            "refreshToken",
            newRefreshToken,
            cookieOptions
        );

        res.status(200).json({
            message: "Token refreshed successfully",
            accessToken
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Token refresh failed"
        });
    }
});

// ----------------------------------
// LOGOUT
// ----------------------------------

router.post("/logout", async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;

        if (refreshToken) {
            await pool.query(
                `UPDATE sessions
                 SET revoked_at = NOW()
                 WHERE refresh_token_hash = $1
                 AND revoked_at IS NULL`,
                [hashToken(refreshToken)]
            );
        }

        res.clearCookie("refreshToken", cookieOptions);

        res.status(200).json({
            message: "Logout successful"
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Logout failed"
        });
    }
});

// ----------------------------------
// PROTECTED PROFILE ROUTE
// ----------------------------------

router.get("/me", authenticate, async (req, res) => {
    try {
        const result = await pool.query(
            `SELECT id, name, email, role
             FROM users
             WHERE id = $1`,
            [req.user.id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            user: result.rows[0]
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Could not fetch profile"
        });
    }
});

export default router;
