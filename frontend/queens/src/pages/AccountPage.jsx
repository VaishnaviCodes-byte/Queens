import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/account.css";
import logo from "../assets/logo.png";
import { AuthContext } from "../context/AuthContext";

function AccountPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { user, login, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isLogin ? "login" : "register";

    const bodyData = isLogin
      ? { email, password }
      : { name, email, password };

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/${endpoint}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bodyData),
        }
      );

      const data = await res.json();

      if (data.token) {
        login(data.token, data.user);
        navigate("/account");
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Something went wrong");
    }
  };

  /* ================= IF USER IS LOGGED IN ================= */

  if (user) {
    return (
      <div className="account-page">
        <div className="account-logo">
          <img src={logo} alt="Queens Logo" />
        </div>

        <h1>Welcome, {user.name} 👑</h1>

        <div className="account-dashboard">

          <button onClick={() => navigate("/cart")}>
            View Cart
          </button>

          <button onClick={() => navigate("/orders")}>
            Order History
          </button>

          <button onClick={logout} className="logout-btn">
            Logout
          </button>

        </div>
      </div>
    );
  }

  /* ================= LOGIN / SIGNUP FORM ================= */

  return (
    <div className="account-page">
      <div className="account-logo">
        <img src={logo} alt="Queens Logo" />
      </div>

      <h1>{isLogin ? "Welcome Back" : "Create Account"}</h1>

      <div className="account-card">
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label>FULL NAME</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}

          <div className="form-group">
            <label>EMAIL</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group password-group">
            <label>PASSWORD</label>

            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
  type="button"
  className="password-toggle"
  onClick={() => setShowPassword(!showPassword)}
>
                {showPassword ? (
                  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="20"
  height="20"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
  <circle cx="12" cy="12" r="3"/>
</svg>
                ) : (
                  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="20"
  height="20"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20C5 20 1 12 1 12a21.77 21.77 0 0 1 5.06-6.94"/>
  <path d="M9.9 4.24A10.94 10.94 0 0 1 12 4c7 0 11 8 11 8a21.77 21.77 0 0 1-3.16 4.19"/>
  <path d="M1 1l22 22"/>
</svg>
                )}
              </button>
            </div>
          </div>

          <button type="submit" className="account-btn">
            {isLogin ? "SIGN IN" : "SIGN UP"}
          </button>
        </form>

        <div className="toggle-text">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <span onClick={() => setIsLogin(false)}>
                Sign up
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span onClick={() => setIsLogin(true)}>
                Sign in
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AccountPage;