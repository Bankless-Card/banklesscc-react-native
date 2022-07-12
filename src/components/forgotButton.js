// forgot button componen
import React,{ useState, useEffect } from 'react';
import { Button, View } from 'react-native';
//navigation
import { useNavigation } from '@react-navigation/native';

//login
import { auth } from '../../firebase';

function Forgot({ navigation }) {

	// const navigation = useNavigation(); 

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Button title="Request Password Reset" onPress={navigation.goBack} />
    </View>
  );
}

export default Forgot;