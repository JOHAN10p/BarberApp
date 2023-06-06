import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import styles from "./StyleReservation.jsx";
import Header from "../../Components/Header/Header.jsx";
import BarberBackground from "../../assets/Images/BlackBackground.jpg";
import Navbar from "../../Components/Navbar/Navbar.jsx";

const Reservation = () => {
  const route = useRoute();
  const { barber } = route.params;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={BarberBackground}
        style={{ width: "100%", height: "100%", resizeMode: "cover" }}
        blurRadius={10}>
        <Header />
        <View>
          <Image
            style={styles.barberImage}
            source={{ uri: barber.ImageBarber }}
          />
          <View style={styles.containerNameBarber} blurRadius={3}>
            <Text style={styles.nameBarber}>
              {barber.NameBarber} {barber.LastNameBarber}
            </Text>
          </View>
        </View>

        <View style={styles.containerCards}>
          <View style={styles.cards}>
            <TouchableOpacity>
              <Text style={styles.textCards}>08:00 AM - 09:00 AM</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cards}>
            <Text style={styles.textCards}>09:00 AM - 10:00 AM</Text>
          </View>
          <View style={styles.cards}>
            <Text style={styles.textCards}>10:00 AM - 11:00 AM</Text>
          </View>
          <View style={styles.cards}>
            <Text style={styles.textCards}>11:00 AM - 12:00 PM</Text>
          </View>
          <View style={styles.cards}>
            <Text style={styles.textCards}>02:00 PM - 03:00 PM</Text>
          </View>
          <View style={styles.cards}>
            <Text style={styles.textCards}>03:00 PM - 04:00 PM</Text>
          </View>
        </View>
      </ImageBackground>
      <Navbar />
    </View>
  );
};

export default Reservation;
