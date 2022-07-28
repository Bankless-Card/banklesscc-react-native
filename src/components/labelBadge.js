import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import {ICONS, getImageFromSymbol} from '../components/constants';

const LabelBadge = ({itemKey, selected, img, onPress}) => {
	// use helper funtion from constants to translate symybol (Key) to require statement to include image
	let imgSource = getImageFromSymbol(itemKey) ;
	// console.log(imgSource);

	return (
		<TouchableOpacity onPress={onPress}>
			<View style={ [styles.itemView, selected ? styles.selected : ""] }>
				<View style={{ borderRadius: 20 }}>
			    	<Image 
			            style={ styles.image }
			            source={ imgSource }		// uri: img
			        />
		        </View>
		    	<Text style={[styles.item, selected ? styles.textSelected : ""]}>{itemKey}</Text>
		    </View>
		</TouchableOpacity>
	)
}

export default LabelBadge;

const styles = StyleSheet.create({
	image: {
		width: 50,
		height: 50,
	},
	itemView: {
		width: '100%',
		alignItems: 'center',
		borderRadius: 8,
		padding: 8
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