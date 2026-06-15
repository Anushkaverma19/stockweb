import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
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
      handleError("API URL is not configured in .env");
      return;
    }

    try {
      const { data } = await axios.post(
        `${API}/login`,
        inputValue,
        { withCredentials: true }
      );

      if (data?.success) {
        handleSuccess(data.message);

        // ✅ FIX 1: store real token from backend
        localStorage.setItem("token", data.token);

        // ✅ FIX 2: redirect to holdings (not /)
        setTimeout(() => {
          navigate("/holdings");
        }, 1000);
      } else {
        handleError(data?.message || "Login failed");
      }
    } catch (error) {
      console.log(error);
      handleError("Server error. Please try again.");
    }

    setInputValue({
      email: "",
      password: "",
    });
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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;