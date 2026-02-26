import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import CategoryPage from "./pages/CategoryPage";
import CollectionsPage from "./pages/CollectionsPage";
import CartPage from "./pages/CartPage";
import CraftSection from "./components/CraftSection";
import Footer from "./components/Footer";
import AccountPage from "./pages/AccountPage";
import ProtectedRoute from "./components/ProtectedRoute";
import OrdersPage from "./pages/OrdersPage";

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <CraftSection />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<CategoryPage />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />
        <Route path="/orders" element={<ProtectedRoute><OrdersPage /></ProtectedRoute>} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;