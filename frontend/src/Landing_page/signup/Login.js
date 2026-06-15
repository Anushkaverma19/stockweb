import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const API = process.env.REACT_APP_API_URL;

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleError = (msg) =>
    toast.error(msg, { position: "bottom-left" });

  const handleSuccess = (msg) =>
    toast.success(msg, { position: "bottom-left" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!API) {
      handleError("API URL is not configured");
      return;
    }

    try {
      console.log("API URL:", API);
      console.log("Login URL:", `${API}/auth/login`);

      const { data } = await axios.post(
        `${API}/auth/login`,
        inputValue,
        {
          withCredentials: true,
        }
      );

      console.log("Login Response:", data);

      if (data?.success) {
        handleSuccess(data.message || "Login successful");

        if (data.token) {
          localStorage.setItem("token", data.token);
          console.log("Token Saved:", data.token);
        } else {
          console.log("No token received from backend");
        }

        setTimeout(() => {
          window.location.href =
            process.env.REACT_APP_FRONTEND_URL ||
            "https://stockweb-2.onrender.com";
        }, 1000);
      } else {
        handleError(data?.message || "Login failed");
      }
    } catch (error) {
      console.error("Login Error:", error);
      console.error("Backend Response:", error?.response?.data);

      handleError(
        error?.response?.data?.message ||
          "Server error. Please try again."
      );
    }
  };

  return (
    <div className="form_container">
      <h2>Login Account</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={inputValue.email}
            onChange={handleOnChange}
            required
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={inputValue.password}
            onChange={handleOnChange}
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;