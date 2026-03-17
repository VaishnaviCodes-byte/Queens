import "../styles/craft.css";
import craftImage from "../assets/craft.jpg";

import { Link } from "react-router-dom";

function CraftSection() {
  return (
    <section id="craft" className="craft-section">
      <div className="craft-container">

        <div className="craft-image">
          <img src={craftImage} alt="Jewelry Crafting" />
        </div>

        <div className="craft-content">
          <h2>
            Designed for <br /> Modern Queens
          </h2>

          <p>
            Each piece in our collection is meticulously crafted by master artisans
            who pour their passion and expertise into every detail. We believe
            that luxury is not just about the materials, but about the story,
            the craftsmanship, and the emotion behind each creation.
          </p>

          <p>
            From ethically sourced diamonds to the finest rose gold, every
            element is chosen with care. Our jewelry is more than an accessory —
            it's a celebration of strength, elegance, and the queens who wear them.
          </p>
          <Link to="/collections">
          <button className="craft-btn">
            DISCOVER OUR CRAFT
          </button></Link>
          
        </div>

      </div>
    </section>
  );
}

export default CraftSection;