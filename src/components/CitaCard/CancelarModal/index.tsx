import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { CancelarModalProps } from '../types'
import CustomModal from '@components/CustomModal'
import styles from './styles'
import DataContainer from '../DataContainer'
import EmptySpace from '@components/EmptySpace'

const CancelarModal: React.FC<CancelarModalProps> = ({action, hideModal, reagendarAction, consulta, ...props}) => {
  return (
    <CustomModal {...props} hideModal={hideModal}>
      <View>
        <EmptySpace height={10} />
        <DataContainer consulta={consulta} />
        <EmptySpace height={10} />
        <Text style={styles.texto}>
          Una vez cancelada la cita no se podra iniciar más adelante, sin embargo existe la posibilidad de reagendar, ¿esta seguro de cancelar la cita?
        </Text>
        <View style={{ marginTop: 15 }}>
          <TouchableOpacity style={styles.botonReagendar} onPress={reagendarAction}>
            <Text style={styles.botonReagendarText}>Reagendar cita</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botonCancelar} onPress={action}>
            <Text style={styles.botonReagendarText}>Cancelar cita</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginTop: 10, paddingTop: 10 }} onPress={hideModal}>
            <Text style={styles.botonVolverAtrasTexto}>Volver atras</Text>
          </TouchableOpacity>
        </View>
      </View>
    </CustomModal>
  )
}

export default CancelarModal