import React, { createContext, useContext, useState, useReducer, useEffect, useMemo } from 'react';
import { Text, View, TextInput, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import * as SecureStore from 'expo-secure-store';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MyNavTabs from '../navs/myNavTabs';
// import LoginScreen from '../pages/loginScreen';

import LogoTitle from '../components/logoTitle';
import CustomDrawer from '../components/customDrawer';

// login
import AuthContext from '../components/AuthContext';

//login
import { auth } from '../../firebase';

import { colors } from '../components/constants';

// temp pages

import SettingsScreen from '../pages/settingsScreen';
import SavedAddressScreen from '../pages/savedAddressScreen';
import AboutUsScreen from '../pages/aboutScreen';
import HelpScreen from '../pages/helpScreen';

import NewLoginScreen from '../pages/newLoginScreen';

import Logout from '../pages/logoutScreen';
import Forgot from '../components/forgotButton';


function SplashScreen() {
  return (
    <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        style={{ width: 100, height: 100 }}
        source={require('../assets/img/bLogo.png')}
      />
    </View>
  );
}


// nav required
const Drawer = createDrawerNavigator();
// let isLoggedIn = false;

function MyDrawer() {

  const [isLoggedIn, setIsLoggedIn] = React.useState(0);
  console.log(isLoggedIn);

  const navigation = useNavigation(); 


      // listener for previously logged in
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user){
        console.log(Object.keys(user).length);

        setIsLoggedIn(true);
        // navigation.navigate("BanklessCC");
      } else {
        setIsLoggedIn(false);
        navigation.navigate("Login");
      }
    })

    return unsubscribe;
  }, []);

  console.log(isLoggedIn);    // false, 0 default

  if(isLoggedIn) {

    console.log("Logged in Drawer Return");

    return (
      <Drawer.Navigator 
        useLegacyImplementation
        initialRouteName="BanklessCC"
        screenOptions={({route}) => ({
          headerShown: true,
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
          headerStyle: {
            backgroundColor: colors.BANK_WHITE,
          },

        })} 
        // drawerContent={props => <CustomDrawer {...props} />}
      >
        <>
          {/*// <Drawer.Screen name="Login" component={NewLoginScreen} />
          // <Drawer.Screen 
          //     name="Forgot" 
          //     component={Forgot}
          //     options={({ navigation }) => ({
          //       presentation: 'modal',
          //       headerShown: 'true',
          //       headerStyle: {
          //         backgroundColor: colors.BANK_RED,
          //       },
          //       headerTintColor: colors.BANK_WHITE,
          //       headerTitleStyle: {
          //         fontWeight: 'bold',
          //       },
          //       headerLeft: () => 
          //         (<Button title='Close' onPress={navigation.goBack} />)
          //     })
          //   }
          // /> */}

          <Drawer.Screen 
            name="BanklessCC" 
            component={MyNavTabs} 
            options={({ navigation }) => ({
                headerShown: 'true',
                headerTitle: () => (<View><Text /></View> ),
              })} 
            />
          <Drawer.Screen name="Settings" component={SettingsScreen} />
          <Drawer.Screen name="Saved Addresses" component={SavedAddressScreen} />
          <Drawer.Screen name="About Us" component={AboutUsScreen} />
          <Drawer.Screen name="Help" component={HelpScreen} />
          <Drawer.Screen name="Logout" component={Logout} />

        </>


      </Drawer.Navigator>
    
    );
  } else {

    console.log("Non-logged in Drawer Return");

    return (

      <Drawer.Navigator 
        useLegacyImplementation
        initialRouteName="Login"
        screenOptions={({route}) => ({
          // headerShown: false
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
          headerStyle: {
            backgroundColor: colors.BANK_WHITE,
          },

        })} 
        // drawerContent={props => <CustomDrawer {...props} />}
      >
        <>
          <Drawer.Screen name="Login" component={NewLoginScreen} />
          <Drawer.Screen 
              name="Forgot" 
              component={Forgot}
              options={({ navigation }) => ({
                presentation: 'modal',
                headerShown: 'true',
                headerStyle: {
                  backgroundColor: colors.BANK_RED,
                },
                headerTintColor: colors.BANK_WHITE,
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerLeft: () => 
                  (<Button title='Close' onPress={navigation.goBack} />)
              })
            }
          />

          <Drawer.Screen name="BanklessCC" component={MyNavTabs} 
            options={{ headerTitle: () => <View><Text /></View> }} />
          {/*<Drawer.Screen name="Settings" component={SettingsScreen} />
          <Drawer.Screen name="Saved Addresses" component={SavedAddressScreen} />
          <Drawer.Screen name="About Us" component={AboutUsScreen} />
          <Drawer.Screen name="Help" component={HelpScreen} />
          <Drawer.Screen name="Logout" component={Logout} />*/}


        </>


      </Drawer.Navigator>
    
    );
  }

  
};

// OLD BUT MAYBE STILL THE BEST WAY TO GATE THE AUTH PAGES
function NewDrawer() {
  return (
      <Drawer.Navigator 
        useLegacyImplementation
        initialRouteName="Login"
        screenOptions={({route}) => ({
          // headerShown: false
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },

        })} 
        // drawerContent={props => <CustomDrawer {...props} />}
      >

        <>
          {/*<Drawer.Screen name="Login" component={LoginScreen} />*/}
          <Drawer.Screen name="Login" component={NewLoginScreen} />
          {/*<Drawer.Screen name="Sign Up" component={SignupScreen} />*/}
          <Drawer.Screen 
            name="Forgot" 
            component={Forgot}
            options={({ navigation }) => ({
              presentation: 'modal',
              headerShown: 'true',
              headerStyle: {
                backgroundColor: BANK_RED,
              },
              headerTintColor: BANK_WHITE,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerLeft: () => 
                (<Button title='Close' onPress={navigation.goBack} />)
            })
          }
        />
        <Drawer.Screen name="BanklessCC" component={MyNavTabs}
            options={{
              headerRight: () => (<View style={{ marginRight: 10 }}><LogoTitle /></View>),
            }} />
          
        </>

      </Drawer.Navigator>
    
  );
};


function DrawerNav() {

  console.log(auth.currentUser?.email);

  return (
         <MyDrawer />
  );
};

export default DrawerNav;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BANK_BLACK,
    //background: "linear-gradient(#e66465, #9198e5)",
    backgroundImage: `linear-gradient(to right, rgba(0, 224, 255, 1), rgba(0, 133, 255, 1))`,
    alignItems: 'center',
    justifyContent: 'center',
   },
 
   title :{
    fontSize: 32,
    color: colors.BANK_RED,
    fontWeight: 'bold',
    marginBottom: 30,

  },
  inputView: {
   backgroundColor: colors.BANK_ASHL,
   borderRadius: 30,
   width: "70%",
   height: 45,
   marginBottom: 20,
   alignItems: "center",
 },
 
 TextInput: {
   height: 50,
   flex: 1,
   padding: 10,
   marginLeft: 20,
 },
 forgot_button: {
  height: 30,
  marginBottom: 30,
  color: colors.BANK_WHITE
 },
 loginBtn: {
   width:"80%",
   borderRadius:25,
   height:50,
   alignItems:"center",
   justifyContent:"center",
   marginTop:40,
   backgroundColor: colors.BANK_ORCHID,
 },
 loginText: {
  fontSize: 20,
  color: colors.BANK_WHITE
 }
     
});