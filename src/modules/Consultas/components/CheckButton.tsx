import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import styles from '../styles';

type CheckButtonProps = {
  onPress?: (value: number | null) => void
  text: string
  value: number
  selectedValue: number | null
}

const CheckButton: React.FC<CheckButtonProps> = ({ text, onPress, value, selectedValue }) => {
  const [active, setActive] = React.useState(false)

  const handlePress = () => {
    if (selectedValue === value) {
      setActive(false)
      onPress && onPress(null)
      return;
    }
    setActive(true)
    onPress && onPress(value)
  }

  useEffect(() => {
    if (selectedValue === value) {
      setActive(true)
    } else {
      setActive(false)
    }
  }, [selectedValue])

  return (
    <TouchableOpacity style={{ 
      ...styles.checkButton,
      backgroundColor: active ? '#27B2B3' : '#fff',
     }} onPress={handlePress}>
      <Text style={{ 
        ...styles.checkButtonText,
        color: active ? '#fff' : '#666',
        fontWeight: active ? 'bold' : 'normal',
       }}>{text}</Text>
    </TouchableOpacity>
  )
}

export default CheckButton