import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import styles from "./StyleSelectBarber.jsx";
import BarberBackground from "../../../assets/Images/SelectBarber.jpg";
import TheBest from "../../../assets/Images/TheBestBarber.jpeg";
import Rating from "../../../assets/Images/Rating.png";

const SelectBarber = () => {
  //Se debe modificar esto para que cuente cuantos barberos vienen para el alto de pantalla
  const [countBarbers, setCountBarbers] = React.useState(5);
  const windowHeight = Dimensions.get("window").height;

  return (
    <View style={{ backgroundColor: "#16171B", height: "100%" }}>
      <ImageBackground source={BarberBackground}>
        <View
          style={{
            width: "100%",
            height: countBarbers > 5 ? "100%" : "100vh",
            resizeMode: "cover",
          }}>
          <View style={styles.containerTheBestBarber}>
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

          {/*  */}

          <View style={styles.containerTheBestBarber}>
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

          {/*  */}

          <View style={styles.containerTheBestBarber}>
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

          {/*  */}

          <View style={styles.containerTheBestBarber}>
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

          {/*  */}

          <View style={styles.containerTheBestBarber}>
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
        </View>
      </ImageBackground>
    </View>
  );
};

export default SelectBarber;
