//DeckOfCards.js
import React from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { setCard } from '../actions/card';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useState } from 'react';

const App = ({ setCard, cards }) => {
	const [cardRandomNum, setCardRandomNum] = useState(1);
	const [card] = useState(['spade','heart','diamond','club']);
	const [cardTypeOutput, setCardTypeOutput] = useState('spade');

	const btnHandleClick = () => {
		// Math.floor(Math.random() * 13 + 1) for full deck
		setCardRandomNum( Math.floor(Math.random() * 3 + 1));
		console.log(cardRandomNum);

		const cardType = [Math.floor(Math.random() * card.length)];

		setCardTypeOutput(card[cardType]);
		console.log(cardTypeOutput);

		setCard(cardRandomNum,cardTypeOutput);
		console.log(cards);
	};

	return (
		<View style={styles.appContainer}>
			<View style={styles.appHeading}>
				<View>
					<Text style={styles.heading}>Deck of Cards</Text>
				</View>
				<View style={{ marginTop: 50 }}>
					<TouchableOpacity onPress={btnHandleClick}>
						<Text style={styles.cardBtn}>Place Cards</Text>
					</TouchableOpacity>
				</View>
			</View>
            <View style={{ height: 100 }}>
    			<View style={styles.appMain}>
    				<View>
    					<FlatList
    						numColumns={11}
    						keyExtractor={(card) => card.id}
    						data={cards}
    						renderItem={({ item }) => {
    							let cardTypeGraphic = '';
    							let cardColorType = '';

    							const spade = {
    								one: {
                                        graphic: '🂡',
                                    },
                                    two: {
                                        graphic: '🂢',
                                    },
                                    three: {
                                        graphic: '🂣',
    								},
    							};

    							const heart = {
    								one: {
                                        graphic: '🂡',
                                    },
                                    two: {
                                        graphic: '🂢',
                                    },
                                    three: {
                                        graphic: '🂣',
                                    },
    							};

    							const diamond = {
    								one: {
                                        graphic: '🂡',
                                    },
                                    two: {
                                        graphic: '🂢',
                                    },
                                    three: {
                                        graphic: '🂣',
                                    },
    							};

    							const club = {
    								one: {
                                        graphic: '🂡',
                                    },
                                    two: {
                                        graphic: '🂢',
                                    },
                                    three: {
                                        graphic: '🂣',
                                    },
    							};

    							if (item.cardType === 'spade' && item.msg === 1) {
                                    cardTypeGraphic = spade.one.graphic;
                                    cardColorType = 'black';
                                } else if (item.cardType === 'spade' && item.msg === 2) {
                                    cardTypeGraphic = spade.two.graphic;
                                    cardColorType = 'black';
                                } else if (item.cardType === 'spade' && item.msg === 3) {
                                    cardTypeGraphic = spade.three.graphic;
                                    cardColorType = 'black';
                                } else if (item.cardType === 'heart' && item.msg === 1) {
                                    cardTypeGraphic = heart.one.graphic;
                                    cardColorType = 'red';
                                } else if (item.cardType === 'heart' && item.msg === 2) {
                                    cardTypeGraphic = heart.two.graphic;
                                    cardColorType = 'red';
                                } else if (item.cardType === 'heart' && item.msg === 3) {
                                    cardTypeGraphic = heart.three.graphic;
                                    cardColorType = 'red';
                                } else if (item.cardType === 'diamond' && item.msg === 1) {
                                    cardTypeGraphic = diamond.one.graphic;
                                    cardColorType = 'red';
                                } else if (item.cardType === 'diamond' && item.msg === 2) {
                                    cardTypeGraphic = diamond.two.graphic;
                                    cardColorType = 'red';
                                } else if (item.cardType === 'diamond' && item.msg === 3) {
                                    cardTypeGraphic = diamond.three.graphic;
                                    cardColorType = 'red';
                                } else if (item.cardType === 'club' && item.msg === 1) {
                                    cardTypeGraphic = club.one.graphic;
                                    cardColorType = 'black';
                                } else if (item.cardType === 'club' && item.msg === 2) {
                                    cardTypeGraphic = club.two.graphic;
                                    cardColorType = 'black';
                                } else if (item.cardType === 'club' && item.msg === 3) {
                                    cardTypeGraphic = club.three.graphic;
                                    cardColorType = 'black';
                                }

                                return (
                                	<View>
                                		{cards.length <= 0 ? (
                                			<View>
                                				<Text></Text>
                                			</View>
                                		) : (
                                			<View style={styles.cardContainer}>
                                				<View style={styles.card}>
                                					<View>
                                						<Text
                                							style={{
                                								marginLeft: -3,
                                								// may need to change top
                                								marginTop: 0,
                                								padding: 0,
                                								fontSize: 60,
                                								color: `${cardColorType}`,
                                							}}
                                						>
                                							{cardTypeGraphic}
                                						</Text>
                                					</View>
                                				</View>
                                			</View>
                                		)}
                                	</View>

                                );		// end return

    						}}
    					/>
    				</View>
    			</View>
            </View>
		</View>
	);
};

const styles = StyleSheet.create({
    appContainer: {
        backgroundColor: '#4f8a82',
        height: '100%',
        width: '100%',
    },
    appHeading: {
        marginTop: 50,
    },
    heading: {
        textTransform: 'uppercase',
        color: '#ffffff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
    },
    cardBtn: {
        backgroundColor: '#284743',
        textAlign: 'center',
        color: '#ffdd07',
        textTransform: 'uppercase',
        padding: 20,
        fontWeight: 'bold',
        borderWidth: 2,
        borderColor: '#ffdd07',
    },
    appMain: {
        marginTop: 50,
        marginBottom: 50,
        height: '100%',
        borderColor: '#943807',
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderTopWidth: 10,
        borderBottomWidth: 10,
        padding: 10,
    },
    flatlist: {
        flexDirection: 'column',
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf: 'baseline',
    },
    card: {
        backgroundColor: '#ffffff',
        shadowColor: 'rgba(199, 199, 199, 1)',
        height: 46,
        width: 35,
    },
});

App.propTypes = {
	setCard: PropTypes.func.isRequired,
	cards: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
	cards: state.card,
});

export default connect(mapStateToProps, { setCard })(App);








