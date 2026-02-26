import { useState, useContext } from "react";
import products from "../data/products";
import { CartContext } from "../context/CartContext";
import "../styles/collections.css";
import "../styles/global.css";
// import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function CollectionsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { addToCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="collections-page">
      <h1>COLLECTIONS</h1>
      <p>Discover timeless pieces crafted for modern queens</p>

      <div className="filter-buttons">
        {["all", "rings", "necklaces", "earrings", "bridal", "royal"].map(
          (cat) => (
            <button
              key={cat}
              className={selectedCategory === cat ? "active" : ""}
              onClick={() => setSelectedCategory(cat)}
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