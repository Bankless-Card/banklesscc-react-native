import React, { createContext, useContext, useState } from 'react';
import { View, Text, StyleSheet, Button, Pressable, TextInput, Image, FlatList, TouchableOpacity } from 'react-native';

//navigation
import { useNavigation } from '@react-navigation/native';

// TBD fonts from google/local
// import {
//   useFonts,
//   SpaceGrotesk_400Regular,
//   SpaceGrotesk_700Bold
// } from "@expo-google-fonts/space-grotesk";

import { useFonts } from 'expo-font';
import * as Font from 'expo-font';

// import {styles} from '../components/styles'
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator, DrawerActions } from '@react-navigation/drawer';   // for menu drawer TBD

import NotificationButton from '../components/notificationButton';
import NewsPost from '../components/newsPost';

// login
import AuthContext from '../components/AuthContext';  // old
import { auth } from '../../firebase';


import Icon from 'react-native-remix-icon';   
import { colors } from '../components/constants';





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

  // const [loaded] = useFonts({
  //   SpaceGroteskBold: require('../assets/fonts/SpaceGrotesk-Bold.ttf'),
  // });

  

  

  const [privacyMode, setPrivacyMode] = React.useState(0);
  // const [fontsLoaded, setFontsLoaded] = React.useState(0);

  let thisUser = auth.currentUser;

  const date = new Date();

  // Font.loadAsync({
  //   SpaceGroteskBold: require('../assets/fonts/SpaceGrotesk-Bold.ttf'),
  //   SpaceGroteskLight: require('../assets/fonts/SpaceGrotesk-Light.ttf'),
  //   SpaceGroteskRegular: require('../assets/fonts/SpaceGrotesk-Regular.ttf'),
  // });

  // if(!fontsLoaded){
    return (

      <View style={ styles.layout }>

        <View style={{ }}>

          <NotificationButton />

          <View style={ styles.balanceSwitch }>
            <Pressable 
              style={ styles.balanceButton }
              title="Balance"
              onPress={()=>{
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

        <View style={{}}>

          <View style={{ flexDirection: 'row', justifyContent:'space-between' }}>
          {(() => {
              if (privacyMode) {
                // foreach character in balance, return a * character
                return <Text style={ styles.h2 }>$****.**</Text>;
              } else {
                return <Text style={ styles.h2 }>$4120.23</Text>;
              }
            })()}
            
            <View style={{ flexDirection: 'column' }}>
              <Text style={ styles.assetLabel }>Asset Value ($)</Text>
              {(() => {
                if (privacyMode) {
                  // foreach character in balance, return a * character
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
              <Text style={styles.grotesk}>My Card</Text>
            </Pressable>
            <Pressable style={ styles.halfBtn } onPress={()=>{
                  navigation.navigate('Rewards', {
                    name: "Rewards from HOME"
                  });
                }} >
                <Image style={styles.btnImg}
                source={require('../assets/img/Rewards.png')} />
              <Text style={styles.grotesk}>Rewards</Text>
              </Pressable>
          </View>
        </View>

        <View style={ styles.newsBlock }>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={ styles.groteskLight }>DAO News & Events</Text>
            <Pressable title="DAO News and Events"
             onPress={()=> {
                /* 1. Navigate to the Details route with params */
                navigation.navigate('News', {
                  itemId: 86,
                  otherParam: 'anything you want here',
                });
             }} >
              <Text style={ styles.seeAllBtn }>See all</Text>
            </Pressable>
          </View>

          <FlatList
              data={[
                {key: 'TBD-001', title: 'New payment project BanklessCC set to take the world by storm', img: 'newsSample1', category: 'Projects', postTime: '4 hrs ago' },
                {key: 'TBD-003', title: 'BANK Token hits new ATH. What does this mean for hourly rates? ', img: 'newsSample2', category: 'Tokenomics', postTime: '12 hrs ago'  },
                {key: 'TBD-004', title: 'GSE Elections Start today. Read Submissions Here...', img: 'newsSample3', category: 'Coindesk', postTime: '2 days ago'  },
                {key: 'TBD-002', title: 'New payment project BanklessCC set to take the world by storm', img: 'newsSample1', category: 'Projects', postTime: '4 hrs ago'  },
              ]}
              renderItem={({item}) => {
                // tokenView for each token in wallet is displayed here,
                return (
                  <TouchableOpacity onPress={ () => {
                    console.log(item.key);
                    navigation.navigate('News', {
                      itemId: item.key,
                      otherParam: item.title,
                      moreParam: 'more come here later if needed',
                      really: 'the future is to just pass the news post id to the new page'
                    });

                  } }>
                    <NewsPost 
                      postId={item.key} 
                      title={item.title}
                      category={item.category} 
                      postTime={item.postTime}
                      image={item.img}
                    />
                  </TouchableOpacity>
                )}
              }
            />
          
          {/*<NewsPost postId="tbd" category="Projects" postTime="4 hrs ago" />
          <NewsPost postId="tbd" category="Projects" postTime="4 hrs ago" />
          <NewsPost postId="tbd" category="Tokenomics" postTime="12 hrs ago" />
          <NewsPost postId="tbd" category="Coindesk" postTime="2 days ago" />*/}

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

        <View style={{ paddingHorizontal: 20, paddingVertical: 10}}>
          {(() => {
            if (privacyMode) {
              return <Text style={styles.grotesk}> Welcome back ***********.***, </Text>;
            } else {
              return <Text style={styles.grotesk}> Welcome back { thisUser?.email }, </Text>;
            }
          })()}
            <Text style={styles.grotesk}> It is { date.toLocaleTimeString() } </Text>
        </View>
        
      </View>
    );
// } else {
//   return (
//     <View>
//       <Text>Fonts Loading</Text>
//     </View>
//   );
// }

  
}

export default HomeScreen;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    margin: 10,
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
  grotesk: {
    fontFamily: 'SpaceGroteskRegular',
  },
  groteskLight: {
    fontFamily: 'SpaceGroteskLight',
  },
  seeAllBtn: {
    color: colors.BANK_RED,
    fontFamily: 'SpaceGroteskBold',
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
    fontFamily: 'SpaceGroteskRegular',
  },
  assetLabel: {
    color: colors.BANK_ASHL,
    fontFamily: 'SpaceGroteskRegular',
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
    fontWeight: 'bold',
    // fontFamily: 'Space-Grotesk',
    fontFamily: 'SpaceGroteskBold',
  },
  h3: {
    fontSize: 20,
    fontFamily: 'SpaceGroteskRegular',
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