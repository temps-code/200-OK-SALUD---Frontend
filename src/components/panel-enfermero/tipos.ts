export interface Cita {
  id: number;
  nombre: string;
  hora: string;
  estado: "Pendiente" | "Completada";
  guardadoEn: string;
}

export interface SignosVitales {
  presionArterial: string;
  temperatura: string;
  pulso: string;
  descripcion?: string;
  guardadoEn: string;
}

export interface Insumo {
  nombre: string;
  cantidad: number;
  nivelMinimo: number;
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