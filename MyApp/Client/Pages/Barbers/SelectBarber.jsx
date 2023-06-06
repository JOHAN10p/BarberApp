import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./StyleSelectBarber.jsx";
import Header from "../../Components/Header/Header.jsx";
import BarberBackground from "../../assets/Images/BlackBackground.jpg";
import Left from "../../assets/Images/arrowLeft.png";
import Right from "../../assets/Images/arrowright.png";
import Navbar from "../../Components/Navbar/Navbar.jsx";

const Barbers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [barbers, setBarbers] = useState([]);
  const [flag, setFlag] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    // Fetch barber data from the provided URL
    fetch("http://localhost:3003/barber")
      .then((response) => response.json())
      .then((data) => setBarbers(data))
      .catch((error) => console.log(error));
  }, []);

  const next = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex >= barbers.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(nextIndex);
    }
  };

  const prev = () => {
    const prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
      setCurrentIndex(barbers.length - 1);
    } else {
      setCurrentIndex(prevIndex);
    }
  };

  const handleBarberSelect = () => {
    const selectedBarber = barbers[currentIndex];
    navigation.navigate("/Reservation", { barber: selectedBarber });
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

          {barbers.length > 0 && (
            <View>
              <TouchableOpacity onPress={handleBarberSelect}>
                <Image
                  style={styles.barbersCarruselImage}
                  source={{ uri: barbers[currentIndex].ImageBarber }}
                />
              </TouchableOpacity>
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

export default Barbers;
