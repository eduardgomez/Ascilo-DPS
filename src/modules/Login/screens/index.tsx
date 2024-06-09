import { View, Text, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CustomTextInput from '@components/inputs/CustomTextInput';
import CustomButton from '@components/CustomButton';
import styles from '../styles';
import EmptySpace from '@components/EmptySpace';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';
import { LoginScreenNavigation } from '../types';
import { useAuthStore } from '../../../stores/useAuthStore';
import { AuthStore } from 'stores/types';

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigation>();
  const isLoggedIn = useAuthStore((state: AuthStore) => state.isLoggedIn)
  const setIsLoggedIn = useAuthStore((state: AuthStore) => state.setIsLoggedIn)

  useEffect(() => {
    if (isLoggedIn) {
      navigation.navigate('Navigation')
    }
  }, [isLoggedIn])

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={styles.subtitleText}>Acilo de ancianos</Text>
          <Text style={styles.titleText}>ESPERANZA</Text>
          <MaterialCommunityIcons
            name="medical-bag"
            size={150}
            color='#fff'
          />
        </View>
        <View style={styles.subcontainer}>
          <View style={styles.formcontainer}>
            <CustomTextInput
              label='Email'
              placeholder='Email'
              mode='outlined'
            />
            <EmptySpace height={10} />
            <CustomTextInput
              label='Password'
              placeholder='Password'
              mode='outlined'
            />
            <CustomButton text='Iniciar sesión' onPress={() => setIsLoggedIn(true)} />
            <View style={styles.dividersContainer}>
              <View style={styles.divider} />
              <Text>ó</Text>
              <View style={styles.divider} />
            </View>
            <GoogleSigninButton style={{ width: '100%' }} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default LoginScreen
