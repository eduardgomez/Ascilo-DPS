import { apiClient } from "../utils/ApiClient"
import { postDoctorProps } from "./types"

const DOCTOR_URI = '/doctors'

const getDoctores = async (
  name?: string,
  email?: string,
  especialidad?: string,
  disponible?: string,
  includeEspecialidad?: boolean,
) => {
  const query = []

  if (name) {
    query.push(`name=${name}`)
  }

  if (email) {
    query.push(`email=${email}`)
  }

  if (especialidad) {
    query.push(`especialidad=${especialidad}`)
  }

  if (disponible) {
    query.push(`disponible=${disponible}`)
  }

  if (includeEspecialidad) {
    query.push('includeEspecialidad=true')
  }

  const response = await apiClient.get(`${DOCTOR_URI}?${query.join('&')}`)

  return response.data
}

const getDoctor = async (id: string, includeEspecialidad?: boolean, includeHorarios?: boolean) => {
  if (id.length === 0) return null;
  const query = []

  query.push(`includeEspecialidad=${String(includeEspecialidad)}`)
  query.push(`includeHorarios=${String(includeHorarios)}`)

  const response = await apiClient.get(`${DOCTOR_URI}/${id}?${query.join('&')}`)

  return response.data
}

const postDoctor = async (data: postDoctorProps) => {
  const response = await apiClient.post(DOCTOR_URI, data)

  return response.data
}

const patchDoctor = async (id: string, data: postDoctorProps) => {
  const response = await apiClient.patch(`${DOCTOR_URI}/${id}`, data)

  return response.data
}

const patchDoctorHorarios = async (id: string, data: any) => {
  const response = await apiClient.patch(`${DOCTOR_URI}/${id}/horarios`, data)

  return response.data
}

export default {
  getDoctores,
  postDoctor,
  getDoctor,
  patchDoctor,
  patchDoctorHorarios,
}
