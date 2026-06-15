import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();

  // fallback so app never breaks
  const API =
    process.env.REACT_APP_API_URL || "https://stockweb-1.onrender.com";

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleError = (msg) =>
    toast.error(msg, { position: "bottom-left" });

  const handleSuccess = (msg) =>
    toast.success(msg, { position: "bottom-right" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("API:", API);

      // TRY BOTH COMMON ROUTES (safe fix)
      let res;

      try {
        res = await axios.post(
          `${API}/auth/signup`,
          inputValue,
          { withCredentials: true }
        );
      } catch (err) {
        // fallback route
        res = await axios.post(
          `${API}/signup`,
          inputValue,
          { withCredentials: true }
        );
      }

      const { success, message } = res.data;

      if (success) {
        handleSuccess(message || "Signup successful!");

        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        handleError(message || "Signup failed");
      }
    } catch (error) {
      console.log("FULL ERROR:", error);
      console.log("RESPONSE:", error?.response?.data);

      handleError(
        error?.response?.data?.message ||
          error.message ||
          "Server error"
      );
    }

    setInputValue({
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="form_container">
      <h2>Signup Account</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
            required
          />
        </div>

        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Enter your username"
            onChange={handleOnChange}
            required
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
            required
          />
        </div>

        <button type="submit">Submit</button>

        <span>
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Signup;