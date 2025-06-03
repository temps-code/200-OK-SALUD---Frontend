import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch, FiMap, FiHome, FiUsers } from "react-icons/fi";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import logo from "../../assets/img/logoCabeza.png";
import { useAuth } from "../../context/AuthContext.tsx";

const Header: React.FC = () => {
  const { rol, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="bg-teal-700 text-white shadow-md py-3">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between">
        {/* Logo e identidad */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} alt="Logo 200-OK-SALUD" className="h-14 w-auto" />
          <span className="text-2xl font-extrabold tracking-wide select-none">
            200-OK-SALUD
          </span>
        </Link>

        {/* Navegación */}
        <div className="flex items-center space-x-4 mt-2 sm:mt-0">
          <nav className="flex items-center space-x-4">
            <Link
              to="/"
              title="Inicio"
              className="p-2 rounded-md hover:bg-teal-500/40 transition-colors duration-300"
            >
              <FiHome size={22} />
            </Link>
            <Link
              to="/nosotros"
              title="Nosotros"
              className="p-2 rounded-md hover:bg-teal-500/40 transition-colors duration-300"
            >
              <FiUsers size={22} />
            </Link>
            <Link
              to="/search"
              title="Buscar"
              className="p-2 rounded-md hover:bg-teal-500/40 transition-colors duration-300"
            >
              <FiSearch size={22} />
            </Link>
            <Link
              to="/ubicacion-postas"
              title="Ver mapa"
              className="p-2 rounded-md hover:bg-teal-500/40 transition-colors duration-300"
            >
              <FiMap size={22} />
            </Link>
            {rol === "enfermero" && (
              <Link
                to="/enfermero"
                title="Panel Enfermero"
                className="p-2 rounded-md hover:bg-teal-500/40 transition-colors duration-300"
              >
                <span className="text-lg">Enfermero</span>
              </Link>
            )}
            {rol === "medico" && (
              <Link
                to="/medico"
                title="Panel Médico"
                className="p-2 rounded-md hover:bg-teal-500/40 transition-colors duration-300"
              >
                <span className="text-lg">Médico</span>
              </Link>
            )}
          </nav>

          {/* Botón de sesión */}
          {rol ? (
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 bg-white text-red-600 font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-300"
            >
              <FaSignOutAlt />
              Cerrar Sesión
            </button>
          ) : (
            <Link
              to="/login"
              className="inline-flex items-center gap-2 bg-white text-teal-700 font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-300"
            >
              <FaSignInAlt />
              Iniciar Sesión
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;