import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from 'react-redux';
import { login } from '../redux/reducers/authReducers';
import { Colors, Fonts } from '../constants';
import Feather from 'react-native-vector-icons/Feather';
import { BlueButton } from '../common/ButtonLayout';
import { useNavigation } from '@react-navigation/native';
import { DatePickerModal } from 'react-native-paper-dates';

const TransactionScreen = () => {

  const navigation = useNavigation();


  const [date, setDate] = React.useState(undefined);
  const [open, setOpen] = React.useState(false);

  const onDismissSingle = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = React.useCallback(
    (params) => {
      setOpen(false);

      if (params.date) {
        // Format the date to YYYY-MM-DD and update state
        const formattedDate = params.date.toISOString().split('T')[0]; 
        setDate(formattedDate);
      }
    },
    [setOpen, setDate]
  );

  const validationSchema = yup.object({
    title: yup
        .string('⚠ Enter your Title')
        .required('⚠ Title is required'),
    price: yup
        .string('⚠ Enter your Price')
        .required('⚠ Price is required'), 
  });

   const { register, control, reset, handleSubmit, formState: { errors }, } = useForm({
          resolver: yupResolver(validationSchema),
        });

  const onSubmit = (data) => {  
    console.log("data", data)
  }

  return (
    <View>

      <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 80, marginBottom: 20}}>
        <Text style={{fontFamily: Fonts.MEDIUM, color: Colors.DEFAULT_BLACK, fontSize: 22,}}>Add Transactions</Text>
      </View>

      <View style={{marginTop: 10, marginLeft: 30, marginRight: 30, padding: 10}}>
               
          <View style={{flexDirection: 'row'}}>
              <Text style={styles.LabelText}>Title</Text>
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
                  keyboardType='default'
                  maxLength={100}
                  onChangeText={(e) =>  {
                    // console.log(e)
                    onChange(e)
                  //   updateFormData({ email: e })
                  }}
                />
            )}
            name="title"
          />

          {

          errors?.title  &&

          <View style={{marginTop: 5}}>
          <Text style={styles.err}>{errors?.title?.message}</Text>
          </View>

          }

      </View>

      <View style={{marginTop: 10, marginLeft: 30, marginRight: 30, padding: 10}}>
        
          <View style={{flexDirection: 'row'}}>
              <Text style={styles.LabelText}>Price</Text>
              <Text style={{fontFamily: Fonts.MEDIUM, color: Colors.DEFAULT_RED, fontSize: 17,}}>*</Text>
          </View>
          
          <Controller
            control={control}
            rules={{
                required: true,
            }}
            render={({field: {onChange, value}}) => (
                <TextInput
                  keyboardType='numeric'
                  style={styles.inputContainer}
                  onChangeText={(e) =>  {
                    // console.log(e)
                    onChange(e)
                  }}
                />
            )}
            name="price"
          />

          

          {

          errors?.price  &&

          <View style={{marginTop: 5}}>
              <Text style={styles.err}>{errors?.price?.message}</Text>
              
          </View>

          }

      </View>

      <View style={{marginTop: 10, marginLeft: 30, marginRight: 30, padding: 10}}>
        
          <View style={{flexDirection: 'row'}}>
              <Text style={styles.LabelText}>Date</Text>
              <Text style={{fontFamily: Fonts.MEDIUM, color: Colors.DEFAULT_RED, fontSize: 17,}}>*</Text>
          </View>

          <TouchableOpacity style={{backgroundColor: Colors.DEFAULT_BLUE, width: 150, height: 50, borderRadius: 10, justifyContent: 'center', alignItems: 'center'}} onPress={() => setOpen(true)} uppercase={false} mode="outlined">
                <Text style={{fontFamily: Fonts.MEDIUM, color: Colors.DEFAULT_WHITE, fontSize: 14}}>Select date</Text>
              </TouchableOpacity>
              <DatePickerModal
                mode="single"
                visible={open}
                onDismiss={onDismissSingle}
                date={date ? new Date(date) : undefined}
                onConfirm={onConfirmSingle}
              />
          
          <Controller
            control={control}
            rules={{
                required: true,
            }}
            render={({field: {onChange, value}}) => (
              <TextInput
                  style={styles.inputDateContainer}
                  defaultValue={date ? new Date(date) : undefined}
                  value={date ? new Date(date) : undefined}
                  editable={false}
                  
                />
            )}
            name="date"
          />


      </View>

      <View style={{ marginTop: 20, marginLeft: 30, marginRight: 30, padding: 10 }}>
          {/* <BlueButton name={"LOGIN"} onPress={handleSubmit(onSubmit)} loading={Login?.isLoading} /> */}
          <BlueButton name={"ADD"} onPress={handleSubmit(onSubmit)} />
      </View>
      
    </View>
  )
}

export default TransactionScreen

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

        inputDateContainer: {
          backgroundColor: Colors.BORDER,
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