import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import {
  MaterialIcons,
  FontAwesome5,
  AntDesign,
} from '@expo/vector-icons';
import styles from '@routes/BottomTabNavigator/styles';
import { useTheme } from 'react-native-paper';
import { PacienteCardProps } from './types';
import CalendarModal from '@components/CalendarModal';
import { getEdad } from '@utils/functions';

const Card: React.FC<PacienteCardProps> = ({ navigation, paciente }) => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const { colors } = useTheme();
  const navigationProps = {
    pacienteID: paciente.id,
  };

  return (
    <View style={styles.container}>
      <CalendarModal type='paciente' id={paciente.id} visible={visible} hideModal={hideModal} />
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{paciente.nombre}</Text>
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('PacienteScreen', navigationProps)}>
            <AntDesign name="eye" size={24} color={colors.primary} />
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={showModal}>
            <FontAwesome5
              name="calendar-alt"
              size={24}
              color={colors.primary}
            />
          </TouchableOpacity> */}
          <TouchableOpacity onPress={() => navigation.navigate('PacienteFormScreen', navigationProps)}>
            <MaterialIcons name="edit" size={24} color={colors.primary} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.datosContainer}>
        <Text style={styles.datosText}>
          <Text style={styles.fontBold}>Edad:</Text>
          {getEdad(paciente.fechaNacimiento)} años
        </Text>
        <Text style={styles.datosText}>
          <Text style={styles.fontBold}>Tel:</Text>
          {paciente.telefono}
        </Text>
      </View>
      <View>
        <TouchableOpacity style={styles.infoButton}>
          <FontAwesome5
            name="whatsapp-square"
            size={24}
            color={colors.primary}
            style={{ marginRight: 6 }}
          />
          <Text style={styles.datosText}>{paciente.whatsapp}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.infoButton}>
          <View style={styles.infoIcon}>
            <MaterialIcons name="email" size={24} color="#7F7F7F" />
          </View>
          <Text style={styles.datosText}>{paciente.email}</Text>
        </TouchableOpacity>
        <View style={styles.infoButton}>
          <View style={[styles.infoIcon, { alignItems: 'center' }]}>
            <FontAwesome5 name="map-marker-alt" size={24} color="#7F7F7F" />
          </View>
          <Text style={styles.datosText}>{paciente.direccion}</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;
