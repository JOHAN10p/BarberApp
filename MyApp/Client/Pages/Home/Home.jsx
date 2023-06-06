import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import axios from "axios";
import styles from "./StyleHome.jsx";
import Left from "../../assets/Images/arrowLeft.png";
import Right from "../../assets/Images/arrowright.png";
import TheBest from "../../assets/Images/TheBestBarber.jpeg";
import Rating from "../../assets/Images/Rating.png";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import { dd_dd_mm_Date } from "../../Utils/functions.js";
import Header from "../../Components/Header/Header.jsx";
import BarberBackground from "../../assets/Images/SelectBarber.jpg";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [user, setUser] = useState(null);
  const [items, setItems] = useState([]);
  const [barbers, setBarbers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3003/Local");
      const images = response.data.images[0];

      if (images) {
        const newItems = images.map((imageUrl, index) => ({
          id: index + 1,
          content: (
            <View>
              <Image
                style={styles.barbersCarruselImage}
                source={{ uri: imageUrl }}
              />
            </View>
          ),
        }));

        setItems(newItems);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const next = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex >= items.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(nextIndex);
    }
  };

  const prev = () => {
    const prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
      setCurrentIndex(items.length - 1);
    } else {
      setCurrentIndex(prevIndex);
    }
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }

    fetchData();

    fetch("http://localhost:3003/barber")
      .then((response) => response.json())
      .then((data) => setBarbers(data))
      .catch((error) => console.log(error));
  }, []);

  const GoReservation = () => {
    navigation.navigate("/Barbers");
  };

  return (
    <View style={styles.container}>
      <Navbar />
      <ImageBackground
        source={BarberBackground}
        style={{ width: "100%", height: "100%", resizeMode: "cover" }}
        blurRadius={2}>
        <View style={styles.homeContainer}>
          <Header />
          <View style={styles.containerNameDate}>
            <Text style={styles.name}>
              Hey,
              <Text style={styles.greeting}>
                {" "}
                {user ? user.NameUser : ""}👋
              </Text>
            </Text>
            <Text style={styles.date}>{dd_dd_mm_Date()}</Text>
          </View>

          <View style={styles.containerTheBestBarber}>
            <Text style={styles.theBestText}>THE BEST BARBER</Text>
            <View style={styles.theBestBarber}>
              <Image
                style={styles.theBestImage}
                source={{ uri: barbers[1]?.ImageBarber }}
              />
              <View style={{ marginLeft: 15 }}>
                <Text
                  style={
                    styles.theBestName
                  }>{`${barbers[1]?.NameBarber} ${barbers[1]?.LastNameBarber} `}</Text>
                <Text style={styles.containerRating}>
                  <Image style={styles.ratingImage} source={Rating} /> 4.6 (100)
                </Text>
              </View>
              <TouchableOpacity onPress={GoReservation}>
                <View style={styles.buttonView}>
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    View
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.containerCarrusel}>
            <TouchableOpacity style={{ marginLeft: 10 }} onPress={prev}>
              <Image style={styles.logoutImage} source={Left} />
            </TouchableOpacity>
            {items.length > 0 && items[currentIndex]?.content}
            <TouchableOpacity style={{ marginRight: 10 }} onPress={next}>
              <Image style={styles.logoutImage} source={Right} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
