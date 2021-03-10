

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
// import { CallingCodePicker } from '@digieggs/rn-country-code-picker';
import Home from './src/Home';
import Setting from './src/Setting';
import Job from './src/Job';
import Profile from './src/Profile';

import Svg,{Path} from 'react-native-svg';

const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({accessibilityState,children,onPress}) => {
  var isSelected = accessibilityState.selected
  
  if(isSelected){
    return( 
   <View style={{flex:1,alignItems:'center'}}>
     <View style={{flexDirection:'row',position:'absolute',top:0}}>
<View style={{flex:1,backgroundColor:'blue'}}></View>
<Svg
 width={75}
height={61}
viewBox="0 0 75 61"
>
<Path
d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
fill={'blue'}
/>

</Svg>
<View style={{flex:1,backgroundColor:'blue'}}></View>
     </View>
<TouchableOpacity 
style={{
  top: -22.5,
  justifyContent:'center',
  alignItems:'center',
  width:50,
  height:50,
  borderRadius:25,
  backgroundColor:'blue'

  }}
  onPress={onPress}
>
{children}
</TouchableOpacity>
   </View>
    )
  }else{
    return(
     <TouchableOpacity
     style={{
       flex:1,
       height:60,
       backgroundColor:'blue'
     }}
     activeOpacity={1}
     onPress={onPress}
     >
{children}
     </TouchableOpacity>
    )
  }
}
const App = () => {
 
  // const [selectedCallingCode, setSelectedCallingCode] = useState('');
  return (
    <NavigationContainer>
  <Tab.Navigator 
  tabBarOptions={{
    showLabel:false,
  style:{
    borderTopWidth:0,
  backgroundColor:'transparent',
     elevation:0
  }
  }}>
      <Tab.Screen  name="Home" component={Home} 
      options={{
        tabBarIcon:({size,color}) =>(
        <AntDesign
        name="home"
        resizeMode="contain"
       size={25}
        color='red'
      
        />),
        tabBarButton:(props) =>(
          <TabBarCustomButton
          {...props}
          />
        )
      }}
      />
      <Tab.Screen name="Setting" component={Setting}
      options={{
        tabBarIcon:({size,color}) =>(
        <AntDesign
        name="setting"
        size={25}
        color='red'
        />),
        tabBarButton:(props) =>(
          <TabBarCustomButton
          {...props}
          />
        )
      }}
      />
      <Tab.Screen name="Job" component={Job} 
       options={{
        tabBarIcon:({size,color}) =>(
        <AntDesign
        name="adduser"
        size={25}
        color='red'
        />),
        tabBarButton:(props) =>(
          <TabBarCustomButton
          {...props}
          />
        )
      }}
      />
      <Tab.Screen name="Profile" component={Profile}
      
      options={{
        tabBarIcon:({size,color}) =>(
        <AntDesign
        name="profile"
        size={25}
        color='red'
        />),
        tabBarButton:(props) =>(
          <TabBarCustomButton
          {...props}
          />
        )
      }}
      />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
 {/* <CallingCodePicker /> */}
 {/* <Home/> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
