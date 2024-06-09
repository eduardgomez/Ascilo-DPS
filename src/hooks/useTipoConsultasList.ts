import { useQuery } from "@tanstack/react-query"
import React, { useEffect, useState } from "react"
import consultasService from "@services/consultas.service"

export const useTipoConsultasList = () => {
  const [tipoConsultasList, setTipoConsultasList] = useState<Array<{
    label: string;
    value: string;
  }>>([])

  const {
    data: consultasData,
    status: consultasStatus,
  } = useQuery({
    queryKey: ['getTipoConsultasList'],
    queryFn: () => consultasService.getTipoConsultas(),
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  })

  useEffect(() => {
    if (consultasStatus === 'success') {
      const list = (consultasData as any).map((paciente: any) => ({
        label: paciente.nombre,
        value: paciente.id,
      }))

      setTipoConsultasList(list)
    }
  }, [consultasStatus, consultasData])

  return { tipoConsultasList }
}