export interface postDoctorProps {
  nombre: string
  telefono: string
  email: string
  whatsapp: string
  dui: string
  idEspecialidad: string
  disponible: boolean
}

export interface postPacienteProps {
  nombre: string
  telefono: string
  email: string
  whatsapp: string
  dui: string
  fechaNacimiento: Date
  direccion: string
}

export interface GetConsultasProps {
  includeDoctor?: boolean
  includePaciente?: boolean
  includeEspecialidad?: boolean
  includeTipoConsulta?: boolean
  proximasCitas?: boolean
  limit?: number,
  status?: number | null
}

export interface ReagendarConsultaProps {
  fecha: Date
  horaInicio: Date
  horaFin: Date
}

export interface GetConsultaProps {
  includeDoctor?: boolean
  includePaciente?: boolean
  includeEspecialidad?: boolean
  includeTipoConsulta?: boolean
}
