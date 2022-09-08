// sendEmailScreen.js
import React from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';

import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';

import SendEmail from '../components/sendEmail';

// async function sendEmail(to, subject, body, options = {}) {
//     const { cc, bcc } = options;
//     let url = `mailto:${to}`;
//     // Create email link query
//     const query = qs.stringify({
//         subject: subject,
//         body: body,
//         cc: cc,
//         bcc: bcc
//     });
//     if (query.length) {
//         url += `?${query}`;
//         console.log(url);
//     }
//     // check if we can use this link
//     const canOpen = await Linking.openURL(url);
//     if (!canOpen) {
//         throw new Error('Provided URL can not be handled');
//     }
//     return Linking.openURL(url);
// } 

const SendFeedback = () => {
	return(
		<View>
			<Text
				style={{ margin:20 }}
				>Test Buttons to external survey pages & help button</Text>
				<Button
			        title="Feedback URL with the system browser"
			        onPress={() => Linking.openURL('https://tranmer.ca/bcard/feedback')}
			        style={styles.button}
			      />
			      <Button
			        title="Feedback URL with an in-app browser"
			        onPress={() => WebBrowser.openBrowserAsync('https://tranmer.ca/bcard/feedback')}
			        style={styles.button}
			      />
			      <Button
			        title="Quick mailto: send us a question"
			        onPress={() => {
			        	Linking.openURL('mailto: info@banklesscard.xyz')
			        			.catch(error => {
    								console.log(error);
								})
			        }}
			        style={styles.button}
			      />
			      <Text
				style={{ margin:20 }}
				>Sample Buttons - Register Email & Send Email Feedback</Text>
			<Pressable 
              style={ styles.emailButton }
              title="Email Registration/Confirmation"
              onPress={()=>{
              	console.log("Send Email Registration");

              	SendEmail(
				    'tom@tranmer.ca',
				    'Email Registration - Product Marketing',
				    'Please consider this email message as my registration of interest in the Bankless Card project and the confirmation of my desire to receive marketing for this product as it becomes available.',
				 	{ cc: 'help@tomtranmer.com; tom.tranmer@gmail.com; tom.tranmer@live.com' }
				).then(() => {
				    console.log('Your message was successfully sent!');
				});
                
                
              }} >
              <Text style={ styles.emailButtonText }>Register Email</Text>
			</Pressable>

			<Pressable 
              style={ styles.emailButton }
              title="Send Feedback Email"
              onPress={()=>{
              	console.log("Send Feedback Test");

              	SendEmail(
				    'tom@tranmer.ca',
				    'Can we do interactive html?',
				    'This to provide a link to feedback test submission',
				 	{ cc: 'help@tomtranmer.com; tom.tranmer@gmail.com; tom.tranmer@live.com' }
				).then(() => {
				    console.log('Your message was successfully sent!');
				});
                
                
              }} >
              <Text style={ styles.emailButtonText }>Send Feedback</Text>
			</Pressable>
		</View>
	);
}

export default SendFeedback;

const styles = StyleSheet.create({
	layout: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	emailButton: {
		margin: 10,
		padding: 10,
		backgroundColor: "blue",
		borderRadius: 10,

		alignItems: 'center',
		justifyContent: 'center',
	},
	emailButtonText: {
		color: 'white',
		fontWeight: 'bold'
	}
});