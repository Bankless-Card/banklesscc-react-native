// new firebase login screen
import React,{ useState, useEffect } from 'react';
import { StyleSheet, KeyboardAvoidingView, TouchableOpacity, Text, TextInput, View } from 'react-native';
//navigation
import { useNavigation } from '@react-navigation/native';

import { colors } from '../components/constants';

//login
import { auth } from '../../firebase';

const LoginScreen = () => {
	// gather credentials from current state
	const [email,setEmail] = useState('');
	const [password,setPassword] = useState('');

	const navigation = useNavigation();	

	// listener for previously logged in
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(user => {
			if(user){
				navigation.navigate("BanklessCC");
			}
		})

		return unsubscribe;
	}, []);

	const handleSignup = () => {
		auth
			.createUserWithEmailAndPassword(email, password)
			.then(userCredentials => {
				const user = userCredentials.user
				console.log("Registered User: ", user.email);
			})
			.catch(error => alert(error.message))
	}

	const handleLogin = () => {
		auth
			.signInWithEmailAndPassword(email, password)
			.then(userCredentials => {
				const user = userCredentials.user
				console.log("Logged in with:", user.email);
				navigation.navigate("BanklessCC");
			})
			.catch(error => alert(error.message))
	}

	return(
		<KeyboardAvoidingView
			style={ styles.container }
			behaviour="padding"
		>
			<Text style={ styles.title }>Bankless CC Login</Text>
			<View style={ styles.inputContainer }>
				<TextInput
					placeholder="email"
					value={ email }
					onChangeText={ text => setEmail(text) }
					style={styles.input}
				/>
				<TextInput
					placeholder="password"
					value={ password }
					onChangeText={ text => setPassword(text) }
					style={styles.input}
					secureTextEntry
				/>
			</View>

			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={ [styles.buttonOutline, styles.button] }
					onPress={ handleLogin }
				>
					<Text style={styles.buttonText}>Login</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={ [styles.button, styles.buttonOutline] }
					onPress={ handleSignup }
				>
					<Text style={styles.buttonOutlineText}>Register</Text>
				</TouchableOpacity>
			</View>

			<View>
				<TouchableOpacity
			        onPress={()=> navigation.navigate('Forgot')}>
			        <Text style={styles.forgot_button}>Forgot Password?</Text>
			    </TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	);
}

export default LoginScreen;

// basic anonymous function


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.BANK_BLACK,		// BANK_BLACK 
	},
	title: {
		color: colors.BANK_ASHL,			// BANK_ASHL
		fontSize: 24,
		marginVertical: 10,
		// justifySelf: 'center',
	},
	inputContainer: {
		width: '80%',
		// justifyContent: 'flex-start',
		marginTop: 40,
	},
	input: {
		backgroundColor: 'white',
		paddingHorizontal: 15,
		paddingVertical: 10,
		marginTop: 5,
		borderRadius: 5,
	},
	buttonContainer: {
		width: '60%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		width: '100%',
		alignItems: 'center',
		backgroundColor: colors.BANK_RED,		// BANK_RED
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 5,
		marginTop: 10,
	},
	forgot_button: {
	  height: 30,
	  marginBottom: 20,
	  marginTop: 30,
	  color: 'white'
	},
	buttonOutline: {
		backgroundColor: 'white',
		borderColor: colors.BANK_RED,		// BANK_RED
		borderWidth: 3,
	},
	buttonText: {
		color: 'white',
		fontWeight: 'bold',
	},
	buttonOutlineText: {
		color: 'black',
		fontWeight: 'bold',
	}
});