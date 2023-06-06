import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import styles from "./StyleClients.jsx";
import Header from "../../Components/Header/Header.jsx";
import BarberBackground from "../../assets/Images/BlackBackground.jpg";
import Left from "../../assets/Images/arrowLeft.png";
import Right from "../../assets/Images/arrowright.png";
import Navbar from "../../Components/Navbar/Navbar.jsx";

const Clients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from the provided URL
    fetch("http://localhost:3003/user")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  const next = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex >= users.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(nextIndex);
    }
  };

  const prev = () => {
    const prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
      setCurrentIndex(users.length - 1);
    } else {
      setCurrentIndex(prevIndex);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={BarberBackground}
        style={{
          width: "100%",
          height: "100%",
          resizeMode: "cover",
        }}
        blurRadius={10}>
        <Header />

        {/* ----------------------- */}
        <View style={styles.containerCarrusel}>
          <TouchableOpacity style={{ marginLeft: 10 }} onPress={prev}>
            <Image style={styles.logoutImage} source={Left} />
          </TouchableOpacity>

          {users.length > 0 && (
            <View>
              <Image
                style={styles.barbersCarruselImage}
                source={{ uri: users[currentIndex].ImageUser }}
              />
            </View>
          )}

          <TouchableOpacity style={{ marginRight: 10 }} onPress={next}>
            <Image style={styles.logoutImage} source={Right} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <Navbar />
    </View>
  );
};

export default Clients;
