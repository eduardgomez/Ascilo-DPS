import { RouteProp, useNavigation, useRoute, useTheme } from "@react-navigation/native";
import doctorsService from "@services/doctors.service"
import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { DoctorRouteProps, DoctorScreenNavigation } from "../types";
import { Doctor } from "@models/Doctor";
import { Horario } from "@models/horario";
import Toast from "react-native-toast-message";
import { sortHorariosByDays } from "@utils/functions";
import consultasService from "@services/consultas.service";
import { Consulta } from "@models/consulta";

export const useDoctor = () => {
  const route = useRoute<RouteProp<DoctorRouteProps>>();
  const [id, setId] = useState<string>("");
  const navigation = useNavigation<DoctorScreenNavigation>();
  const { colors } = useTheme();
  const [doctor, setDoctor] = useState<Doctor>();
  const [newHorarios, setNewHorarios] = useState<Horario[]>([]);
  const [consultas, setConsultas] = useState<Consulta[]>([]);

  useEffect(() => {
    if (route.params === undefined) return;
    const { doctorId } = route.params;
    if (doctorId === undefined) return navigation.navigate("DoctoresScreen");
    setId(doctorId);
  }, [route]);

  const { data, status, isLoading } = useQuery({
    queryKey: ['getDoctor', id],
    queryFn: () => doctorsService.getDoctor(id || '', true, true),
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
      setDoctor(data as Doctor);
      setNewHorarios(sortHorariosByDays(data?.horarios as Horario[]) || []);
    }
  }, [status, data])

  useEffect(() => {
    if (consultaStatus === 'success' && consultaData !== null) {
      setConsultas(consultaData as Consulta[]);
    }
  }, [consultaStatus, consultaData])

  const saveHorarios = async () => {
    if (id.length === 0) return null;
    try {
      newHorarios.forEach(async (horario, index) => {
        if (
          horario.inicio === doctor?.horarios?.[index].inicio &&
          horario.fin === doctor?.horarios[index].fin &&
          horario.dia === doctor?.horarios[index].dia &&
          horario.disponible === doctor?.horarios[index].disponible
        )
          return;
  
        await doctorsService.patchDoctorHorarios(id, horario);
      });
  
      navigation.navigate("DoctoresScreen");
      Toast.show({
        type: "success",
        text1: "Horarios actualizados",
        text2: "Los horarios del doctor se han actualizado correctamente",
      })
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Error al actualizar horarios",
        text2: "Hubo un error al actualizar los horarios del doctor",
      })
    }
  }

  return {
    colors,
    doctor,
    isLoading,
    newHorarios,
    setNewHorarios,
    saveHorarios,
    consultas,
    consultaIsLoading,
    refetchConsulta,
  }
}
