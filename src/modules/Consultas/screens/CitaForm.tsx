import { View, Text, ScrollView, Keyboard } from 'react-native'
import React from 'react'
import ViewContainer from '@components/ViewContainer'
import BackButton from '@components/BackButton'
import PageTitle from '@components/PageTitle'
import ListContainer from '@components/ListContainer'
import CustomTextInput from '@components/inputs/CustomTextInput'
import EmptySpace from '@components/EmptySpace'
import SelectInput from '@components/inputs/SelectInput'
import CustomButton from '@components/CustomButton'
import { useCitaForm } from '../hooks/useCitaForm'
import DatePicker from '@components/inputs/DatePicker'
import moment from 'moment-timezone'
import { TextInput } from 'react-native-paper'

const CitaForm = () => {
  const {
    errors,
    handleChange,
    handleSubmit,
    showDatepicker,
    setFieldValue,
    pacientesList,
    values,
    especialidadesList,
    doctoresList,
    tipoConsultasList,
    endHour,
    startHour,
    onChangeEndHour,
    onChangeStartHour
  } = useCitaForm()

  return (
    <ViewContainer>
      <BackButton title="Citas" />
      <PageTitle
        title="Crear cita"
        paddingVertical={0}
      />
      <ListContainer isLoading={false}>
        <ScrollView style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
          <SelectInput
            label="Pacientes"
            mode="outlined"
            options={pacientesList}
            onChange={handleChange('idPaciente')}
            value={String(values.idPaciente || '')}
            error={errors.idPaciente}
          />
          <EmptySpace />
          <SelectInput
            label="Especialidad"
            mode="outlined"
            options={especialidadesList}
            onChange={handleChange('idEspecialidad')}
            value={String(values.idEspecialidad || '')}
            error={errors.idEspecialidad}
          />
          <EmptySpace />
          <SelectInput
            label="Doctores"
            mode="outlined"
            options={doctoresList}
            onChange={handleChange('idDoctor')}
            value={String(values.idDoctor || '')}
            error={errors.idDoctor}
          />
          <EmptySpace />
          <DatePicker
            label="Fecha de consulta"
            mode="outlined"
            value={moment().add(1, 'day').toDate()}
            minimumDate={moment().add(1, 'day').toDate()}
            maximumDate={moment().add(1, 'month').toDate()}
            onChangeDate={(date) => setFieldValue('fecha', date)}
          />
          <EmptySpace />
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
          <EmptySpace />
          <CustomButton
            text={'Crear cita'}
            onPress={() => handleSubmit()}
          />
        </ScrollView>
      </ListContainer>
    </ViewContainer>
  )
}

export default CitaForm