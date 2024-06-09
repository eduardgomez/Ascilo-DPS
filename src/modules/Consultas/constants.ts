import moment from "moment-timezone";
import { PostCitaProps } from "./types";
import * as yup from 'yup'

export const formInitialValues: PostCitaProps = {
  idDoctor: '',
  idEspecialidad: '',
  idPaciente: '',
  fecha: moment().add(1, 'day').toDate(),
  horaInicio: moment().add(1, 'day').toDate(),
  horaFin: moment().add(1, 'day').add(1, 'hour').toDate(),
}

export const citaFormSchema = yup.object().shape({
  idDoctor: yup.string().required('Este campo es requerido'),
  idEspecialidad: yup.string().required('Este campo es requerido'),
  idPaciente: yup.string().required('Este campo es requerido'),
  fecha: yup.date().required('Este campo es requerido'),
  horaInicio: yup.date().nullable(),
  horaFin: yup.date().nullable(),
})

