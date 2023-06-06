import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  Modal,
  TextInput,
} from "react-native";
import BarberBackground from "../../assets/Images/SelectBarber.jpg";

export default function Manage() {
  const [barbers, setBarbers] = useState([]);
  const [selectedBarber, setSelectedBarber] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [filterName, setFilterName] = useState("");

  const fetchBarbers = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:3003/barber");
      if (!response.ok) {
        console.error("Error al obtener los barberos");
        return;
      }
      const data = await response.json();
      setBarbers(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchBarbers();
  }, [fetchBarbers]);

  const openModal = (barber) => {
    setSelectedBarber(barber);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedBarber(null);
    setModalVisible(false);
  };

  let idCounter = 1; // Inicializar el contador en 1
  const handleAddBarber = async () => {
    if (
      !formData.image ||
      !formData.name ||
      !formData.lastName ||
      !formData.email ||
      !formData.password
    ) {
      console.error("Favor de completar todos los campos");
      return;
    }

    const threeDigitId = Math.floor(Math.random() * (999 - 100 + 1) + 100);

    const newBarber = {
      IdBarber: threeDigitId,
      ImageBarber: formData.image,
      NameBarber: formData.name,
      LastNameBarber: formData.lastName,
      EmailBarber: formData.email,
      PasswordBarber: formData.password,
    };

    try {
      const response = await fetch("http://localhost:3003/barber", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBarber),
      });

      if (response.ok) {
        idCounter++; // Incrementar el contador después de agregar un nuevo barbero
        fetchBarbers();
      } else {
        console.error("Error al agregar el barbero");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteBarber = useCallback(async () => {
    if (!selectedBarber) return;

    try {
      const response = await fetch(
        `http://localhost:3003/barber/${selectedBarber.IdBarber}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        fetchBarbers();
        closeModal();
      } else {
        console.error("Error al eliminar el barbero");
      }
    } catch (error) {
      console.error(error);
    }
  }, [selectedBarber, fetchBarbers]);

  const handleInputChange = (input, value) => {
    setFormData({ ...formData, [input]: value });
  };

  const handleFilterChange = (value) => {
    setFilterName(value);
  };

  const filteredBarbers = barbers.filter((barber) =>
    barber.NameBarber.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={BarberBackground}
        style={{ width: "100%", height: "100%", resizeMode: "cover" }}
        blurRadius={2}>
        <View style={styles.filterContainer}>
          <TextInput
            style={styles.filterInput}
            placeholder='Filtrar por nombre'
            value={filterName}
            onChangeText={handleFilterChange}
          />
        </View>

        {filteredBarbers.map((barber) => (
          <TouchableOpacity
            key={barber.IdBarber}
            style={styles.barberContainer}
            onPress={() => openModal(barber)}>
            <Text style={styles.barberName}>{barber.NameBarber}</Text>
          </TouchableOpacity>
        ))}

        <Modal
          animationType='slide'
          visible={modalVisible}
          onRequestClose={closeModal}>
          <View style={styles.modalContainer}>
            {selectedBarber && (
              <>
                <Image
                  source={{ uri: selectedBarber.ImageBarber }}
                  style={styles.barberImage}
                />
                <Text style={styles.barberDetails}>
                  Name: {selectedBarber.NameBarber}
                </Text>
                <Text style={styles.barberDetails}>
                  Last Name: {selectedBarber.LastNameBarber}
                </Text>
                <Text style={styles.barberDetails}>
                  Email: {selectedBarber.EmailBarber}
                </Text>
              </>
            )}
            <TouchableOpacity
              onPress={handleDeleteBarber}
              style={styles.button}>
              <Text style={styles.buttonText}>Eliminar Barbero</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={closeModal} style={styles.button}>
              <Text style={styles.buttonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Agregar Barbero</Text>
          <TextInput
            style={styles.input}
            placeholder='Imagen del barbero'
            value={formData.image}
            onChangeText={(text) => handleInputChange("image", text)}
          />
          <TextInput
            style={styles.input}
            placeholder='Nombre del barbero'
            value={formData.name}
            onChangeText={(text) => handleInputChange("name", text)}
          />
          <TextInput
            style={styles.input}
            placeholder='Apellido del barbero'
            value={formData.lastName}
            onChangeText={(text) => handleInputChange("lastName", text)}
          />
          <TextInput
            style={styles.input}
            placeholder='Email del barbero'
            value={formData.email}
            onChangeText={(text) => handleInputChange("email", text)}
          />
          <TextInput
            style={styles.input}
            placeholder='Contraseña del barbero'
            value={formData.password}
            onChangeText={(text) => handleInputChange("password", text)}
          />
          <TouchableOpacity onPress={handleAddBarber} style={styles.button}>
            <Text style={styles.buttonText}>Agregar Barbero</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={fetchBarbers} style={styles.button}>
          <Text style={styles.buttonText}>Actualizar Barberos</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#16171B",
    fontFamily: "arial",
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  barberContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  barberName: {
    color: "white",
    marginRight: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#16171B",
  },
  barberImage: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    marginBottom: 10,
  },
  barberDetails: {
    color: "white",
    marginBottom: 10,
  },
  formContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  formTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    marginBottom: 10,
  },

  filterContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  filterInput: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
  },
});
