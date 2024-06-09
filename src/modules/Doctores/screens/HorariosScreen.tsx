import { View, ScrollView } from 'react-native';
import React from 'react';
import ViewContainer from '@components/ViewContainer';
import PageTitle from '@components/PageTitle';
import BackButton from '@components/BackButton';
import CustomButton from '@components/CustomButton';
import EmptySpace from '@components/EmptySpace';
import InfoBlock from '../components/InfoBlock';
import { Ionicons } from '@expo/vector-icons';
import RangoFecha from '../components/RangoFecha';
import { DIAS } from '../constants';
import { useDoctor } from '../hooks/useDoctor';
import ListContainer from '@components/ListContainer';

const DoctorHorarioFormScreen = () => {
  const { doctor, isLoading, newHorarios, setNewHorarios, saveHorarios } = useDoctor()  

  return (
    <ViewContainer>
      <BackButton title="Doctores" />
      <PageTitle
        title='Editar horarios'
        paddingVertical={0}
      />
      <ListContainer isLoading={isLoading && doctor !== undefined}>
        <ScrollView style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
          <InfoBlock
            title='Nombre'
            value={doctor?.nombre || ''}
            icon={<Ionicons name="person" size={34} color="#27B2B3" />}
          />
          {newHorarios.length === DIAS.length && DIAS.map((dia, index) => (
            <View key={dia}>
              <RangoFecha
                dia={dia}
                horario={newHorarios?.[index]}
                onChangeHora={(horario) => {
                  const newHorariosCopy = [...newHorarios]
                  newHorariosCopy[index] = horario
                  setNewHorarios(newHorariosCopy)
                }}
              />
              <EmptySpace />
            </View>
          ))}
          <CustomButton
            text='Actualizar horarios'
            onPress={saveHorarios}
          />
        </ScrollView>
      </ListContainer>
    </ViewContainer>
  );
};

export default DoctorHorarioFormScreen;
