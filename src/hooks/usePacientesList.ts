import { Especialidad } from "@models/Especialidad"
import doctoresService from "../services/doctors.service"
import { useQuery } from "@tanstack/react-query"
import React, { useEffect, useState } from "react"
import { Doctor } from "@models/doctor"
import pacientesService from "@services/pacientes.service"
import { Paciente } from "@models/paciente"

export const usePacientesList = () => {
  const [pacientesList, setPacientesList] = useState<Array<{
    label: string;
    value: string;
  }>>([])

  const {
    data: pacientesData,
    status: pacientesStatus,
  } = useQuery({
    queryKey: ['getPacientesList'],
    queryFn: () => pacientesService.getPacientes(),
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  })

  useEffect(() => {
    if (pacientesStatus === 'success') {
      const list = (pacientesData as Paciente[]).map((paciente) => ({
        label: paciente.nombre,
        value: paciente.id.toString(),
      }))

      setPacientesList(list)
    }
  }, [pacientesStatus, pacientesData])

  return { pacientesList }
}