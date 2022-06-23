//card.js
import { SET_CARD, REMOVE_CARD } from '../actions/types';

const initialState = [];

export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case SET_CARD:
			return [...state, payload];
		case REMOVE_CARD:
			return state.filter((card) => card.id !== payload);
		default:
			return state;
	}
}