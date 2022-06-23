import * as React from 'react';
import { Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MyNavTabs from '../navs/myNavTabs';

function Feed() {
  return (
    <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function Login() {
  return (
    <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator 
      useLegacyImplementation
      initialRouteName="Feed"
      screenOptions={({route}) => ({
        // headerShown: false
      })}
    >
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="NavTabs" component={MyNavTabs} />
    </Drawer.Navigator>
  );
};

function DrawerNav() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};

export default DrawerNav;