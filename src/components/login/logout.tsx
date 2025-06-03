import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logout(); // Elimina el rol del contexto y del localStorage
    navigate("/login");
  }, [logout, navigate]);

  return null; // No muestra nada en pantalla, solo redirige
};

export default Logout;
