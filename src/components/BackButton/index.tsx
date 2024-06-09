import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { BackButtonProps } from './types';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import styles from './styles';

const BackButton = ({ title, paddingHorizontal = 20 }: BackButtonProps) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={[
        styles.container,
        { paddingHorizontal, paddingTop: 15, paddingBottom: 5 }
      ]}
    >
      <Entypo name="chevron-left" size={28} color="#27B2B3" />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default BackButton;
