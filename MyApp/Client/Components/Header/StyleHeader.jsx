import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
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
});

export default styles;
