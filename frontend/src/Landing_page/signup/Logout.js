const logout = () => {
  localStorage.removeItem("token");

  window.location.href = process.env.REACT_APP_FRONTEND_URL;
};