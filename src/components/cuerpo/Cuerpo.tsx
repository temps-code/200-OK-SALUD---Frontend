import React, { useState } from 'react';

const Cuerpo: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Iniciando sesión...', { email, password });
  };

  return (
    <main className="p-4">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <h2 className="text-xl mb-4">Inicio de sesión</h2>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
          Ingresar
        </button>
      </form>
    </main>
  );
};

export default Cuerpo;