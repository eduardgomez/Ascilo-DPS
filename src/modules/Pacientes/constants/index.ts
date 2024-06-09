import { postPacienteProps } from "@services/types"

export const formInitialValues: postPacienteProps = {
  nombre: '',
  telefono: '',
  email: '',
  whatsapp: '',
  dui: '',
  fechaNacimiento: new Date(),
  direccion: '',
}
