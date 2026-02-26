import "../styles/hero.css";
import heroImage from "../assets/hero.png";
import logo from "../assets/logo.png";

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="overlay"></div>

      <div className="hero-content">
        <div className="logo-card">
          <img src={logo} alt="Queens Logo" />
        </div>

        <h1>
          CRAFTED FOR <br /> QUEENS
        </h1>

        <p>
          Where Elegance Meets Power. Discover timeless luxury in every piece.
        </p>

        <div className="hero-buttons">
          <button className="btn-outline">SHOP COLLECTION</button>
          <button className="btn-link">EXPLORE STORY</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;