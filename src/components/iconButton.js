import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';

//navigation
import { useNavigation } from '@react-navigation/native';

// Icons
import Icon from 'react-native-remix-icon'; 


function IconButton(props) {

	const navigation = useNavigation();

  // console.log(props.name);

  let navTarget = props.navTarget;
  // console.log(navTarget);

	return(
		<View style={ styles.iconRow }>
          <Pressable 
            style={ styles.icon }
            title="Notifications"
            onPress={()=>{
              navigation.navigate(navTarget);
            }} >
            <Icon name={props.name} size={props.size} />
          </Pressable>
        </View>
	);
	
} 

export default IconButton;

const styles = StyleSheet.create({
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 8,
    marginHorizontal: 8,
  },
  icon : {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: 'white',
  },
});