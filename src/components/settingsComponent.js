import React from 'react';
import { View, Text, Pressable, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

//navigation
// import { useNavigation } from '@react-navigation/native';

import { colors } from '../components/constants';

// Icons
import Icon from 'react-native-remix-icon'; // maybe


function SettingsComponent(props) {


  // console.log(props);

	return(
    <View style={styles.componentContainer}>

      <FlatList
        style={ styles.list }
        data={props.settingsOptions}
        renderItem={({item}) => {

          return (
            <View style={styles.settingsContainer}>
              <TouchableOpacity onPress={ item.onPress } >   
                <View style={{ flexDirection: 'row' }}>
                  {item.icon &&
                    <Icon name={item.icon} size="20" />
                  }         
                  <View>
                    <Text style={styles.titleStyle}>{item.title}</Text>
                    <Text style={styles.subTitleStyle}>{item.subTitle}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )}
        }
      />
    
      <Pressable 
        style={ styles.notification }
        title="Notifications"
        onPress={()=>{
          props.navigation.navigate('Notifications', {
            name: "Notifications from HOME"
          });
        }} >
        <Icon name="ri-notification-line" size="30" />
      </Pressable>
    </View>
  
	);
	
} 


export default SettingsComponent;

const styles = StyleSheet.create({
  componentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%'
  },
  list: {
    width: '100%',
    padding: 10
  },
  titleStyle: {
    fontSize: 18,
    paddingBottom: 5
  },
  subTitleStyle: {
    fontSize: 14,
    color: colors.BANK_ASH,
    opacity: 0.8
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
  settingsContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomColor: colors.BANK_BLACK,
    borderBottomWidth: 1, 
  }
});