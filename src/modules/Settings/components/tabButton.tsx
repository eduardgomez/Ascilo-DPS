import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { TabButtonProps } from './types'
import { Entypo } from '@expo/vector-icons';

const TabButton: React.FC<TabButtonProps> = ({ onPress, title, focused = false, hideArrow = false }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ borderBottomColor: '#7F7F7F', borderBottomWidth: focused ? 0 : 1 }}>
      <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 16, fontWeight: focused ? 'bold' : 'normal' }}>{title}</Text>
        {!hideArrow && (
          <Entypo name="chevron-right" size={28} color="black" />
        )}
      </View>
    </TouchableOpacity>
  )
}

export default TabButton
