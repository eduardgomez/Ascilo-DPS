import React from "react";
import { Horario } from "../../../../models/horario";

export type RangoFechaProps = {
  dia: string;
  horario?: Horario
  onChangeHora: (horario) => void;
}
