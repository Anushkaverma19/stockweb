import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Landing_page/Home/HomePage.js";
import Signup from "./Landing_page/signup/Signup.js";
import Login from "./Landing_page/signup/Login.js"; // ✅ ADD THIS

import Aboutpage from "./Landing_page/About/Aboutpage.js";
import ProductPage from "./Landing_page/products/ProductPage.js";
import SupportPage from "./Landing_page/support/SupportPage.js";
import PricingPage from "./Landing_page/pricing/PricingPage.js";
import Footer from "./Landing_page/Footer.js";
import Navbar from "./Landing_page/Navbar.js";
import Notfound from "./Landing_page/Notfound.js";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />   {/* ✅ better than /* */}

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="/about" element={<Aboutpage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/support" element={<SupportPage />} />

        <Route path="*" element={<Notfound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);  