// card.js
import { v4 as uuidv4 } from 'uuid';		// fails with expo
import { SET_CARD, REMOVE_CARD } from './types';

export const setCard = (msg, cardType) => (dispatch) => {
	// const id = uuidv4();		// isued here with uuid
	const id = String(Math.floor(Math.random() * 9000));
	//console.log();
	dispatch({
		type: SET_CARD,
		payload: { msg, cardType, id },
	});

	// Change the value in the setTimout to increase or decrease the time.
	// the default is 10000 = 10 seconds
	// or comment out the code below so the cards stay and are not removed
	
	setTimeout(() => dispatch({ type: REMOVE_CARD, payload: id}),10000);
}