import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  Alert,
  ImageBackground,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";
import barberShop from "../../assets/Images/iconBarberShop.png";
import BarberBackground from "../../assets/Images/BlackBackground.jpg";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const [EmailValido, setEmailValido] = useState(
    /* "JohanPosada@gmail.com" */ "ll"
  );
  const [PasswordValido, setPasswordValido] = useState(/* "1004369126" */ "ll");
  const [EmailIngresado, setEmailIngresado] = useState("");
  const [PasswordIngresado, setPasswordIngresado] = useState("");
  const navigation = useNavigation();
  const [rotation] = useState(new Animated.Value(0));

  const handlePasswordChange = (newPassword) => {
    setPasswordIngresado(newPassword);
  };

  const handleEmailChange = (newEmail) => {
    setEmailIngresado(newEmail);
  };

  const handleClickLogin = () => {
    if (
      EmailValido === EmailIngresado &&
      PasswordValido === PasswordIngresado
    ) {
      navigation.navigate("Home");
      setEmailIngresado("");
      setPasswordIngresado("");
    } else if (!EmailIngresado.length && !PasswordIngresado.length) {
      Alert.alert("Error", "Please write the mail and password", [
        { text: "OK" },
      ]);
    } else if (!EmailIngresado.length) {
      Alert.alert("Error", "Please write the mail", [{ text: "OK" }]);
    } else if (EmailIngresado !== EmailValido) {
      Alert.alert("Error", "Wrong email", [{ text: "OK" }]);
    } else if (!PasswordIngresado.length) {
      Alert.alert("Error", "Please write the password", [{ text: "OK" }]);
    } else if (PasswordIngresado !== PasswordValido) {
      Alert.alert("Error", "Wrong password", [{ text: "OK" }]);
    }
  };

  const handleKeyPress = (event) => {
    if (event.nativeEvent.key === "Enter") {
      handleClickLogin();
    }
  };

  useEffect(() => {
    const animation = Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 30000,
        useNativeDriver: true,
      })
    );

    animation.start();

    return () => {
      animation.stop();
    };
  }, []);

  const iconImageStyle = {
    transform: [
      {
        rotate: rotation.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "360deg"],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={BarberBackground}
        style={{ width: "100%", height: "100%", resizeMode: "cover" }}
        blurRadius={3}>
        <View style={styles.containerAllItems}>
          <Animated.Image
            style={[styles.iconImage, iconImageStyle]}
            source={barberShop}
          />

          <TextInput
            style={styles.inputs}
            placeholder='Enter email'
            value={EmailIngresado}
            onChangeText={handleEmailChange}
          />
          <TextInput
            style={[styles.inputs, styles.lastInput]}
            placeholder='Enter password'
            secureTextEntry={true}
            value={PasswordIngresado}
            onChangeText={handlePasswordChange}
            onKeyPress={handleKeyPress}
          />
          <TouchableOpacity
            style={styles.containerbutton}
            onPress={handleClickLogin}>
            <View>
              <Text style={styles.textButton}>Enter</Text>
            </View>
          </TouchableOpacity>
        </View>
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
  iconImage: {
    width: "45%",
    height: "45%",
    resizeMode: "contain",
  },

  containerAllItems: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    alignSelf: "flex-start",
  },

  inputs: {
    borderWidth: 2,
    border: 0,
    backgroundColor: "#161614",
    width: "80%",
    height: 45,
    borderRadius: 10,
    marginTop: 5,
    padding: 10,
    backgroundColor: "white",
  },

  lastInput: {
    marginBottom: 20,
  },

  containerbutton: {
    backgroundColor: "#BA9048",
    alignItems: "center",
    textAlign: "center",
    height: 45,
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  textButton: {
    color: "white",
    fontFamily: "arial",
    fontSize: 20,
  },
});
