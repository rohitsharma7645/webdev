import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./EditProduct.css";

function EditProduct() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`http://localhost:5000/api/products/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const currentProduct = response.data;

        setProduct(currentProduct);
        setTitle(currentProduct.title);
        setPrice(currentProduct.price);
        setCategory(currentProduct.category);
        setStock(currentProduct.stock);
        setDescription(currentProduct.description ?? "");
      } catch (error) {
        setError(error.response?.data?.message || "Unable to load the product.");
      }
    };

    getProduct();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await axios.put(`http://localhost:5000/api/products/${id}`, {
          title,
          price,
          category,
          stock,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });


      navigate("/products");
    } catch (error) {
        setError(error.response?.data?.message || "Unable to update the product.");
    }
  };

  if (error) {
    return (
      <div className="edit-product-message">
        <p>{error}</p>
        <button type="button" onClick={() => navigate("/products")}>Back to products</button>
      </div>
    );
  }

  if (!product) {
    return <p className="edit-product-message">Loading product...</p>;
  }

  return (
    <div className="edit-product-page">
      <h1>Edit Product</h1>

      <form className="product-form" onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <br />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Price</label>
          <br />
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Category</label>
          <br />
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Stock</label>
          <br />
          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Description</label>
          <br />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <br />

        <button type="submit">Update Product</button>
        <button type="button" onClick={() => navigate("/products")}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EditProduct;
