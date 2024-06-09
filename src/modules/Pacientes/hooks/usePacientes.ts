import { useEffect, useState } from "react"
import pacientesService from "@services/pacientes.service"
import { useQuery } from "@tanstack/react-query"
import { Paciente } from "@models/paciente"
import { useNavigation } from "@react-navigation/native"
import { ListScreenNavigation } from "../types"

export const usePacientes = () => {
  const [pacientes, setPacientes] = useState<Paciente[]>([])
  const [nombrePaciente, setNombrePaciente] = useState("")

  const navigation = useNavigation<ListScreenNavigation>();

  const { data, status, isLoading, refetch, isFetching } = useQuery({
    queryKey: ['getDoctores', nombrePaciente],
    queryFn: () => pacientesService.getPacientes(nombrePaciente),
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  })

  useEffect(() => {
    if (status === 'success') {
      setPacientes(data)
    }
  }, [status, data])

  return {
    pacientes,
    isLoading,
    refetch,
    isFetching,
    navigation,
    setNombrePaciente,
  }
}