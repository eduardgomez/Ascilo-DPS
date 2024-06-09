import { View, Text } from 'react-native'
import React from 'react'
import { FAB } from 'react-native-paper'
import styles from './styles'
import { FabButtonProps } from './types'

const FabButton = ({ icon, onPress }: FabButtonProps) => {
  return (
    <FAB
      icon={icon}
      style={styles.fab}
      color='white'
      customSize={60}
      onPress={onPress}
      mode='elevated'
    />
  )
}

export default FabButton