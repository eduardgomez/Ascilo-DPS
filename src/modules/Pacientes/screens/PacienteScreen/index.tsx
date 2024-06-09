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
import { usePaciente } from '../../hooks/usePaciente';
import ListContainer from '@components/ListContainer';
import { getEdad } from '@utils/functions';
import moment from 'moment-timezone';

const PacienteScreen = () => {
  const { colors, paciente, isLoading, consultaIsLoading, consultas, refetchConsulta } = usePaciente()

  return (
    <ViewContainer>
      <BackButton title="Pacientes" />
      <PageTitle title="Datos del paciente" paddingVertical={0} />
      <ListContainer isLoading={isLoading && paciente !== undefined}>
        <ScrollView style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
          <InfoBlock
            title='Nombre'
            value={paciente?.nombre || ''}
            icon={<Ionicons name="person" size={34} color="#27B2B3" />}
          />
          <View>
            <View style={styles.infoButton}>
              <Text style={[styles.datosText, { fontWeight: 'bold' }]}>
                Edad: &nbsp;
              </Text>
              <Text style={styles.datosText}>{getEdad(paciente?.fechaNacimiento || new Date())} años</Text>
            </View>
            <View style={styles.infoButton}>
              <Text style={[styles.datosText, { fontWeight: 'bold' }]}>
                Fecha de nacimiento: &nbsp;
              </Text>
              <Text style={styles.datosText}>{moment(paciente?.fechaNacimiento).format("DD/MM/YYYY")}</Text>
            </View>
            <TouchableOpacity style={styles.infoButton}>
              <View style={styles.infoIcon}>
                <Entypo name="phone" size={24} color={colors.primary} />
              </View>
              <Text style={styles.datosText}>{paciente?.telefono}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.infoButton}>
              <FontAwesome5
                name="whatsapp-square"
                size={24}
                color={colors.primary}
                style={{ marginRight: 6 }}
              />
              <Text style={styles.datosText}>{paciente?.whatsapp}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.infoButton}>
              <View style={styles.infoIcon}>
                <MaterialIcons name="email" size={24} color={colors.primary} />
              </View>
              <Text style={styles.datosText}>{paciente?.email}</Text>
            </TouchableOpacity>
            <View style={styles.infoButton}>
              <View style={[styles.infoIcon, { alignItems: 'center' }]}>
                <FontAwesome5 name="map-marker-alt" size={24} color={colors.primary} />
              </View>
              <Text style={styles.datosText}>{paciente?.direccion}</Text>
            </View>
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