import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    flexBasis: 0,
    alignItems: "center",
    backgroundColor: "#FFF",
    flexGrow: 1,
    margin: 4,

    borderColor: "#D9D0E3",

    height: 208,
    width: 177,
    borderRadius: 8,
  },

  cardTitle: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 18,
    alignSelf: "flex-start",

    marginLeft: 10,
    marginTop: 5,
  },

  cardImage: {
    height: 140,
    width: 168,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },

  cardAmount: {
    alignSelf: "flex-start",
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
    marginLeft: 10,
    marginTop: 5,

    color: "#9586A8",
  }
});

export default styles;
