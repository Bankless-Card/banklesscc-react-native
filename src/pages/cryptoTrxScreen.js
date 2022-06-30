
import React, { createContext, useContext, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Image, TouchableOpacity } from 'react-native';

import TopTab from '../navs/topTabNav';

import { colors } from '../components/constants';

function CryptoTrxScreen({ navigation }) {
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
      <View style={styles.topView}>
        <TopTab tab1="CashTrx" label1="Cash" tab2="Crypto" label2="Crypto" active="tab2" />
        
        <View style={styles.fundingContainer}>
          <TouchableOpacity
            style={styles.fundingButton}
            onPress={() => {
              navigation.navigate('Funding')
            }}
          >
            <Text style={styles.fundingBtnText}>Choose a Funding Option (+) (modal)</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.fundingContainer}>
          <TouchableOpacity
              style={styles.darkAlert}
          >
            <Text style={styles.darkAlertText}>Dark Alert (sample)</Text>
          </TouchableOpacity>
        </View>

      </View>

      <View style={[styles.topView, styles.bottomView]}>
      
        <View style={ styles.hr } />
        <Text>Count: {count}</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );

}

export default CryptoTrxScreen;

const styles = StyleSheet.create({
   layout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
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
  topView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  bottomView: {
    alignItems: 'center',
  },
  fundingContainer: {
    alignItems: 'flex-start',
    width: '90%',
    marginTop: 10,
  },
  fundingButton: {
    padding: 15,
    backgroundColor: '#f8d7da',
    borderColor: colors.BANK_RED,
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
  },
  fundingBtnText: {
    color: colors.BANK_RED,
  },
  darkAlert: {
    padding: 15,
    backgroundColor: colors.BANK_ASHL,
    borderColor: colors.BANK_ASH,
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
  },
  darkAlertText: {
    color: colors.BANK_ASH2
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