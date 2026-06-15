import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./components/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        {/* DASHBOARD HOME (after login) */}
        <Route path="/" element={<Home />} />

        {/* fallback route */}
        <Route path="*" element={<Home />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);