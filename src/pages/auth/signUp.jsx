import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("All fields are required");
      setLoading(false);
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long");
      setLoading(false);
      return;
    }
    try {
      const response = await fetch("https://contestcalendarscraper.onrender.com/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          mail: formData.email,
          password: formData.password,
        }),
      });
      const data = await response.json();
      if (data.status === "Missing required fields") {
        alert("email already exists or try again after some time");
      } else {
        navigate("/signin");
      }

      setLoading(false);
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="something">
      <div className="sign-container">
      <h2 className="sign-title">Sign Up</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="sign-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="sample_user"
            required
          />
        </div>
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
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          <span>{loading ? "Signing up..." : "Sign Up"}</span>
        </button>
        <Link to="/signin" >
          <button type="button" className="signbuttons">
            <span>Sign In</span>
          </button>
        </Link>
      </form>
    </div>
    </div>
    
  );
}