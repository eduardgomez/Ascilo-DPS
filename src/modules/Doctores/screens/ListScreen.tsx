import PageTitle from '@components/PageTitle';
import React from 'react';
import { View, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import ViewContainer from '@components/ViewContainer';
import SearchInput from '@components/inputs/SearchInput';
import { Ionicons } from '@expo/vector-icons';
import Card from '../components/Card';
import styles from '../styles/ListScreenStyles';
import FabButton from '@components/FabButton';
import { useNavigation } from '@react-navigation/native';
import { ListScreenNavigation } from '../types';
import { useDoctores } from '../hooks/useDoctores';
import ListContainer from '@components/ListContainer';
import FiltrosModal from '../components/FiltrosModal';

const DoctoresScreen = () => {
  const navigation = useNavigation<ListScreenNavigation>();
  const {
    doctores,
    isLoading,
    refetch,
    nombreDoctor,
    changeNombreDoctor,
    visible,
    showModal,
    hideModal,
    especialidadesList,
    filtros,
    setFiltros,
    aplicarFiltros,
    limpiarFiltros,
  } = useDoctores();

  return (
    <ViewContainer>
      <PageTitle title="Doctores" />
      <FiltrosModal
        visible={visible}
        hideModal={hideModal}
        especialidadesOptions={especialidadesList}
        title='Filtrar por...'
        filtros={filtros}
        setFiltros={setFiltros}
        aplicarFiltros={aplicarFiltros}
        limpiarFiltros={limpiarFiltros}
      />
      <View style={styles.filterContainer}>
        <View style={{ flex: 1 }}>
          <SearchInput
            label="Buscar doctor..."
            mode="outlined"
            value={nombreDoctor}
            onChangeText={changeNombreDoctor}
          />
        </View>
        <TouchableOpacity onPress={showModal} style={styles.filterButton}>
          <Ionicons name="options" size={34} color="black" />
        </TouchableOpacity>
      </View>
      <ListContainer isLoading={isLoading} isEmpty={doctores.length <= 0} refetch={refetch}>
        <ScrollView
          style={{ paddingHorizontal: 20 }}
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={refetch} />
          }
        >
          {doctores.map((doctor) => (
            <Card navigation={navigation} key={doctor.id} doctor={doctor} />
          ))}
          <View style={{ height: 10 }} />
        </ScrollView>
      </ListContainer>
      <FabButton
        icon="plus"
        onPress={() => navigation.navigate('DoctorFormScreen')}
      />
    </ViewContainer>
  );
};

export default DoctoresScreen;
