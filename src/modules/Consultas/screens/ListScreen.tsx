import PageTitle from '@components/PageTitle';
import React from 'react';
import ViewContainer from '@components/ViewContainer';
import SearchInput from '@components/inputs/SearchInput';
import { Ionicons } from '@expo/vector-icons';
import FabButton from '@components/FabButton';
import { useNavigation } from '@react-navigation/native';
import CitaCard from '@components/CitaCard';
import { RefreshControl, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import ListContainer from '@components/ListContainer';
import styles from '../styles';
import CheckButton from '../components/CheckButton';
import { useConsultas } from '../hooks/useConsultas';
import { ListScreenNavigation } from '../types';

const ConsultasScreen = () => {
  const { consultas, isLoading, refetch, selectedFilter, setSelectedFilter } = useConsultas();
  const navigation = useNavigation<ListScreenNavigation>();

  const handleFilterChange = (value: number | null) => {
    setSelectedFilter(value);
  }

  return (
    <ViewContainer>
      <PageTitle title="Citas" />
      <View style={{ height: 60 }}>
        <ScrollView horizontal style={styles.buttonsContainer} alwaysBounceHorizontal>
          <CheckButton selectedValue={selectedFilter} value={5} text='En curso' onPress={handleFilterChange} />
          <CheckButton selectedValue={selectedFilter} value={1} text='Proximas' onPress={handleFilterChange} />
          <CheckButton selectedValue={selectedFilter} value={2} text='Completadas' onPress={handleFilterChange} />
          <CheckButton selectedValue={selectedFilter} value={3} text='Canceladas' onPress={handleFilterChange} />
        </ScrollView>
      </View>
      <ListContainer isLoading={isLoading} isEmpty={consultas.length <= 0} refetch={refetch}>
        <ScrollView
          style={{ paddingHorizontal: 20 }}
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={refetch} />
          }
        >
          {consultas.map((consulta) => <CitaCard navigation={navigation} key={consulta.id} consulta={consulta} />)}
          <View style={{ height: 10 }} />
        </ScrollView>
      </ListContainer>
      <FabButton
        icon="plus"
        onPress={() => navigation.navigate('CitaFormScreen')}
      />
    </ViewContainer>
  );
};

export default ConsultasScreen;
