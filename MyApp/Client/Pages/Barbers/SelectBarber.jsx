import react, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import styles from "./StyleSelectBarber.jsx";
import Header from "../../Components/Header/Header.jsx";
import BarberBackground from "../../assets/Images/BlackBackground.jpg";
import Left from "../../assets/Images/arrowLeft.png";
import Right from "../../assets/Images/arrowright.png";
import Barber1 from "../../assets/Images/Barber1.jpg";
import Barber2 from "../../assets/Images/barber2.jpg";
import Barber3 from "../../assets/Images/barber3.jpg";
import Barber4 from "../../assets/Images/Barber4.jpg";
import Barber5 from "../../assets/Images/barber5.jpg";
import Navbar from "../../Components/Navbar/Navbar.jsx";

const Barbers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      id: 1,
      content: (
        <>
          <View>
            <TouchableOpacity>
              <Image style={styles.barbersCarruselImage} source={Barber1} />
            </TouchableOpacity>
          </View>
        </>
      ),
    },
    {
      id: 2,
      content: (
        <>
          <View>
            <TouchableOpacity>
              <Image style={styles.barbersCarruselImage} source={Barber2} />
            </TouchableOpacity>
          </View>
        </>
      ),
    },
    {
      id: 3,
      content: (
        <>
          <View>
            <TouchableOpacity>
              <Image style={styles.barbersCarruselImage} source={Barber3} />
            </TouchableOpacity>
          </View>
        </>
      ),
    },

    {
      id: 4,
      content: (
        <>
          <View>
            <TouchableOpacity>
              <Image style={styles.barbersCarruselImage} source={Barber4} />
            </TouchableOpacity>
          </View>
        </>
      ),
    },

    {
      id: 5,
      content: (
        <>
          <View>
            <TouchableOpacity>
              <Image style={styles.barbersCarruselImage} source={Barber5} />
            </TouchableOpacity>
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
      <ImageBackground
        source={BarberBackground}
        style={{
          width: "100%",
          height: "100%",
          resizeMode: "cover",
        }}
        blurRadius={10}>
        <Header />

        {/* ----------------------- */}
        <View style={styles.containerCarrusel}>
          <TouchableOpacity style={{ marginLeft: 10 }} onPress={prev}>
            <Image style={styles.logoutImage} source={Left} />
          </TouchableOpacity>
          {items[currentIndex].content}
          <TouchableOpacity style={{ marginRight: 10 }} onPress={next}>
            <Image style={styles.logoutImage} source={Right} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <Navbar />
    </View>
  );
};

export default Barbers;
