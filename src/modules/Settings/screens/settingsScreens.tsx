import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import ViewContainer from '@components/ViewContainer'
import PageTitle from '@components/PageTitle'
import TabButton from '../components/tabButton'
import { useAuthStore } from '../../../stores/useAuthStore'
import { AuthStore } from '../../../stores/types'
import { useNavigation } from '@react-navigation/native'
import { SettingsScreenNavigation } from '../types'

const SettingsScreen = () => {
  const setIsLoggedIn = useAuthStore((state: AuthStore) => state.setIsLoggedIn)
  const navigation = useNavigation<SettingsScreenNavigation>();

  useEffect(() => {
    setIsLoggedIn(false)
    navigation.navigate('LoginScreen')
  }, [])

  return null;

  // return (
  //   <ViewContainer>
  //     <PageTitle title="Configuración" />
  //     <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 10 }}>
  //       <TabButton title="Mi perfil" onPress={() => {}} />
  //       <TabButton title="Cambiar contraseña" onPress={() => {}} />
  //       <TabButton title="Cerrar sesión" focused hideArrow onPress={() => {
  //         setIsLoggedIn(false)
  //         navigation.navigate('LoginScreen')
  //       }} />
  //     </View>
  //   </ViewContainer>
  // )
}

export default SettingsScreen