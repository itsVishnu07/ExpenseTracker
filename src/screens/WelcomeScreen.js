import React, {useEffect} from 'react'
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import { Colors, Fonts } from '../constants'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WelcomeScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {

    Splash();

  }, []);

  const Splash = () => {

    setTimeout(() => {

      AsyncStorage.getItem('token').then((value) => {
        
        if (value) {
          
          navigation.navigate('home')

        }

        else{

          navigation.navigate('login')

        }

      });

    }, 2000);

  }

  const logo = require('../../images/rupee.png');

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
      {/* <StatusBar barStyle={'light-content'} backgroundColor={Colors.DEFAULT_GREY} /> */}
      <View style={{alignItems: 'center', position: 'absolute', top: 180}}>
        <Image source={logo} style={{width: 100, height: 120}} />
      </View>
      <Text style={styles.header}>Welcome To Expense Tracker</Text>
      <Text style={styles.content}>our complete Budget management solution.</Text>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    header: {
        fontSize: 22,
        fontFamily: Fonts.BOLD,
        textAlign: 'center',
        color: Colors.DEFAULT_BLACK
    },
    content: {
        fontSize: 14,
        fontFamily: Fonts.LIGHT,
        textAlign: 'center',
        // marginTop: 20,
        color: Colors.DEFAULT_BLACK
    }
})