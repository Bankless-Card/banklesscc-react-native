import React, { createContext, useContext, useState, useReducer, useMemo } from 'react';
import { Text, View, TextInput, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import * as SecureStore from 'expo-secure-store';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MyNavTabs from '../navs/myNavTabs';
// import LoginScreen from '../pages/loginScreen';

import LogoTitle from '../components/logoTitle';
import CustomDrawer from '../components/customDrawer';

// login
const AuthContext = React.createContext();

// let isSignedIn = false;
// state.userToken == null
// three state variables 

// colors
const BANK_ORCHID = '#6D29FE';
const BANK_RED = '#D02128';   // primary red
const BANK_BLACK = '#111111';
const BANK_ASH = '#4F4F4F';
const BANK_ASH2 = '#313131';
const BANK_ASHL = '#A3A3A3';  // ash light
const BANK_WHITE = '#EEEEEE'; // off white


// temp pages

function Feed() {
  return (
    <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

// function SignupScreen() {
//   return (
//     <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Signup Screen</Text>
//     </View>
//   );
// }

function LoginScreen({ route, navigation }) {

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { signIn } = React.useContext(AuthContext);

  return (
    <View style={ styles.container }>
    <Text style={ styles.title }>BanklessCC</Text>
      <View style={ styles.inputView } >
        <TextInput style={ styles.TextInput }
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View style={ styles.inputView } >
        <TextInput style={ styles.TextInput }
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <TouchableOpacity
        onPress={()=> navigation.navigate('Forgot')}>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.loginBtn}
        onPress={() => signIn({ username, password })}
      >
        <Text style={styles.loginText}>AUTHENTICATE</Text>
      </TouchableOpacity>
      <Button title="Sign in" onPress={() => signIn({ username, password })} />
    </View>
  );
}


function Logout() {

  const { signOut } = React.useContext(AuthContext);

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Button title="Sign out" onPress={() => signOut({ })} />
    </View>
  );
}

function Forgot({ navigation }) {

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Button title="Request Password Reset" onPress={navigation.goBack} />
    </View>
  );
}

function SignupScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { signIn } = React.useContext(AuthContext);

  return (
    <View style={ styles.container } >
      <View style={{ flex:1, justifyContent:'center', alignItems:'flex-start' }}>
        <Text>Create your Bankless Card Account today.</Text>
        <TextInput style={{ height:30, width:'90%', backgroundColor:'white', padding: 15, margin: 10 }}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput style={{ height:30, width:'90%', backgroundColor:'white', padding: 15, margin: 10 }}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button 
          style={{ justifySelf: 'flex-end' }}
          title="Sign Up" onPress={() => signIn({ username, password })} />
      </View>
    </View>
  );
}

function SplashScreen() {
  return (
    <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        style={{ width: 100, height: 100 }}
        source={require('../assets/img/bLogo.png')}
      />
    </View>
  );
}


// nav required
const Drawer = createDrawerNavigator();

function MyDrawer() {

  return (
      <Drawer.Navigator 
        useLegacyImplementation
        initialRouteName="BanklessCC"
        screenOptions={({route}) => ({
          // headerShown: false
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },

        })} 
        // drawerContent={props => <CustomDrawer {...props} />}
      >
        <>
          <Drawer.Screen name="BanklessCC" component={MyNavTabs}
            options={{
              headerRight: () => (<View style={{ marginRight: 10 }}><LogoTitle /></View>),
            }} />
          <Drawer.Screen name="Feed" component={Feed} />
          <Drawer.Screen name="Logout" component={Logout} />
        </>


      </Drawer.Navigator>
    
  );
};

function NewDrawer() {
  return (
      <Drawer.Navigator 
        useLegacyImplementation
        initialRouteName="Login"
        screenOptions={({route}) => ({
          // headerShown: false
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },

        })} 
        // drawerContent={props => <CustomDrawer {...props} />}
      >

        <>
          <Drawer.Screen name="Login" component={LoginScreen} />
          <Drawer.Screen name="Sign Up" component={SignupScreen} />
          <Drawer.Screen 
            name="Forgot" 
            component={Forgot}
            options={({ navigation }) => ({
              presentation: 'modal',
              headerShown: 'true',
              headerStyle: {
                backgroundColor: BANK_RED,
              },
              headerTintColor: BANK_WHITE,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerLeft: () => 
                (<Button title='Close' onPress={navigation.goBack} />)
            })
          }
        />
          
        </>

      </Drawer.Navigator>
    
  );
};


function DrawerNav({ navigation }) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          console.log('RESTORING USER');
          return {
            ...prevState,
            userToken: action.token,    // default to a signed-in state: action.token
            isLoading: false,
          };
        case 'SIGN_IN':
          console.log('SIGNIN USER');
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          console.log('SIGNOUT USER');
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await SecureStore.getItemAsync('userToken');
        // userToken = 'dummy-auth-token';
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      console.log("Restoring for "+userToken);

      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
    }, []);

    const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token
        console.log("SIGN_IN");
        console.log(data);

        dispatch({ type: 'SIGN_IN', token: 'auth-token-'+data.username });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token
        console.log("create a user with username:" + data.username);

        dispatch({ type: 'SIGN_IN', token: 'create-auth-token' });
      },
    }),
    []
  );

  console.log(state);

  if (state.isLoading) {
    // We haven't finished checking for the token yet
    return <SplashScreen />;
  }

  console.log(state.userToken);

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        { state.userToken !== null ? ( 
          <MyDrawer />
        ) : (
          <NewDrawer />
        ) }
      </NavigationContainer>
    </AuthContext.Provider>

  );
};

export default DrawerNav;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BANK_BLACK,
    //background: "linear-gradient(#e66465, #9198e5)",
    backgroundImage: `linear-gradient(to right, rgba(0, 224, 255, 1), rgba(0, 133, 255, 1))`,
    alignItems: 'center',
    justifyContent: 'center',
   },
 
   title :{
    fontSize: 32,
    color: BANK_RED,
    fontWeight: 'bold',
    marginBottom: 30,

  },
  inputView: {
   backgroundColor: BANK_ASHL,
   borderRadius: 30,
   width: "70%",
   height: 45,
   marginBottom: 20,
   alignItems: "center",
 },
 
 TextInput: {
   height: 50,
   flex: 1,
   padding: 10,
   marginLeft: 20,
 },
 forgot_button: {
  height: 30,
  marginBottom: 30,
  color: BANK_WHITE
 },
 loginBtn: {
   width:"80%",
   borderRadius:25,
   height:50,
   alignItems:"center",
   justifyContent:"center",
   marginTop:40,
   backgroundColor:BANK_ORCHID,
 },
 loginText: {
  fontSize: 20,
  color: BANK_WHITE
 }
     
});