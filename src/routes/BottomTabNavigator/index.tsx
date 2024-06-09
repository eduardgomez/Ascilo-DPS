import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@modules/Home/screens';
import DoctoresScreen from '@modules/Doctores/screens/ListScreen';
const Tab = createBottomTabNavigator();
const { width, height } = Dimensions.get('window');
import { FontAwesome, Foundation, MaterialCommunityIcons } from '@expo/vector-icons';
import PacientesScreen from '@modules/Pacientes/screens/ListScreen';
import { Ionicons } from '@expo/vector-icons';
import SettingsScreen from '@modules/Settings/screens/settingsScreens';
import ConsultasScreen from '@modules/Consultas/screens/ListScreen';

const BottomTabNavigator = () => {
  return (
    <View style={{ width, height, backgroundColor: '#F9F9F9' }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: { height: 54 }
        }}
        initialRouteName="Home"
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Foundation name="home" size={30} color={color} />
            )
          }}
        />
        <Tab.Screen
          name="ConsultasScreen"
          component={ConsultasScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="calendar" size={30} color={color} />
            )
          }}
        />
        <Tab.Screen
          name="PacientesScreen"
          component={PacientesScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="md-person" size={30} color={color} />
            )
          }}
        />
        <Tab.Screen
          name="DoctoresScreen"
          component={DoctoresScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="stethoscope"
                size={30}
                color={color}
              />
            )
          }}
        />
        <Tab.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="power-off" size={30} color={color} />
            )
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default BottomTabNavigator;
