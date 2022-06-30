import React, { createContext, useContext, useState } from 'react';
import { View, Text, StyleSheet, Button, Pressable, TextInput, Image, Scrollview } from 'react-native';

//navigation
import { useNavigation } from '@react-navigation/native';

// TBD fonts from google/local
import {
  useFonts,
  SpaceGrotesk_400Regular,
  SpaceGrotesk_700Bold
} from "@expo-google-fonts/space-grotesk";

// import {styles} from '../components/styles'
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator, DrawerActions } from '@react-navigation/drawer';   // for menu drawer TBD

import NotificationButton from '../components/notificationButton';
import NewsPost from '../components/newsPost';

// login
import AuthContext from '../components/AuthContext';

import { auth } from '../../firebase';


import Icon from 'react-native-remix-icon';   

import { colors } from '../components/constants';

// colors
// const BANK_ORCHID = '#6D29FE';
// const BANK_RED = '#D02128';   // primary red
// const BANK_BLACK = '#111111';
// const BANK_ASH = '#4F4F4F';
// const BANK_ASH2 = '#313131';
// const BANK_ASHL = '#A3A3A3';  // ash light
// const BANK_WHITE = '#EEEEEE'; // off white

// let [fontsLoaded] = useFonts({
//     'Space-Grotesk': require('../assets/fonts/SpaceGrotesk-Regular.ttf'),
//   });

// function BoilingVerdict(props) {
//   if (props.celsius >= 100) {
//     return <Text>The water would boil.</Text>;
//   }
//   return <Text>The water would not boil.</Text>;
// }


// const DisplayDate = (props) => {

//   // const [temperature, setTemp] = useState('');

//   // console.log(temperature);
//   const [privacyMode, setPrivacyMode] = React.useState(0);
//   let thisUser = auth.currentUser;

//   //const [username, setUsername] = useState('');
//   // console.log(username);

//   return (<View>
    
//     <Text> It is { props.date.toLocaleTimeString() } </Text>
//     {/*<View>
//       <Text>Enter temperature in Celsius:</Text>
//       <TextInput
//         onChangeText={newText => setTemp(newText)}
//         defaultValue={temperature} />
//       <BoilingVerdict
//         celsius={parseFloat(temperature)} />
//     </View>*/}
//   </View>);

// }


