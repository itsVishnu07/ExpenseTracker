import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthStack from './src/navigations/AuthStack'
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './src/screens/WelcomeScreen';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})