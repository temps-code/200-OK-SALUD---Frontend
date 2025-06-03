export interface Consulta {
  id: number;
  paciente: string;
  hora: string;
  motivo: string;
  estado: "Pendiente" | "Completada";
  guardadoEn: string;
}

export interface NotasConsulta {
  diagnostico: string;
  tratamiento: string;
  notas: string;
  guardadoEn: string;
}

export interface ResultadoLaboratorio {
  id: number;
  paciente: string;
  tipo: string;
  resultado: string;
  fecha: string;
  guardadoEn: string;
}

export interface Referencia {
  id: number;
  paciente: string;
  motivo: string;
  hospital: string;
  prioridad: "Baja" | "Media" | "Alta";
  guardadoEn: string;
}