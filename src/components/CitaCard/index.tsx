import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styles from './styles'
import { useCitaCard } from './useCitaCard'
import CancelarModal from './CancelarModal'
import DataContainer from './DataContainer'
import ReagendarModal from './ReagendarModal'
import IniciarCitaModal from './IniciarCitaModal'
import { CitaCardProps } from './types'
import AgendarProxima from './AgendarProximaModal'

const CitaCard: React.FC<CitaCardProps> = ({ consulta, navigation }) => {
  if (!consulta) return null

  const {
    color,
    reagendarAction,
    handleCancelarCita,
    hideModal,
    cancelarCita,
    actionModal,
    modalVisible,
    iniciarAction,
    handleIniciarCita,
    agendarProximaAction,
  } = useCitaCard(consulta);

  const navigationProps = {
    consultaId: consulta.id,
  };

  return (
    <View style={styles.container}>
      <CancelarModal
        consulta={consulta}
        action={cancelarCita}
        hideModal={hideModal}
        visible={modalVisible && actionModal === 'cancelar'}
        reagendarAction={reagendarAction}
        title='Cancelar o reagendar'
      />
      <ReagendarModal
        consulta={consulta}
        hideModal={hideModal}
        visible={modalVisible && actionModal === 'reagendar'}
        title='Reagendar cita'
      />
      <AgendarProxima
        consulta={consulta}
        hideModal={hideModal}
        visible={modalVisible && actionModal === 'agendarNueva'}
        title='Agendar proxima cita'
      />
      <IniciarCitaModal
        action={handleIniciarCita}
        consulta={consulta}
        hideModal={hideModal}
        visible={modalVisible && actionModal === 'iniciar'}
        title='Iniciar cita'
      />
      <View style={styles.titleContainer}>
        <View>
          <Text style={styles.title}>{consulta?.especialidad?.nombre ?? 'Sin definir'}</Text>
          <Text style={styles.drName}>Dr. {consulta?.doctor?.nombre ?? 'Sin definir'}</Text>
        </View>
        <MaterialCommunityIcons
          name="stethoscope"
          size={50}
          color={color}
        />
      </View>
      <DataContainer consulta={consulta} />
      <View style={styles.buttonsContainer}>
        {consulta.status === 1 && (
          <>
            <TouchableOpacity style={styles.button} onPress={handleCancelarCita}>
              <Text style={styles.buttonText}>Cancelar cita</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ 
              ...styles.button,
              ...styles.primaryButton,
            }}
            onPress={iniciarAction}>
              <Text style={{ 
                ...styles.buttonText,
                ...styles.primaryButtonText,
              }}>Iniciar consulta</Text>
            </TouchableOpacity>
          </>
        )}
        {consulta.status === 2 && !consulta.reagendada && (
          <>
            <TouchableOpacity style={styles.button} onPress={agendarProximaAction}>
              <Text style={styles.buttonText}>Agendar proxima</Text>
            </TouchableOpacity>
          </>
        )}
        {consulta.status !== 1 && consulta.status !== 3 && (
          <TouchableOpacity style={{ 
            ...styles.button,
            ...styles.primaryButton,
          }}
            onPress={() => navigation.navigate('VerCitaScreen', navigationProps)}>
            <Text style={{ 
              ...styles.buttonText,
              ...styles.primaryButtonText,
            }}>Ver detalles</Text>
          </TouchableOpacity>
        )}
        {consulta.status === 3 && (
          <TouchableOpacity style={styles.button} onPress={reagendarAction}>
            <Text style={styles.buttonText}>Reagendar</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default CitaCard