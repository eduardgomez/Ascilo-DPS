import { Consulta } from "@models/consulta"
import { useConsultas } from "@modules/Consultas/hooks/useConsultas"
import consultasService from "@services/consultas.service"
import { showToast } from "@utils/functions"
import { useCallback, useMemo, useState } from "react"

export const useCitaCard = (consulta: Consulta) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [actionModal, setActionModal] = useState<"none" | "cancelar" | "iniciar" | "reagendar" | "agendarNueva">()

  const { refetch: refetchConsultas } = useConsultas()
  const color = "#27B2B3"

  const status = useMemo(() => {
    if (!consulta) return 'Sin definir'
    if (consulta.status === 1) return 'Próxima'
    if (consulta.status === 2) return 'Completada'
    if (consulta.status === 3) return 'Cancelada'
    if (consulta.status === 4) return 'Terminada'
    if (consulta.status === 5) return 'En curso'
    return 'Sin definir'
  }, [consulta])

  const dotColor = useMemo(() => {
    if (!consulta) return color
    if (consulta.status === 1) return '#aaa'
    if (consulta.status === 2) return '#1B9A59'
    if (consulta.status === 3) return '#F44336'
    if (consulta.status === 4) return '#1B9A59'
    if (consulta.status === 5) return color
    return color
  }, [consulta?.status])

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  const handleCancelarCita = useCallback(async () => {
    setActionModal('cancelar')
    showModal()
  }, [])

  const reagendarAction = useCallback(() => {
    setActionModal('reagendar')
    showModal()
  }, [])

  const agendarProximaAction = useCallback(() => {
    setActionModal('agendarNueva')
    showModal()
  }, [])

  const iniciarAction = useCallback(() => {
    setActionModal('iniciar')
    showModal()
  }, [])

  const cancelarCita = async () => {
    if (!consulta) return
    if (consulta.status !== 1) return
    try {
      await consultasService.cancelarConsulta(consulta.id)
      showToast('Consulta cancelada', 'Recuerda que puedes reagendarla en la sección de consultas canceladas')
      refetchConsultas()
    } catch (error) {
      showToast('Error al cancelar la consulta', 'Por favor intenta de nuevo', 'error')
    }
    hideModal()
  }

  const handleIniciarCita = async () => {
    if (!consulta) return
    if (consulta.status !== 1) return
    try {
      await consultasService.iniciarConsulta(consulta.id)
      showToast('Consulta iniciada', 'Recuerda que puedes ver más detalles')
      refetchConsultas()
    } catch (error) {
      showToast('Error al iniciar la consulta', 'Por favor intenta de nuevo', 'error')
    }
    hideModal()
  }

  return {
    status,
    dotColor,
    color,
    cancelarCita,
    showModal,
    actionModal,
    hideModal,
    modalVisible,
    handleCancelarCita,
    reagendarAction,
    iniciarAction,
    handleIniciarCita,
    agendarProximaAction,
  }
}
