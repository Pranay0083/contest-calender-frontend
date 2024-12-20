import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../../api/contest";

export default function Signin({ setIsLogin }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    keepSignedIn: false,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!formData.email || !formData.password) {
      setError("All fields are required");
      setLoading(false);
      return;
    }

    const user = {
      email: formData.email,
      password: formData.password,
    };

    try {
      const response = await signIn(user);
      if (response.message === "Invalid credentials") {
        setError("Wrong email or password");
      } else if(response.message === "Missing required fields"){
        setError("we are fixing this issue. Please try again after some time");
      }else {
        setLoading(false)
        setIsLogin(true);
        if (formData.keepSignedIn) {
          localStorage.setItem("userId", response.user._id);
          localStorage.setItem("token", response.token);
          localStorage.setItem("isLogin", true);
        } else {
          sessionStorage.setItem("userId", response.user);
          sessionStorage.setItem("token", response.token);
          sessionStorage.setItem("isLogin", true);
        }
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="something">
      <div className="sign-container">
        <h2 className="sign-title">Sign In</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit} className="sign-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="sample@gmail.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </div>
          <div className="form-checkbox">
            <label htmlFor="keepSignedIn">Keep me signed in</label>
            <input
              type="checkbox"
              id="keepSignedIn"
              name="keepSignedIn"
              className="checkbox"
              checked={formData.keepSignedIn}
              onChange={handleChange}
            />
          </div>
          <button type="submit" disabled={loading}>
            <span>{loading ? "Signing in..." : "Sign in"}</span>
          </button>
          <Link to="/signup">
            <button type="button" className="signbuttons">
              <span>Sign Up</span>
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
