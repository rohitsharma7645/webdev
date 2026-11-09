
import jwt from "jsonwebtoken";

const authenticate = (req, res, next) => {
    try {
        // Get token from Authorization header
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                message: "Access token required"
            });
        }

        const token = authHeader.split(" ")[1];

        // Verify token signature and expiry
        const decoded = jwt.verify(
            token,
            process.env.ACCESS_TOKEN_SECRET,
            {
                issuer: "auth-practice",
                audience: "auth-users"
            }
        );

        // Store user information in request
        req.user = {
            id: decoded.sub,
            role: decoded.role
        };

        next();

    } catch (error) {
        return res.status(401).json({
            message: "Invalid or expired access token"
        });
    }
};

export default authenticate;
