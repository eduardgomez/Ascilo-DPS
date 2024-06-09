import { View, Text, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import { DatePickerProps } from './types'
import { TextInput, Button } from 'react-native-paper'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

const DatePicker: React.FC<DatePickerProps> = ({
  label,
  mode,
  placeholder,
  minimumDate = new Date(1930, 0, 1),
  maximumDate = new Date(),
  onChangeDate,
  value,
  error,
}) => {
  const [date, setDate] = useState<Date>(new Date());

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setDate(currentDate);
    Keyboard.dismiss()
    if (onChangeDate) onChangeDate(selectedDate)
  };

  const showDatepicker = () => {
    DateTimePickerAndroid.open({
      value: date || new Date(),
      onChange,
      mode: 'date',
      is24Hour: true,
      minimumDate,
      maximumDate,
    });
  };

  useEffect(() => {
    if (value !== undefined) setDate(new Date(value))
  }, [value])

  return (
    <View>
      <TextInput
        label={label}
        mode={mode}
        placeholder={placeholder}
        style={{ backgroundColor: '#F9F9F9' }}
        activeOutlineColor="#27B2B3"
        outlineColor='#bcbcbc'
        value={date?.toLocaleDateString()}
        onPressOut={Keyboard.dismiss}
        onPressIn={showDatepicker}
        left={<TextInput.Icon icon="calendar" color="#7F7F7F" />}
      />
      {error && error.length > 0 && (
        <Text style={{ color: "#FF0000", fontSize: 14, marginTop: 5, marginLeft: 5, fontWeight: "bold" }}>
          {error}
        </Text>
      )}
    </View>
  )
}

export default DatePicker