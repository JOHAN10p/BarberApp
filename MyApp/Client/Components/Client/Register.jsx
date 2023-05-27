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
import { Picker } from "@react-native-picker/picker";

export default function Client() {
  const [showModal, setShowModal] = useState(false);
  const [ClientList, setClientList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const [Data, setData] = useState({
    NameClient: "",
    DocumentType: 0,
    Document: "",
    Years: 76,
    Direction: "",
    PhoneNumber: "",
    Email: "",
    YearDescription: "",
  });

  console.log(Data);

  const handleSubmit = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(
        "http://192.168.43.148:3003/Client",
        Data,
        config
      );
      console.log(response.data); // Solo para mostrar en consola la respuesta del servidor
      Alert.alert(
        "Successful registration",
        `The Client ${Data.NameClient} has been registered successfully.`
      );
      setData({ ...Data, NameClient: "" });
      setData({ ...Data, DocumentType: 0 });
      setData({ ...Data, Document: "" });
      setData({ ...Data, Years: "" });
      setData({ ...Data, Direction: "" });
      setData({ ...Data, PhoneNumber: "" });
      setData({ ...Data, Email: "" });
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Fatal error try again.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://192.168.43.148:3003/Client/${id}`);
      Alert.alert("Success", "Client deleted successfully");

      fetchClientList();
    } catch (error) {
      console.error(error);
      Alert.alert(
        "Error",
        "An error occurred while trying to delete the Client"
      );
    }
  };

  const fetchClientList = async () => {
    try {
      const response = await axios.get("http://192.168.43.148:3003/Client");
      setClientList(response.data);
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "An error occurred while fetching the Client list.");
    }
  };

  useEffect(() => {
    fetchClientList();
  }, []);

  const YearClientDescription = (Years) => {
    let YearDescription = "";

    if (Years > 60) {
      YearDescription = "Tercera edad";
    } else if (Years >= 30 && Years <= 60) {
      YearDescription = "Adulto";
    } else if (Years >= 15 && Years <= 30) {
      YearDescription = "Joven";
    } else {
      YearDescription = "Niño";
    }

    return YearDescription;
  };

  return (
    <View style={styles.AllContainer}>
      <ImageBackground
        source={CosmoAndWanda}
        style={{ width: "100%", height: "100%", resizeMode: "cover" }}
        blurRadius={8}>
        <Navbar />
        <View style={styles.container}>
          <Text style={styles.TextH1}>Register Client</Text>

          <View>
            <Text style={styles.Text}>Name Client:</Text>
            <TextInput
              value={Data.NameClient}
              onChangeText={(text) => setData({ ...Data, NameClient: text })}
              placeholder='Write name'
            />
            <Text style={styles.Text}>Tipo Documento:</Text>
            <Picker
              selectedValue={Data.DocumentType}
              onValueChange={(itemValue, itemIndex) =>
                setData({
                  ...Data,
                  DocumentType: itemValue,
                })
              }
              style={styles.picker}>
              <Picker.Item label='Seleccione el tipo de documento' value='' />
              <Picker.Item label='DNI' value={1} />
              <Picker.Item label='Pasaporte' value={2} />
              <Picker.Item label='Cédula' value={3} />
            </Picker>
            <Text style={styles.Text}>Document:</Text>
            <TextInput
              value={Data.Document}
              onChangeText={(text) => {
                setData({
                  ...Data,
                  Document: text,
                });
              }}
              placeholder='Write Document'
            />
            <Text style={styles.Text}>Years:</Text>
            <TextInput
              value={Data.Years}
              onChangeText={(text) => {
                setData({
                  ...Data,
                  Years: parseInt(text),
                  YearDescription: YearClientDescription(text),
                });
              }}
              placeholder='Write Years'
            />
            <Text style={styles.Text}>Direction:</Text>
            <TextInput
              value={Data.Direction}
              onChangeText={(text) => {
                setData({
                  ...Data,
                  Direction: text,
                });
              }}
              placeholder='Write Direction'
            />
            <Text style={styles.Text}>Phone number :</Text>
            <TextInput
              value={Data.PhoneNumber}
              onChangeText={(text) => {
                setData({
                  ...Data,
                  PhoneNumber: text,
                });
              }}
              placeholder='Write PhoneNumber'
            />
            <Text style={styles.Text}>Email:</Text>
            <TextInput
              value={Data.Email}
              onChangeText={(text) => {
                setData({
                  ...Data,
                  Email: text,
                });
              }}
              placeholder='Write Email'
            />
            <Modal
              animationType='slide'
              transparent={true}
              visible={showModal}
              onRequestClose={() => {
                setShowModal(false);
              }}>
              <View style={styles.modalView}>
                <Text style={styles.modalTitle}>Client List</Text>
                <TextInput
                  style={styles.searchInput}
                  value={searchText}
                  onChangeText={(text) => setSearchText(text)}
                  placeholder='Search by name'
                />
                {ClientList.filter((Client) =>
                  Client.NameClient.toLowerCase().includes(
                    searchText.toLowerCase()
                  )
                ).map((Client) => (
                  <View key={Client.ClientId}>
                    <Text style={styles.modalText}>
                      {Client.NameClient} - {Client.DocumentType} -
                      {Client.Document} - {Client.Years} - {Client.Direction} -
                      {Client.PhoneNumber} - {Client.Email} -
                      {Client.YearDescription}
                    </Text>

                    <Button
                      title='Delete'
                      onPress={() => handleDelete(Client.ClientId)}
                    />
                  </View>
                ))}

                <Text>{"\n"}</Text>

                <Button
                  title='Close'
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
              title='View Clients'
              onPress={() => {
                setShowModal(true);
                fetchClientList();
              }}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
