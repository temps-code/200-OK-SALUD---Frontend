import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Cabeza from "./components/cabeza/Cabeza";
import Cuerpo from "./components/cuerpo/Cuerpo";
import Pie from "./components/pie/Pie";
import Splash from "./components/Splash";
import "leaflet/dist/leaflet.css";

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
      </Routes>
      <Pie />
    </div>
  );
}

export default App;