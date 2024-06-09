import { View, Text, Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react'
import { ListContainerProps } from './types'
import { ActivityIndicator, Button } from 'react-native-paper'
import styles from './styles'
import CustomButton from '@components/CustomButton';

const ListContainer: React.FC<ListContainerProps> = ({ children, isLoading, isEmpty, refetch }) => {
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator animating color='#27B2B3' size={100} />
        <Text style={styles.loadingText}>Cargando...</Text>
      </View>
    )
  }

  if (!isLoading && isEmpty) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>No se han encontrado datos</Text>
        <MaterialCommunityIcons
          name="database-remove"
          size={200}
          color='#27B2B3'
        />
        {refetch && <CustomButton text='Recargar datos' onPress={() => refetch()} />}
      </View>
    )
  }

  return <View style={{ flex: 1 }}>{children}</View>
}

export default ListContainer