import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./components/Home";
import Login from "./components/Login"; // if exists

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        {/* PUBLIC LOGIN ROUTE */}
        <Route path="/login" element={<Login />} />

        {/* DASHBOARD (HOME AFTER LOGIN) */}
        <Route path="/" element={<Home />} />

        {/* fallback */}
        <Route path="*" element={<Home />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);