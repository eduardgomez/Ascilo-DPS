import { useQuery } from "@tanstack/react-query"
import pacientesService from "@services/pacientes.service"
import { useEffect, useState } from "react";
import { PacienteRouteProps, PacienteScreenNavigation } from "../types";
import { RouteProp, useNavigation, useRoute, useTheme } from "@react-navigation/native";
import { Paciente } from "@models/paciente";
import { Consulta } from "@models/consulta";
import consultasService from "@services/consultas.service";

export const usePaciente = () => {
  const route = useRoute<RouteProp<PacienteRouteProps>>();
  const navigation = useNavigation<PacienteScreenNavigation>();
  const [id, setId] = useState<string>("");
  const [paciente, setPaciente] = useState<Paciente>();
  const { colors } = useTheme();
  const [consultas, setConsultas] = useState<Consulta[]>([]);

  useEffect(() => {
    if (route.params === undefined) return;
    const { pacienteID } = route.params;
    if (pacienteID === undefined) return navigation.navigate("PacientesScreen");
    setId(pacienteID);
  }, [route]);

  const { data, status, isLoading } = useQuery({
    queryKey: ['getPaciente', id],
    queryFn: () => pacientesService.getPaciente(id),
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  })

  const { data: consultaData, status: consultaStatus, isLoading: consultaIsLoading, refetch: refetchConsulta } = useQuery({
    queryKey: ['getConsultas', id],
    queryFn: () => consultasService.getConsultaByPaciente(id),
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  })

  useEffect(() => {
    if (status === 'success' && data !== null) {
      setPaciente(data as Paciente);
    }
  }, [status, data])

  useEffect(() => {
    if (consultaStatus === 'success' && consultaData !== null) {
      setConsultas(consultaData as Consulta[]);
    }
  }, [consultaStatus, consultaData])

  return {
    paciente,
    colors,
    navigation,
    isLoading,
    consultaIsLoading,
    consultas,
    refetchConsulta,
  }
}