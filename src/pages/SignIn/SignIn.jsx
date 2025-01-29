import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./SignIn.css";

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
    setIsLoading(true); // Set loading to true when the request starts
    console.log("Form submitted"); // Debugging log
    try {
      const response = await axios.post(
        "http://localhost:8000/api/users/signin",
        {
          email,
          password,
        }
      );
      if (response.data.roleType !== "user") {
        //in admin panel will go this
        alert("Your not user");
      } else {
        console.log("Response:", response.data); // Debugging log
        alert("Login successful!");
        localStorage.setItem("sessionId", response.data.sessionId); // Store session ID
        localStorage.setItem("user", JSON.stringify(response.data));

        navigate("/");
      }
    } catch (error) {
      console.error(error);
      setError("Invalid email or password. Please try again.");
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

      {/* Backdrop with CircularProgress */}
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
