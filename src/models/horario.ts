import { Timestamps } from "./timestamps";

export interface Horario extends Timestamps {
  id?:  number;
  dia: number;
  disponible: boolean;
  inicio: Date;
  fin: Date;
  idDoctor?: number;
}