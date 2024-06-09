import { apiClient } from "../utils/ApiClient"
import { postPacienteProps } from "./types"

const PACIENTES_URI = '/pacientes'

const getPacientes = async (name?: string) => {
  const query = []

  if (name) {
    query.push(`name=${name}`)
  }

  const response = await apiClient.get(`${PACIENTES_URI}?${query.join('&')}`)

  return response.data
}

const getPaciente = async (id: string | number) => {
  const response = await apiClient.get(`${PACIENTES_URI}/${id}`)

  return response.data
}

const postPaciente = async (data: postPacienteProps) => {
  const response = await apiClient.post(PACIENTES_URI, data)

  return response.data
}

const patchPaciente = async (id: string, data: postPacienteProps) => {
  const response = await apiClient.patch(`${PACIENTES_URI}/${id}`, data)

  return response.data
}


export default {
  getPacientes,
  getPaciente,
  postPaciente,
  patchPaciente,
}
