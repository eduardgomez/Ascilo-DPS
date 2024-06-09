import * as yup from 'yup'

export const pacienteFormSchema = yup.object().shape({
  nombre: yup.string().required('El nombre es requerido'),
  telefono: yup.string().required('El teléfono es requerido'),
  email: yup.string()
    .required('El teléfono es requerido')
    .email('El correo electrónico no es válido'),
  whatsapp: yup.string().required('El whatsapp es requerido'),
  dui: yup.string().required('El DUI es requerido'),
  fechaNacimiento: yup.string().required('La fecha de nacimiento es requerida'),
  direccion: yup.string().required('La dirección es requerida'),
})
