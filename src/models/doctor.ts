import { Especialidad } from "./Especialidad";
import { Horario } from "./horario";
import { Timestamps } from "./timestamps";

export interface Doctor extends Timestamps {
  id:             number;
  nombre:         string;
  email:          string;
  telefono:       string;
  whatsapp:       string;
  dui:            string;
  disponible:     boolean;
  idEspecialidad?: number;
  horarios?:       Horario[];
  especialidad?:   Especialidad;
}
