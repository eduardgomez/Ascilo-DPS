import BottomTabNavigator from '@routes/BottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createRef, useEffect } from 'react';
import { PaperProvider } from 'react-native-paper';
import { MyTheme, NavigationTheme } from './src/themes';
import PacienteFormScreen from '@modules/Pacientes/screens/FormScreen';
import DoctorFormScreen from '@modules/Doctores/screens/FormScreen';
import { ScreenStackList } from '@routes/types';
import PacienteScreen from '@modules/Pacientes/screens/PacienteScreen';
import DoctorScreen from '@modules/Doctores/screens/DoctorScreen';
import DoctorHorarioFormScreen from '@modules/Doctores/screens/HorariosScreen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';
import SplashScreen from 'react-native-splash-screen';
import LoginScreen from '@modules/Login/screens';
import { useAuthStore } from './src/stores/useAuthStore';
import { AuthStore } from './src/stores/types';
import VerCitaScreen from '@modules/Consultas/screens/VerCita';
import CitaFormScreen from '@modules/Consultas/screens/CitaForm';

const Stack = createNativeStackNavigator<ScreenStackList>();

const queryClient = new QueryClient()

export default function App() {
  const navigationRef = createRef<any>();

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  const isLoggedIn = useAuthStore((state: AuthStore) => state.isLoggedIn)

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <PaperProvider theme={MyTheme}>
          <NavigationContainer ref={navigationRef} theme={NavigationTheme}>
            <Stack.Navigator
              screenOptions={{ headerShown: false }}
              initialRouteName={isLoggedIn ? "Navigation" : "LoginScreen"}
            >
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="Navigation" component={BottomTabNavigator} />
              <Stack.Screen
                name="PacienteFormScreen"
                component={PacienteFormScreen}
              />
              <Stack.Screen
                name="PacienteScreen"
                component={PacienteScreen}
              />
              <Stack.Screen
                name="DoctorFormScreen"
                component={DoctorFormScreen}
              />
              <Stack.Screen
                name="DoctorHorarioFormScreen"
                component={DoctorHorarioFormScreen}
              />
              <Stack.Screen
                name="DoctorScreen"
                component={DoctorScreen}
              />
              <Stack.Screen
                name="VerCitaScreen"
                component={VerCitaScreen}
              />
              <Stack.Screen
                name="CitaFormScreen"
                component={CitaFormScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </QueryClientProvider>
      <Toast
        position='top'
        topOffset={50}
        visibilityTime={2000}
      />
    </>
  );
}
