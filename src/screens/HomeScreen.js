import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, StatusBar, BackHandler, ToastAndroid, } from 'react-native'
import { Avatar, Button, Card, } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import Delete from 'react-native-vector-icons/MaterialIcons';

const LeftContent = props => <Avatar.Icon {...props} icon="food" />
const travel = props => <Avatar.Icon {...props} icon="car" />

import { useNavigation, useIsFocused } from '@react-navigation/native';
import { Linking } from 'react-native';
import { Colors, Fonts } from '../constants';
import { date } from 'yup';



const feeds = [
    {
      id: 1,
      title: 'Food Expenses',
      date: '05-05-2025',
      price: 300,
    },
    {
      id: 2,
      title: 'Travel Expenses',
      date: '05-05-2025',
      price: 1200,
    },
    {
      id: 3,
      title: 'Study Expenses',
      date: '05-05-2025',
      price: 15000,
    },
    {
      id: 4,
      title: 'Mobile Recharge',
      date: '05-05-2025',
      price: 349,
    },
    {
      id: 5,
      title: 'Wifi Recharge',
      date: '05-05-2025',
      price: 750,
    },
    {
      id: 6,
      title: 'Food Expenses',
      date: '05-05-2025',
      price: 200,
    },
    {
      id: 7,
      title: 'Food Expenses',
      date: '05-05-2025',
      price: 200,
    },
    {
      id: 8,
      title: 'Food Expenses',
      date: '05-05-2025',
      price: 200,
    },
    
  ];

  const total = feeds.reduce((a, b) => a + b.price, 0);





const HomeScreen = () => {

  const [sum, setSum] = useState(total);

  const [exitApp, setExitApp] = useState(0);
  
  const isFocused = useIsFocused();

  const backAction = () => {
    
          setTimeout(() => {
      
            setExitApp(0);
      
          }, 2000); // 2 seconds to tap second-time
      
          if (exitApp === 0) {
      
            setExitApp(exitApp + 1);
      
            ToastAndroid.show("Press again to exit", ToastAndroid.SHORT);
      
          } else if (exitApp === 1) {
      
            BackHandler.exitApp();
      
          }
      
          return true;
      
        };
      
        useEffect(() => {
      
          if (isFocused) {
      
            const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction,);
      
            return () => backHandler.remove();
      
          }
      
        });


  return (
    
    <View style={{ flex: 1, backgroundColor: Colors.DEFAULT_WHITE, }}>

      <StatusBar hidden />

      <View style={{marginTop: 0}}>

        <View style={{ margin: 20, borderRadius: 10,   padding: 20, backgroundColor: Colors.DEFAULT_BLUE }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{ fontSize: 17, fontFamily: Fonts.BOLD , color: Colors.DEFAULT_WHITE}}>Total Expenses</Text>
            <Text style={{ fontSize: 17, fontFamily: Fonts.BOLD , color: Colors.DEFAULT_WHITE}}>₹ {sum}</Text>
          </View>
        </View>

      </View>

      <View style={{ flex: 1, }}>

        <FlatList
          data={feeds}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingBottom: 20 }}
          renderItem={({ item }) => {
            // const formattedDate = new Date(item.pubDate).toDateString();
            return (
            <View style={{ padding: 20  }}>
              <Card style={{padding: 16, backgroundColor: '#ECC853FF'}}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={{ fontSize: 17, fontFamily: Fonts.BOLD , color: Colors.DEFAULT_BLACK }}>{item.title}</Text>
                  <Text style={{ fontSize: 17, fontFamily: Fonts.BOLD , color: Colors.DEFAULT_BLACK }}> ₹ {item.price}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={{ fontSize: 13, fontFamily: Fonts.REGULAR , color: Colors.DEFAULT_BLACK, marginTop: 10, textAlign: 'justify'  }}>{item?.date}</Text>
                  <TouchableOpacity style={{marginTop: 10}}>
                    <Delete name="delete" size={22} color={Colors.DEFAULT_BLACK} />
                  </TouchableOpacity>
                </View>
                
                {/* <Text style={{ fontSize: 13, fontFamily: Fonts.REGULAR , color: 'blue', marginTop: 10, }} onPress={() => Linking.openURL(item.id)}>{item.id}</Text> */}
                <View style={{justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row'}}>
                  {/* <Text style={{ fontSize: 14, fontFamily: Fonts.MEDIUM , color: Colors.DEFAULT_BLACK, marginTop: 5,  }}>{formattedDate}</Text> */}
                  
                </View>
              </Card>
            </View>
          )}}
        />

      </View>
      
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})