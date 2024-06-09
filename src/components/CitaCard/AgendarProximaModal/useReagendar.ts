import { Consulta } from "@models/consulta";
import { useConsultas } from "@modules/Consultas/hooks/useConsultas";
import { useDoctores } from "@modules/Doctores/hooks/useDoctores";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import consultasService from "@services/consultas.service";
import { showToast } from "@utils/functions";
import { useFormik } from "formik";
import moment from "moment-timezone";
import { useState } from "react";
import { Keyboard } from "react-native";

export const useReagendar = (consulta: Consulta) => {
  const [startHour, setStartHour] = useState<Date>(moment(new Date()).add(1, 'day').toDate());
  const [endHour, setEndHour] = useState<Date>(moment(new Date()).add(1, 'day').add(1, 'hour').toDate());
  const [dia, setDia] = useState<Date>(moment(new Date()).add(1, 'day').toDate());
  const { refetch } = useConsultas()

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

  const handleAgendarProxima = async () => {
    try {
      await consultasService.agendarProximaConsulta(consulta.id, {
        fecha: moment(dia).toDate(),
        horaInicio: moment(startHour).toDate(),
        horaFin: moment(endHour).toDate(),
      })
      showToast('Consulta agendada correctamente.', 'La consulta ha sido agendada correctamente.')
      refetch()
    } catch (error) {
      showToast('Ha ocurrido un error al agendar la consulta.', 'Por favor, intenta de nuevo.', "error")
    }
  }

  return {
    handleAgendarProxima,
    startHour,
    endHour,
    onChangeStartHour,
    onChangeEndHour,
    showDatepicker,
    dia,
    setDia,
  }
}