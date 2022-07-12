import React, { createContext, useContext, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

//navigation
import { useNavigation } from '@react-navigation/native';

import { colors } from '../components/constants';

function TopTab(props) {

  const navigation = useNavigation();
  // console.log(props.tab1);

  let active = props.active;

  return( 
    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-evenly' }}>
      <TouchableOpacity 
        style={ active !== 'tab2' ? styles.activeTab : styles.inactiveTab  }
        onPress={()=> {
          navigation.navigate(props.tab1)
        }}
        >
        <Text style={ active !== 'tab2' ? styles.activeText : styles.inactiveText }>{props.label1}</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={ active === 'tab2' ? styles.activeTab : styles.inactiveTab }
        onPress={()=> {
          navigation.navigate(props.tab2)
        }}
      >
        <Text style={ active === 'tab2' ? styles.activeText : styles.inactiveText }>{props.label2}</Text> 
      </TouchableOpacity>
    </View>
  );
}

export default TopTab;

const styles = StyleSheet.create({
  activeTab: {
    marginVertical: 10, 
    borderBottomWidth:5, 
    borderColor: colors.BANK_RED,
  },
  inactiveTab: {
    marginVertical: 10, 
    borderBottomWidth: 5, 
    borderColor: 'transparent'
  },
  activeText: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'SpaceGroteskBold',
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  inactiveText: {
    fontSize: 16,
    fontFamily: 'SpaceGroteskRegular',
    paddingHorizontal: 30,
    paddingVertical: 10,
  }
});