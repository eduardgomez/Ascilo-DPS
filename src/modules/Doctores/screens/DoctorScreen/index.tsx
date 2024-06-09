import { ScrollView, TouchableOpacity, View, Text } from 'react-native'
import React from 'react'
import ViewContainer from '@components/ViewContainer';
import BackButton from '@components/BackButton';
import PageTitle from '@components/PageTitle';
import InfoBlock from '../../components/InfoBlock';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5, MaterialIcons, Entypo } from '@expo/vector-icons';
import styles from './styles';
import CitaList from '@components/CitaList';
import EmptySpace from '@components/EmptySpace';
import { useDoctor } from '../../hooks/useDoctor';
import ListContainer from '@components/ListContainer';

const PacienteScreen = () => {
  const { colors, doctor, isLoading, consultaIsLoading, consultas, refetchConsulta } = useDoctor()

  return (
    <ViewContainer>
      <BackButton title="Doctores" />
      <PageTitle title="Datos del doctor" paddingVertical={0} />
      <ListContainer isLoading={isLoading && doctor !== undefined}>
        <ScrollView style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
          <InfoBlock
            title='Nombre'
            value={doctor?.nombre || ''}
            icon={<Ionicons name="person" size={34} color="#27B2B3" />}
          />
          <View>
            <View style={styles.infoButton}>
              <Text style={[styles.datosText, { fontWeight: 'bold' }]}>
                Especialidad: &nbsp;
              </Text>
              <Text style={styles.datosText}>{doctor?.especialidad?.nombre}</Text>
            </View>
            <TouchableOpacity style={styles.infoButton}>
              <View style={styles.infoIcon}>
                <Entypo name="phone" size={24} color={colors.primary} />
              </View>
              <Text style={styles.datosText}>{doctor?.telefono}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.infoButton}>
              <FontAwesome5
                name="whatsapp-square"
                size={24}
                color={colors.primary}
                style={{ marginRight: 6 }}
              />
              <Text style={styles.datosText}>{doctor?.whatsapp}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.infoButton}>
              <View style={styles.infoIcon}>
                <MaterialIcons name="email" size={24} color={colors.primary} />
              </View>
              <Text style={styles.datosText}>{doctor?.email}</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginVertical: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Historial de citas</Text>
          </View>
          <ListContainer isLoading={consultaIsLoading} isEmpty={consultas.length <= 0} refetch={refetchConsulta}>
            <CitaList consultas={consultas} />
          </ListContainer>
          <EmptySpace height={40} />
        </ScrollView>
      </ListContainer>
    </ViewContainer>
  )
}

export default PacienteScreen