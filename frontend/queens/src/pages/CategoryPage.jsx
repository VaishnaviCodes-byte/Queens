import { useParams } from "react-router-dom";

function CategoryPage() {
  const { id } = useParams();

  return (
    <div style={{ padding: "150px 80px" }}>
      <h1 style={{ fontFamily: "Playfair Display", color: "#C78B9C" }}>
        {id.toUpperCase()}
      </h1>
      <p style={{ marginTop: "20px", color: "#B8B8B8" }}>
        Display designs of {id} here.
      </p>
    </div>
  );
}

export default CategoryPage;