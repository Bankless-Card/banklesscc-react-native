import React, { createContext, useContext, useState } from 'react';
import { View, Text, StyleSheet, Button, Pressable, TextInput, Image } from 'react-native';

const BANK_ASH = '#4F4F4F';

function NewsPost(props) {

  // console.log(props);
  var storyIcon = require('../assets/img/newsSample1.png');
  if(props.image === "newsSample2") {
    // change filename for icon
    storyIcon = require('../assets/img/newsSample2.png');
  } else if(props.image === "newsSample3"){
    storyIcon = require('../assets/img/newsSample3.png');
  }

  return (
    <View style={ styles.newsPost }>
      <View style={ styles.newsText }>
        <Text style={ styles.titleFont }>
          { props.title }
        </Text>
        <Text style={styles.secondRow}>
          <Text style={ styles.category }>{props.category}</Text>    <Text style={ styles.postTime }>{props.postTime}</Text>
        </Text>
      </View>
      <Image 
        source={storyIcon}
      />
    </View>
  );
}

export default NewsPost;

const styles = StyleSheet.create({
  category: {
    color: '#D02128',
    fontFamily: 'SpaceGroteskBold'
  },
  postTime: {
    color: '#D02128',
    fontFamily: 'SpaceGroteskRegular'
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
  newsText:  { 
    width: '65%', 
    marginRight: 20, 
  },
  titleFont: {
    fontWeight:'bold',
    fontFamily: 'SpaceGroteskBold',
  },
  secondRow: { 
    marginVertical: 5 
  }
});

