import { Consulta } from "@models/consulta"
import consultasService from "@services/consultas.service"
import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"

export const useConsultas = () => {
  const [consultas, setConsultas] = useState<Consulta[]>([])
  const [selectedFilter, setSelectedFilter] = useState<number|null>(null)

  const { data, status, isLoading, refetch, isFetching } = useQuery({
    queryKey: ['getConsultas', selectedFilter],
    queryFn: () => consultasService.getConsultas({ includeEspecialidad: true, includeDoctor:  true, status: selectedFilter }),
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  })

  useEffect(() => {
    if (status === 'success') {
      setConsultas(data)
    }
  }, [status, data])

  return {
    consultas,
    isLoading,
    refetch,
    isFetching,
    setSelectedFilter,
    selectedFilter,
  }
}