import "./SignIn.css";
import { useState } from "react";

import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/login",
        {
          email,
          password,
        }
      );

      if (response.status === 200 && response.data.status === "Success") {
        const userId = response.data.data;
        localStorage.setItem("userId", userId);
        alert("Login successful!");
        navigate("/");
      } else {
        setError("Invalid login. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      setError("Login failed. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signin">
      <div className="signin-container">
        <div className="signin-box">
          <h2>Sign In</h2>
          {error && (
            <p className="error-message text-danger fw-bold">{error}</p>
          )}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="signin-button">
              Sign In
            </button>
          </form>
          <div className="signup-link">
            {`Don't have an account?`} <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default SignIn;
