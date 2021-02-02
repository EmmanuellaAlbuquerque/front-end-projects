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
  	backgroundColor: "#fff",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,

    position: 'absolute',
    marginTop: windowHeight/2.5,
    // height: windowHeight,
  },

  icon: {
    width: 20,
    height: 20,
  },

  actionButtonsContainer: {
  	flexDirection: 'row',
  },

  priceDetails: {
  	flexDirection: 'row',
  },
});

export default styles;
