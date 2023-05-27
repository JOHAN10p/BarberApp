import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    height: 60,
    zIndex: 99,
  },

  containerNavbar: {
    backgroundColor: "#000000a0",
    color: "red",
    height: "100%",
    flex: 1,
    justifyContent: "space-around",
  },

  containerAllItems: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  barberImage: {
    width: 45,
    height: 45,
    resizeMode: "contain",
    marginTop: 5,
    marginLeft: 5,
  },

  ClientImage: {
    width: 48,
    height: 48,
    resizeMode: "contain",
    marginTop: 5,
  },

  productImage: {
    width: 45,
    height: 45,
    resizeMode: "contain",
    marginTop: 5,
  },

  reservationImage: {
    width: 45,
    height: 45,
    resizeMode: "contain",
    marginTop: 5,
    marginRight: 5,
  },
});

export default styles;
