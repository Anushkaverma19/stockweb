import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    };

    checkAuth();

    // listen for changes (important)
    window.addEventListener("storage", checkAuth);

    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.href = "http://localhost:3000";
  };

  return (
    <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "white" }}>
      <div className="container-fluid p-2">

        <Link className="navbar-brand" to="/">
          <img style={{ width: "30%" }} src="/media/images/logo.svg" alt="logo" />
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav gap-3">

            <li className="nav-item"><Link className="nav-link" to="/signup">Signup</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/pricing">Pricing</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/support">Support</Link></li>

            {isLoggedIn && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="http://localhost:3001">
                    Dashboard
                  </Link>
                </li>

                <li className="nav-item">
                  <span className="nav-link" style={{ cursor: "pointer" }} onClick={logout}>
                    Logout
                  </span>
                </li>
              </>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;