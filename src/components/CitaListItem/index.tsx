import { View, Text, TouchableOpacity } from 'react-native'
import React, { useMemo } from 'react'
import styles from './styles'
import { CitaListItemProps } from './types'
import { useTheme } from 'react-native-paper'
import { AntDesign } from '@expo/vector-icons';
import { SettingsScreenNavigation } from '@modules/Settings/types'
import { useNavigation } from '@react-navigation/native'

const CitaListItem = ({ consulta }: CitaListItemProps) => {
  if (!consulta) return null;
  const navigation = useNavigation<SettingsScreenNavigation>();

  const { colors } = useTheme();

  const inProgress = useMemo(() => consulta.status === 5, [consulta])

  const navigationProps = {
    consultaId: consulta.id,
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('VerCitaScreen', navigationProps)}
      style={[styles.container, { backgroundColor: inProgress ? colors.primary : "#fff"  }]}
    >
      <View style={styles.citaContainer}>
        <Text
          style={[styles.citaTexto, inProgress ? { color: "#fff" } : null]}
        >
            Consulta general
        </Text>
        <Text
          style={[
            styles.verMasBotonTexto,
            inProgress ? { color: "#fff", fontWeight: "400" } : null
          ]}
        >
          Ver más información
        </Text>
      </View>
      {false && (
        <View style={styles.iconContainer}>
          <AntDesign
            name="checkcircle"
            size={24}
            color={inProgress ? "#fff" : colors.primary}
          />
        </View>
      )}
      <View style={styles.dateContainer}>
        <Text
          style={[styles.dateText, inProgress ? { color: "#fff" } : null]}
        >
          2 de agosto
        </Text>
        <Text
          style={[styles.hourText, inProgress ? { color: "#fff" } : null]}
        >
          08:00 am
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default CitaListItem
