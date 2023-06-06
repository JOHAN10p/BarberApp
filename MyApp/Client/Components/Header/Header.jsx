import react from "react";
import styles from "./StyleHeader.jsx";
import Notification from "../../assets/Images/notificacion.png";
import Logout from "../../assets/Images/logout.png";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();

  const GoLogin = () => {
    navigation.navigate("/");
  };

  const GoHome = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.containerHeader}>
      <Text style={styles.companyName}>PRESTIGIO BARBER'S</Text>
      <View style={styles.containerIcons}>
        <TouchableOpacity onPress={GoHome}>
          <Image style={styles.notificationImage} source={Notification} />
        </TouchableOpacity>
        <TouchableOpacity onPress={GoLogin}>
          <Image style={styles.logoutImage} source={Logout} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
