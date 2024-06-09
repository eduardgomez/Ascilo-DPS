import { View, Text, TouchableOpacity, ScrollView, Keyboard } from 'react-native'
import React from 'react'
import { ReagendarModalProps } from '../types'
import CustomModal from '@components/CustomModal'
import styles from './styles'
import EmptySpace from '@components/EmptySpace'
import DataContainer from '../DataContainer'
import DatePicker from '@components/inputs/DatePicker'
import SelectInput from '@components/inputs/SelectInput'
import { useReagendar } from './useReagendar'
import CustomTextInput from '@components/inputs/CustomTextInput'
import { TextInput } from 'react-native-paper'
import moment from 'moment-timezone'

const ReagendarModal: React.FC<ReagendarModalProps> = ({ hideModal, consulta, ...props }) => {
  const { endHour, startHour, showDatepicker, onChangeEndHour, onChangeStartHour, dia, setDia, handleReagendar } = useReagendar(consulta)

  return (
    <CustomModal {...props} hideModal={hideModal}>
      <View>
        <EmptySpace height={10} />
        <DataContainer consulta={consulta} />
        <EmptySpace height={10} />
        <ScrollView style={{ paddingVertical: 10 }}>
          <CustomTextInput
            label="Doctor"
            disabled
            mode="outlined"
            value={consulta.doctor?.nombre ?? 'Sin definir'}
          />
          <EmptySpace height={15} />
          <DatePicker
            label="Fecha de consulta"
            mode="outlined"
            value={dia}
            minimumDate={moment(consulta.fecha).add(1, 'day').toDate()}
            maximumDate={moment(consulta.fecha).add(1, 'month').toDate()}
            onChangeDate={setDia}
          />
          <EmptySpace height={15} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TextInput
              mode='outlined'
              placeholder='HH:MM'
              style={{ backgroundColor: '#F9F9F9', width: '48%' }}
              activeOutlineColor="#27B2B3"
              outlineColor='#bcbcbc'
              value={startHour?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }).toString()}
              onPressOut={Keyboard.dismiss}
              onPressIn={() => showDatepicker(startHour, onChangeStartHour)}
              left={<TextInput.Icon icon="clock" color="#7F7F7F" />}
            />
            <TextInput
              mode='outlined'
              placeholder='HH:MM'
              style={{ backgroundColor: '#F9F9F9', width: '48%' }}
              activeOutlineColor="#27B2B3"
              outlineColor='#bcbcbc'
              value={endHour?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }).toString()}
              onPressOut={Keyboard.dismiss}
              onPressIn={() => showDatepicker(endHour, onChangeEndHour)}
              left={<TextInput.Icon icon="clock" color="#7F7F7F" />}
            />
          </View>
        </ScrollView>
        <View style={{ marginTop: 15 }}>
          <TouchableOpacity style={styles.botonReagendar} onPress={() => {
            handleReagendar()
            hideModal()
          }}>
            <Text style={styles.botonReagendarText}>Reagendar cita</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginTop: 10, paddingTop: 10 }} onPress={hideModal}>
            <Text style={styles.botonVolverAtrasTexto}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </CustomModal>
  )
}

export default ReagendarModal