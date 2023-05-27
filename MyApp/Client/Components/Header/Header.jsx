import react from "react";
import styles from "./StyleHeader.jsx";
import Notification from "../../assets/Images/notificacion.png";
import Logout from "../../assets/Images/logout.png";
import { View, Text, Image, TouchableOpacity } from "react-native";

const Header = () => {
  return (
    <View style={styles.containerHeader}>
      <Text style={styles.companyName}>PRESTIGIO BARBER'S</Text>
      <View style={styles.containerIcons}>
        <TouchableOpacity /* onPress={openCloseBooleanProfile} */>
          <Image style={styles.notificationImage} source={Notification} />
        </TouchableOpacity>
        <TouchableOpacity /* onPress={openCloseBooleanProfile} */>
          <Image style={styles.logoutImage} source={Logout} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
