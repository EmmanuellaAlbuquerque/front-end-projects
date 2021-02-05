import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	label: {
		color: "#9586A8",
		fontFamily: 'SFProText-Regular',
		fontSize: 14,

		marginLeft: 15,
		marginBottom: 5,
	},

	takeAPhotoIcon: {
		width: 34,
		height: 29,

		alignSelf: 'center',
	},

	textInput: {
		flex: 1,
	},

	rawInput: {
		flex: 1,
		backgroundColor: "#fff",
		height: 48,
		paddingLeft: 20,

		borderRadius: 8,
		borderWidth: 1,
		borderColor: '#D9D0E3',

		fontFamily: 'SFProText-Regular',
		fontSize: 17,
		color: "#2D0C57",

		marginBottom: 20,
	},

	rawInputWithIcon: {
		flex: 1,

		fontFamily: 'SFProText-Regular',
		fontSize: 17,
		color: "#2D0C57",

		height: 48,
	},

	columnInput: {
		flexDirection: 'row',
		flex: 1,
	},

	columnStyle: {
		flex: 1,
		marginRight: 10,
	},

	button: {
		backgroundColor: "#0ACF83",

		justifyContent: 'center',
		height: 56,

		borderRadius: 8,
	},

	bcSymbol: {
		width: 32.35,
		height: 20,
	},

	inputWithIcon: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		alignContent: 'center',

		backgroundColor: "#fff",
		paddingLeft: 20,
		paddingRight: 10,

		borderRadius: 8,
		borderWidth: 1,
		borderColor: '#D9D0E3',
		marginBottom: 20,
	},

	buttonText: {
		fontFamily: 'SFProText-Semibold',
		color: "#fff",
		fontSize: 15,
		textTransform: 'uppercase',

		textAlign: 'center',
	},

	hint: {
		width: 36,
		height: 26,

		borderWidth: 2,
		borderColor: "#D9D0E3",
		borderRadius: 5,
	},
});

export default styles;
