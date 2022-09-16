// loginScreen.js
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image, TouchableOpacity } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {currencyList, DAOList} from '../components/dataFile';
import LabelBadge from '../components/labelBadge';


// let currencyData = [
//   {key: 'USD', img: 'ETH'},
//   {key: 'CAD', img: 'canada-flag-icon'},
//   {key: 'Euro', img: 'euro-flag-icon'},
//   {key: 'UK', img: 'uk-flag-icon'},
//   {key: 'ETH', img: 'ethToken'},
//   {key: 'DAI', img: 'daiToken'},
// ];

// // this should be a list of DAO's the user may choose, with badge limage linked to key
// let DAOData = [
//   {key: 'bDAO', img: 'https://tranmer.ca/bcard/img/bLogo.png'},
//   {key: 'MakerDAO', img: 'https://tranmer.ca/bcard/img/daiToken.jpeg'},
//   {key: 'FraxDAO', img: 'https://tranmer.ca/bcard/img/fraxToken.png'},
//   {key: 'ETHDAO', img: 'https://tranmer.ca/bcard/img/ethToken.png'},
// ];



const DAOcurrency = ({ navigation, route }) => {

	const [currency, setCurrency] = React.useState('');	// need to get state
	const [DAO, setDAO] = React.useState('');			// state variables for live display on this page

	// for navigation headers
	React.useLayoutEffect(() => {
	    navigation.setOptions({
	    	headerLeft: () => (

	        <Button onPress={() => navigation.navigate("Home")} title="home" />
	      ),
	      headerRight: () => (

	        <Button onPress={() => navigation.navigate("WalletScreen")} title="wallet" />
	      ),
	      
	    });
	}, [navigation]);

	// storage and retrieval functions for data
	const storeData = async (key,value) => {
	  try {
	  	let jsonStore = JSON.stringify(value);
	  	console.log(jsonStore);

	  	// app storage for accessible data for settings
	    await AsyncStorage.setItem(key, value)
	    console.log('Data successfully saved')

	    // update the state variable for active display
	    if(key === '@currency') {
	    	setCurrency(value)
	    } else if (key === '@dao') {
	    	setDAO(value)
	    }
	    
	  } catch (e) {
	    // saving error
	  }

	  console.log("Done", value);		// ok here
	}

	const getData = async (key) => {
	  try {
	    const value = await AsyncStorage.getItem(key)
	    console.log(key);

	    if(key==='@currency'){
	    	setCurrency(value)
	    } else if(key === '@dao') {
	    	setDAO(value)
	    }

	    if(value !== null) {
	      // value previously stored
	      console.log(value);
	      // return value;
	      // setUserData(value)
	    }
	  } catch(e) {
	    // error reading value
	  }

	  console.log("Data Retrieved");
	}

	// on page load, use retrieval functions to gather the currency and dao data
	useEffect(() => {
	  getData('@currency');
	  getData('@dao');
	}, []);

	// display function for the flatlist itme (currency)
	const renderItem = ({ item }) => {

    	let isSel = item.selected;	// check list data 

    	// console.log(item.key, currency);

    	if(item.key === currency){
    		console.log("This "+item.key+" should be the selected one.");
    		isSel = true;
    	} else {
    		isSel = false;
    	}

    	return (
    		<LabelBadge 
    			itemKey={item.key} 
    			img={item.img} 
    			selected={isSel} 
    			onPress={ () => storeData("@currency",item.key) }
    		/>
    	)
	};

	// display function for the flatlist itme (dao)
	const renderDAOItem = ({ item }) => {

    	let isSel = item.selected;	// check list data 

    	// console.log(item.key, "DAOsel");

    	if(item.key === DAO){
    		console.log("This "+item.key+" should be the selected one.");
    		isSel = true;
    	} else {
    		isSel = false;
    	}

    	return (
    		<LabelBadge 
    			itemKey={item.key} 
    			img={item.img} 
    			selected={isSel} 
    			onPress={ () => storeData("@dao",item.key) }
    		/>
    	)
	 };


	return(
		<View style={styles.container}>			
			<View style={ styles.eachCol }>
				<Text style={styles.subTitle}>Select your primary fiat currency</Text>
				<FlatList
					style={ styles.listStyle }
			        data={currencyList}
			        numColumns={4}
			        renderItem={ renderItem }
			        keyExtractor={(item) => item.key}
			        extraData={ currency }		// set as extra data to handle state values
			      />
		    </View>

		    <View style={ styles.eachCol }>
				<Text style={styles.subTitle}>Select your primary DAO for rewards</Text>
				<FlatList
					style={ styles.listStyle }
			        data={DAOList}
			       	numColumns={4}
			        renderItem={renderDAOItem}
			        extraData={DAO}
			      />
		    </View>

		    <View>
		    	<Button 
        			onPress={() => navigation.navigate("SettingsScreen")} title="go settings"
      			/>
      			<Button onPress= {() => navigation.goBack() } title="back" />
		    </View>

		</View>
	);
}

export default DAOcurrency;

const styles = StyleSheet.create({
	container: {
		flex:1,
		flexDirection: 'column',
		justifyContent:'center',
		alignItems: 'center',
	},
	eachCol: {
		flex:1,
		marginHorizontal: 5,
		justifyContent: 'center'
	},
	subTitle: {
		marginTop: 8,
		fontSize: 16,
		fontWeight: 'bold'
	},
	image: {
		width: 50,
		height: 50,
		borderRadius: 10
	},
	listStyle: {
		flexDirection: "row",
		padding:5,
	},

});