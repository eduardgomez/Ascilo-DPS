import { apiClient } from "../utils/ApiClient"
import { GetConsultaProps, GetConsultasProps, ReagendarConsultaProps } from "./types"

const CONSULTAS_URI = '/consultas'

const getConsultas = async ({
  includeDoctor,
  includePaciente,
  includeEspecialidad,
  includeTipoConsulta,
  limit,
  proximasCitas,
  status,
}: GetConsultasProps) => {
  const query = []

  if (includeDoctor) {
    query.push('includeDoctor=true')
  }

  if (includePaciente) {
    query.push('includePaciente=true')
  }

  if (includeEspecialidad) {
    query.push('includeEspecialidad=true')
  }

  if (includeTipoConsulta) {
    query.push('includeTipoConsulta=true')
  }

  if (limit) {
    query.push(`limit=${limit}`)
  }

  if (proximasCitas) {
    query.push('proximasCitas=true')
  }
  
  if (status) {
    query.push(`status=${status}`)
  }

  const response = await apiClient.get(`${CONSULTAS_URI}?${query.join('&')}`)

  return response.data
}

const cancelarConsulta = async (id: string | number) => {
  const response = await apiClient.delete(`${CONSULTAS_URI}/${id}`)

  return response.data
}

const reagendarConsulta = async (id: string | number, data: ReagendarConsultaProps) => {
  const response = await apiClient.put(`${CONSULTAS_URI}/reagendar/${id}`, data)

  return response.data
}

const agendarProximaConsulta = async (id: string | number, data: ReagendarConsultaProps) => {
  const response = await apiClient.post(`${CONSULTAS_URI}/agendar-consulta/${id}`, data)

  return response.data
}

const iniciarConsulta = async (id: string | number) => {
  const response = await apiClient.put(`${CONSULTAS_URI}/comenzar-cita/${id}`)

  return response.data
}

const completarCita = async (id: string | number, notas: string) => {
  const response = await apiClient.put(`${CONSULTAS_URI}/completar-cita/${id}`, { notas })

  return response.data
}

const getConsulta = async (id: string | number, props?: GetConsultaProps) => {
  const { includeDoctor, includeEspecialidad, includePaciente, includeTipoConsulta } = props || {}
  const query = []

  if (includeDoctor) {
    query.push('includeDoctor=true')
  }

  if (includeEspecialidad) {
    query.push('includeEspecialidad=true')
  }

  if (includePaciente) {
    query.push('includePaciente=true')
  }

  if (includeTipoConsulta) {
    query.push('includeTipoConsulta=true')
  }

  const response = await apiClient.get(`${CONSULTAS_URI}/${id}?${query.join('&')}`)

  return response.data
}

const getConsultaByPaciente = async (pacienteId: string | number) => {
  const response = await apiClient.get(`${CONSULTAS_URI}/get-by-paciente/${pacienteId}`)

  return response.data
}

const getConsultaByDoctor = async (doctorId: string | number) => {
  const response = await apiClient.get(`${CONSULTAS_URI}/get-by-doctor/${doctorId}`)

  return response.data
}

const getConsultasByPacienteAndEspecialidad = async (pacienteId?: string | number, especialidadId?: string | number, excludeConsulta?: string | number) => {
  if (!pacienteId || !especialidadId) return Promise.resolve([])

  const query = []

  if (excludeConsulta) {
    query.push(`excludeConsulta=${excludeConsulta}`)
  }

  const response = await apiClient.get(`${CONSULTAS_URI}/get-by-paciente-and-especialidad/${pacienteId}/${especialidadId}?${query.join('&')}`)

  return response.data
}

const getTipoConsultas = async () => {
  const response = await apiClient.get('/tipo-citas')

  return response.data
}

const postConsulta = async (data: any) => {
  const response = await apiClient.post(`${CONSULTAS_URI}`, data)

  return response.data
}

export default {
  postConsulta,
  getTipoConsultas,
  getConsultas,
  cancelarConsulta,
  reagendarConsulta,
  agendarProximaConsulta,
  iniciarConsulta,
  completarCita,
  getConsulta,
  getConsultaByPaciente,
  getConsultaByDoctor,
  getConsultasByPacienteAndEspecialidad,
}
