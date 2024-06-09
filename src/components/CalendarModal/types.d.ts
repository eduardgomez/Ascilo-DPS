import { CustomModalProps } from "@components/CustomModal/types";

export interface CalendarModalProps extends CustomModalProps {
  type: 'doctor' | 'paciente'
  id: string | number
}
