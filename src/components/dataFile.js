import React from 'react';

// this should be a list of eligibile currencies to select from for the end user
// the img is determined programatically based on symbol and is not required here.
export const currencyList = [
  {key: 'USD', img: 'ETH'},
  {key: 'CAD', img: 'canada-flag-icon'},
  {key: 'Euro', img: 'euro-flag-icon'},
  {key: 'UK', img: 'uk-flag-icon'},
  {key: 'ETH', img: 'ethToken'},
  {key: 'DAI', img: 'daiToken'},
];

// this should be a list of DAO's the user may choose, with badge limage linked to key
export const DAOList = [
  {key: 'bDAO'},
  {key: 'MakerDAO'},
  {key: 'FraxDAO'},
  {key: 'ETHDAO'},
];

// Mapping of symbol (key) to image file require is handled in constants file currently

export const TokenList = [
  {key: 'BSC', name: 'Binance', balance:'6366', img: 'bscToken.png' },
  {key: 'ETH', name: 'Ethereum', balance:'2.34', img: 'ethToken.png' },
  {key: 'BANK', name: 'BanklessDAO', balance:'35000', img: 'daoToken.png' },
];
