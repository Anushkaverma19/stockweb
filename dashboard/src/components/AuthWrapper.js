import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AuthWrapper({ children }) {
  const navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data } = await axios.post(
          `${API}/`,
          {},
          { withCredentials: true }
        );

        if (data.status) {
          setIsAuth(true);
        } else {
          setIsAuth(false);
          navigate("/login", { replace: true });
        }
      } catch (err) {
        setIsAuth(false);
        navigate("/login", { replace: true });
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [API, navigate]);

  // 🔥 THIS is the key line that stops holdings flash
  if (loading) return null; // or spinner

  if (!isAuth) return null;

  return children;
}

export default AuthWrapper;