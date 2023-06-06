import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./StyleNavbar.jsx";
import Barber from "../../assets/Images/barber.png";
import Client from "../../assets/Images/client.png";
import Product from "../../assets/Images/product.png";
import Reservation from "../../assets/Images/reservation.png";

import { useNavigation } from "@react-navigation/native";

export default function Navbar() {
  const navigation = useNavigation();

  const GoReservation = () => {
    navigation.navigate("/Barbers");
  };

  const GoClients = () => {
    navigation.navigate("/Clients");
  };

  const GoProducts = () => {
    navigation.navigate("/Products");
  };

  const GoBarbers = () => {
    navigation.navigate("/Barbers");
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerNavbar}>
        <View style={styles.containerAllItems}>
          <TouchableOpacity onPress={GoBarbers}>
            <Image style={styles.barberImage} source={Barber} />
          </TouchableOpacity>

          <TouchableOpacity onPress={GoClients}>
            <Image style={styles.ClientImage} source={Client} />
          </TouchableOpacity>

          <TouchableOpacity onPress={GoProducts}>
            <Image style={styles.productImage} source={Product} />
          </TouchableOpacity>

          <TouchableOpacity onPress={GoReservation}>
            <Image style={styles.reservationImage} source={Reservation} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
