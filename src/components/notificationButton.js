import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';

//navigation
import { useNavigation } from '@react-navigation/native';

// Icons
import Icon from 'react-native-remix-icon'; 


function NotificationButton() {

	const navigation = useNavigation();

	return(
		<View style={ styles.notificationRow }>
          <Pressable 
            style={ styles.notification }
            title="Notifications"
            onPress={()=>{
              navigation.navigate('Notifications', {
                name: "Notifications from HOME"
              });
            }} >
            <Icon name="ri-notification-line" size="30" />
            {/*<TextInput
	          style={{height: 40}}
	          placeholder="Type here to translate!"
	          onChangeText={(mimin) => this.setState({mimin})}
	        />*/}
          </Pressable>
        </View>
	);
	
} 
// class NotificationButton extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		// Set initial state
//     	this.state = {mimin : ''}
// 	}

// 	onButtonPress = () => {
// 		this.setState({
// 			text: this.state.mimin,
// 		})
// 	}


// 	render() {

// 		return(
// 			<View style={ styles.notificationRow }>
// 	          <Pressable 
// 	            style={ styles.notification }
// 	            title="Notifications"
// 	            onPress={()=>{
// 	              navigation.navigate('Notifications', {
// 	                name: "Notifications from HOME"
// 	              });
// 	            }} >
// 	            <Icon name="ri-notification-line" size="30" />
// 	            <TextInput
// 		          style={{height: 40}}
// 		          placeholder="Type here to translate!"
// 		          onChangeText={(mimin) => this.setState({mimin})}
// 		        />
// 	          </Pressable>
// 	        </View>
// 		);
// 	}
	
// } 

export default NotificationButton;

const styles = StyleSheet.create({
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
});