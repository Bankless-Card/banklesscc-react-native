// In App.js in a new project

import React, { createContext, useContext, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//navs 
import HomeStack from './src/navs/homeStack';
import WalletStack from './src/navs/walletStack';
import TransactStack from './src/navs/transactStack';
import HistoryStack from './src/navs/historyStack';

export const AuthContext = createContext({
  hasUser: false,
  setUser: () => {},
});



// App pages for main TABS

// function HomeScreen({ route, navigation }) {
//   const setUser = useContext(AuthContext);
//   React.useEffect(() => {
//     if (route.params?.post) {
//       // Post updated, do something with `route.params.post`
//       // For example, send the post to the server
//       console.log(route.params.post);
//     }
//   }, [route.params?.post]);

//   return (
//     <View style={styles.layout}>
//       <Text>Home Screen</Text>

//       <Button
//         title="CreatePost"
//         onPress={() => {navigation.navigate('CreatePostScreen')}}
//       />
//       <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>

//       <Button 
//         title="User Profile"
//         onPress={()=>{
//           navigation.navigate('Profile', {
//             name: "Profile from HOME"
//           });
//         }} />
//       <Button 
//          title="Go to Details"
//          onPress={()=> {
//             /* 1. Navigate to the Details route with params */
//             navigation.navigate('Details', {
//               itemId: 86,
//               otherParam: 'anything you want here',
//             });
//          }} />
      
//     </View>
//   );
// }

// function WalletScreen({ navigation }) {
//   const [count, setCount] = React.useState(0);

//   React.useLayoutEffect(() => {
//     navigation.setOptions({
//       headerRight: () => (
//         <Button onPress={() => setCount(c => c + 1)} title="Update count" />
//       ),
//     });
//   }, [navigation]);

//   return (
//     <View style={ styles.layout }>
//       <Text>Count: {count}</Text>
//       <Button title="Go back" onPress={() => navigation.goBack()} />

//     </View>
//   );

// }

// function TransactScreen({ navigation }) {
//   const [count, setCount] = React.useState(0);

//   React.useLayoutEffect(() => {
//     navigation.setOptions({
//       headerRight: () => (
//         <Button onPress={() => setCount(c => c + 1)} title="Update count" />
//       ),
//     });
//   }, [navigation]);

//   return (
//     <View style={ styles.layout }>
//       <Text>Count: {count}</Text>
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//     </View>
//   );

// }

// function HistoryScreen({ navigation }) {
//   const [count, setCount] = React.useState(0);

//   React.useLayoutEffect(() => {
//     navigation.setOptions({
//       headerRight: () => (
//         <Button onPress={() => setCount(c => c + 1)} title="Update count" />
//       ),
//     });
//   }, [navigation]);

//   return (
//     <View style={ styles.layout }>
//       <Text>Count: {count}</Text>
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//     </View>
//   );

// }

// push forces the navigation even if on same page
// function DetailsScreen({ route, navigation }) {
//   const setUser = useContext(AuthContext);
//   /* 2. Get the param */
//   const { itemId, otherParam } = route.params;

//   return (
//     <View style={styles.layout}>
//       <Text>Details Screen</Text>
//       <Text>itemId: {JSON.stringify(itemId)}</Text>
//       <Text>otherParam: {JSON.stringify(otherParam)}</Text>
//       <Button
//         title="Next News Story..."
//         onPress={() =>
//           navigation.push('Details', {
//             itemId: Math.floor(Math.random() * 100),
//           })
//         }
//       />

//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//       <Button
//         title="Go back to first screen in stack"
//         onPress={() => navigation.popToTop()}
//       />   
//     </View>
//   );
// }

// function ProfileScreen({ navigation }) {
//   const [count, setCount] = React.useState(0);

//   React.useLayoutEffect(() => {
//     navigation.setOptions({
//       headerRight: () => (
//         <Button onPress={() => setCount(c => c + 1)} title="Update count" />
//       ),
//     });
//   }, [navigation]);

//   return (
//     <View style={ styles.layout }>
//       <Text>Count: {count}</Text>
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//     </View>
//   );

//   // return (
//   //   <View style={ styles.layout }>
//   //     <Text>Profile screen</Text>
//   //     <Button title="Go back" onPress={() => navigation.goBack()} />
//   //   </View>
//   // );
// }

// function CreatePostScreen({ navigation, route }) {
//   const [postText, setPostText] = React.useState('');

//   return (
//     <>
//       <TextInput
//         multiline
//         placeholder="What's on your mind?"
//         style={{ height: 200, padding: 10, backgroundColor: 'white' }}
//         value={postText}
//         onChangeText={setPostText}
//       />
//       <Button
//         title="Done"
//         onPress={() => {
//           // Pass and merge params back to home screen
//           navigation.navigate({
//             name: 'Home',
//             params: { post: postText },
//             merge: true,
//           });
//         }}
//       />
//     </>
//   );
// }

// function LogoTitle() {
//   return (
//     <Image
//       style={{ width: 50, height: 50 }}
//       source={{
//         uri: 'https://reactnative.dev/img/tiny_logo.png',
//       }}
//     />
//   );
// }

// Navigators
const Tab = createBottomTabNavigator();

function MyTabsHome( route,navigation ) {
  return (
    <Tab.Navigator
      initialRouteName="BanklessCard"
      screenOptions={{
        headerShown: false
      }} 
    >
      <Tab.Screen name="BanklessCard" component={HomeStack} />
      <Tab.Screen name="Wallet" component={WalletStack} />
      <Tab.Screen name="Transact" component={TransactStack} options={{ tabBarBadge: 3 }} />
      <Tab.Screen name="History" component={HistoryStack} />
    </Tab.Navigator>
  );
}

// const StackHome = createNativeStackNavigator();

// function HomeStack() {
//   return (
//     <StackHome.Navigator 
//       initialRouteName="Home"
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: '#f4511e',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: 'bold',
//         },
//       }}  >
//       <StackHome.Screen 
//         name="Home" 
//         component={HomeScreen} 
//         options={{ 
//           title: 'BanklessCard',
//           headerRight: () => (
//             <Button
//               onPress={() => alert('This is a button!')}
//               title="Info"
//               color="#fff"
//             />
//           ),
//         }} 
//       />
//       <StackHome.Screen name="Details" component={DetailsScreen}
//         options={{ headerTitle: (props) => <LogoTitle {...props}/> }} />
//       <StackHome.Screen name="Profile" component={ProfileScreen} />
//       <StackHome.Screen name="CreatePost" component={CreatePostScreen} />
//     </StackHome.Navigator>
//   )
// }

// const Stack = createNativeStackNavigator();

// function StackScreen() {
//   return (
//     <Stack.Navigator 
//       initialRouteName="Home"
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: '#f4511e',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: 'bold',
//         },
//       }} >
//       <Stack.Screen 
//         name="Home" 
//         component={HomeScreen} 
//         options={{ 
//           title: 'BanklessCard',
//           headerRight: () => (
//             <Button
//               onPress={() => alert('This is a button!')}
//               title="Info"
//               color="#fff"
//             />
//           ),
//         }} 
//       />
//       <Stack.Screen name="Details" component={DetailsScreen}
//         options={{ headerTitle: (props) => <LogoTitle {...props}/> }} />
//       <Stack.Screen name="Profile" component={ProfileScreen} />
//       <Stack.Screen name="CreatePost" component={CreatePostScreen} />
//     </Stack.Navigator>
//   )
// }


function App() {
  return (
    <NavigationContainer>
      <MyTabsHome />
    </NavigationContainer>
  );
}

export default App;

// import React, { createContext, useContext, useState } from 'react';
// import store from './src/store';
// import { Provider } from 'react-redux';
// // import DeckOfCards from './src/components/DeckOfCards';

// // import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Button } from 'react-native';

// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator, Navigator, Screen } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';

// export const AuthContext = createContext({
//   hasUser: false,
//   setUser: () => {},
// });

// const LoginScreen = () => {
//   const setUser = useContext(AuthContext);

//   return (
//     <View style={styles.layout}>
//       <Text style={styles.title}>Login</Text>
//       <Button 
//         title="login"
//         onPress={()=>setUser(true)} />
//     </View>
//   );
// };

// const FeedScreen = () => {
//   const setUser = useContext(AuthContext);

//   return (
//     <View style={styles.layout}>
//       <Text style={styles.title}>Feed</Text>
//       <Button 
//         title="logout"
//         onPress={()=>setUser(false)} />
//     </View>
//   );
// };

// const Stack = createStackNavigator();

// // const Tab = createBottomTabNavigator();

// export const AppNavigator = () => {
//   const hasUser = useContext(AuthContext);

//   return (
//     <Stack.Navigator>
//       {hasUser
//         ? <Stack.Screen name="Feed" component={FeedScreen} />
//         : <Stack.Screen name="Login" component={LoginScreen} />
//       }
//     </Stack.Navigator>
//   );
// };
    


// const HomeScreen = () => (
//     <View style={styles.layout}>
//         <Text style={styles.title}>Home</Text>
//     </View>
// );



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
});

// const App = () => {
//   return (
//     <Provider store={store}>
//       {/*<DeckOfCards style={{ height: 300 }} />*/}
//       <NavigationContainer>
//         <AppNavigator />
//       </NavigationContainer>
//     </Provider>
//   );
// }

// export default App;
