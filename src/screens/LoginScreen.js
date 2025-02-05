import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TextInput, Pressable, BackHandler, ToastAndroid, Alert, Image } from 'react-native'
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from 'react-redux';
import { login } from '../redux/reducers/authReducers';
import { Colors, Fonts } from '../constants';
import Feather from 'react-native-vector-icons/Feather';
import { BlueButton } from '../common/ButtonLayout';
import { useIsFocused, useNavigation } from '@react-navigation/native';

const LoginScreen = () => {

    const navigation = useNavigation();

    const validationSchema = yup.object({
        email: yup
            .string('⚠ Enter your email')
            .email('⚠ Enter a valid email')
            .required('⚠ Email is required'),
        password: yup
            .string('⚠ Enter your password')
            .required('⚠ Password is required'), 
      });

    const [mail, setMail] = useState('');

    const [password, setPassword] = useState('');

    const [show, setShow] = useState(true);

    const [exitApp, setExitApp] = useState(0);

    const isFocused = useIsFocused();

    const dispatch = useDispatch()


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

    const showPwd = () => {
        setShow(!show);
    }

    const { register, control, reset, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(validationSchema),
      });

    //   const Login = AuthQueries.useLoginMutation(
    //     (response) => {
    //         if(response?.message === "Success"){
    //             dispatch(login(response.data))
    //         }

    //         if(response?.message === "Username or password is incorrect."){
    //             setOpen(true)
    //         }
    //     }
    // )

      const onSubmit = (data) => {
        // Login.mutateAsync(data)
        console.log("data", data)
        navigation.navigate('home')
    }

    const logo = require('../../images/rupee.png');

    return (
        <View style={{marginTop: 120}}>

            <View style={{alignItems: 'center'}}>
                <Image source={logo} style={{width: 120, height: 120}} />
            </View>

            <View style={{marginTop: 10, marginLeft: 30, marginRight: 30, padding: 10}}>
               
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.LabelText}>Email</Text>
                    <Text style={{fontFamily: Fonts.MEDIUM, color: Colors.DEFAULT_RED, fontSize: 17,}}>*</Text>
                </View>
                
                <Controller
                  control={control}
                  rules={{
                      required: true,
                  }}
                  render={({field: {onChange, value}}) => (
                      <TextInput
                        style={styles.inputContainer}
                        keyboardType='email-address'
                        maxLength={100}
                        onChangeText={(e) =>  {
                          // console.log(e)
                          onChange(e)
                        //   updateFormData({ email: e })
                        }}
                      />
                  )}
                  name="email"
                />

                {

                errors?.email  &&

                <View style={{marginTop: 5}}>
                <Text style={styles.err}>{errors?.email?.message}</Text>
                </View>

                }

            </View>

            <View style={{marginTop: 10, marginLeft: 30, marginRight: 30, padding: 10}}>
               
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.LabelText}>Password</Text>
                    <Text style={{fontFamily: Fonts.MEDIUM, color: Colors.DEFAULT_RED, fontSize: 17,}}>*</Text>
                </View>
                
                <Controller
                  control={control}
                  rules={{
                      required: true,
                  }}
                  render={({field: {onChange, value}}) => (
                      <TextInput
                        secureTextEntry={show}
                        style={styles.inputContainer}
                        onChangeText={(e) =>  {
                          // console.log(e)
                          onChange(e)
                        }}
                      />
                  )}
                  name="password"
                />

                <View style={{ position: 'absolute', right: 30, top: 57 }}>
                    <Pressable onPress={showPwd}>
                        <Feather name={show ? 'eye-off' : 'eye'} color='#000' size={22} />
                    </Pressable>
                </View>

                {

                errors?.password  &&

                <View style={{marginTop: 5}}>
                    <Text style={styles.err}>{errors?.password?.message}</Text>
                    
                </View>

                }

            </View>

            <View style={{ marginTop: 20, marginLeft: 30, marginRight: 30, padding: 10 }}>
                {/* <BlueButton name={"LOGIN"} onPress={handleSubmit(onSubmit)} loading={Login?.isLoading} /> */}
                <BlueButton name={"LOGIN"} onPress={handleSubmit(onSubmit)} />
            </View>

        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({

    LabelText: {
        fontFamily: Fonts.MEDIUM,
        fontSize: 14,
        color: Colors.DEFAULT_BLACK
    },

    inputContainer: {
        borderWidth: 1,
        paddingHorizontal: 30,
        marginTop: 5,
        borderColor: Colors.BORDER,
        borderRadius: 30,
        color:Colors.DEFAULT_BLACK,
        fontFamily: Fonts.MEDIUM,
        fontSize:14,
        width: '100%',
        height:50,
      },



    err: {
        color: Colors.DEFAULT_RED,
        fontFamily: Fonts.MEDIUM,
        fontSize: 14,
    },

})