// home screen visual content
const HomeScreen = ({ route, navigation }) => {
  // const setUser = useContext(AuthContext);
  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
      console.log(route.params.post);
    }
  }, [route.params?.post]);

  const [privacyMode, setPrivacyMode] = React.useState(0);
  let thisUser = auth.currentUser;

  // console.log(privacyMode);
  const date = new Date();

  // privacyMode = false;    //default setting

  return (

    <View style={ styles.layout }>

      {/*<MyMenuDrawer />*/}

      {/*<Text style={ styles.title }>Home Screen</Text>*/}

      <View style={{ }}>

        <NotificationButton />

        {/*<View style={ styles.notificationRow }>
          <Pressable 
            style={ styles.notification }
            title="Notifications"
            onPress={()=>{
              navigation.navigate('Notifications', {
                name: "Notifications from HOME"
              });
            }} >
            <Icon name="ri-notification-line" size="30" />
          </Pressable>
        </View>*/}

        <View style={ styles.balanceSwitch }>
          <Pressable 
            style={ styles.balanceButton }
            title="Balance"
            onPress={()=>{
              //console.log("Toggle Balance View");
              setPrivacyMode(!privacyMode);
              //console.log(privacyMode.toString());
            }} >
            <Text style={ styles.balanceText }>Balance</Text>
          </Pressable>
          {(() => {
              if (privacyMode) {
                return <Icon name="ri-eye-close-line" size="20" />;
              } else {
                return <Icon name="ri-eye-line" size="20" />;
              }
            })()}
          
          
        </View>

        

      </View>

      {/*<Button
        title="Menu"
        onPress={()=>{
          navigation.toggleDrawer();
        }} />*/}

      {/*<Button
      title="FontSample"
      onPress={()=>{
        console.log("Hello");
      }} />*/}

      <View style={{}}>

        <View style={{ flexDirection: 'row', justifyContent:'space-between' }}>
        {(() => {
            if (privacyMode) {
              return <Text style={ styles.h2 }>$****.**</Text>;
            } else {
              return <Text style={ styles.h2 }>$4120.23</Text>;
            }
          })()}
          
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ color: colors.BANK_ASHL }}>Asset Value ($)</Text>
            {(() => {
              if (privacyMode) {
                return <Text style={ styles.h3 }>$****.**</Text>;
              } else {
                return <Text style={ styles.h3 }>$2500.42</Text>;
              }
            })()}
            
          </View>
        </View>

        

        <View style={{ flexDirection: 'row' }}>
          <Pressable style={ styles.halfBtn }
            onPress={()=>{
                navigation.navigate('MyCard', {
                  name: "MyCard from HOME"
                });
              }}>
            <Image style={styles.btnImg}
              source={require('../assets/img/Card.png')} />
            <Text>My Card</Text>
          </Pressable>
          <Pressable style={ styles.halfBtn } onPress={()=>{
                navigation.navigate('Rewards', {
                  name: "Rewards from HOME"
                });
              }} >
              <Image style={styles.btnImg}
              source={require('../assets/img/Rewards.png')} />
            <Text>Rewards</Text>
            </Pressable>
        </View>
      </View>

      <View style={ styles.newsBlock }>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text>DAO News & Events</Text>
          <Pressable title="DAO News and Events"
           onPress={()=> {
              /* 1. Navigate to the Details route with params */
              navigation.navigate('News', {
                itemId: 86,
                otherParam: 'anything you want here',
              });
           }} >
            <Text style={{ color: colors.BANK_RED }}>See all</Text>
          </Pressable>
        </View>
        
        <NewsPost />
        <NewsPost />
        <NewsPost />
        <NewsPost />

        {/*<View style={ styles.newsPost }>
          
          <View style={{ width: '65%', marginRight: 20 }}>
            <Text>New payment project BanklessCC set to take the payments world by storm</Text>
            <Text>
              <Text style={ styles.category }>Projects</Text>    <Text style={ styles.postTime }>4 hours ago</Text>
            </Text>
          </View>
          <Image style={{ alignSelf:'flex-end', width: '25%' }}
            source={require('../assets/img/newsSample1.png')} size='30' />
        </View>*/}

      </View>

      <View>
        {(() => {
          if (privacyMode) {
            return <Text> Welcome back ***********.***, </Text>;
          } else {
            return <Text> Welcome back { thisUser?.email }, </Text>;
          }
        })()}
          <Text> It is { date.toLocaleTimeString() } </Text>
      </View>
      
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    margin: 10
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
    // fontFamily: 'SpaceGrotesk_700Bold',
  },
  category: {
    color: '#D02128',
  },
  postTime: {
    color: '#D02128'
  },
  hr: {
    width: "100%",
    borderBottomColor: colors.BANK_ASH,
    borderBottomWidth: 1,
  },
  balanceSwitch: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  notificationRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  notification : {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: 'white',
  },
  balanceButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: 'white',
  },
  balanceText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#A3A3A3',
  },
  newsBlock: {
    backgroundColor: 'white',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  newsPost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginTop: 10,
    paddingBottom: 5,
    borderBottomColor: colors.BANK_ASH,
    borderBottomWidth: 1,
  },
  h1: {
    fontSize: 24
  },
  h2: {
    fontSize: 32,
    fontWeight: 'bold'
    // fontFamily: 'Space-Grotesk',
  },
  h3: {
    fontSize: 20,
  },
  halfBtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-evenly",
    alignItems: 'center',
    margin: 5,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: 'white',
  }
});