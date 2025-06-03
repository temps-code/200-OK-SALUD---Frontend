import React from "react";
import type { Consulta } from "./tipos";

interface PropsSeccionConsultas {
  consultas: Consulta[];
  completarConsulta: (id: number) => void;
}

const SeccionConsultas: React.FC<PropsSeccionConsultas> = ({ consultas, completarConsulta }) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-blue-800 mb-6">Consultas del Día</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {consultas.length === 0 ? (
          <p className="text-gray-600 col-span-full text-center">No hay consultas programadas.</p>
        ) : (
          consultas.map((consulta) => (
            <div
              key={consulta.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{consulta.paciente}</h3>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Hora:</span> {consulta.hora}
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Motivo:</span> {consulta.motivo}
              </p>
              <p className="text-gray-600 mb-4">
                <span className="font-medium">Estado:</span>{" "}
                <span
                  className={`${
                    consulta.estado === "Pendiente" ? "text-yellow-600" : "text-blue-600"
                  }`}
                >
                  {consulta.estado}
                </span>
              </p>
              <p className="text-gray-500 text-sm mb-4">
                <span className="font-medium">Guardado:</span>{" "}
                {new Date(consulta.guardadoEn).toLocaleString()}
              </p>
              {consulta.estado === "Pendiente" && (
                <button
                  onClick={() => completarConsulta(consulta.id)}
                  className="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-900 transition duration-300"
                >
                  Completar Consulta
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default SeccionConsultas;