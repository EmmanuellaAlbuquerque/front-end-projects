import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
    flex: 1,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
	},

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  backButton: {
    marginTop: 50,
    height: 12,
    width: 6,
  },

  button: {
    flex: 1,
    paddingBottom: 15,
  },

  cover: {
    width: 210,
    height: 209,
    position: 'absolute',
    right: 1,

    justifyContent: "flex-end",
  },

  title: {
    fontFamily: 'SFProDisplay-Bold',
    color: "#2D0C57",
    fontSize: 34,
    marginTop: 10,
  },

  searchInput: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingLeft: 10,

		height: 45,
    borderWidth: 0,
  },

  searchIcon: {
  	height: 24,
  	width: 24,

  	marginLeft: 20,
  },

  searchContainer: {
  	marginTop: 30,
  	flexDirection: 'row',
  	justifyContent: 'center',
  	alignItems: 'center',
  	backgroundColor: '#FFF',
  },

  searchShape: {
  	height: 48,
    borderWidth: 1,
    borderRadius: 27,
    borderColor: "#D9D0E3",
  },
});

export default styles;
