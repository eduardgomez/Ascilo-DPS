import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import moment from 'moment-timezone'
import { DataContainerProps } from './types'
import { useCitaCard } from '../useCitaCard'

const DataContainer: React.FC<DataContainerProps> = ({ consulta }) => {
  const {
    color,
    status,
    dotColor,
  } = useCitaCard(consulta);

  return (
    <View style={styles.dataContainer}>
      <View style={styles.dataTextContainer}>
        <Ionicons name="calendar" size={20} color={color} />
        <Text style={styles.dataText}>{moment(consulta?.fecha).format('DD/MM/YYYY')}</Text>
      </View>
      <View style={styles.dataTextContainer}>
        <MaterialCommunityIcons name="clock" size={20} color={color} />
        <Text style={styles.dataText}>{moment(consulta?.horaInicio).format('hh:mm A')}</Text>
      </View>
      <View style={styles.dataTextContainer}>
        <View style={{ ...styles.dot, backgroundColor: dotColor }} />
        <Text style={{ 
          ...styles.dataText,
          color: dotColor,
          fontWeight: 'bold',
          }}>{status}</Text>
      </View>
    </View>
  )
}

export default DataContainer