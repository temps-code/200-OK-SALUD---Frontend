import React from "react";
import type { Cita } from "./tipos";

interface PropsSeccionCitas {
  citas: Cita[];
  completarCita: (id: number) => void;
}

const SeccionCitas: React.FC<PropsSeccionCitas> = ({ citas, completarCita }) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-green-600 mb-6">Citas del Día</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {citas.length === 0 ? (
          <p className="text-gray-600 col-span-full text-center">No hay citas programadas.</p>
        ) : (
          citas.map((cita) => (
            <div
              key={cita.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-green-100"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{cita.nombre}</h3>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Hora:</span> {cita.hora}
              </p>
              <p className="text-gray-600 mb-4">
                <span className="font-medium">Estado:</span>{" "}
                <span
                  className={`${
                    cita.estado === "Pendiente" ? "text-yellow-500" : "text-green-500"
                  }`}
                >
                  {cita.estado}
                </span>
              </p>
              <p className="text-gray-500 text-sm mb-4">
                <span className="font-medium">Guardado:</span>{" "}
                {new Date(cita.guardadoEn).toLocaleString()}
              </p>
              {cita.estado === "Pendiente" && (
                <button
                  onClick={() => completarCita(cita.id)}
                  className="w-full p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
                >
                  Completar Cita
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default SeccionCitas;