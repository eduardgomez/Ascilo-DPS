import { View, Text, GestureResponderEvent } from 'react-native'
import React from 'react'
import { Checkbox } from 'react-native-paper';
import { CustomCheckboxProps } from './types';

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  label,
  checked,
  onChange,
  error,
}) => {
  const [currentChecked, setCurrentChecked] = React.useState<boolean>(checked);

  const toggleChecked = () => {
    setCurrentChecked(!currentChecked)
    onChange && onChange()
  }

  return (
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Checkbox
          status={currentChecked ? 'checked' : 'unchecked'}
          onPress={toggleChecked}
        />
        <Text onPress={toggleChecked}>{label}</Text>
      </View>
      {error && error.length > 0 && (
        <Text style={{
          color: "#FF0000",
          fontSize: 14,
          marginTop: 5,
          marginLeft: 5,
          fontWeight: "bold"
        }}>{error}</Text>
      )}
    </View>
  )
}

export default CustomCheckbox