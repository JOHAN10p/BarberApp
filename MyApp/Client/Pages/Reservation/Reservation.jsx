import react, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import styles from "./StyleReservation.jsx";
import SelectBarber from "./SelectBarber/SelectBarber.jsx";
import Header from "../../Components/Header/Header.jsx";
import Barber from "../../assets/images/TheBestBarber.jpeg";
import BarberBackground from "../../assets/Images/BlackBackground.jpg";

const Reservation = () => {
  const [barberSelected, setBarberSelected] = useState(true);

  if (barberSelected) {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={BarberBackground}
          style={{ width: "100%", height: "100%", resizeMode: "cover" }}
          blurRadius={10}>
          <Header />
          <View>
            <Image style={styles.barberImage} source={Barber} />
            <View style={styles.containerNameBarber} blurRadius={3}>
              <Text style={styles.nameBarber}>FELIPE RAMIREZ</Text>
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
