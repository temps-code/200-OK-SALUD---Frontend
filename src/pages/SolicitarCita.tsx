import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const especialidades = [
  "Medicina General",
  "Pediatría",
  "Cardiología",
  "Dermatología",
  "Ginecología",
  "Neurología",
];

const SolicitarCita: React.FC = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    especialidad: "",
    fecha: "",
    hora: "",
  });

  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validación simple
    if (
      !form.nombre ||
      !form.email ||
      !form.telefono ||
      !form.especialidad ||
      !form.fecha ||
      !form.hora
    ) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    setError("");

    // Aquí iría la lógica para enviar el formulario (API, etc.)
    alert(
      `Cita solicitada para ${form.nombre} en ${form.especialidad} el ${form.fecha} a las ${form.hora}`
    );

    // Reset formulario o redirigir
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-lg p-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Solicitar Cita Médica
        </h1>
        {error && (
          <p className="mb-4 text-red-600 font-semibold text-center">{error}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="nombre"
              className="block text-gray-700 font-medium mb-2"
            >
              Nombre Completo
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              value={form.nombre}
              onChange={handleChange}
              placeholder="Tu nombre completo"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Correo Electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="ejemplo@correo.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="telefono"
              className="block text-gray-700 font-medium mb-2"
            >
              Teléfono
            </label>
            <input
              id="telefono"
              name="telefono"
              type="tel"
              value={form.telefono}
              onChange={handleChange}
              placeholder="+591 7XXXXXXX"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="especialidad"
              className="block text-gray-700 font-medium mb-2"
            >
              Especialidad
            </label>
            <select
              id="especialidad"
              name="especialidad"
              value={form.especialidad}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Selecciona una especialidad</option>
              {especialidades.map((esp) => (
                <option key={esp} value={esp}>
                  {esp}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="fecha"
              className="block text-gray-700 font-medium mb-2"
            >
              Fecha
            </label>
            <input
              id="fecha"
              name="fecha"
              type="date"
              value={form.fecha}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              min={new Date().toISOString().split("T")[0]}
            />
          </div>

          <div>
            <label
              htmlFor="hora"
              className="block text-gray-700 font-medium mb-2"
            >
              Hora
            </label>
            <input
              id="hora"
              name="hora"
              type="time"
              value={form.hora}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            Solicitar Cita
          </button>
          <button
            onClick={() => navigate("/")}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            Volver
          </button>
        </form>
      </div>
    </div>
  );
};

export default SolicitarCita;
