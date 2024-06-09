import { CustomModalProps } from "@components/CustomModal/types";
import { Consulta } from "@models/consulta";
import { StackNavigationProp } from "@react-navigation/stack";
import { ScreenStackList } from "@routes/types";

export type CardScreenNavigation = StackNavigationProp<ScreenStackList, "ConsultasScreen">

export interface ReagendarModalProps extends CustomModalProps {
  consulta: Consulta
}

export interface IniciarModalProps extends CustomModalProps {
  consulta: Consulta
  action?: () => void
}

export interface CancelarModalProps extends CustomModalProps {
  action?: () => void
  reagendarAction?: () => void
  consulta: Consulta
}

type CitaCardProps = {
  consulta?: Consulta
  navigation: StackNavigationProp<ScreenStackList, "PacientesScreen">
}
