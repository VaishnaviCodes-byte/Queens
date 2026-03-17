import "../styles/footer.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const handleNavigation = (category) => {
    navigate(`/collections?category=${category}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="footer">

      {/* Newsletter Section */}
      <div className="newsletter">
        <h2>Join The Royal Circle</h2>
        <p>Be the first to discover new collections and exclusive offers.</p>

        <div className="newsletter-form">
          <input type="email" placeholder="Your email address" />
          <button>SUBSCRIBE</button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-content">

        {/* Brand Column */}
        <div className="footer-col brand">
          <img src={logo} alt="Queens Logo" />
          <p>
            Crafted for Queens. Where elegance meets power.
          </p>
        </div>

        <div className="footer-col">
          <h4>SHOP</h4>
          <p onClick={() => handleNavigation("rings")}>Rings</p>
          <p onClick={() => handleNavigation("necklaces")}>Necklaces</p>
          <p onClick={() => handleNavigation("earrings")}>Earrings</p>
          <p onClick={() => handleNavigation("bridal")}>Bridal</p>
          <p onClick={() => handleNavigation("royal")}>Royal Edition</p>
        </div>

        {/* Information Column */}
        <div className="footer-col">
          <h4>INFORMATION</h4>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Shipping Policy</a>
          <a href="#">Returns</a>
          <a href="#">Privacy Policy</a>
        </div>

        {/* Connect Column */}
        <div className="footer-col">
          <h4>CONNECT</h4>
          <div className="social-icons">
            <span>📘</span>
            <span>📸</span>
            <span>✉️</span>
          </div>

          <p>info@queens.com</p>
          <p>+91 98765 43210</p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        © 2026 Queens Jewelry. All Rights Reserved. Designed for Modern Queens.
      </div>

    </footer>
  );
}

export default Footer;