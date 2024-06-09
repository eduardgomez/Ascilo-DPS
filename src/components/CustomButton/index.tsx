import { View, Text } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import { CustomButtonProps } from './types';

const CustomButton = ({ text, onPress, mode = "contained" }: CustomButtonProps) => {
  return (
    <Button
      mode={mode}
      onPress={onPress}
      style={{ borderRadius: 5, paddingVertical: 5, marginVertical: 25 }}
      labelStyle={{ fontSize: 18, fontWeight: '700', color: '#fff' }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
