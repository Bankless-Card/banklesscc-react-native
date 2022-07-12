// loginScreen.js
import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

const DAOcurrency = () => {
	return(
		<View style={styles.container}>			
			<View style={ styles.eachCol }>
				<Text style={styles.subTitle}>Select your primary fiat currency</Text>
				<FlatList
		        data={[
		          {key: 'USD', img: 'https://tranmer.ca/bcard/img/usd-badge.png', selected: true},
		          {key: 'CAD', img: 'https://tranmer.ca/bcard/img/usd-badge.png'},
		          {key: 'Euro', img: 'https://tranmer.ca/bcard/img/usd-badge.png'},
		          {key: 'UK', img: 'https://tranmer.ca/bcard/img/usd-badge.png'},
		          {key: 'ETH', img: 'https://tranmer.ca/bcard/img/ethToken.png'},
		          {key: 'DAI', img: 'https://tranmer.ca/bcard/img/daiToken.jpeg'},
		        ]}
		        renderItem={({item}) => {
		        	console.log(item);
		        	return (
		        	<View style={ [styles.itemView, item.selected ? styles.selected : ""] }>
			        	<Image 
				            style={{ width: 50, height: 50 }}
				            source={{ uri: item.img }}
				          />
			        	<Text style={[styles.item, item.selected ? styles.textSelected : ""]}>{item.key}</Text>
			        </View>
		        	)}
		    	}
		      />
		    </View>
		    <View style={ styles.eachCol }>
				<Text style={styles.subTitle}>Select your primary DAO for rewards</Text>
				<FlatList
		        data={[
		          {key: 'bDAO', img: 'https://tranmer.ca/bcard/img/bLogo.png', selected: true},
		          {key: 'MakerDAO', img: 'https://tranmer.ca/bcard/img/daiToken.jpeg'},
		          {key: 'FraxDAO', img: 'https://tranmer.ca/bcard/img/fraxToken.png'},
		          {key: 'ETHDAO', img: 'https://tranmer.ca/bcard/img/ethToken.png'},
		        ]}
		        renderItem={({item}) => {
		        	console.log(item);
		        	return (
		        	<View style={ [styles.itemView, item.selected ? styles.selected : ""] }>
			        	<Image 
				            style={ styles.image }
				            source={{ uri: item.img }}
				          />
			        	<Text style={[styles.item, item.selected ? styles.textSelected : ""]}>{item.key}</Text>
			        </View>
		        	)}
		    	}
		      />
		    </View>
		</View>
	);
}

export default DAOcurrency;

const styles = StyleSheet.create({
	container: {
		flex:1,
		flexDirection: 'row',
		justifyContent:'center',
		alignItems: 'center',
	},
	eachCol: {
		flex:1,
		marginHorizontal: 5,
		justifyContent: 'center'
	},
	subTitle: {
		fontSize: 16,
		fontWeight: 'bold'
	},
	image: {
		width: 50,
		height: 50,
	},
	itemView: {
		width: '100%',
		alignItems: 'center',
		borderRadius: 8
	},
	item: {
		textAlign: 'center',
	},
	selected: {
		backgroundColor: 'green',
	},
	textSelected: {
		color: 'white'
	}
});