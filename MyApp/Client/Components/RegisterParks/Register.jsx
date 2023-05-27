import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  Button,
  Alert,
  Modal,
} from "react-native";
import styles from "./StylesRegister.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import CosmoAndWanda from "../../assets/Images/cosmoAndWanda.jpg";
import axios from "axios";

export default function RegisterPark() {
  const [showModal, setShowModal] = useState(false);
  const [parkList, setParkList] = useState([]);

  const [Data, setData] = useState({
    ParkName: "",
    ParkNeighborhood: "",
    DirectionPark: "",
  });

  const handleSubmit = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(
        "http://192.168.43.148:3003/Parks",
        Data,
        config
      );
      console.log(response.data); // Solo para mostrar en consola la respuesta del servidor
      Alert.alert(
        "Successful registration",
        `The Park ${Data.ParkName} has been registered successfully.`
      );
      setData({ ...Data, ParkName: "" });
      setData({ ...Data, ParkNeighborhood: "" });
      setData({ ...Data, DirectionPark: "" });
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Fatal error try again.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://192.168.43.148:3003/Parks/${id}`);
      Alert.alert("Success", "Park deleted successfully");

      fetchParkList();
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "An error occurred while trying to delete the Park");
    }
  };

  const fetchParkList = async () => {
    try {
      const response = await axios.get("http://192.168.43.148:3003/Parks");
      setParkList(response.data);
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "An error occurred while fetching the Park list.");
    }
  };

  useEffect(() => {
    fetchParkList();
  }, []);

  return (
    <View style={styles.AllContainer}>
      <ImageBackground
        source={CosmoAndWanda}
        style={{ width: "100%", height: "100%", resizeMode: "cover" }}
        blurRadius={8}>
        <Navbar />
        <View style={styles.container}>
          <Text style={styles.TextH1}>Register Park</Text>

          <View>
            <Text style={styles.Text}>Nombre Parque:</Text>
            <TextInput
              value={Data.ParkName}
              onChangeText={(text) => setData({ ...Data, ParkName: text })}
              placeholder='Write name'
            />

            <Text style={styles.Text}>Barrio parque:</Text>
            <TextInput
              value={Data.ParkNeighborhood}
              onChangeText={(text) => {
                setData({
                  ...Data,
                  ParkNeighborhood: text,
                });
              }}
              placeholder='Write Neighborhood'
            />

            <Text style={styles.Text}>Dirección parque:</Text>
            <TextInput
              value={Data.DirectionPark}
              onChangeText={(text) => {
                setData({
                  ...Data,
                  DirectionPark: text,
                });
              }}
              placeholder='Write Direction'
            />

            <Modal
              animationType='slide'
              transparent={true}
              visible={showModal}
              onRequestClose={() => {
                setShowModal(false);
              }}>
              <View style={styles.modalView}>
                <Text style={styles.modalTitle}>Lista de Parques</Text>
                {parkList.map((park) => (
                  <View key={park.ParkId}>
                    <Text style={styles.modalText}>
                      {park.ParkName} - {park.ParkNeighborhood} -{" "}
                      {park.DirectionPark}
                    </Text>

                    <Button
                      title='Eliminar'
                      onPress={() => handleDelete(park.ParkId)}
                    />
                  </View>
                ))}
                <Text>{"\n"}</Text>
                <Button
                  title='Cerrar'
                  onPress={() => {
                    setShowModal(false);
                  }}
                />
              </View>
            </Modal>
            <Text>{"\n"}</Text>
            <Button title='Register' onPress={handleSubmit} />
            <Text>{"\n"}</Text>
            <Button
              title='Ver Parques'
              onPress={() => {
                setShowModal(true);
                fetchParkList();
              }}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
