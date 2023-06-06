import React, { useState, useEffect } from "react";
import axios from "axios";
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const navigation = useNavigation();
  const [rotation] = useState(new Animated.Value(0));

  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
    setPasswordError(false);
  };

  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
  };

  const handleClickLogin = () => {
    // Validar la contraseña utilizando una expresión regular
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[-_@#$%^&+=])(?!.*\s).{8,}$/;
    const isValidPassword = passwordRegex.test(password);

    if (!isValidPassword) {
      setPasswordError(true);
      return;
    }

    axios
      .post(
        "http://localhost:3003/login",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const data = response.data;
        if (data.message === "Login successful") {
          // Inicio de sesión exitoso, guardar la información del usuario en el localStorage
          const user = data.user;
          localStorage.setItem("user", JSON.stringify(user));

          if (data.isRoot) {
            // Usuario root, navegar a la pantalla de Dashboard
            navigation.navigate("/Manage");
          } else {
            // Usuario no root, navegar a la pantalla de Home
            navigation.navigate("Home");
          }

          setEmail("");
          setPassword("");
        } else {
          // Error de inicio de sesión, mostrar mensaje de error
          Alert.alert("Error", data.message, [{ text: "OK" }]);
        }
      })
      .catch((error) => {
        console.error(error);
        alert("ANDA PASHA BOBO");
      });
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
        duration: 25000,
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
            value={email}
            onChangeText={handleEmailChange}
          />
          <TextInput
            style={[
              styles.inputs,
              styles.lastInput,
              passwordError && styles.errorInput,
            ]}
            placeholder='Enter password'
            secureTextEntry={true}
            value={password}
            onChangeText={handlePasswordChange}
            onKeyPress={handleKeyPress}
          />
          {passwordError && (
            <Text style={styles.errorText}>
              Password must contain at least 8 characters, including an
              uppercase letter, a number, and a special character.
            </Text>
          )}
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

  errorInput: {
    borderColor: "red",
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

  errorText: {
    color: "red",
    fontSize: 14,
    marginTop: 5,
  },
});
