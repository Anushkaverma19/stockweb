import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AuthWrapper({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data } = await axios.post(
          "http://localhost:3002/",
          {},
          { withCredentials: true }
        );

        console.log("AUTH RESPONSE:", data);

        if (!data.status) {
          console.log("User not authenticated");
          navigate("/login");
        }
      } catch (err) {
        console.log("AUTH ERROR:", err);
        navigate("/login");
      }
    };

    checkAuth();
  }, [navigate]);

  return children;
}

export default AuthWrapper;