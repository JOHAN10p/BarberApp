import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import styles from "./StyleHome.jsx";
import Left from "../../assets/Images/arrowLeft.png";
import Right from "../../assets/Images/arrowright.png";
import Barber1 from "../../assets/Images/Barber1.jpg";
import Barber2 from "../../assets/Images/barber2.jpg";
import Barber3 from "../../assets/Images/barber3.jpg";
import Barber4 from "../../assets/Images/Barber4.jpg";
import Barber5 from "../../assets/Images/barber5.jpg";
import TheBest from "../../assets/Images/TheBestBarber.jpeg";
import Rating from "../../assets/Images/Rating.png";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import { dd_dd_mm_Date } from "../../Utils/functions.js";
import Header from "../../Components/Header/Header.jsx";
import BarberBackground from "../../assets/Images/SelectBarber.jpg";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    {
      id: 1,
      content: (
        <>
          <View>
            <Image style={styles.barbersCarruselImage} source={Barber1} />
          </View>
        </>
      ),
    },
    {
      id: 2,
      content: (
        <>
          <View>
            <Image style={styles.barbersCarruselImage} source={Barber2} />
          </View>
        </>
      ),
    },
    {
      id: 3,
      content: (
        <>
          <View>
            <Image style={styles.barbersCarruselImage} source={Barber3} />
          </View>
        </>
      ),
    },

    {
      id: 4,
      content: (
        <>
          <View>
            <Image style={styles.barbersCarruselImage} source={Barber4} />
          </View>
        </>
      ),
    },

    {
      id: 5,
      content: (
        <>
          <View>
            <Image style={styles.barbersCarruselImage} source={Barber5} />
          </View>
        </>
      ),
    },
  ];

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
              Hey, <Text style={styles.greeting}>Michael👋</Text>
            </Text>
            <Text style={styles.date}>{dd_dd_mm_Date()}</Text>
          </View>

          <View style={styles.containerTheBestBarber}>
            <Text style={styles.theBestText}>THE BEST BARBER</Text>
            <View style={styles.theBestBarber}>
              <Image style={styles.theBestImage} source={TheBest} />
              <View style={{ marginLeft: 15 }}>
                <Text style={styles.theBestName}>Richard Anderson</Text>
                <Text style={styles.containerRating}>
                  <Image style={styles.ratingImage} source={Rating} /> 4.6 (100)
                </Text>
              </View>
              <TouchableOpacity>
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
            {items[currentIndex].content}
            <TouchableOpacity style={{ marginRight: 10 }} onPress={next}>
              <Image style={styles.logoutImage} source={Right} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
