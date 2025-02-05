import React from 'react'
import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Colors, Fonts } from '../constants';


export function BlueButton ({loading, disabled, name, onPress}) {

  return (
    <TouchableOpacity disabled={loading} style={{backgroundColor: Colors.DEFAULT_BLUE, width: '100%', height: 60, borderRadius: 10, justifyContent: 'center', }} onPress={onPress}>
      {
        loading ?
        <View style={{alignItems:'center', justifyContent:'center', flexDirection:'row', gap:10}}>
          <Text style={{fontFamily: Fonts.MEDIUM, color: 'white', fontSize: 14, textAlign: 'center'}}>
            Loading...
          </Text>
        </View>
        :
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center' , position: 'relative',}}>
            <Text style={{fontFamily: Fonts.MEDIUM, color: 'white', fontSize: 17, textAlign: 'center'}}>{name}</Text>
            <View style={{width: 30, height: 30, position: 'absolute', right: 20, backgroundColor: '#0088ff', borderWidth: 2.5, borderColor: 'white', borderRadius: 100, justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="arrowright" size={18} color="#fff" />
            </View>
        </View>
      }
    </TouchableOpacity>
  )
}