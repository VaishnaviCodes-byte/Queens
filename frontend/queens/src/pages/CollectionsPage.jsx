import { useState, useContext } from "react";
import products from "../data/products";
import { CartContext } from "../context/CartContext";
import "../styles/collections.css";
import "../styles/global.css";
// import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

function CollectionsPage() {
  const [ref, isVisible] = useScrollAnimation();
  const [searchParams] = useSearchParams();
const categoryFromURL = searchParams.get("category") || "all";

const [selectedCategory, setSelectedCategory] = useState(categoryFromURL);
  const { addToCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);
      useEffect(() => {
  if (categoryFromURL) {
    setSelectedCategory(categoryFromURL);
  }
}, [categoryFromURL]);

  return (
    <div
  ref={ref}
  className={`collections-page ${isVisible ? "show" : ""}`}
>
      <h1>COLLECTIONS</h1>
      <p>Discover timeless pieces crafted for modern queens</p>

      <div className="filter-buttons">
        {["all", "rings", "necklaces", "earrings", "bridal", "royal"].map(
          (cat) => (
            <button
              key={cat}
              className={selectedCategory === cat ? "active" : ""}
              onClick={() => {
  setSelectedCategory(cat);
  navigate(`/collections?category=${cat}`);
}}
            >
              {cat.toUpperCase()}
            </button>
          )
        )}
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>
            <p className="price">
              ₹ {product.price.toLocaleString("en-IN")}
            </p>

            <button
              onClick={() => {
                if (!user) {
                  alert("Please login to continue 👑");
                  navigate("/account");
                  return;
                }

                addToCart(product);
              }}
            >
              ADD TO CART
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CollectionsPage;