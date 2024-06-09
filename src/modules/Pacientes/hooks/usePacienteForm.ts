import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FormScreenNavigation, PacienteRouteProps } from "../types";
import { usePacientes } from "./usePacientes";
import { formInitialValues } from "../constants";
import { pacienteFormSchema } from "../validations/pacienteFormSchema";
import pacientesService from "@services/pacientes.service";
import { showToast } from "@utils/functions";
import { useFormik } from "formik";
import { useQuery } from "@tanstack/react-query";
import { postPacienteProps } from "@services/types";

export const usePacienteForm = () => {
  const [id, setId] = useState<string>("");
  const route = useRoute<RouteProp<PacienteRouteProps>>();
  const { refetch: pacientesRefecth } = usePacientes()
  const navigation = useNavigation<FormScreenNavigation>();

  const { handleChange, handleBlur, handleSubmit, values, errors, isValid, setFieldValue } = useFormik<postPacienteProps>({
    initialValues: formInitialValues,
    enableReinitialize: true,
    validateOnChange: false,
    validationSchema: pacienteFormSchema,
    onSubmit: async (values: any) => {
      try {
        let text1 = 'Paciente creado correctamente.'
        let text2 = `El paciente ${values.nombre} ha sido creado correctamente.`
        if (id === "") {
          await pacientesService.postPaciente(values)
        } else {
          await pacientesService.patchPaciente(id, values)
          text1 = 'Paciente actualizado correctamente.'
          text2 = `El paciente ${values.nombre} ha sido actualizado correctamente.`
        }
        
        showToast(text1, text2)

        await pacientesRefecth()
        if (id === "") { navigation.navigate('PacientesScreen') }
      } catch (error) {
        showToast(
          'Ha ocurrido un error al crear el doctor.',
          'Por favor, intenta de nuevo.',
          "error"
        )
      }
    }
  })

  useEffect(() => {
    if (route.params === undefined) return;
    const { pacienteID } = route.params;
    if (pacienteID === undefined) return;
    setId(pacienteID);
  }, [route]);

  const { data, status, isLoading } = useQuery({
    queryKey: ['getPaciente', id],
    queryFn: () => pacientesService.getPaciente(id || ''),
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  })

  useEffect(() => {
    if (status === 'success' && data !== null) {
      setFieldValue('nombre', data.nombre)
      setFieldValue('email', data.email)
      setFieldValue('telefono', data.telefono)
      setFieldValue('whatsapp', data.whatsapp)
      setFieldValue('dui', String(data.dui || "").replace(/-/g, ''))
      setFieldValue('fechaNacimiento', data.fechaNacimiento)
      setFieldValue('direccion', data.direccion)
    }
  }, [status, data])

  return {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    isValid,
    setFieldValue,
    id,
    isLoading,
  }
}