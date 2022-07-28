
import React, { createContext, useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';

// navigation
import { useNavigation } from '@react-navigation/native';

// storage for settings data
import AsyncStorage from '@react-native-async-storage/async-storage';

// import {styles} from './homeScreen';
import Icon from 'react-native-remix-icon';  

import {colors, ICONS, getImageFromSymbol} from '../components/constants';
import {TokenList} from '../components/dataFile';
import IconButton from '../components/iconButton';

import TopTab from '../navs/topTabNav';
import TokenView from '../components/tokenView';

function WalletScreen({navigation})  {

  const [count, setCount] = React.useState(0);
  const [mainBalance, setMainBalance] = React.useState(0);
  const [myCurrency, setMyCurrency] = React.useState(0);    // for principal wallet display
  const [myDAO, setMyDAO] = React.useState(null);    // for principal wallet display

  // data retrieval function (move it)
  const getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key)
      console.log(key);
      console.log(value);   // value here is @currency key
      // setMyCurrency(value);

      // maybe replace this with a lookup for image based on key?
      if(key==='@currency'){
        setMyCurrency(value)    // not this
        
      } else if(key === '@dao') {
        setMyDAO(value)
      }

      if(value !== null) {
        console.log(value);
        // setUserData(value)
      }
    } catch(e) {
      // error reading value
    }

    console.log("Data Retrieved");
  }

  const getCurImg = async (key) => {
    try {
      console.log(key);

      // maybe replace this with a lookup for image based on key?
      if(key==='@currency'){
        setMyCurrency(value)    // not this
        
      } else if(key === '@dao') {
        setMyDAO(value)
      }

    } catch(e) {
      // error reading value
    }

    console.log("Data Retrieved");
  }

  // on page load, use retrieval functions to gather the currency and dao data
  useEffect(() => {
    getData('@currency');
    getData('@dao');
  }, []);

  if(!mainBalance) {
      const combinedBal = 560 + 1501230.12 + 2784.60;
      const setBal = setMainBalance(combinedBal);   // set default main balance for view
  }
  let bankConvert = 0.023
  let subBal = mainBalance / bankConvert;   // convvert usd to BANK
  subBal = subBal.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');   // nice format
  let mainBal = mainBalance.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');   // nice format

  React.useLayoutEffect(() => {
    // navigation.setOptions({
    //   headerRight: () => (
    //     <View>
    //       <TouchableOpacity style={{ backgroundColor: colors.BANK_WHITE, borderRadius: 5, padding: 5}}>
    //         <Icon name="ri-line-chart-fill" size="20" />
    //       </TouchableOpacity>
    //     </View>
    //   ),
    // });
  }, [navigation]);

  // get myCurrency image source
  let myCurrencySrc = getImageFromSymbol(myCurrency);
  let myDAOSrc = getImageFromSymbol(myDAO);

  return (
    <View style={ styles.layout }>


      <View style={{width: '100%', alignItems: 'flex-end', marginBottom: -50}}>
        <IconButton name="ri-line-chart-fill" size="20" navTarget="Charts" />
      </View>
      <TopTab tab1="WalletScreen" label1="Wallet" tab2="Vault" label2="Vault" />

      <View style={ styles.balanceContainer }>
        <TouchableOpacity
          style={ styles.selectionLink }
          onPress={() => {navigation.navigate('DAOcurrency')}}
        >
          <Image 
            style={styles.tokenImage}
            source={myCurrencySrc}
          />
          <Image 
            style={[styles.tokenImage, styles.daoToken]}
            source={myDAOSrc}
          />
        </TouchableOpacity>

        <View style={{  }}>
          <Text style={ styles.mainBalance }>${myCurrency} {mainBal}</Text>
          <Text style={ styles.subBalance }> {subBal} {myDAO}</Text>
        </View>
      </View>

{/*      <View style={ styles.hr } />*/}


      <View style={ styles.tokenViewContainer }>        

        <View style={ styles.eachCol }>
        <FlatList
            data={TokenList}
            renderItem={({item}) => {
              // tokenView for each token in wallet is displayed here,
              return (
                <TouchableOpacity onPress={ () => {
                  console.log(item.key);
                  navigation.navigate('Token', {
                    img: item.img,
                  })
                } }>
                  <TokenView image={item.img} name={item.name} symbol={item.key} tokenBalance={item.balance} />
                </TouchableOpacity>
              )}
            }
          />
        </View>

      </View>
      
      {/*<View style={ styles.hr } />
      <Text>Count: {count}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />*/}
    </View>
  );

}

export default WalletScreen;

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
  selectionLink: {
    position: 'relative', 
    marginBottom: -45
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
  tokenImage: {
    width: 50, 
    height: 50 
  },
  daoToken: {
    top: -35, 
    left: 15 
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
  mainBalance: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    color: colors.BANK_BLACK,
    fontFamily: 'SpaceGroteskBold'
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
    fontFamily: 'SpaceGroteskBold'
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
  },
  subTokenBal: {
    fontSize: 14,
    alignSelf: 'flex-end',
    color: colors.BANK_ASHL,
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