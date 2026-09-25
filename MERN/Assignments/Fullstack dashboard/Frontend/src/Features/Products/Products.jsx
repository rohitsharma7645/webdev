import { useEffect, useState } from "react";
import axios from "axios";
import Fuse from "fuse.js";
import { useNavigate } from "react-router-dom";
import "./Products.css";

function Products() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);

    const navigate = useNavigate();

    const getProducts = async () => {
        try {
            const token = localStorage.getItem("token");

            const response = await axios.get(
                "http://localhost:5000/api/products",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setProducts(response.data);
            setFilteredProducts(response.data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!search.trim()) {
                setFilteredProducts(products);
                return;
            }

            const fuse = new Fuse(products, {
                keys: ["title", "category", "description"],
                threshold: 0.4
            });

            const results = fuse.search(search);
            setFilteredProducts(results.map(result => result.item));

        }, 300);

        return () => clearTimeout(timer);
    }, [search, products]);

    const deleteProduct = async (id) => {
        try {
            const token = localStorage.getItem("token");

            await axios.delete(
                `http://localhost:5000/api/products/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            getProducts();

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="products-page">
            <h1>Products</h1>

            <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <button onClick={() => navigate("/add-product")}>Add Product</button>

            <div className="products-list">
                {filteredProducts.map((product) => (
                    <div className="product-card" key={product.id}>
                        <h2>{product.title}</h2>

                        <p>Price: ₹{product.price}</p>
                        <p>Category: {product.category}</p>
                        <p>Stock: {product.stock}</p>
                        <p>{product.description}</p>

                        <button onClick={() =>navigate(`/edit-product/${product.id}`)}>Edit</button>

                        <button onClick={() => deleteProduct(product.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
