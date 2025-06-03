import React, { useState, useEffect } from "react";
import SeccionConsultas from "../components/panel-medico/SeccionConsultas";
import SeccionNotasConsulta from "../components/panel-medico/SeccionNotasConsulta";
import SeccionResultadosLaboratorio from "../components/panel-medico/SeccionResultadosLaboratorio";
import SeccionReferencias from "../components/panel-medico/SeccionReferencias";
import type { Consulta, NotasConsulta, ResultadoLaboratorio, Referencia } from "../components/panel-medico/tipos";
import { hospitales } from "../components/panel-medico/constantes";

const PanelMedico: React.FC = () => {
  const [consultas, setConsultas] = useState<Consulta[]>(() => {
    const guardado = localStorage.getItem("medico-consultas");
    return guardado
      ? JSON.parse(guardado)
      : [
          {
            id: 1,
            paciente: "Ana Martínez Ruiz",
            hora: "09:30 AM",
            motivo: "Dolor torácico",
            estado: "Pendiente",
            guardadoEn: new Date().toISOString(),
          },
          {
            id: 2,
            paciente: "Carlos López Díaz",
            hora: "11:00 AM",
            motivo: "Fiebre persistente",
            estado: "Pendiente",
            guardadoEn: new Date().toISOString(),
          },
        ];
  });

  const [notasConsulta, setNotasConsulta] = useState<NotasConsulta>({
    diagnostico: "",
    tratamiento: "",
    notas: "",
    guardadoEn: "",
  });

  const [historialNotas, setHistorialNotas] = useState<NotasConsulta[]>(() => {
    const guardado = localStorage.getItem("medico-notas");
    return guardado ? JSON.parse(guardado) : [];
  });

  const [resultadosLab, setResultadosLab] = useState<ResultadoLaboratorio[]>(() => {
    const guardado = localStorage.getItem("medico-resultados");
    return guardado
      ? JSON.parse(guardado)
      : [
          {
            id: 1,
            paciente: "Ana Martínez Ruiz",
            tipo: "Hemograma",
            resultado: "Normal",
            fecha: "2025-05-30",
            guardadoEn: new Date().toISOString(),
          },
          {
            id: 2,
            paciente: "Carlos López Díaz",
            tipo: "Radiografía de tórax",
            resultado: "Sin anomalías",
            fecha: "2025-05-29",
            guardadoEn: new Date().toISOString(),
          },
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
    const guardado = localStorage.getItem("medico-referencias");
    return guardado ? JSON.parse(guardado) : [];
  });

  useEffect(() => {
    localStorage.setItem("medico-consultas", JSON.stringify(consultas));
  }, [consultas]);

  useEffect(() => {
    localStorage.setItem("medico-notas", JSON.stringify(historialNotas));
  }, [historialNotas]);

  useEffect(() => {
    localStorage.setItem("medico-resultados", JSON.stringify(resultadosLab));
  }, [resultadosLab]);

  useEffect(() => {
    localStorage.setItem("medico-referencias", JSON.stringify(referencias));
  }, [referencias]);

  const manejarCambioNotas = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNotasConsulta((prev) => ({ ...prev, [name]: value }));
  };

  const manejarCambioReferencia = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setReferencia((prev) => ({ ...prev, [name]: value }));
  };

  const manejarEnvioNotas = (e: React.FormEvent) => {
    e.preventDefault();
    const nuevasNotas = { ...notasConsulta, guardadoEn: new Date().toISOString() };
    setHistorialNotas((prev) => [...prev, nuevasNotas]);
    setNotasConsulta({ diagnostico: "", tratamiento: "", notas: "", guardadoEn: "" });
  };

  const completarConsulta = (id: number) => {
    setConsultas((prev) =>
      prev.map((consulta) =>
        consulta.id === id
          ? { ...consulta, estado: "Completada", guardadoEn: new Date().toISOString() }
          : consulta
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
      <div className="bg-gray-100 min-h-screen py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">Panel Médico</h1>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-2xl mx-auto">
            Analiza consultas, registra diagnósticos, revisa resultados y refiere pacientes.
          </p>
          <SeccionConsultas consultas={consultas} completarConsulta={completarConsulta} />
          <SeccionNotasConsulta
            notasConsulta={notasConsulta}
            historialNotas={historialNotas}
            manejarCambioNotas={manejarCambioNotas}
            manejarEnvioNotas={manejarEnvioNotas}
          />
          <SeccionResultadosLaboratorio resultadosLab={resultadosLab} />
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
    console.error("Error en PanelMedico:", error);
    return (
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Error</h1>
        <p className="text-lg text-red-600">
          Ocurrió un error al cargar el panel de médico. Por favor, intenta de nuevo.
        </p>
      </div>
    );
  }
};

export default PanelMedico;