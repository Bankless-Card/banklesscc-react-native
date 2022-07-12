// new firebase login screen
import React,{ useState, useEffect } from 'react';
import { Button, View } from 'react-native';
//navigation
import { useNavigation } from '@react-navigation/native';

//login
import { auth } from '../../firebase';

function Logout() {

  // const { signOut } = React.useContext(AuthContext);

  const navigation = useNavigation(); 


  const handleSignOut = () => {
    auth.signOut()
    .then(() => {
      // navigation.navigate('Login')
      console.log("Get Out");
    })
    .catch(error => alert(error.message));
  }


  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Button title="Sign out" onPress={ handleSignOut } />
    </View>
  );
}

export default Logout;