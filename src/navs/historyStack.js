import React, { createContext, useContext, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// pages for HistoryStack
import HistoryCashScreen from '../pages/historyCashScreen';
import HistoryCryptoScreen from '../pages/historyCryptoScreen';
// import CryptoTrxScreen from '../pages/cryptoTrxScreen';
// import ChartScreen from '../pages/chartScreen';

// components for TransactStack (shared)
import LogoTitle from '../components/logoTitle';

function TransactStack() {
	const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator 
      initialRouteName="HistoryCrypto"
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: '#A3A3A3',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}  >
      <Stack.Screen 
        name="HistoryCash" 
        component={HistoryCashScreen} 
        options={{ 
          title: 'Cash History',
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
        }} 
      />
      <Stack.Screen name="HistoryCrypto" component={HistoryCryptoScreen} 
        options={{ headerTitle: (props) => <LogoTitle {...props}/> }} />
      {/*<Stack.Screen name="Charts" component={ChartScreen} />*/}
    </Stack.Navigator>
  )
}

export default TransactStack;