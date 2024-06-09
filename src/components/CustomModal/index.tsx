import { ScrollView, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { CustomModalProps } from './types'
import { Modal, Portal, Text, useTheme } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

const containerStyle = { backgroundColor: 'white', padding: 20, margin: 20, borderRadius: 5 };

const CustomModal: React.FC<CustomModalProps> = ({ visible, hideModal, children, title }) => {
  const { colors } = useTheme()
  return (
    <Portal>
      <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
        <View style={{ marginBottom: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          {title && <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{title}</Text>}
          <TouchableOpacity onPress={hideModal}>
            <AntDesign name="closecircle" size={24} color={colors.primary} />
          </TouchableOpacity>
        </View>
        {children && <>{children}</>}
      </Modal>
    </Portal>
  )
}

export default CustomModal