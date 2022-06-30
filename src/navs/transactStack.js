import React, { createContext, useContext, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// pages for TransactStack
import CashTrxScreen from '../pages/cashTrxScreen';
import CryptoTrxScreen from '../pages/cryptoTrxScreen';
import FundingScreen from '../pages/fundingScreen';

// components for TransactStack (shared)
import LogoTitle from '../components/logoTitle';

function TransactStack() {
	const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator 
      initialRouteName="CashTrx"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#EEEEEE',
        },
        headerTintColor: '#313131',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}  >
      <Stack.Screen 
        name="CashTrx" 
        component={CashTrxScreen} 
        options={{ 
          headerShown: false,
        }} 
      />
      <Stack.Screen name="Crypto" component={CryptoTrxScreen} 
        options={{
          headerShown: false,
        }}
      />
      <Stack.Group
        screenOptions={({ navigation }) => ({
          presentation: 'modal',
        })}
      >
        <Stack.Screen name="Funding" component={FundingScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export default TransactStack;