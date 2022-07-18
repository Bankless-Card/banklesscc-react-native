import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, TouchableHighlight } from 'react-native';
import React, { useState, useEffect } from 'react';

import * as LocalAuthentication from 'expo-local-authentication';

export default function BioScreen({navigation}) {

  const [isBiometricSupported, setIsBiometricSupported] = useState(false);

  // for face detectioon or fingerprint scan
  useEffect( () => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  });

  const fallBackToDefaultAuth = () => {
    console.log("Fall back to password authentication");
    // navigation.navigate("Login");
  }

  const alertComponent = (title, mess, btnTxt, btnFunc) => {
    return Alert.alert(title, mess, [
      {
        text: btnTxt,
        onPress: btnFunc,
      }
    ]);
  };

  const TwoButtonAlert = () => 
    Alert.alert('Welcome back to App', 'Web3 Now! You will be sent home.', [
      {
        text: 'Help',
        onPress: () => {
        	console.log("Help Pressed");
        	navigation.navigate("Help");
        },
        style: 'cancel'
      },
      {
        text: 'Ok',
        onPress: () => {
        	console.log('Ok Pressed');
        	navigation.navigate("BanklessCC");
        }
      },
    ]);


  const handleBiometricAuth = async () => {
    // check if hardware supports bio
    const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();

    // fall back to fedault authentication method (password) if biometric is not available
    if(!isBiometricAvailable) {
      return alertComponent(
        'Please Enter Your Password',
        'Biometric Auth not Supported',
        'Ok',
        () => fallBackToDefaultAuth()
        );
    }   // end if

    // check biometric trypes available (fingerprint,face,iris)
    let supportedBiometrics;
    if (isBiometricAvailable)
      supportedBiometrics = await LocalAuthentication.supportedAuthenticationTypesAsync();

    // check biometrics are saved locally in user device
    const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
    if (!savedBiometrics)
      return alertComponent(
        'biometric record not found',
        'Please login with Password',
        'Ok',
        () => fallBackToDefaultAuth()
      );

    // authenticate with biometric
    const biometricAuth = await LocalAuthentication.authenticateAsync({
      promptMessage: "Login With Biometrics",
      cancelMessage: "cancel",
      disableDeviceFallback: false
    });

    // Log the user in on success  
    if (biometricAuth.success) {
      TwoButtonAlert()
    };
    console.log({isBiometricAvailable});
    console.log({supportedBiometrics});
    console.log({savedBiometrics});
    console.log({biometricAuth});

  }   // end handleBiometricAuth

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>
          {isBiometricSupported 
            ? 'Your device Is Compatible with Biometrics'
            : 'Face or Fingerprint scanner is not available on this device' }
        </Text>
        <TouchableHighlight
          style={{
            height: 60,
            marginTop: 200,
          }}
        >
          <Button title='Login With Biometrics' color='black' onPress={handleBiometricAuth} />

        </TouchableHighlight>
        <StatusBar style='auto' />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight
  },
});
