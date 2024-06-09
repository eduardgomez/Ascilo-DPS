import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { useTheme } from 'react-native-paper'
import { Consulta } from '@models/consulta'

type DoctorCardProps = {
  navigation: any
  consulta: Consulta
}

const DoctorCard: React.FC<DoctorCardProps> = ({ consulta, navigation }) => {
  const { colors } = useTheme()
  if (consulta.doctor === undefined) return null

  const navigationProps = {
    doctorId: consulta.doctor?.id
  };

  return (
    <View style={{ backgroundColor: '#fff', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 10, elevation: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <View>
        <Text style={{ color: '#828282', fontSize: 12 }}>Doctor:</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{consulta.doctor?.nombre || 'Sin definir'}</Text>
        <Text style={{ color: '#828282', fontWeight: 'bold', fontSize: 12 }}>{consulta.especialidad?.nombre || 'Sin definir'}</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('DoctorScreen', navigationProps)}>
        <AntDesign name="eye" size={24} color={colors.primary} />
      </TouchableOpacity>
    </View>
  )
}

export default DoctorCard