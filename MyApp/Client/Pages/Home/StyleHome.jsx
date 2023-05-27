import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
  },

  container: {
    backgroundColor: "#16171B",
  },

  homeContainer: {
    height: "100vh",
  },

  companyName: {
    color: "#7e7a7a",
    fontWeight: "bold",
    padding: 20,
    fontFamily: "Times New Roman",
    fontSize: 16,
    width: 200,
  },

  containerHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  containerIcons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 80,
    marginRight: 10,
  },

  notificationImage: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginTop: 5,
    marginLeft: 5,
    marginBottom: 6,
  },

  logoutImage: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginTop: 5,
    marginLeft: 5,
    marginBottom: 6,
  },

  containerNameDate: {
    marginTop: 10,
    height: 120,
    width: "60%",
    borderRadius: 10,
    marginLeft: 10,
  },

  name: {
    color: "#ffffff",
    fontSize: 22,
    marginLeft: 20,
    marginTop: 20,
  },

  greeting: {
    fontWeight: "bold",
    fontSize: 22,
  },

  date: {
    color: "#ffffff",
    fontSize: 14,
    marginLeft: 20,
    marginTop: 5,
  },

  containerCarrusel: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
    height: 200,
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
  },

  theBestText: {
    color: "#7e7a7a",
    marginBottom: 10,
    fontWeight: "bold",
    width: "80%",
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

  barbersCarruselImage: {
    width: 250,
    height: 180,
    borderRadius: 10,
  },
});

export default styles;
