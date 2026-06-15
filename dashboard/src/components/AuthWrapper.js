import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AuthWrapper({ children }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login", { replace: true });
    }

    setLoading(false);
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return children;
}

export default AuthWrapper;