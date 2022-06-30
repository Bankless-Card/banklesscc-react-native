
import React, { createContext, useContext, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Image } from 'react-native';

import TopTab from '../navs/topTabNav';
// import Icon from 'react-native-remix-icon';  

import {colors} from '../components/constants';
import IconButton from '../components/iconButton';

function VaultScreen({ navigation }) {
  const [count, setCount] = React.useState(0);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount(c => c + 1)} title="Update count" />
      ),
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
      <View style={{width: '100%', alignItems: 'flex-end'}}>
        <IconButton name="ri-line-chart-fill" size="20" navTarget="Charts" />
      </View>

      <TopTab tab1="WalletScreen" label1="Wallet" tab2="Vault" label2="Vault" active="tab2" />
      <Text style={{ fontSize:32 }}>This is VaultScreen</Text>
      <Text>Count: {count}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );

  // return (
  //   <View style={ styles.layout }>
  //     <Text>Profile screen</Text>
  //     <Button title="Go back" onPress={() => navigation.goBack()} />
  //   </View>
  // );
}

export default VaultScreen;