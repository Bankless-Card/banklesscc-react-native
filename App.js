import 'react-native-gesture-handler';    // first on purpose for drawer and touch jestures
import React, { createContext, useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Image } from 'react-native';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';       // for main nav

// using remix icons
import Icon from 'react-native-remix-icon';

// using custom fonts
import * as Font from 'expo-font';

//navs (maybe obsoleted on this page)
// import HomeStack from './src/navs/homeStack';
// import WalletStack from './src/navs/walletStack';
// import TransactStack from './src/navs/transactStack';
//import HistoryStack from './src/navs/historyStack';

//login
import { auth } from './firebase';

import NewLoginScreen from './src/pages/newLoginScreen';
import Forgot from './src/components/forgotButton';

import Logout from './src/pages/logoutScreen';

// real final entry for app
import DrawerNav from './src/navs/drawerNav';
// testing tab Component integration
import MyNavTabs from './src/navs/myNavTabs';
import LogoTitle from './src/components/logoTitle';

// import AuthContext from './src/components/AuthContext';


// colors
const BANK_ORCHID = '#6D29FE';
const BANK_RED = '#D02128';   // primary red
const BANK_BLACK = '#111111';
const BANK_ASH = '#4F4F4F';
const BANK_ASH2 = '#313131';
const BANK_ASHL = '#A3A3A3';  // ash light
const BANK_WHITE = '#EEEEEE'; // off white


// nav required
const Drawer = createDrawerNavigator();

function NewDrawer() {
  return (
    <NavigationContainer>
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
          <Drawer.Screen name="Login" component={NewLoginScreen} />
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
          

        <Drawer.Screen name="Logout" component={Logout} />
        </>

      </Drawer.Navigator>
    </NavigationContainer>
    
  );
};

//drawer pages 
// import HomeScreen from './src/pages/homeScreen';
// import NotificationsScreen from './src/pages/notifications';


// user auth
// export const AuthContext = createContext({
//   hasUser: false,
//   setUser: () => {},
// });

function App() {

  const [fontsLoaded, setFontsLoaded] = React.useState(0);

  // load custom fonts
  Font.loadAsync({
    SpaceGroteskBold: require('./src/assets/fonts/SpaceGrotesk-Bold.ttf'),
    SpaceGroteskLight: require('./src/assets/fonts/SpaceGrotesk-Light.ttf'),
    SpaceGroteskRegular: require('./src/assets/fonts/SpaceGrotesk-Regular.ttf'),
  });

  console.log(auth.currentUser);
  let thisUser = auth.currentUser;
  let isLoggedIn = false;

  // const navigation = useNavigation(); 

  return (
  
      <NavigationContainer>
        <DrawerNav />
      </NavigationContainer>

  );
}


  // const navigation = useNavigation(); 

  // return (

  //   { if(thisUser.length > 0 ) ? (console.log("Yes")) : (console.log("No")) }

  //   // <DrawerNav />
  //   <NewDrawer />

  //   // thisUser !== null ? ( 
  //   //   <DrawerNav />
  //   //   ):(
  //   //   <NewDrawer />
  //   //   )

  // );


export default App;



const styles = StyleSheet.create({
  layout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
  tabIcon: {
    width: 20,
    height: 20,
  }
});

