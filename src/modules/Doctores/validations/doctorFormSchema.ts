import * as yup from 'yup'

export const doctorFormSchema = yup.object().shape({
  nombre: yup.string().required('El nombre es requerido'),
  telefono: yup.string().required('El teléfono es requerido'),
  email: yup.string()
    .required('El teléfono es requerido')
    .email('El correo electrónico no es válido'),
  whatsapp: yup.string().required('El whatsapp es requerido'),
  dui: yup.string().required('El DUI es requerido'),
  idEspecialidad: yup.string().required('La especialidad es requerida'),
  disponible: yup.boolean().required('La disponibilidad es requerida'),
})
