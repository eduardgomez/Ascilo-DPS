import { View, Text, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import moment from 'moment-timezone';
import { RangoFechaProps } from './types'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { Checkbox, Divider, TextInput } from 'react-native-paper';
import { Horario } from '@models/horario';

const RangoFecha = ({ dia, horario, onChangeHora }: RangoFechaProps) => {
  const [startHour, setStartHour] = useState<Date>(new Date());
  const [endHour, setEndHour] = useState<Date>(new Date());
  const [newHorario, setNewHorario] = useState<Horario>();

  const [currentChecked, setCurrentChecked] = React.useState<boolean>(true);

  const toggleChecked = () => {
    setCurrentChecked(!currentChecked)
    if (newHorario) {
      setNewHorario({
        ...newHorario,
        disponible: !currentChecked
      })
      onChangeHora({
        ...newHorario,
        disponible: !currentChecked
      })
    }
  }

  useEffect(() => {
    if (horario) {
      setStartHour(moment(horario.inicio).tz('America/El_Salvador').toDate())
      setEndHour(moment(horario.fin).tz('America/El_Salvador').toDate())
      setNewHorario(horario)
      setCurrentChecked(horario.disponible)
    }
  }, [horario])

  const onChangeStartHour = (event: any, selectedDate: any) => {
    setStartHour(selectedDate);
    if (newHorario) {
      setNewHorario({
        ...newHorario,
        inicio: selectedDate
      })
      onChangeHora({
        ...newHorario,
        inicio: selectedDate
      })
    }
    Keyboard.dismiss()
  };

  const onChangeEndHour = (event: any, selectedDate: any) => {
    setEndHour(selectedDate);
    if (newHorario) {
      setNewHorario({
        ...newHorario,
        fin: selectedDate
      })
      onChangeHora({
        ...newHorario,
        fin: selectedDate
      })
    }
    Keyboard.dismiss()
  };

  const showDatepicker = (value: Date,  onChange: ((event: any, date?: Date | undefined) => void)) => {
    DateTimePickerAndroid.open({
      value,
      onChange,
      mode: 'time',
      is24Hour: false,
    });
  };

  return (
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Checkbox
          status={currentChecked ? 'checked' : 'unchecked'}
          onPress={toggleChecked}
        />
        <Text onPress={toggleChecked} style={{ fontWeight: 'bold', fontSize: 20 }}>{dia}</Text>
      </View>
      <Divider />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TextInput
          mode='outlined'
          placeholder='HH:MM'
          style={{ backgroundColor: '#F9F9F9', width: '48%' }}
          activeOutlineColor="#27B2B3"
          outlineColor='#bcbcbc'
          value={startHour?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }).toString()}
          onPressOut={Keyboard.dismiss}
          disabled={!currentChecked}
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
          disabled={!currentChecked}
          onPressIn={() => showDatepicker(endHour, onChangeEndHour)}
          left={<TextInput.Icon icon="clock" color="#7F7F7F" />}
        />
      </View>
    </View>
  )
}

export default RangoFecha