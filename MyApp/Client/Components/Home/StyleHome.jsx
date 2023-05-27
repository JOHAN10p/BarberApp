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
    color: "#ffffff",
    padding: 20,
    fontFamily: "Times New Roman",
    fontSize: 20,
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
    marginTop: 40,
    height: 120,
    width: "60%",
    backgroundColor: "#0000002b",
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
    backgroundColor: "#0000002b",
    marginTop: 12,
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
    backgroundColor: "#ffffff",
    width: "80%",
    height: "65%",
    borderRadius: 15,
  },
});

export default styles;
