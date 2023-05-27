import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  AllContainer: {
    width: "100%",
    height: "100%",
  },

  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  TextH1: {
    color: "#ffff",
    fontSize: 24,
    marginTop: 100,
    fontWeight: "bold",
  },

  containerInputs: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    maxHeight: 200,
    width: "100%",
  },

  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#ffff",
    textAlign: "center",
  },

  input: {
    width: 200,
    height: 40,
    borderWidth: 2,
    borderColor: "#ff7514",
    paddingHorizontal: 10,
    borderRadius: 10,
    color: "#ffff",
  },

  result: {
    color: "#ffff",
    fontSize: 20,
    fontWeight: "bold",
    width: "100%",
    textAlign: "center",
  },

  resultContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#ff571475",
    width: "80%",
    maxHeight: 100,
    textAlign: "center",
    borderRadius: 50,
  },

  Text: {
    color: "white",
  },
  containerDrop: {
    marginTop: 10,
    backgroundColor: "blue",
    height: 100,
    padding: 20,
    marginBottom: 10,
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default styles;
