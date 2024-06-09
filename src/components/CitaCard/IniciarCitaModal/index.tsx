import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { IniciarModalProps } from '../types'
import CustomModal from '@components/CustomModal'
import EmptySpace from '@components/EmptySpace'
import DataContainer from '../DataContainer'
import styles from './styles'

const IniciarCitaModal: React.FC<IniciarModalProps> = ({ consulta, action, hideModal, ...props }) => {
  return (
    <CustomModal {...props} hideModal={hideModal}>
      <View>
        <EmptySpace height={10} />
        <DataContainer consulta={consulta} />
        <EmptySpace height={10} />
        <Text style={styles.texto}>
          Una vez iniciada la cita no se podra cancelar ni reagendar, ¿esta seguro de iniciar la cita?
        </Text>
        <View style={{ marginTop: 15 }}>
          <TouchableOpacity style={styles.botonReagendar} onPress={action}>
            <Text style={styles.botonReagendarText}>Iniciar cita</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginTop: 10, paddingTop: 10 }} onPress={hideModal}>
            <Text style={styles.botonVolverAtrasTexto}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </CustomModal>
  )
}

export default IniciarCitaModal