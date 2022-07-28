
import React, { createContext, useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Image } from 'react-native';

import { auth } from '../../firebase';

import SettingsComponent from '../components/settingsComponent';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function SettingsScreen({ navigation }) {
  const [email, setEmail] = React.useState(null);



  const settingsOptionsDef = [
    {
      title: "My Currency & Rewards", 
      subTitle: "Setup your FIAT and DAO allegiances", 
      onPress: (() => { 
        navigation.navigate("Wallet", { 
          screen: 'DAOcurrency', 
          params: { settingsOptions: settingsOptions },
        })})
    },
    {title: "Notifications", subTitle: null, icon: "ri-notification-line", onPress: () => {navigation.navigate("Notifications")}},
    {title: "Current account", subTitle: email, onPress: () => {navigation.navigate("Logout")}},
    {title: "Contact to display", subTitle: "All Contacts", onPress: () => {}},
    {title: "Sort By", subTitle: "First name", onPress: () => {}},
    {title: "Name Format", subTitle: "First name first", onPress: () => {}},
    {title: "Import", subTitle: null, onPress: () => {}},
    {title: "Export", subTitle: null, onPress: () => {}},
    {title: "Blocked Numbers", subTitle: null, onPress: () => {}},
    {title: "About", subTitle: null, onPress: () => {}},
  ];

  // console.log(settingsOptions);

  const [settingsOptions, setSettingsOptions] = React.useState("");

  // the getSettings async function
  const getSettings = async () => {
    // const user = await AsyncStorage.getItem("user");
    // setEmail(JSON.parse(user).email);
    let thisUser = auth.currentUser;

    console.log("THIS USER: ")
    console.log(thisUser);

    if(thisUser.email !== '') {
      setEmail(thisUser.email);

      // update react state for settings options
      setSettingsOptions(settingsOptionsDef);
    }
  }
  // on useEffect, to get the settings.
  useEffect(() => {
    getSettings()
  }, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => navigation.navigate("BanklessCC")} title="home" />
      ),
    });
  }, [navigation]);

  // this should be a stack view to contain each option page with auto back button, etc.

  const Stack = createNativeStackNavigator();
  /*
  <Stack.Navigator 
      initialRouteName="Settings"
      screenOptions={{
          headerShown: true,
      }}  >
      <Stack.Screen name="Settings">
        {(props) =>  <SettingsComponent {...props} settingsOptions={settingsOptions} navigation={navigation} />}
      </Stack.Screen>

  </Stack.Navigator>

  <View style={ styles.layout }>
      <SettingsComponent settingsOptions={settingsOptions} navigation={navigation} />
    </View>

  */

  return (
    
    <Stack.Navigator 
      initialRouteName="SettingsScreen"
      screenOptions={{
          headerShown: false,
      }}  >
      <Stack.Screen name="SettingsScreen">
        {(props) =>  <SettingsComponent {...props} settingsOptions={settingsOptionsDef} navigation={navigation} />}
      </Stack.Screen>
    { /* more stack screens here */ }

  </Stack.Navigator>
  );

}

export default SettingsScreen;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: "100%"
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
  hr: {
    width: "100%",
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  h1: {
    fontSize: 24
  },
  h2: {
    fontSize: 20,
    flex: 1
  },
  h3: {
    fontSize: 16,
    flex: 1
  },
  half: {
    flex: 1
  }
});