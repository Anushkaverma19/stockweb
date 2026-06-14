import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AuthWrapper({ children }) {

  const navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const checkAuth = async () => {
      try {
        if (!API) {
          console.log("API URL missing");
          navigate("/login");
          return;
        }

        const { data } = await axios.post(
          `${API}/`,
          {},
          { withCredentials: true }
        );

        console.log("AUTH RESPONSE:", data);

        if (!data.status) {
          navigate("/login");
        }

      } catch (err) {
        console.log("AUTH ERROR:", err);
        navigate("/login");
      }
    };

    checkAuth();

  }, [navigate, API]);

  return children;
}

export default AuthWrapper;