import { View, Text } from 'react-native'
import React from 'react'
import CitaListItem from '@components/CitaListItem'
import styles from './styles'
import { CitaListProps } from './types'

const CitaList: React.FC<CitaListProps> = ({ consultas }) => {
  return (
    <View style={styles.citaList}>
      {consultas.map((consulta) => <CitaListItem key={consulta.id} consulta={consulta} />)}
    </View>
  )
}

export default CitaList