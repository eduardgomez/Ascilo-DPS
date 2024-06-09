import { postDoctorProps } from "@services/types"

export const DIAS = [
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sabado',
  'Domingo'
]

export const DISPONIBLE_OPTIONS = [
  { label: 'Disponible', value: 'true' },
  { label: 'No disponible', value: 'false' },
]

export const formInitialValues: postDoctorProps = {
  nombre: '',
  telefono: '',
  email: '',
  whatsapp: '',
  dui: '',
  idEspecialidad: '',
  disponible: true
}
