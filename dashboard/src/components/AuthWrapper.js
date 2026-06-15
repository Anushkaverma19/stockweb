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
        const { data } = await axios.get(
          `${API}/auth/verify`,
          { withCredentials: true }
        );

        if (data.status === true) {
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuth) {
    return <div>Redirecting...</div>;
  }

  return children;
}

export default AuthWrapper;