import categories from "../data/categoryData";
import CategoryCard from "./CategoryCard";
import "../styles/categories.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

function Categories() {
  const [ref, isVisible] = useScrollAnimation();
  return (
    <section
      ref={ref}
      className={`categories-section ${isVisible ? "show" : ""}`}
    >
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