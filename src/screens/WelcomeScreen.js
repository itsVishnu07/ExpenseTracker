import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import WhiteBox from '../common/WhiteBox'
import { Colors, Fonts } from '../constants'

const WelcomeScreen = () => {

//   const logo = require('../../images/Logo.svg');

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'light-content'} backgroundColor={Colors.DEFAULT_GREY} />
      <Text style={styles.header}>Welcome To Expense Tracker</Text>
      <Text style={styles.content}>our complete Budget management solution.</Text>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    header: {
        fontSize: 24,
        fontFamily: Fonts.BOLD,
        textAlign: 'center',
        marginTop: 110,
        color: Colors.DEFAULT_BLACK
    },
    content: {
        fontSize: 14,
        fontFamily: Fonts.LIGHT,
        textAlign: 'center',
        marginTop: 20,
        color: Colors.DEFAULT_BLACK
    }
})