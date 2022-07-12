import React, { createContext, useContext, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Image, TouchableOpacity } from 'react-native';

//navigation
import { useNavigation } from '@react-navigation/native';
import {colors} from '../components/constants';

function niceFormat(num) {
  return num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

function TokenView(props) {

  const [privacyMode, setPrivacyMode] = React.useState(0);
  console.log(privacyMode);

  let thisImage = props.image;
  let img = 'https://tranmer.ca/bcard/img/'+props.image;

  let ethConvert = 1190;
  let bscConvert = 235.82;
  let bankConvert = 0.016;

  let thisConvert = bankConvert;

  if(props.symbol === "ETH") {
    thisConvert = ethConvert;
  } else if(props.symbol === "BSC") {
    thisConvert = bscConvert;
  } else {
    thisConvert = bankConvert;
  }

  let convert = props.tokenBalance * thisConvert;
  convert = niceFormat(convert);
  let tokenOutput = props.tokenBalance;
  tokenOutput = tokenOutput.replace(/\d(?=(\d{3})+\.)/g, '$&,');

  // fix with require vairable for props.image of same name

  return (
    <View style={ styles.tokenContainer }>
      <View style={{ flexDirection: 'row' }}>
        <Image 
          style={ styles.tokenImage }
          source={{
            uri: img,
          }}
        />
        <View style={{ justifyContent:'space-evenly' }}>
          <Text style={ styles.mainToken }>{props.name ? props.name : "Missing Name"}</Text>
          <Text style={ styles.subToken }>{props.symbol ? props.symbol : "Missing Symbol"}</Text>
        </View>
      </View>

      <View style={{ justifyContent:'space-evenly' }}>
        <Text style={ styles.mainTokenBal }>{props.tokenBalance ? tokenOutput : "Cannot get balance"}</Text>
        <Text style={ styles.subTokenBal }>${ convert }</Text>
      </View>
    </View>

  );
}

export default TokenView;

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
  balanceContainer: {
    width: '95%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tokenViewContainer: {
    flex:1, 
    width: '95%',
    backgroundColor: 'white', 
    borderRadius: 10, 
    padding: 20,
    marginTop: 5,
  },
  tokenContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  tokenImage: {
    width: 40, 
    height: 40, 
    marginRight: 10
  },
  mainBalance: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    color: colors.BANK_BLACK,
  },
  subBalance: {
    fontSize: 14,
    alignSelf: 'flex-end',
    color: colors.BANK_ASHL,
    fontFamily: 'SpaceGroteskLight'
  },
  mainToken: {
    fontSize: 16,
    color: colors.BANK_BLACK,
    fontFamily: 'SpaceGroteskRegular'
  },
  subToken: {
    fontSize: 14,
    color: colors.BANK_ASHL,
    fontFamily: 'SpaceGroteskLight'
  },
  mainTokenBal: {
    fontSize: 18,
    alignSelf: 'flex-end',
    color: colors.BANK_BLACK,
    fontFamily: 'SpaceGroteskRegular'
  },
  subTokenBal: {
    fontSize: 14,
    alignSelf: 'flex-end',
    color: colors.BANK_ASHL,
  },
})