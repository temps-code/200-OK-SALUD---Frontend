// src/components/logout/Logout.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import heart from "../../assets/img/logoGrande.png";

const Logout: React.FC = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    // Opcionalmente puedes limpiar el storage o estado global
    // localStorage.removeItem("token"); // si usas auth
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen">
      {/* Panel izquierdo con branding */}
      <div className="w-1/2 bg-blue-200 flex flex-col items-center justify-center p-10 space-y-10">
        <img src={heart} alt="Icono corazón" className="h-120" />
      </div>

      {/* Panel derecho con mensaje de despedida */}
      <div className="w-1/2 bg-neutral-50 flex flex-col items-center justify-center p-10 space-y-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          ¡Sesión finalizada!
        </h2>
        <p className="text-gray-600 text-lg">
          Esperamos verte pronto de nuevo en <strong>200 OK SALUD</strong>.
        </p>
        <button onClick={handleReturn}>Volver a iniciar sesión</button>
      </div>
    </div>
  );
};

export default Logout;
