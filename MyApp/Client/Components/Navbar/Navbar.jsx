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

  const GoLogin = () => {
    navigation.navigate("/");
  };

  const GoClient = () => {
    navigation.navigate("Client");
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerNavbar}>
        <View style={styles.containerAllItems}>
          <TouchableOpacity /* onPress={openCloseBooleanProfile} */>
            <Image style={styles.barberImage} source={Barber} />
          </TouchableOpacity>

          <TouchableOpacity /* onPress={openCloseDropList} */>
            <Image style={styles.ClientImage} source={Client} />
          </TouchableOpacity>

          <TouchableOpacity /* onPress={openCloseBooleanProfile} */>
            <Image style={styles.productImage} source={Product} />
          </TouchableOpacity>

          <TouchableOpacity /* onPress={openCloseBooleanProfile} */>
            <Image style={styles.reservationImage} source={Reservation} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
