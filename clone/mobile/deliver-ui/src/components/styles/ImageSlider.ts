import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollContainer: {
    alignItems: "center",
    justifyContent: "center"
  },

  itemImage: {
    flex: 1,
  },

  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },

  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    position: 'absolute',
    bottom: 0,
    marginBottom: 90,
  },

  image: {
    width: windowWidth, 
    height: windowHeight/2,
  },
});

export default styles;
