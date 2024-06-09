import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { ConsultaRouteProps, ListScreenNavigation } from "../types";
import { useEffect, useState } from "react";
import { Consulta } from "@models/consulta";
import { useQuery } from "@tanstack/react-query";
import consultasService from "@services/consultas.service";
import { showToast } from "@utils/functions";
import { useConsultas } from "./useConsultas";

export const useConsulta = () => {
  const route = useRoute<RouteProp<ConsultaRouteProps>>();
  const navigation = useNavigation<ListScreenNavigation>();
  const [id, setId] = useState<string>("");
  const [consulta, setConsulta] = useState<Consulta>();
  const [historialConsultas, setHistorialConsultas] = useState<Consulta[]>([]);
  const [notas, setNotas] = useState<string>("");
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const { refetch: refetchConsultas } = useConsultas()

  const hideModal = () => setModalVisible(false);
  const showModal = () => setModalVisible(true);

  useEffect(() => {
    if (route.params === undefined) return;
    const { consultaId } = route.params;
    if (consultaId === undefined) return navigation.navigate("ConsultasScreen");
    setId(consultaId);
  }, [route]);

  const { data, status, isLoading } = useQuery({
    queryKey: ['getPaciente', id],
    queryFn: () => consultasService.getConsulta(id, { includeDoctor: true, includePaciente: true, includeEspecialidad: true, includeTipoConsulta: true }),
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  })

  const { data: consultasData, status: consultasStatus, isLoading: consultasIsLoading } = useQuery({
    queryKey: ['getPaciente', consulta],
    queryFn: () => consultasService.getConsultasByPacienteAndEspecialidad(consulta?.paciente?.id, consulta?.especialidad?.id, consulta?.id),
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  })

  useEffect(() => {
    if (status === 'success' && data !== null) {
      setConsulta(data as Consulta);
      setNotas(data?.notas || "")
    }
  }, [status, data])

  useEffect(() => {
    if (consultasStatus === 'success' && consultasData !== null) {
      setHistorialConsultas(consultasData as Consulta[]);
    }
  }, [consultasStatus, consultasData])

  const handleCompletarCita = async () => {
    if (consulta === undefined) return;
    try {
      await consultasService.completarCita(consulta.id, notas);
      navigation.navigate("ConsultasScreen");
      showToast("Cita completada correctamente", "La cita se ha completado correctamente", "success");
      refetchConsultas()
    } catch (error) {
      showToast("Error al completar la cita", "Ha ocurrido un error al completar la cita", "error");
    }
  }

  return {
    consulta,
    historialConsultas,
    consultasIsLoading,
    navigation,
    isLoading,
    notas,
    setNotas,
    modalVisible,
    hideModal,
    showModal,
    handleCompletarCita,
  }
}