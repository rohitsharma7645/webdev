import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ProductDetails.css";

const ProductsDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/products/${id}`);

      if (!response.ok) {
        throw new Error("Failed to fetch product data");
      }

      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="page-shell">
      <div className="detail-card">
      <h1>{product.name}</h1>

      <img src={product.image} alt={product.name} />

      <h2>Rs. {product.price}</h2>

      <Link to="/Products">Back to Products</Link>
      </div>
    </div>
  );
};

export default ProductsDetail;
