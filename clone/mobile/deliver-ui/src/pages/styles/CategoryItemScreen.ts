import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
	itemContainer: {
		flex: 1,
	},

  button: {
  	// backgroundColor: "#ff0000",
  	position: 'absolute',
  	zIndex: 1,
  },

  backButton: {
    marginTop: 50,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 50,
    height: 12,
    width: 6,
  },

  detailsContainer: {
  	flex: 1,

  	backgroundColor: "#F6F5F5",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,

    position: 'absolute',
    marginTop: windowHeight/2.5,
    height: windowHeight,
  },

  icon: {
    width: 20,
    height: 20,
  },

  textContentContainer: {
  	margin: 20,
  },

  actionButtonsContainer: {
  	flexDirection: 'row',

  	justifyContent: 'center',
  	alignItems: 'center',

  	marginTop: 10,
  },

  priceDetails: {
  	flexDirection: 'row',
  	alignItems: 'center',

  	marginTop: 20,
  },

  name: {
  	fontSize: 30,
  	fontFamily: 'SFProDisplay-Bold',

  	marginTop: 10,
  	color: "#2D0C57",
  },

  price: {
  	fontSize: 32,
  	fontFamily: 'SFProText-Bold',
  	marginRight: 10,
  	color: "#2D0C57",
  },

  measure: {
  	fontSize: 24,
  	fontFamily: 'SFProText-Regular',
  	color: "#9586A8",
  },

  approximation: {
  	fontFamily: 'SFProText-Medium',
  	fontSize: 17,
  	color: "#06BE77",

  	marginTop: 10,
  },

  title: {
  	fontFamily: 'SFProText-Bold',
  	fontSize: 22,

  	marginTop: 20,
  	color: "#2D0C57",	
  },

  description: {
  	fontFamily: 'SFProText-Regular',
  	color: "#9586A8",
  	fontSize: 17,

  	marginTop: 10,
  	marginBottom: 10,
  },

  heart: {
  	paddingTop: 20,
  	paddingBottom: 20,
  	paddingRight: 29,
  	paddingLeft: 29,
  	
  	backgroundColor: "#fff",
  	borderRadius: 8,

  	marginRight: 20,
  },

  whiteShoppingCart: {
  	paddingTop: 20,
  	paddingBottom: 20,
  	paddingRight: 67.5,
  	paddingLeft: 67.5,

  	flexDirection: 'row',
  	justifyContent: 'center',
  	alignItems: 'center',

  	backgroundColor: "#0BCE83",
  	borderRadius: 8,
  },

  whiteShoppingCartText: {
  	color: "#fff",
  	fontSize: 15,
  	fontFamily: 'SFProText-Semibold',

  	marginLeft: 10,
  },
});

export default styles;
