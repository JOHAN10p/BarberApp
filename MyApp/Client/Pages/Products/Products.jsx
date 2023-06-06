import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import axios from "axios";
import styles from "./StyleProducts.jsx";
import Header from "../../Components/Header/Header.jsx";
import BarberBackground from "../../assets/Images/BlackBackground.jpg";
import Left from "../../assets/Images/arrowLeft.png";
import Right from "../../assets/Images/arrowright.png";
import Navbar from "../../Components/Navbar/Navbar.jsx";

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [type1Products, setType1Products] = useState([]);
  const [type2Products, setType2Products] = useState([]);

  useEffect(() => {
    // Función para obtener los productos desde la URL
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3003/product");
        const { type1Products, type2Products } = response.data;

        setType1Products(type1Products);
        setType2Products(type2Products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  const next = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex >= type1Products.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(nextIndex);
    }
  };

  const prev = () => {
    const prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
      setCurrentIndex(type1Products.length - 1);
    } else {
      setCurrentIndex(prevIndex);
    }
  };

  const next2 = () => {
    const nextIndex2 = currentIndex2 + 1;
    if (nextIndex2 >= type2Products.length) {
      setCurrentIndex2(0);
    } else {
      setCurrentIndex2(nextIndex2);
    }
  };

  const prev2 = () => {
    const prevIndex2 = currentIndex2 - 1;
    if (prevIndex2 < 0) {
      setCurrentIndex2(type2Products.length - 1);
    } else {
      setCurrentIndex2(prevIndex2);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={BarberBackground}
        style={{ width: "100%", height: "100%", resizeMode: "cover" }}
        blurRadius={10}>
        <Header />

        {/* Primer Carrusel */}
        <View style={styles.containerCarrusel}>
          <TouchableOpacity style={{ marginLeft: 10 }} onPress={prev}>
            <Image style={styles.logoutImage} source={Left} />
          </TouchableOpacity>
          {type1Products.length > 0 && (
            <Image
              style={styles.barbersCarruselImage}
              source={{ uri: type1Products[currentIndex]?.ImageProduct }}
            />
          )}
          <TouchableOpacity style={{ marginRight: 10 }} onPress={next}>
            <Image style={styles.logoutImage} source={Right} />
          </TouchableOpacity>
        </View>

        {/* Segundo Carrusel */}
        <View style={styles.containerCarrusel}>
          <TouchableOpacity style={{ marginLeft: 10 }} onPress={prev2}>
            <Image style={styles.logoutImage} source={Left} />
          </TouchableOpacity>
          {type2Products.length > 0 && (
            <Image
              style={styles.barbersCarruselImage}
              source={{ uri: type2Products[currentIndex2]?.ImageProduct }}
            />
          )}
          <TouchableOpacity style={{ marginRight: 10 }} onPress={next2}>
            <Image style={styles.logoutImage} source={Right} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <Navbar />
    </View>
  );
};

export default Products;
