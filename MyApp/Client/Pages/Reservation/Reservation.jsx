import react, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./StyleReservation.jsx";
import SelectBarber from "./SelectBarber/SelectBarber.jsx";

const Reservation = () => {
  const [barberSelected, setBarberSelected] = useState(false);

  if (barberSelected) {
    return (
      <View>
        <Text>reservation</Text>
      </View>
    );
  } else {
    return (
      <View>
        <SelectBarber />
      </View>
    );
  }
};

export default Reservation;
