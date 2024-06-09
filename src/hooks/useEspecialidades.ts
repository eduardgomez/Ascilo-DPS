import { Especialidad } from "@models/Especialidad"
import especialidadesService from "../services/especialidades.service"
import { useQuery } from "@tanstack/react-query"
import React, { useEffect, useState } from "react"

export const useEspecialidades = () => {
  const [especialidadesList, setEspecialidadesList] = useState<Array<{
    label: string;
    value: string;
  }>>([])

  const {
    data: especialidadesData,
    status: especialidadesStatus,
  } = useQuery({
    queryKey: ['getEspecialidades'],
    queryFn: () => especialidadesService.getEspecialidades(),
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  })

  useEffect(() => {
    if (especialidadesStatus === 'success') {
      const list = (especialidadesData as Especialidad[]).map((especialidad) => ({
        label: especialidad.nombre,
        value: especialidad.id.toString(),
      }))

      setEspecialidadesList(list)
    }
  }, [especialidadesStatus, especialidadesData])

  return { especialidadesList }
}