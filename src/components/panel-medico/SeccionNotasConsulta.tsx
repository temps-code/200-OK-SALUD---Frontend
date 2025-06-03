import React from "react";
import type { NotasConsulta } from "./tipos";

interface PropsSeccionNotasConsulta {
  notasConsulta: NotasConsulta;
  historialNotas: NotasConsulta[];
  manejarCambioNotas: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  manejarEnvioNotas: (e: React.FormEvent) => void;
}

const SeccionNotasConsulta: React.FC<PropsSeccionNotasConsulta> = ({
  notasConsulta,
  historialNotas,
  manejarCambioNotas,
  manejarEnvioNotas,
}) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-blue-800 mb-6 text-center">
        Registrar Notas de Consulta
      </h2>
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
        <form onSubmit={manejarEnvioNotas} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Diagnóstico
            </label>
            <input
              type="text"
              name="diagnostico"
              value={notasConsulta.diagnostico}
              onChange={manejarCambioNotas}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ingrese el diagnóstico"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tratamiento
            </label>
            <input
              type="text"
              name="tratamiento"
              value={notasConsulta.tratamiento}
              onChange={manejarCambioNotas}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ingrese el tratamiento"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Notas</label>
            <textarea
              name="notas"
              value={notasConsulta.notas}
              onChange={manejarCambioNotas}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              rows={4}
              placeholder="Notas adicionales"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-900 transition duration-300"
          >
            Registrar Notas
          </button>
        </form>
      </div>
      {historialNotas.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Historial de Notas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {historialNotas.map((nota, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100"
              >
                <p className="text-gray-600 mb-1">
                  <span className="font-medium">Diagnóstico:</span> {nota.diagnostico}
                </p>
                <p className="text-gray-600 mb-1">
                  <span className="font-medium">Tratamiento:</span> {nota.tratamiento}
                </p>
                <p className="text-gray-600 mb-1">
                  <span className="font-medium">Notas:</span> {nota.notas || "N/A"}
                </p>
                <p className="text-gray-500 text-sm">
                  <span className="font-medium">Guardado:</span>{" "}
                  {new Date(nota.guardadoEn).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default SeccionNotasConsulta;