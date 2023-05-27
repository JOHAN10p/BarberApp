import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./StyleHome.jsx";
import Notification from "../../assets/Images/notificacion.png";
import Logout from "../../assets/Images/logout.png";
import Left from "../../assets/Images/arrowLeft.png";
import Right from "../../assets/Images/arrowright.png";
import Navbar from "../Navbar/Navbar.jsx";
import { dd_dd_mm_Date } from "../../Utils/functions.js";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    {
      id: 1,
      content: (
        <>
          <View>
            <Text> HELLO 1 </Text>
          </View>
        </>
      ),
    },
    {
      id: 2,
      content: (
        <>
          <View>
            <Text> HELLO 2 </Text>
          </View>
        </>
      ),
    },
    {
      id: 3,
      content: (
        <>
          <View>
            <Text> HELLO 3 </Text>
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
      <View style={styles.homeContainer}>
        <View style={styles.containerHeader}>
          <Text style={styles.companyName}>Prestigio Barber's</Text>
          <View style={styles.containerIcons}>
            <TouchableOpacity /* onPress={openCloseBooleanProfile} */>
              <Image style={styles.notificationImage} source={Notification} />
            </TouchableOpacity>

            <TouchableOpacity /* onPress={openCloseBooleanProfile} */>
              <Image style={styles.logoutImage} source={Logout} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.containerNameDate}>
          <Text style={styles.name}>
            Hey, <Text style={styles.greeting}>Michael👋</Text>
          </Text>
          <Text style={styles.date}>{dd_dd_mm_Date()}</Text>
        </View>

        <View style={styles.containerTheBestBarber}>
          <Text>THE BEST BARBER</Text>
          <View style={styles.theBestBarber}>
            <Text>Richard Anderson</Text>
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
    </View>
  );
}
