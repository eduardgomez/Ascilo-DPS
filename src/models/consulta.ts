import { Especialidad } from "./Especialidad";
import { Doctor } from "./doctor";
import { Paciente } from "./paciente";
import { Timestamps } from "./timestamps";

export interface Consulta extends Timestamps {
  id:             number;
  fecha:          Date;
  horaInicio:     Date;
  horaFin:        Date;
  notas:          null;
  status:         number;
  citaId:         string;
  idEspecialidad: number;
  idDoctor:       number;
  idTipoConsulta: number;
  idPaciente:     number;
  doctor:         Doctor;
  especialidad:   Especialidad;
  tipoCita:       Especialidad;
  paciente:       Paciente;
  reagendada?:     boolean;
}
