import React from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiMap, FiHome, FiLogIn } from "react-icons/fi";
import logo from "../../assets/img/logoCabeza.png";

const Cabeza: React.FC = () => {
return (
    <header className="bg-[#064416] text-white p-2">
    <div className="container mx-auto flex items-center justify-between">
        {/* Logo y nombre del proyecto */}
        <Link to="/" className="flex items-center space-x-2">
        <img src={logo} alt="Logo 200-OK-SALUD" className="h-26 w-auto" />
        <span className="text-lg font-semibold">200-OK-SALUD</span>
        </Link>

        {/* Iconos de acción */}    
        <nav className="flex items-center space-x-4">
        <Link to="/login" title="Iniciar sesión" className="p-1 hover:bg-white/20 rounded">
            <FiLogIn size={20} />
        </Link>
        <Link to="/search" title="Buscar" className="p-1 hover:bg-white/20 rounded">
            <FiSearch size={20} />
        </Link>
        <Link to="/mapa" title="Ver mapa" className="p-1 hover:bg-white/20 rounded">
            <FiMap size={20} />
        </Link>
        <Link to="/" title="Página principal" className="p-1 hover:bg-white/20 rounded">
            <FiHome size={20} />
        </Link>
        </nav>
    </div>
    </header>
);
};

export default Cabeza;