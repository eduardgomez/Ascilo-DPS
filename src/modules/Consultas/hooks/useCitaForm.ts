import { showToast } from "@utils/functions"
import { useFormik } from "formik"
import doctoresService from "@services/doctors.service"
import { citaFormSchema, formInitialValues } from "../constants"
import { useEspecialidades } from "@hooks/useEspecialidades"
import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { Doctor } from "@models/doctor"
import { usePacientesList } from "@hooks/usePacientesList"
import { useTipoConsultasList } from "@hooks/useTipoConsultasList"
import moment from "moment-timezone"
import { Keyboard } from "react-native"
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker"
import consultasService from "@services/consultas.service"
import { useConsultas } from "./useConsultas"
import { useNavigation } from "@react-navigation/native"
import { ListScreenNavigation } from "../types"

export const useCitaForm = () => {
  const { refetch: refetchConsultas } = useConsultas()
  const [startHour, setStartHour] = useState<Date>(moment(new Date()).add(1, 'day').toDate());
  const [endHour, setEndHour] = useState<Date>(moment(new Date()).add(1, 'day').add(1, 'hour').toDate());
  const navigation = useNavigation<ListScreenNavigation>();

  const { especialidadesList } = useEspecialidades()
  const { pacientesList } = usePacientesList()
  const { tipoConsultasList } = useTipoConsultasList()

  const onChangeStartHour = (event: any, selectedDate: any) => {
    if (moment(selectedDate).isAfter(endHour)) {
      setEndHour(moment(selectedDate).add(1, 'hour').toDate())
    }
    else {
      setStartHour(selectedDate);
    }
    Keyboard.dismiss()
  };

  const onChangeEndHour = (event: any, selectedDate: any) => {
    if (moment(selectedDate).isBefore(startHour)) {
      setStartHour(moment(selectedDate).subtract(1, 'hour').toDate())
    } else {
      setEndHour(selectedDate);
    }
    Keyboard.dismiss()
  };

  const showDatepicker = (value: Date,  onChange: ((event: any, date?: Date | undefined) => void)) => {
    DateTimePickerAndroid.open({
      value,
      onChange,
      mode: 'time',
      is24Hour: false,
    });
  };

  const { handleChange, handleBlur, handleSubmit, values, errors, isValid, setFieldValue } = useFormik({
    initialValues: formInitialValues,
    enableReinitialize: true,
    validateOnChange: false,
    validationSchema: citaFormSchema,
    onSubmit: async (values) => {
      try {
        await consultasService.postConsulta({
          idPaciente: Number(values.idPaciente),
          idDoctor: Number(values.idDoctor),
          idEspecialidad: Number(values.idEspecialidad),
          fecha: moment(values.fecha).toDate(),
          horaInicio: moment(values.horaInicio).toDate(),
          horaFin: moment(values.horaFin).toDate(),
        })
        navigation.navigate('ConsultasScreen')
        refetchConsultas()
        showToast("La cita ha sido creada correctamente.", "La cita ha sido creada correctamente.")
      } catch (error: any) {
        console.log(error.response.data);
        
        showToast("Ha ocurrido un error al crear la cita.", "Por favor, intenta de nuevo.", "error")
      }
    }
  })

  const [doctoresList, setDoctoresList] = useState<Array<{
    label: string;
    value: string;
  }>>([])

  const {
    data: DoctoresData,
    status: DoctoresStatus,
  } = useQuery({
    queryKey: ['getDoctores', values.idEspecialidad],
    queryFn: () => {
      if (values.idEspecialidad === "") return []
      return doctoresService.getDoctores("", "", String(values.idEspecialidad), "true", true)
    },
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  })

  useEffect(() => {
    if (DoctoresStatus === 'success') {
      const list = (DoctoresData as Doctor[]).map((doctor) => ({
        label: doctor.nombre,
        value: doctor.id.toString(),
      }))

      setDoctoresList(list)
    }
  }, [DoctoresStatus, DoctoresData])

  return {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    isValid,
    setFieldValue,
    especialidadesList,
    doctoresList,
    pacientesList,
    tipoConsultasList,
    startHour,
    endHour,
    onChangeStartHour,
    onChangeEndHour,
    showDatepicker,
  }
}