import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A259FF",
  },

  background: {
    flex: 1,
  },

  backdropTop: {
    marginTop: 63,
    marginLeft: 20,
    height: "30%",
  },

  backdropBase: {
    flex: 1,
    backgroundColor: "#F6F5F5",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,

    justifyContent: "center",
  },

  title: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 34,
    textAlign: "center",
    marginBottom: 20,
  },

  text: {
    fontFamily: 'SFProText-Regular',
    fontSize: 17,
    textAlign: "center",
    color: "#9586A8",
    marginBottom: 20,
  },

  logo: {
    width: 100,
    height: 100,
  },

  box: {
    marginTop: 20,
    alignSelf: "center",
  },

  buttonsContainer: {
    margin: 10,
  },

  button: {
    marginBottom: 10,
    alignItems: "center",
    backgroundColor: "#0BCE83",
    padding: 15,
    borderRadius: 8,
    height: 56,
  },

  dismissButton: {
    backgroundColor: "#F6F5F5",
  },

  buttonText: {
    fontFamily: 'SFProText-Semibold',
  },

  orderButtonText: {
    color: "#FFFFFF",
  },

  dismissButtonText: {
    color: "#9586A8",
  },

  textContainer: {
    margin: 20,
  }
});

export default styles;

