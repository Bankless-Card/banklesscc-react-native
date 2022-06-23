import React, { createContext, useContext, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// pages for homeStack
import HomeScreen from '../pages/homeScreen';
import NewsScreen from '../pages/newsScreen';
import ProfileScreen from '../pages/profileScreen';
import CreatePostScreen from '../pages/createPostScreen';
import MyCardScreen from '../pages/myCardScreen';
import NotificationsScreen from '../pages/notifications';
import RewardsScreen from '../pages/rewardsScreen';

// import DrawerScreen from '../pages/drawerScreen';

// colors
const BANK_ORCHID = '#6D29FE';
const BANK_RED = '#D02128';   // primary red
const BANK_BLACK = '#111111';
const BANK_ASH = '#4F4F4F';
const BANK_ASH2 = '#313131';
const BANK_ASHL = '#A3A3A3';  // ash light
const BANK_WHITE = '#EEEEEE'; // off white

// components for homeStack
import LogoTitle from '../components/logoTitle';

function HomeStack() {
	const StackHome = createNativeStackNavigator();

  return (
    <StackHome.Navigator 
      initialRouteName="HomePage"
      screenOptions={{
        headerShown: false,
      }}  >
      <StackHome.Screen 
        name="HomePage" 
        component={HomeScreen} 
        options={{ 
          headerShown: false,
          title: 'BanklessCard',
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
        }} 
      />
      <StackHome.Screen 
        name="MyCard" 
        component={MyCardScreen} 
        options={({ navigation }) => ({
          headerShown: 'true',
          title: 'My Card',
          headerStyle: {
            backgroundColor: BANK_RED,
          },
          headerTintColor: BANK_WHITE,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => <Button title='Close' onPress={navigation.goBack} />,
        })}
      />

      <StackHome.Group
        screenOptions={({ navigation }) => ({
          presentation: 'modal',
        })}
      >
        {/* These could be modals */}
        <StackHome.Screen name="Notifications" component={NotificationsScreen} 
          options={() => ({
            headerShown: true,
            title: 'Notifications',
          })}

        />
        <StackHome.Screen name="Rewards" component={RewardsScreen}
          options={() => ({
            headerShown: true,
            title: 'Rewards',
            headerStyle: {
              backgroundColor: BANK_ORCHID,
            },
            headerTintColor: BANK_WHITE,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          })}
        />
      </StackHome.Group>

      <StackHome.Screen name="News" component={NewsScreen}
        options={{ headerTitle: (props) => <LogoTitle {...props}/> }} />
      <StackHome.Screen name="Profile" component={ProfileScreen} />
      {/*<StackHome.Screen name="DrawerTest" component={DrawerScreen} />*/}
      <StackHome.Screen name="CreatePost" component={CreatePostScreen} />
    </StackHome.Navigator>
  )
}

export default HomeStack;