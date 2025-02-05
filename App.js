import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import AuthStack from './src/navigations/AuthStack'
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './src/redux/store';
import { QueryClient, QueryClientProvider } from "react-query";
import { PaperProvider } from 'react-native-paper';
import { enGB, registerTranslation } from 'react-native-paper-dates'
registerTranslation('en-GB', enGB)

const queryClient = new QueryClient();

const App = () => {
  return (

    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <View style={{flex: 1,}}>
              <StatusBar barStyle="light-content" translucent backgroundColor="rgba(0,0,0,0)" />
              <NavigationContainer>
                <AuthStack />
              </NavigationContainer>
            </View>
          </PersistGate>
        </Provider>
      </PaperProvider>
    </QueryClientProvider>

  )
}

export default App

const styles = StyleSheet.create({})