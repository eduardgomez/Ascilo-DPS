import { Timestamps } from "./timestamps";

export interface Paciente extends Timestamps {
  id:              number;
  nombre:          string;
  email:           string;
  telefono:        string;
  whatsapp:        string;
  dui:             string;
  direccion:       string;
  fechaNacimiento: Date;
}
