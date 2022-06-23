import 'react-native-gesture-handler';    // first on purpose for drawer and touch jestures
import React, { createContext, useContext, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';    // is stack needed here?
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';       // for main nav
// import { createDrawerNavigator } from '@react-navigation/drawer';               // for menu drawer

// using remix icons
// import { RiHomeLine } from "react-icons/ri";
import Icon from 'react-native-remix-icon';

//navs (maybe obsoleted on this page)
// import HomeStack from './src/navs/homeStack';
// import WalletStack from './src/navs/walletStack';
// import TransactStack from './src/navs/transactStack';
//import HistoryStack from './src/navs/historyStack';

// real final entry for app
import DrawerNav from './src/navs/drawerNav';
// testing tab Component integration
// import MyNavTabs from './src/navs/myNavTabs';

//drawer pages 
// import HomeScreen from './src/pages/homeScreen';
// import NotificationsScreen from './src/pages/notifications';


// user auth
export const AuthContext = createContext({
  hasUser: false,
  setUser: () => {},
});

// colors
const BANK_ORCHID = '#6D29FE';
const BANK_RED = '#D02128';   // primary red
const BANK_BLACK = '#111111';
const BANK_ASH = '#4F4F4F';
const BANK_ASH2 = '#313131';
const BANK_ASHL = '#A3A3A3';  // ash light
const BANK_WHITE = '#EEEEEE'; // off white

// import { BANK_ORCHID, BANK_RED, BANK_BLACK, BANK_ASH, BANK_ASH2, BANK_ASHL, BANK_WHITE } from './src/components/constants';

// Navigators (now are imported)
// const Tab = createBottomTabNavigator();

// function MyTabsHome( route,navigation ) {
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       screenOptions={({ route }) => ({
//         headerShown: false,
//         tabBarActiveTintColor: BANK_RED,
//         tabBarInactiveTintColor: BANK_ASH,
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconSrc;

//           if (route.name === 'Home') {
//             iconSrc = 'ri-home-line';
//           } else if (route.name === 'Wallet') {
//             iconSrc = 'ri-wallet-line';
//             // color = focused ? BANK_RED : BANK_ASH
//           } else if (route.name === 'Transact') {
//             iconSrc = 'ri-exchange-dollar-line';
//             // color = focused ? BANK_RED : BANK_ASH
//           } else if (route.name === 'History') {
//             iconSrc = 'ri-bank-card-line';
//           }

//           color = focused ? BANK_RED : BANK_ASH;

//           // You can return any component that you like here!
//           return <Icon name={ iconSrc } color={ color } />;
//         },

        
//       })}
//     >
//       <Tab.Screen 
//         name="Home" 
//         component={HomeStack} 
//         options={{

//         }} 
//         />
//       <Tab.Screen name="Wallet" component={WalletStack} options={{
//               // tabBarIcon: () => (<Icon name="ri-wallet-line" size="25" />),
//         }} />
//       <Tab.Screen name="Transact" component={TransactStack} 
//         options={{ 
//           tabBarBadge: 3,
//           // tabBarIcon: () => (<Icon name="ri-exchange-dollar-line" size="25" />),
//         }} />
//       <Tab.Screen name="History" component={HistoryStack} options={{
//         // tabBarIcon: () => (<Icon name="ri-bank-card-line" size="25" />),
//       }} />
//     </Tab.Navigator>
//   );
// }

/*

<DrawerNav />
<NavigationContainer>
        <MyTabsHome />
      </NavigationContainer>
      
*/

function App() {
  return (
      <DrawerNav />
  );
}

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

