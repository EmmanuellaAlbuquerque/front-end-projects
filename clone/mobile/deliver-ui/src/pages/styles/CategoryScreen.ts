import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  CategoryContainer: {
    flex: 1,
    marginTop: 20,
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
  }
});

export default styles;
