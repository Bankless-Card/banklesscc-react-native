import React, { createContext, useContext, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';       // for main nav

// using remix icons
import Icon from 'react-native-remix-icon';

import HomeStack from '../navs/homeStack';
import WalletStack from '../navs/walletStack';
import TransactStack from '../navs/transactStack';
import HistoryStack from '../navs/historyStack';

// colors
import { colors } from '../components/constants';

// const BANK_ORCHID = '#6D29FE';
// const BANK_RED = '#D02128';   // primary red
// const BANK_BLACK = '#111111';
// const BANK_ASH = '#4F4F4F';
// const BANK_ASH2 = '#313131';
// const BANK_ASHL = '#A3A3A3';  // ash light
// const BANK_WHITE = '#EEEEEE'; // off white


const Tab = createBottomTabNavigator();

function MyTabsHome( route,navigation ) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        // tabBarActiveBackgroundColor: 'black',
        tabBarStyle: { position: 'absolute' },
        tabBarBackground: () => (
          <View style={{ backgroundColor: 'blue' }} />
        ),
        tabBarActiveTintColor: colors.BANK_RED,
        tabBarInactiveTintColor: colors.BANK_ASH,
        tabBarIcon: ({ focused, color, size }) => {
          let iconSrc;

          if (route.name === 'Home') {
            iconSrc = 'ri-home-line';
          } else if (route.name === 'Wallet') {
            iconSrc = 'ri-wallet-line';
            // color = focused ? BANK_RED : BANK_ASH
          } else if (route.name === 'Transact') {
            iconSrc = 'ri-exchange-dollar-line';
            // color = focused ? BANK_RED : BANK_ASH
          } else if (route.name === 'History') {
            iconSrc = 'ri-bank-card-line';
          }

          color = focused ? colors.BANK_RED : colors.BANK_ASH;

          // You can return any component that you like here!
          return <Icon name={ iconSrc } color={ color } />;
        },

        
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeStack} 
        options={{

        }} 
        />
      <Tab.Screen name="Wallet" component={WalletStack} options={{
              // tabBarIcon: () => (<Icon name="ri-wallet-line" size="25" />),
        }} />
      <Tab.Screen name="Transact" component={TransactStack} 
        options={{ 
          tabBarBadge: 3,
          // tabBarIcon: () => (<Icon name="ri-exchange-dollar-line" size="25" />),
        }} />
      <Tab.Screen name="History" component={HistoryStack} options={{
        // tabBarIcon: () => (<Icon name="ri-bank-card-line" size="25" />),
      }} />
    </Tab.Navigator>
  );
}

export default MyTabsHome;