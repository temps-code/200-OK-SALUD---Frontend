import React, { useState, useEffect } from "react";
import SeccionCitas from "../components/panel-enfermero/SeccionCitas";
import SeccionSignosVitales from "../components/panel-enfermero/SeccionSignosVitales";
import SeccionInventario from "../components/panel-enfermero/SeccionInventario";
import SeccionReferencias from "../components/panel-enfermero/SeccionReferencias";
import type { Cita, SignosVitales, Insumo, Referencia } from "../components/panel-enfermero/tipos";
import { hospitales } from "../components/panel-enfermero/constantes";

const PanelEnfermero: React.FC = () => {
  const [citas, setCitas] = useState<Cita[]>(() => {
    const guardado = localStorage.getItem("enfermero-citas");
    return guardado
      ? JSON.parse(guardado)
      : [
          {
            id: 1,
            nombre: "Juan Pérez López",
            hora: "10:00 AM",
            estado: "Pendiente",
            guardadoEn: new Date().toISOString(),
          },
          {
            id: 2,
            nombre: "María García Gómez",
            hora: "11:30 AM",
            estado: "Pendiente",
            guardadoEn: new Date().toISOString(),
          },
        ];
  });

  const [signosVitales, setSignosVitales] = useState<SignosVitales>({
    presionArterial: "",
    temperatura: "",
    pulso: "",
    descripcion: "",
    guardadoEn: "",
  });

  const [historialSignos, setHistorialSignos] = useState<SignosVitales[]>(() => {
    const guardado = localStorage.getItem("enfermero-signos");
    return guardado ? JSON.parse(guardado) : [];
  });

  const [insumos, setInsumos] = useState<Insumo[]>(() => {
    const guardado = localStorage.getItem("enfermero-insumos");
    return guardado
      ? JSON.parse(guardado)
      : [
          { nombre: "Jeringas", cantidad: 50, nivelMinimo: 20, guardadoEn: new Date().toISOString() },
          { nombre: "Gasas", cantidad: 10, nivelMinimo: 30, guardadoEn: new Date().toISOString() },
        ];
  });

  const [referencia, setReferencia] = useState<Referencia>({
    id: 0,
    paciente: "",
    motivo: "",
    hospital: hospitales[0].nombre,
    prioridad: "Baja",
    guardadoEn: "",
  });

  const [referencias, setReferencias] = useState<Referencia[]>(() => {
    const guardado = localStorage.getItem("enfermero-referencias");
    return guardado ? JSON.parse(guardado) : [];
  });

  useEffect(() => {
    localStorage.setItem("enfermero-citas", JSON.stringify(citas));
  }, [citas]);

  useEffect(() => {
    localStorage.setItem("enfermero-signos", JSON.stringify(historialSignos));
  }, [historialSignos]);

  useEffect(() => {
    localStorage.setItem("enfermero-insumos", JSON.stringify(insumos));
  }, [insumos]);

  useEffect(() => {
    localStorage.setItem("enfermero-referencias", JSON.stringify(referencias));
  }, [referencias]);

  const manejarCambioSignos = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSignosVitales((prev) => ({ ...prev, [name]: value }));
  };

  const manejarCambioReferencia = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setReferencia((prev) => ({ ...prev, [name]: value }));
  };

  const manejarEnvioSignos = (e: React.FormEvent) => {
    e.preventDefault();
    const nuevosSignos = { ...signosVitales, guardadoEn: new Date().toISOString() };
    setHistorialSignos((prev) => [...prev, nuevosSignos]);
    setSignosVitales({ presionArterial: "", temperatura: "", pulso: "", descripcion: "", guardadoEn: "" });
  };

  const completarCita = (id: number) => {
    setCitas((prev) =>
      prev.map((cita) =>
        cita.id === id ? { ...cita, estado: "Completada", guardadoEn: new Date().toISOString() } : cita
      )
    );
  };

  const manejarEnvioReferencia = (e: React.FormEvent) => {
    e.preventDefault();
    const nuevaReferencia = { ...referencia, id: referencias.length + 1, guardadoEn: new Date().toISOString() };
    setReferencias((prev) => [...prev, nuevaReferencia]);
    setReferencia({
      id: 0,
      paciente: "",
      motivo: "",
      hospital: hospitales[0].nombre,
      prioridad: "Baja",
      guardadoEn: "",
    });
  };

  try {
    return (
      <div className="bg-green-50 min-h-screen py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-green-700 mb-8 text-center">Panel de Enfermería</h1>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Registra signos vitales, gestiona citas, monitorea insumos y refiere pacientes.
          </p>
          <SeccionCitas citas={citas} completarCita={completarCita} />
          <SeccionSignosVitales
            signosVitales={signosVitales}
            historialSignos={historialSignos}
            manejarCambioSignos={manejarCambioSignos}
            manejarEnvioSignos={manejarEnvioSignos}
          />
          <SeccionInventario insumos={insumos} />
          <SeccionReferencias
            referencia={referencia}
            referencias={referencias}
            manejarCambioReferencia={manejarCambioReferencia}
            manejarEnvioReferencia={manejarEnvioReferencia}
          />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error en PanelEnfermero:", error);
    return (
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Error</h1>
        <p className="text-lg text-red-600">
          Ocurrió un error al cargar el panel de enfermero. Por favor, intenta de nuevo.
        </p>
      </div>
    );
  }
};

export default PanelEnfermero;