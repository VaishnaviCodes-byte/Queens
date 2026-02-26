import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "../styles/cart.css";

function CartPage() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  /* 🔒 Protect Route */
  useEffect(() => {
    if (!user) {
      navigate("/account");
    }
  }, [user, navigate]);

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  /* ================= EMPTY CART ================= */
  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <div className="cart-icon">🛍</div>

        <h1>Your Cart Is Empty</h1>
        <p>Discover our exquisite collections</p>

        <Link to="/collections">
          <button className="shop-btn">SHOP NOW</button>
        </Link>
      </div>
    );
  }

  /* ================= FILLED CART ================= */

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>

      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div className="item-details">
              <h3>{item.name}</h3>
              <p>₹ {item.price.toLocaleString("en-IN")}</p>

              <button onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Total: ₹ {total.toLocaleString("en-IN")}</h2>
        <button className="checkout-btn">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default CartPage;