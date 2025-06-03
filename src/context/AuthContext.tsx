import { createContext, useContext, useState, useEffect } from "react";

// Define el tipo Rol
type Rol = "enfermero" | "medico" | null;

// Define el tipo Usuario
interface Usuario {
  id: string;
  nombre: string;
  email: string;
}

// Define el tipo para el contexto
interface AuthContextType {
  rol: Rol;
  usuario: Usuario | null;
  setRol: (rol: Rol) => void;
  setUsuario: (usuario: Usuario | null) => void;
  logout: () => void;
}

// Crea el contexto con tipo AuthContextType o undefined
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [rol, setRolState] = useState<Rol>(null);
  const [usuario, setUsuarioState] = useState<Usuario | null>(null);

  // Cargar rol y usuario desde localStorage al inicio
  useEffect(() => {
    const storedRol = localStorage.getItem("rol") as Rol;
    const storedUsuario = localStorage.getItem("usuario");

    if (storedRol) setRolState(storedRol);
    if (storedUsuario) setUsuarioState(JSON.parse(storedUsuario));
  }, []);

  // Guardar rol en localStorage y actualizar estado
  const setRol = (newRol: Rol) => {
    setRolState(newRol);
    if (newRol) {
      localStorage.setItem("rol", newRol);
    } else {
      localStorage.removeItem("rol");
    }
  };

  // Guardar usuario en localStorage y actualizar estado
  const setUsuario = (nuevoUsuario: Usuario | null) => {
    setUsuarioState(nuevoUsuario);
    if (nuevoUsuario) {
      localStorage.setItem("usuario", JSON.stringify(nuevoUsuario));
    } else {
      localStorage.removeItem("usuario");
    }
  };

  // Cerrar sesión: limpiar rol y usuario
  const logout = () => {
    setRol(null);
    setUsuario(null);
  };

  return (
    <AuthContext.Provider value={{ rol, usuario, setRol, setUsuario, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar el contexto de autenticación
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;
};
