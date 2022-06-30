
import React, { createContext, useContext, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Image } from 'react-native';

function FundingScreen({ navigation }) {
  const [count, setCount] = React.useState(0);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount(c => c + 1)} title="Update count" />
      ),
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize:32 }}>This is Charts Screen</Text>
      <Text>Count: {count}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default FundingScreen;