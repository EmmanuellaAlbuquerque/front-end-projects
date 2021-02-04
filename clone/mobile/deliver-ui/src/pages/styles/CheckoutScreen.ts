import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingBottom: 10,

    borderBottomWidth: 1,
    borderColor: "#F6F5F5",

    justifyContent: 'center',
    alignItems: 'center',
	},

	backButton: {
		paddingRight: 20,
		paddingTop: 25,
		paddingBottom: 25,
		paddingLeft: 20,
	},

  backButtonIcon: {
    height: 12,
    width: 6,
  },

  title: {
  	flex: 1,
  	fontFamily: 'SFProText-Semibold',
  	fontSize: 17,
  	color: "#2D0C57",

  	textAlign: 'center',
  	padding: 20,
		marginRight: 40,
  },

  checkoutDetails: {
    margin: 20,
  },

  detailsBox: {
  	marginBottom: 30,
  },

  modifyBox: {
  	flexDirection: 'row',
  	justifyContent: 'space-between',
  },

  personalBox: {
  	flexDirection: 'row',
  	marginTop: 30,
  },

  checkoutDetailsText: {
		color: "#2D0C57",
		fontFamily: 'SFProText-Bold',
		fontSize: 22,
  },

  button: {
  	color: "#7203FF",
  	fontFamily: 'SFProText-Semibold',
  	fontSize: 15,
  },

  icon: {
  	height: 24,
  	width: 24,
  	marginRight: 20,
  },

  personalContent: {
  	color: "#9586A8",
  	fontFamily: 'SFProText-Regular',
  	fontSize: 17,
  },
});

export default styles;
