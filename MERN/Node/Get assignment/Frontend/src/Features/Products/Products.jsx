import { useEffect, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { fuzzyMatch } from "../../Shared/fuzzySearch";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/products");

      if (!response.ok) {
        throw new Error("Failed to fetch product data");
      }

      const result = await response.json();
      setProducts(result);
    } catch (error) {
      console.error("Error fetching skills", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div className="page-shell">
      <Form className="search-form">
        <InputGroup>
          <Form.Control
            className="search-input"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search product"
          />
        </InputGroup>
      </Form>

      <div className="cards-grid">
        {products
          .filter((product) => fuzzyMatch(product.name, debouncedSearch))
          .map((product) => (
            <Link
              to={`/Products/${product.id}`}
              key={product.id}
              className="item-link"
            >
              <div className="item-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <h3>{product.name}</h3>
                <p>Price: Rs. {product.price}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Products;
