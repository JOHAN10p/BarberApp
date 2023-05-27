import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  Button,
  Alert,
  Modal,
  ScrollView,
} from "react-native";
import styles from "./StylesRegister.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import CosmoAndWanda from "../../assets/Images/cosmoAndWanda.jpg";
import axios from "axios";

export default function RegisterCharacter() {
  const [boolDropList, setBoolDropList] = useState(false);
  const [selectedChurchId, setSelectedChurchId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [churchList, setChurchList] = useState([]);

  const [Data, setData] = useState({
    ChurchName: "",
    ChurchCapacity: "",
    ChurchType: "",
  });

  const handleSubmit = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(
        "http://192.168.43.148:3003/RegisterChurch",
        Data,
        config
      );
      console.log(response.data); // Solo para mostrar en consola la respuesta del servidor
      Alert.alert(
        "Successful registration",
        `The Church ${Data.ChurchName} has been registered successfully.`
      );
      setData({ ...Data, ChurchName: "" }); // Limpiar el campo de nombre después de enviar el formulario
      setData({ ...Data, ChurchCapacity: "" }); // Limpiar el campo de nombre después de enviar el formulario
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Fatal error try again.");
    }
  };

  /* console.log(Data); */

  const determineChurchType = (capacity) => {
    let type = "";

    if (capacity > 300) {
      type = "Catedral";
    } else if (capacity >= 100 && capacity <= 299) {
      type = "Iglesia Parroquial";
    } else if (capacity < 100) {
      type = "Capilla";
    }

    return type;
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://192.168.43.148:3003/RegisterChurch/${id}`);
      Alert.alert("Success", "Church deleted successfully");

      fetchChurchList();
    } catch (error) {
      console.error(error);
      Alert.alert(
        "Error",
        "An error occurred while trying to delete the church"
      );
    }
  };

  const fetchChurchList = async () => {
    try {
      const response = await axios.get(
        "http://192.168.43.148:3003/RegisterChurch"
      );
      setChurchList(response.data);
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "An error occurred while fetching the church list.");
    }
  };

  useEffect(() => {
    fetchChurchList();
  }, []);

  return (
    <View style={styles.AllContainer}>
      <ImageBackground
        source={CosmoAndWanda}
        style={{ width: "100%", height: "100%", resizeMode: "cover" }}
        blurRadius={8}>
        <Navbar />
        <View style={styles.container}>
          <Text style={styles.TextH1}>Register Church</Text>

          <View>
            <Text style={styles.Text}>Nombre iglesia:</Text>
            <TextInput
              value={Data.ChurchName}
              onChangeText={(text) => setData({ ...Data, ChurchName: text })}
              placeholder='Write name'
            />

            <Text style={styles.Text}>capacidad iglesia:</Text>
            <TextInput
              value={Data.ChurchCapacity}
              onChangeText={(text) => {
                setData({
                  ...Data,
                  ChurchCapacity: text,
                  ChurchType: determineChurchType(text),
                });
              }}
              placeholder='Write capacity'
            />
            <Text>{"\n"}</Text>

            {boolDropList && (
              <View style={styles.containerDrop}>
                <Text
                  onPress={() => setData({ ...Data, IdTypeFlight: 1 })}
                  style={styles.Text}>
                  Nacional
                </Text>
                <Text
                  onPress={() => setData({ ...Data, IdTypeFlight: 2 })}
                  style={styles.Text}>
                  Internacional
                </Text>
                <Text
                  onPress={() => setData({ ...Data, IdTypeFlight: 3 })}
                  style={styles.Text}>
                  Ambos
                </Text>
              </View>
            )}

            <Modal
              animationType='slide'
              transparent={true}
              visible={showModal}
              onRequestClose={() => {
                setShowModal(false);
              }}>
              <View style={styles.modalView}>
                <Text style={styles.modalTitle}>Lista de Iglesias</Text>
                {churchList.map((church) => (
                  <View key={church.ChurchId} style={styles.churchListItem}>
                    <Text style={styles.modalText}>
                      {church.ChurchName} - {church.ChurchType}
                    </Text>
                    <Button
                      title='Eliminar'
                      onPress={() => handleDelete(church.ChurchId)}
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

            <View>
              <Button title='Register' onPress={handleSubmit} />
              <Text>{"\n"}</Text>
            </View>
            <Button
              title='Ver Iglesias'
              onPress={() => {
                setShowModal(true);
                fetchChurchList();
              }}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
