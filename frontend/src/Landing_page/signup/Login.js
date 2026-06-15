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

    try {
      const { data } = await axios.post(
        `${API}/auth/login`,
        inputValue,
        {
          withCredentials: true,
        }
      );

      console.log("Login Response:", data);

      if (data.success) {
        localStorage.setItem("token", data.token);

        handleSuccess("Login successful");

        setTimeout(() => {
          window.location.href = "https://stockweb-3.onrender.com";
        }, 1000);
      } else {
        handleError(data.message);
      }
    } catch (error) {
      console.error(error);
      handleError("Login failed");
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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;