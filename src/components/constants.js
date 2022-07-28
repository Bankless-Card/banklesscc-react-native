import React from 'react';
// colors
export const colors = {
	BANK_ORCHID:'#6D29FE',
	BANK_RED: '#D02128',   // primary red
	BANK_BLACK:  '#111111',
	BANK_ASH: '#4F4F4F',
	BANK_ASH2: '#313131',
	BANK_ASHL: '#A3A3A3',  // ash light
	BANK_WHITE: '#EEEEEE', //
};

// badge icons for tokens, DAOs
export const ICONS = {
	USD_ICO: require('../assets/img/usd-badge.png'),
	CAD_ICO: require('../assets/img/canada-flag-icon.png'),
	EUR_ICO: require('../assets/img/euro-flag-icon.png'),
	EUK_ICO: require('../assets/img/uk-flag-icon.png'),
	ETH_ICO: require('../assets/img/ethToken.png'),
	DAI_ICO: require('../assets/img/daiToken.jpeg'),
	BANK_ICO: require('../assets/img/bLogo.png'),
  	MKR_ICO: require('../assets/img/daiToken.png'),
  	FRAX_ICO: require('../assets/img/fraxToken.png'),
};

// icons from the constants file are mapped here from the supplied Key
export function getImageFromSymbol(symbol) {

	let imgSource;

	switch(symbol) {
	    case 'ETH': return ICONS.ETH_ICO;
	      // imgSource = ICONS.ETH_ICO;
	      // break;
	    case 'CAD': return ICONS.CAD_ICO;
	    case 'USD': return ICONS.USD_ICO;
	    case 'DAI': return ICONS.DAI_ICO;
	    case 'Euro': return ICONS.EUR_ICO;
	    case 'UK': return ICONS.EUK_ICO;
	    case 'bDAO': return ICONS.BANK_ICO;
	    case 'MakerDAO': return ICONS.MKR_ICO;
	    case 'FraxDAO': return ICONS.FRAX_ICO;
	    case 'ETHDAO': return ICONS.ETH_ICO;
	}

	// default
	return ICONS.BANK_ICO;
}

// export default colors;