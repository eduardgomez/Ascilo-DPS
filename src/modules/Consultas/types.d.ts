import { StackNavigationProp } from "@react-navigation/stack";
import { ScreenStackList } from "@routes/types";

export type ListScreenNavigation = NativeStackNavigationProp<ScreenStackList, "VerCitaScreen">

export type ConsultaRouteProps = {
  route: {
    consultaId?: string
  }
}

export type PostCitaProps = {
  idEspecialidad: string | number
  idDoctor: string | number
  idPaciente: string | number
  fecha: Date
  horaInicio: Date
  horaFin: Date
}
