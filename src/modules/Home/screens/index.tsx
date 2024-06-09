import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonCard from '@modules/Home/components/ButtonCard';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../styles/styles';
import { useTheme } from 'react-native-paper';
import CitaList from '@components/CitaList';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigation } from '../types';
import { useHome } from '../hooks/useHome';
import ListContainer from '@components/ListContainer';

const HomeScreen = () => {
  const { colors } = useTheme();
  const { consultas, isLoading, refetch } = useHome();
  const navigation = useNavigation<HomeScreenNavigation>();

  return (
    <SafeAreaView>
      <ScrollView style={{ padding: 20 }}>
        <View>
          <Text style={styles.saludo}>
            Hola,{'\n'}
            <Text style={styles.nombreUsuario}>Dr. John Doe</Text>
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={{ flex: 1, marginRight: 5 }}>
            <ButtonCard
              title="Doctores"
              description="Gestión de personal"
              onPress={() => navigation.navigate('DoctoresScreen')}
              icon={
                <MaterialCommunityIcons
                  name="stethoscope"
                  size={34}
                  color={colors.primary}
                />
              }
            />
          </View>
          <View style={{ flex: 1, marginLeft: 5 }}>
            <ButtonCard
              title="Pacientes"
              description="Gestión de pacientes"
              onPress={() => navigation.navigate('PacientesScreen')}
              icon={<Ionicons name="person" size={34} color={colors.primary} />}
            />
          </View>
        </View>
        <View style={{ marginVertical: 20 }}>
          <Text style={styles.citasText}>Citas actuales</Text>
        </View>
        <ListContainer isLoading={isLoading} isEmpty={consultas.length <= 0} refetch={refetch}>
          <CitaList consultas={consultas} />
        </ListContainer>
        <View style={{ height: 50 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
