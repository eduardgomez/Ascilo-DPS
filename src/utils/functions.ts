import Toast from "react-native-toast-message";
import { Horario } from "@models/horario"
import moment from "moment-timezone";

export const sortHorariosByDays = (horarios?: Horario[]) => {
  if (!horarios) return []
  return horarios.sort((a, b) => {
    if (a.dia < b.dia) return -1;
    if (a.dia > b.dia) return 1;
    return 0;
  })
}

export const getEdad = (fechaNacimiento: string | Date) => {
  const hoy = moment()
  const fechaNac = moment(fechaNacimiento)

  return hoy.diff(fechaNac, 'years')
}

export const showToast = (text1: string, text2: string, type: "success" | "error" = "success") => 
  Toast.show({ type, text1, text2})
