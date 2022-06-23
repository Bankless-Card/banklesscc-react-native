import React, { createContext, useContext, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// pages for walletStack
import WalletScreen from '../pages/walletScreen';
import VaultScreen from '../pages/vaultScreen';
import ChartScreen from '../pages/chartScreen';

// components for walletStack (shared)
import LogoTitle from '../components/logoTitle';

function WalletStack() {
	const StackHome = createNativeStackNavigator();

  return (
    <StackHome.Navigator 
      initialRouteName="WalletPage"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#6D29FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}  >
      <StackHome.Screen 
        name="WalletPage" 
        component={WalletScreen} 
        options={{ 
          title: 'Wallet',
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
        }} 
      />
      <StackHome.Screen name="Vault" component={VaultScreen} 
        options={{ headerTitle: (props) => <LogoTitle {...props}/> }} />
      <StackHome.Screen name="Charts" component={ChartScreen} />
    </StackHome.Navigator>
  )
}

export default WalletStack;