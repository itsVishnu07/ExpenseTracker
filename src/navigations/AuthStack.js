import React from 'react'
import { StyleSheet} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (

    <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen name="Welcome" component={WelcomeScreen} />

      <Stack.Screen name="Home" component={HomeScreen} />

    </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})