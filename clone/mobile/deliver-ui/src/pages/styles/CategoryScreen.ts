import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  CategoryContainer: {
    flex: 1,
    marginTop: 20,
  },

  chipsList: {
    paddingBottom: 30,
  },

  scrollHorizontal: {
    marginBottom: 20
  },

  // selected box
  item: {
  	padding: 10,
  	paddingLeft: 15,
  	paddingRight: 15,

    marginTop: 20,
    marginRight: 10,

    borderRadius: 24,

    flexDirection: 'row',
  },

  rootName: {
  	fontSize: 14,
  	lineHeight: 22,
    letterSpacing: -0.41,
    textAlign: 'center',
  },

  name: {
    color: "#9586A8",
    fontFamily: 'SFProText-Regular',
  },

  nameSelected: {
  	color: "#6C0EE4",
  	fontFamily: 'SFProText-Medium',
  },

  check: {
  	width: 24,
  	height: 24,
  	marginRight: 8,

  	alignSelf: 'center',
  },

  // data list
  picture: {
    width: 177,
    height: 128,
    borderRadius: 8,
    marginRight: 15,
  },

  dataContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  dataName: {
    color: "#2D0C57",
    fontFamily: 'SFProText-Semibold',
    fontSize: 18,
    marginBottom: 5,
  },

  dataInfo: {
    flexDirection: 'row',
    marginBottom: 12,
  },

  price: {
    color: "#2D0C57",
    fontSize: 22,
    alignSelf: 'center',
    marginRight: 2,
  },

  measure: {
    fontFamily: 'SFProText-Regular',
    fontSize: 16,
    color: "#9586A8",
    alignSelf: 'center',
  },

  icon: {
    width: 20,
    height: 20,
  },

  button: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 26,
    paddingRight: 26,

    marginRight: 10,
    borderRadius: 8,
  },

  heartButton: {
    borderWidth: 1,
    borderColor: "#D9D0E3",
    backgroundColor: "#FFF",
  },

  whiteShoppingCartButton: {
    backgroundColor: "#0BCE83",
  },

  data: {
    justifyContent: 'space-between',
  },
});

export default styles;
