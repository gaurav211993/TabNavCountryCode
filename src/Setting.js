

import React,{useState,useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  colors
} from 'react-native'
import PhoneInput from 'react-native-phone-number-input'
// import { useState } from 'react';
// import { useRef } from 'react';


function Setting () {
    const [value, setValue] = useState("");
    const [valid, setValid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const phoneInput = useRef<PhoneInput>(null);

    console.log ('phone No =======',value)

    return (
   <View style={{flex:1,justifyContent:'center',alignItems:'center'}}  >
      
       <PhoneInput 
    //  ref="phone"
    //      ref={phoneInput}
           defaultValue={value}
             defaultCode="IN"
            onChangeFormattedText={(text) => {
              setValue(text);
            }}
            placeholder={'Enter Your Phoen No.'}
            containerStyle={{borderRadius:30,
            fontSize:18,width:'100%'
      }}
        textContainerStyle={{
            borderTopEndRadius:30,borderBottomRightRadius:30,
        }}
        flagButtonStyle={{backgroundColor:'whitesmoke',borderRadius:30,}}
        
            withDarkTheme
            withShadow
            autoFocus
       />
   </View>
  );
};

const styles = StyleSheet.create({
  
});

export default Setting;
