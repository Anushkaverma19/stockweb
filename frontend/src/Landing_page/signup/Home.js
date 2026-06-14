import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      try {
        if (!cookies.token) {
          navigate("/login");
          return;
        }

        const { data } = await axios.post(
          "http://localhost:3002",   // ⚠️ FIX PORT
          {},
          { withCredentials: true }
        );

        const { status, user } = data;

        if (status) {
          setUsername(user);
          toast(`Hello ${user}`, {
            position: "top-right",
          });
        } else {
          removeCookie("token", { path: "/" });
          navigate("/login");
        }
      } catch (error) {
        removeCookie("token", { path: "/" });
        navigate("/login");
      }
    };

    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  // ✅ FIXED LOGOUT (IMPORTANT)
  const Logout = async () => {
    try {
      await axios.post(
        "http://localhost:3002/logout",
        {},
        { withCredentials: true }
      );

      removeCookie("token", { path: "/" });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="home_page">
        <h4>
          Welcome <span>{username}</span>
        </h4>

        <button onClick={Logout}>LOGOUT</button>
      </div>

      <ToastContainer />
    </>
  );
};

export default Home;