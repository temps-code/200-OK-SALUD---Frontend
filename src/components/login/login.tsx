import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import heart from "../../assets/img/logoGrande.png";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate(); // 👈 Hook para navegación

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Intentando iniciar sesión con\nEmail: ${email}\nPassword: ${password}`);
    // Aquí podrías agregar lógica real de login y redirigir, por ejemplo:
    // navigate("/dashboard");
  };

  const goToRecover = () => {
    navigate("/recuperar"); // 👈 Ir a la página de recuperación
  };

  const goToRegister = () => {
    navigate("/registro"); // 👈 Ir a la página de registro
  };

  return (
    <div className="flex min-h-screen">
      {/* Panel izquierdo con logo */}
      <div className="w-1/2 bg-blue-200 flex flex-col items-center justify-center p-10 space-y-10">
        <img src={heart} alt="Icono corazón" className="h-120" />
      </div>

      {/* Panel derecho con formulario */}
      <div className="w-1/2 bg-neutral-50 flex items-center justify-center p-10">
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          <h2 className="text-3xl font-bold text-center">¡Bienvenido de nuevo!</h2>

          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full px-4 py-3 border-2 border-indigo-900 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600 placeholder-gray-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              className="w-full px-4 py-3 border-2 border-indigo-900 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600 placeholder-gray-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-lime-500 text-black font-semibold py-3 rounded-full hover:bg-lime-600 transition duration-300"
          >
            Iniciar sesión
          </button>

          <div className="text-sm text-center space-y-2">
            <p>
              ¿Todavía no tienes una cuenta?{" "}
              <span
                className="font-semibold underline hover:text-indigo-700 cursor-pointer"
                onClick={goToRegister}
              >
                Regístrate
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
