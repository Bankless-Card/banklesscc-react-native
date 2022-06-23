
import React, { createContext, useContext, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Image } from 'react-native';

// import {styles} from './homeScreen';

function HistoryCryptoScreen({ navigation }) {
  const [count, setCount] = React.useState(0);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount(c => c + 1)} title="count+" />
      ),
    });
  }, [navigation]);

  return (
    <View style={ styles.layout }>
      <Text style={ styles.title }>This is HistoryCryptoScreen</Text>
      <Button
        title="Cash"
        onPress={()=> {
          navigation.navigate('HistoryCash')
        }} />
      <Button
        title="Crypto (active)"
        onPress={()=> {
          navigation.navigate('HistoryCrypto')
        }} />
      <View style={ styles.hr } />
      
      <Text>Funding Options (modal)</Text>
      <Text>Dark Alert (sample)</Text>
      
      <View style={ styles.hr } />
      <Text>Count: {count}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );

}

export default HistoryCryptoScreen;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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