import { useState, useEffect } from "react";
   import { Routes, Route, Navigate, useLocation } from "react-router-dom";
   import Cabeza from "./components/header/Header.tsx";
   import Cuerpo from "./components/body/body.tsx";
   import Pie from "./components/footer/footer.tsx";
   import Splash from "./components/Splash.tsx";
   import "leaflet/dist/leaflet.css";
   import Nosotros from "./pages/Nosotros.tsx";
   import SolicitarCita from "./pages/SolicitarCita.tsx";
   import Login from "./components/login/login.tsx";
   import Logout from "./components/login/logout.tsx";
   import UbicacionPostas from "./components/hospitales/ubicacionPostas.tsx";
   import { useAuth } from "./context/AuthContext";
   import EnfermeroPanel from "./pages/EnfermeroPanel.tsx";
   import MedicoPanel from "./pages/MedicoPanel.tsx";

const SearchPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Búsqueda</h1>
      <p className="text-lg text-gray-600">Página de búsqueda en construcción.</p>
    </div>
  );
};

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const { rol } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) return <Splash onComplete={() => setShowSplash(false)} />;

  // Rutas públicas
  const publicRoutes = ["/", "/nosotros", "/solicitarcita", "/ubicacion-postas", "/login", "/search"];

  // Redirigir si no está autenticado y no está en una ruta pública
  if (!rol && !publicRoutes.includes(location.pathname)) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Cabeza />
      <Routes>
        <Route path="/" element={<Cuerpo />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/solicitarcita" element={<SolicitarCita />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/ubicacion-postas" element={<UbicacionPostas />} />
        <Route path="/enfermero" element={<EnfermeroPanel />} />
        <Route path="/medico" element={<MedicoPanel />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<Navigate to={rol ? "/" : "/login"} replace />} />
      </Routes>
      <Pie />
    </div>
  );
}

export default App;