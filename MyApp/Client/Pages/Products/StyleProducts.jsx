import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
  },

  container: {
    width: "100%",
    height: "100vh",
    backgroundColor: "black",
  },

  containerCarrusel: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 40,
    height: 200,
  },

  logoutImage: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginTop: 5,
    marginLeft: 5,
    marginBottom: 6,
  },

  barbersCarruselImage: {
    width: 250,
    height: 180,
    borderRadius: 10,
  },
});

export default styles;
