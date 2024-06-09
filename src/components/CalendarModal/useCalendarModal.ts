import { Consulta } from "@models/consulta";
import consultasService from "@services/consultas.service"
import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react";

export const useCalendarModal = (id: number | string, type: 'doctor' | 'paciente') => {
  const [consultas, setConsultas] = useState<Consulta[]>([]);

  const getConsultas = async () => {
    if (consultas.length > 0) return consultas;
    if (type === 'paciente')
      return consultasService.getConsultaByPaciente(id)
    return consultasService.getConsultaByDoctor(id)
  }

  const { data, status, isLoading, refetch } = useQuery({
    queryKey: ['getConsultas', id, type],
    queryFn: () => getConsultas(),
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  })

  useEffect(() => {
    if (status === 'success' && data !== null) {
      setConsultas(data as Consulta[]);
    }
  }, [status, data])

  return {
    consultas,
    isLoading,
    refetch,
  }
}