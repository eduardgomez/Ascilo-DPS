import { apiClient } from "../utils/ApiClient"

const getEspecialidades = async () => {
  const response = await apiClient.get('/especialidades')

  return response.data
}

export default {
  getEspecialidades
}
