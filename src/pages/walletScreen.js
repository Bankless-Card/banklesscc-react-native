
import React, { createContext, useContext, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';

//navigation
import { useNavigation } from '@react-navigation/native';

// import {styles} from './homeScreen';
import Icon from 'react-native-remix-icon';  

import {colors} from '../components/constants';
import IconButton from '../components/iconButton';

// function TokenView(props) {

//   const [privacyMode, setPrivacyMode] = React.useState(0);
//   // console.log(privacyMode);

//   // console.log(props.image);
//   let thisImage = props.image;
//   let img = 'https://tranmer.ca/bcard/img/'+props.image;
//   // console.log(img);

//   let ethConvert = 1190;
//   let bscConvert = 235.82;
//   let bankConvert = 0.016;

//   let thisConvert = bankConvert;

//   if(props.symbol === "ETH") {
//     thisConvert = ethConvert;
//   } else if(props.symbol === "BSC") {
//     thisConvert = bscConvert;
//   } else {
//     thisConvert = bankConvert;
//   }

//   let convert = props.tokenBalance * thisConvert;
//   // console.log(convert);

//   // convert = convert.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
//   convert = niceFormat(convert);
//   // console.log(props.tokenBalance);
//   let tokenOutput = props.tokenBalance;
//   tokenOutput = tokenOutput.replace(/\d(?=(\d{3})+\.)/g, '$&,');

//   // fix with require vairable for props.image of same name

//   return (
//     <View style={ styles.tokenContainer }>
//       <View style={{ flexDirection: 'row' }}>
//         <Image 
//           style={{ width: 40, height: 40, marginRight: 10 }}
//           // source={{ img }}
//           // source={require('../assets/img/bLogo.png')}
//           source={{
//             uri: img,
//           }}
//         />
//         <View style={{ justifyContent:'space-evenly' }}>
//           <Text style={ styles.mainToken }>{props.name ? props.name : "Missing Name"}</Text>
//           <Text style={ styles.subToken }>{props.symbol ? props.symbol : "Missing Symbol"}</Text>
//         </View>
//       </View>

//       <View style={{ justifyContent:'space-evenly' }}>
//         <Text style={ styles.mainTokenBal }>{props.tokenBalance ? tokenOutput : "Cannot get balance"}</Text>
//         <Text style={ styles.subTokenBal }>${ convert }</Text>
//       </View>
//     </View>

//   );
// }

import TopTab from '../navs/topTabNav';
import TokenView from '../components/tokenView';

// function niceFormat(num) {
//   return num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
// }

// function ChartButton() {
//   return (
//     <View style={{ backgroundColor: colors.BANK_WHITE, borderRadius: 5, padding: 5}}>
//         <Icon name="ri-line-chart-fill" size="20" />
//       </View>
//   );
// }

function WalletScreen({navigation})  {

  const [count, setCount] = React.useState(0);
  const [mainBalance, setMainBalance] = React.useState(0);

  // setMainBalance("4123.23");

  if(!mainBalance) {
      const combinedBal = 560 + 1501230.12 + 2784.60;
      const setBal = setMainBalance(combinedBal);   // set default main balance for view
  }
  let bankConvert = 0.016
  let subBal = mainBalance / bankConvert;   // convvert usd to BANK
  subBal = subBal.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');   // nice format
  let mainBal = mainBalance.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');   // nice format
  //let mainBal = niceFormat(mainBalance);

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

  return (
    <View style={ styles.layout }>


      <View style={{width: '100%', alignItems: 'flex-end', marginBottom: -50}}>
        <IconButton name="ri-line-chart-fill" size="20" navTarget="Charts" />
        {/*<ChartButton />*/}
      </View>
      <TopTab tab1="WalletScreen" label1="Wallet" tab2="Vault" label2="Vault" />

      <View style={ styles.balanceContainer }>
        <TouchableOpacity
          style={{ position: 'relative', marginBottom: -45  }}
          onPress={() => {navigation.navigate('DAOcurrency')}}
        >
          <Image 
            style={{ width: 50, height: 50 }}
            source={require('../assets/img/usd-badge.png')}
          />
          <Image 
            style={{ width: 50, height: 50, top: -35, left: 15 }}
            source={require('../assets/img/bLogo.png')}
          />
        </TouchableOpacity>

        <View style={{  }}>
          <Text style={ styles.mainBalance }>$USD {mainBal}</Text>
          <Text style={ styles.subBalance }> {subBal} BANK</Text>
        </View>
      </View>

{/*      <View style={ styles.hr } />*/}


      <View style={ styles.tokenViewContainer }>        

        <View style={ styles.eachCol }>
        <FlatList
            data={[
              {key: 'BSC', name: 'Binance', balance:'6366', img: 'bscToken.png' },
              {key: 'ETH', name: 'Ethereum', balance:'2.34', img: 'ethToken.png' },
              {key: 'BANK', name: 'BanklessDAO', balance:'35000', img: 'daoToken.png' },
            ]}
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