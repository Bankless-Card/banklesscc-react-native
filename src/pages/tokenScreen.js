import React, { createContext, useContext, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Image } from 'react-native';

function TokenScreen({ route, navigation }) {
  // const setUser = useContext(AuthContext);
  /* 2. Get the param */
  const { img, itemId, otherParam, moreParam, really } = route.params;

  console.log(route.params);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20 }}>Token Screen</Text>
      <Text>image: {JSON.stringify(img)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Text>moreParam: {JSON.stringify(moreParam)}</Text>
      <Text>really: {JSON.stringify(really)}</Text>
      <Button
        title="Next Token in Portfolio"
        onPress={() =>
          navigation.push('Token', {
            img: 'next image',
          })
        }
      />

      <Button title="Go to Wallet" onPress={() => navigation.navigate('WalletScreen')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />   
    </View>
  );
}

export default TokenScreen;