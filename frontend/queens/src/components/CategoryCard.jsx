import { Link } from "react-router-dom";


function CategoryCard({ category }) {
  return (
    <div
      className="category-card"
      style={{ backgroundImage: `url(${category.image})` }}
    >
      <div className="category-overlay">
        <h2>{category.title}</h2>
        <Link to={`/collections?category=${category.id}`} className="explore-btn">
  EXPLORE →
</Link>
      </div>
    </div>
  );
}

export default CategoryCard;