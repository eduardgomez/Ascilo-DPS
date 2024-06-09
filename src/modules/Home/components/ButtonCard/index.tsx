import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { HomeButtonCardProps } from './types';
import styles from './styles';

const HomeButtonCard = ({ title, icon, description, onPress }: HomeButtonCardProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.iconContainer}>
        {icon}
      </View>
      <Text style={styles.buttonTitle}>{title}</Text>
      <Text style={styles.buttonDescription}>{description}</Text>
    </TouchableOpacity>
  )
}

export default HomeButtonCard
