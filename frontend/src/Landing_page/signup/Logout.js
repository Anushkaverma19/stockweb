const logout = () => {
  localStorage.removeItem("token");

  // redirect to Zerodha home
  window.location.href = "http://localhost:3000/";
};