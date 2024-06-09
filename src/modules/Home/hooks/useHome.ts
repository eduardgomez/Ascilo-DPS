import { Consulta } from "@models/consulta"
import consultasService from "@services/consultas.service"
import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"

export const useHome = () => {
  const [consultas, setConsultas] = useState<Consulta[]>([])

  const { data, status, isLoading, refetch, isFetching } = useQuery({
    queryKey: ['getHomeConsultas'],
    queryFn: () => consultasService.getConsultas({ proximasCitas: true, limit: 10 }),
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
  }
}