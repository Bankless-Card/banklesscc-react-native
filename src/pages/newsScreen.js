import React, { createContext, useContext, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Image } from 'react-native';

function NewsScreen({ route, navigation }) {
  // const setUser = useContext(AuthContext);
  /* 2. Get the param */
  const { itemId, otherParam } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20 }}>News Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Next News Story..."
        onPress={() =>
          navigation.push('News', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />

      <Button title="Go to Home" onPress={() => navigation.navigate('HomePage')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />   
    </View>
  );
}

export default NewsScreen;