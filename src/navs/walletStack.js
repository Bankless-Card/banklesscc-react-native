import React, { createContext, useContext, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// pages for walletStack
import WalletScreen from '../pages/walletScreen';
import VaultScreen from '../pages/vaultScreen';
import ChartScreen from '../pages/chartScreen';
import CurrencyDAOScreen from '../pages/currencyDAOScreen';
import TokenScreen from '../pages/tokenScreen';

// components for walletStack (shared)
import LogoTitle from '../components/logoTitle';

function WalletStack() {
	const StackHome = createNativeStackNavigator();

  return (
    <StackHome.Navigator 
      initialRouteName="WalletScreen"
      >
      <StackHome.Screen 
        name="WalletScreen" 
        component={WalletScreen} 
        options={{ 
          headerShown: false,
        }} 
      />
      <StackHome.Screen name="Vault" component={VaultScreen} 
        options={{ headerShown: false }} />
        <StackHome.Group screenOptions={{ presentation: 'modal' }}>
          <StackHome.Screen name="DAOcurrency" component={CurrencyDAOScreen} />
          <StackHome.Screen name="Charts" component={ChartScreen} />
          <StackHome.Screen name="Token" component={TokenScreen}
            options={{ headerTitle: (props) => <LogoTitle {...props}/> }} />
        </StackHome.Group>
    </StackHome.Navigator>
  )
}

export default WalletStack;