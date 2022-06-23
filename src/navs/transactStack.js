import React, { createContext, useContext, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// pages for TransactStack
import CashTrxScreen from '../pages/cashTrxScreen';
import CryptoTrxScreen from '../pages/cryptoTrxScreen';
// import ChartScreen from '../pages/chartScreen';

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
          title: 'Cash',
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
        }} 
      />
      <Stack.Screen name="Crypto" component={CryptoTrxScreen} 
        options={{ headerTitle: (props) => <LogoTitle {...props}/> }} />
      {/*<Stack.Screen name="Charts" component={ChartScreen} />*/}
    </Stack.Navigator>
  )
}

export default TransactStack;