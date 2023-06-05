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

  barberImage: {
    width: "100%",
    height: 300,
    position: "absolute",
    top: -80,
    zIndex: -1,
  },

  containerNameBarber: {
    backgroundColor: "#00000060",
    marginTop: 140,
    height: 80,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },

  nameBarber: {
    marginLeft: 20,
    marginTop: 30,
    fontSize: 18,
    fontFamily: "times new roman",
    color: "white",
    textAlign: "center",
  },

  containerCards: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: -10,
  },

  cards: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 50,
    backgroundColor: "white",
    marginLeft: 20,
    borderRadius: 10,
    backgroundColor: "#00000060",
    marginTop: 40,
  },

  textCards: {
    fontFamily: "arial",
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default styles;
