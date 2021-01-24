import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		margin: 20,
		flex: 1,
	},

	backButton: {
		marginTop: 50,
		height: 12,
		width: 6,
	},

  title: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 34,
    marginTop: 20,
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

  CategoriesContainer: {
    flex: 1,
    marginTop: 20,
  },
});

export default styles;
