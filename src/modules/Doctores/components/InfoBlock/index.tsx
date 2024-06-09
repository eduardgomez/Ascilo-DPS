import { View, Text } from 'react-native'
import React from 'react'
import { InfoBlockProps } from './types'
import styles from './styles'
import EmptySpace from '@components/EmptySpace'

const InfoBlock: React.FC<InfoBlockProps> = ({ title, value, icon, actions }) => {
  return (
    <>
      <View style={styles.infoContainer}>
        {icon && <>{icon}</>}
        <View style={styles.textContainer}>
          <Text style={styles.labelText}>{title}</Text>
          <Text style={styles.valueText}>{value}</Text>
        </View>
        {actions && <>{actions}</>}
      </View>
      <EmptySpace height={20} />
    </>
  )
}

export default InfoBlock