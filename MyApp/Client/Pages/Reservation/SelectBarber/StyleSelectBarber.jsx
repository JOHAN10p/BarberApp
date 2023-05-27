import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
  },

  containerTheBestBarber: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    height: 100,
  },

  theBestBarber: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffffa2",
    width: "90%",
    height: "65%",
    borderRadius: 15,
    /* backdropFilter: "blur(10px)", // ajusta el valor de blur según tus preferencias */
  },

  theBestImage: {
    width: 55,
    height: 55,
    marginLeft: 10,
    borderRadius: 10,
  },

  ratingImage: {
    width: 15,
    height: 15,
    marginTop: 5,
  },

  containerRating: {
    fontWeight: "bold",
  },

  buttonView: {
    marginLeft: 25,
    backgroundColor: "black",
    width: 60,
    height: 35,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    borderRadius: 10,
    fontSize: 14,
  },

  theBestName: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;
