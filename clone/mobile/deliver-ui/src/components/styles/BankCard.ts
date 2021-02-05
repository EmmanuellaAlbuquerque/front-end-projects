import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	card: {
		backgroundColor: "#B993D6",
		borderRadius: 8,
		marginTop: 20,
		marginBottom: 20,

		shadowOffset: { width: 0, height: 12 },
		shadowColor: 'rgba(184, 148, 215, 0.35)',
		shadowRadius: 40,
	},

	bcSymbol: {
		width: 64.71,
		height: 40,
		alignSelf: 'flex-end',
		marginTop: 30,
		marginRight: 30,
	},

	textDetails: {
		fontFamily: 'SFProDisplay-Medium',

		color: "#fff",

		textShadowOffset: { width:  0.701049, height: 0},
		textShadowColor: 'rgba(77, 5, 169, 0.3)',
		textShadowRadius: 3,
	},

	cardDetails: {
		flexDirection: 'row',
		justifyContent: 'space-around',

		marginTop: 40,
		marginBottom: 30,
	},

	cardNumber: {
		fontSize: 26,

		textAlign: 'center',
		marginTop: 20,
	},

	nameOnCard: {
		fontSize: 20,
	},

	expiryDate: {
		fontSize: 20,
	},
});

export default styles;
