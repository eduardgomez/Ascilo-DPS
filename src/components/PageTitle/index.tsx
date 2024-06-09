import { View, Text } from 'react-native'
import React from 'react'
import { PageTitleProps } from './types'
import styles from './styles'

const PageTitle = ({ title, paddingHorizontal = 20, paddingVertical = 20 }: PageTitleProps) => {
  return (
    <View style={{ paddingHorizontal, paddingVertical }}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default PageTitle