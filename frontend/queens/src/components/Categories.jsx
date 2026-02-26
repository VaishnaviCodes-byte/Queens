import categories from "../data/categoryData";
import CategoryCard from "./CategoryCard";
import "../styles/categories.css";

function Categories() {
  return (
    <section className="categories-section">
      <div className="categories-header">
        <h1>Our Collections</h1>
        <p>Explore our curated collections of exquisite jewelry</p>
      </div>

      <div className="categories-grid">
        {categories.map((cat) => (
          <CategoryCard key={cat.id} category={cat} />
        ))}
      </div>
    </section>
  );
}

export default Categories;