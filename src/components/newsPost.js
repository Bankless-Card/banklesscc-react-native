import React, { createContext, useContext, useState } from 'react';
import { View, Text, StyleSheet, Button, Pressable, TextInput, Image } from 'react-native';

const BANK_ASH = '#4F4F4F';

function NewsPost({}) {

  let image = 'newsSample1';

  return (
    <View style={ styles.newsPost }>
      <View style={{ width: '65%', marginRight: 20 }}>
        <Text style={{ fontWeight:'bold' }}>New payment project BanklessCC set to take the payments world by storm</Text>
        <Text style={{ marginVertical: 5 }}>
          <Text style={ styles.category }>Projects</Text>    <Text style={ styles.postTime }>4 hours ago</Text>
        </Text>
      </View>
      <Image style={{ alignSelf:'flex-start', width: '25%', borderRadius: 4 }}
        source={require('../assets/img/'+image+'.png')} size='30' />
    </View>
  );
}

export default NewsPost;

const styles = StyleSheet.create({
  category: {
    color: '#D02128',
  },
  postTime: {
    color: '#D02128'
  },
  newsPost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginTop: 10,
    paddingBottom: 5,
    borderBottomColor: BANK_ASH,
    borderBottomWidth: 1,
  },
});

