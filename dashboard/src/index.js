import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./components/Home";
import AuthWrapper from "./components/AuthWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthWrapper>
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      </AuthWrapper>
    </BrowserRouter>
  </React.StrictMode>
);