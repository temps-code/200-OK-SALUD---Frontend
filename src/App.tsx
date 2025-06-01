import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Cabeza from "./components/header/Header";
import Cuerpo from "./components/body/body";
import Pie from "./components/footer/footer";
import Splash from "./components/Splash";
import "leaflet/dist/leaflet.css";
import Nosotros from "./pages/Nosotros";
import SolicitarCita from "./pages/SolicitarCita";
import Login from "./components/login/login";
import Logout from "./components/login/logout";
import UbicacionPostas from "./components/hospitales/ubicacionPostas";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) return <Splash onComplete={() => setShowSplash(false)} />;

  return (
    <div className="min-h-screen flex flex-col">
      <Cabeza />
      <Routes>
        <Route path="/" element={<Cuerpo />} />
        <Route path="/paciente" element={<div>Página de paciente</div>} />
        <Route path="/medico" element={<div>Página de médico</div>} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/solicitarcita" element={<SolicitarCita />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/ubicacion-postas" element={<UbicacionPostas />} />
      </Routes>
      <Pie />
    </div>
  );
}

export default App;