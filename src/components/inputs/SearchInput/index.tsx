import { View, Text } from 'react-native'
import React from 'react'
import { SearchInputProps } from './types'
import { TextInput } from 'react-native-paper'

const SearchInput = ({label, mode, placeholder, value, onChangeText}: SearchInputProps) => {
  return (
    <TextInput
      label={label}
      mode={mode}
      placeholder={placeholder}
      style={{ backgroundColor: '#F9F9F9' }}
      activeOutlineColor="#27B2B3"
      outlineColor='#bcbcbc'
      value={value}
      onChangeText={onChangeText}
      left={<TextInput.Icon icon="magnify" color="#bcbcbc" />}
    />
  )
}

export default SearchInput