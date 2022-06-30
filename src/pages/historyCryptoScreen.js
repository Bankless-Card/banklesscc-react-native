
import React, { createContext, useContext, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Image, FlatList } from 'react-native';

import TopTab from '../navs/topTabNav';
import { colors } from '../components/constants';

function HistoryCryptoScreen({ navigation }) {
  const [count, setCount] = React.useState(0);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount(c => c + 1)} title="count+" />
      ),
    });
  }, [navigation]);

  return (
    <View style={ styles.layout }>
      <TopTab tab1="HistoryCash" label1="Cash" tab2="HistoryCrypto" label2="Crypto" active="tab2" />
      {/*<Text style={ styles.title }>This is HistoryCryptoScreen</Text>
      <Button
        title="Cash"
        onPress={()=> {
          navigation.navigate('HistoryCash')
        }} />
      <Button
        title="Crypto (active)"
        onPress={()=> {
          navigation.navigate('HistoryCrypto')
        }} />*/}
      {/*<View style={ styles.hr } />*/}
      <View style={ styles.eachCol }>
        <FlatList
            data={[
              {key: '123', title: 'Bankless CC', timestamp:'28/05/2022 02:00AM', amount:'423.00', img: 'https://tranmer.ca/bcard/img/moneyIn.png', selected: true},
              {key: '124', title: 'ETH Received', timestamp:'28/05/2022 02:00AM', amount:'1.23', img: 'https://tranmer.ca/bcard/img/ethToken.png'},
              {key: '125', title: 'Bankless CC', timestamp:'28/05/2022 02:00AM', amount:'-423.00', img: 'https://tranmer.ca/bcard/img/moneyOut.png'},
              // {key: 'UK', img: 'https://tranmer.ca/bcard/img/usd-badge.png'},
              // {key: 'ETH', img: 'https://tranmer.ca/bcard/img/ethToken.png'},
              // {key: 'DAI', img: 'https://tranmer.ca/bcard/img/daiToken.jpeg'},
            ]}
            renderItem={({item}) => {
              // console.log(item);
              return (
              <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '95%', padding:10, marginHorizontal: 10, backgroundColor: 'white', borderRadius: 8 }}>
                <Image 
                    style={{ width: 50, height: 50 }}
                    source={{ uri: item.img }}
                  />
                <View style={{ flexDirection: 'column', justifyContent: 'space-evenly' }}>
                  <Text style={{fontWeight:'bold'}}>{item.title}</Text>
                  <Text>{item.timestamp}</Text>
                </View>
                <Text style={{fontWeight:'bold'}}>{item.amount}</Text>
              </View>
              )}
          }
        />
      </View>

      <View style={ styles.hr } />
      
      <Text>Funding Options (modal)</Text>
      <Text>Dark Alert (sample)</Text>
      
      <View style={ styles.hr } />
      <Text>Count: {count}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );

}

export default HistoryCryptoScreen;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
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