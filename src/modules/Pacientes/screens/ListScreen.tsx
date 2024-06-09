import PageTitle from '@components/PageTitle';
import React from 'react';
import { View, ScrollView, RefreshControl } from 'react-native';
import ViewContainer from '@components/ViewContainer';
import SearchInput from '@components/inputs/SearchInput';
import Card from '@modules/Pacientes/components/Card';
import styles from '../styles/ListScreenStyles';
import FabButton from '@components/FabButton';
import ListContainer from '@components/ListContainer';
import { usePacientes } from '../hooks/usePacientes';

const PacientesScreen = () => {
  const {
    isLoading,
    pacientes,
    refetch,
    navigation,
    setNombrePaciente
  } = usePacientes()

  return (
    <ViewContainer>
      <PageTitle title="Pacientes" />
      <View style={styles.filterContainer}>
        <View style={{ flex: 1 }}>
          <SearchInput
            label="Buscar paciente..."
            mode="outlined"
            onChangeText={(text) => setNombrePaciente(text)}
          />
        </View>
      </View>
      <ListContainer isLoading={isLoading} isEmpty={pacientes.length <= 0} refetch={refetch}>
        <ScrollView
          style={{ paddingHorizontal: 20 }}
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={refetch} />
          }
        >
          {pacientes.map((paciente) => (
            <Card paciente={paciente} navigation={navigation} key={paciente.id} />
          ))}
          <View style={{ height: 10 }} />
        </ScrollView>
      </ListContainer>
      <FabButton
        icon="plus"
        onPress={() => navigation.navigate('PacienteFormScreen')}
      />
    </ViewContainer>
  );
};

export default PacientesScreen;
