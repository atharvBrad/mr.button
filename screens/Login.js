import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { Video } from "expo-av";
import icon from "../assets/Mr Button Logo png.png";
import Icon from "react-native-vector-icons/FontAwesome";
import Register from "./Register";

export default function Login({ navigation }) {
  const [showSignInOptions, setShowSignInOptions] = useState(false);
  const fadeAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnimation]);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnimation }]}>
      <Video
        source={require("../assets/loginScreen.mp4")}
        rate={1.0}
        volume={1.0}
        isMuted={true}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={StyleSheet.absoluteFill}
      />
      <View style={styles.overlay}>
        <View style={styles.logoWrapper}>
          <Image source={icon} style={styles.image} />
          <Text style={[styles.buttonText, styles.fontCenturyGothic]}>
            (Tagline For mr.button)
          </Text>
        </View>

        {!showSignInOptions ? (
          <View style={styles.buttonWrapper}>
            <TouchableOpacity>
              <View style={styles.guestbutton}>
                <Text style={[styles.buttonText, styles.fontCenturyGothic]}>
                  CONTINUE AS GUEST
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <View style={styles.button}>
                <Text style={[styles.buttonText, styles.fontCenturyGothic]}>
                  CREATE ACCOUNT
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowSignInOptions(true)}>
              <View style={{ ...styles.button, backgroundColor: "#BF1013" }}>
                <Text style={[styles.buttonText, styles.fontCenturyGothic]}>
                  SIGN IN
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.buttonWrapper}>
            <TouchableOpacity>
              <View style={styles.appleButton}>
                <Icon name="apple" size={20} color="#fff" style={styles.icon} />
                <Text style={[styles.buttonText, styles.fontCenturyGothic]}>
                  Sign in with Apple
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.googleButton}>
                <Icon
                  name="google"
                  size={20}
                  color="#000"
                  style={styles.icon}
                />
                <Text
                  style={{
                    ...styles.buttonText,
                    color: "#000",
                    fontFamily: "CenturyGothic",
                  }}
                >
                  Sign in with Google
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.facebookbutton}>
                <Icon
                  name="facebook"
                  size={20}
                  color="#fff"
                  style={styles.icon}
                />
                <Text style={[styles.buttonText, styles.fontCenturyGothic]}>
                  Sign in with Facebook
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.phoneButton}>
                <Text style={[styles.buttonText, styles.fontCenturyGothic]}>
                  Sign in with Phone Number
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowSignInOptions(false)}>
              <View style={styles.backButton}>
                <Text
                  style={{
                    ...styles.buttonText,
                    color: "black",
                    fontFamily: "CenturyGothic",
                  }}
                >
                  Back
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoWrapper: {
    position: "absolute",
    top: 70,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 160,
    height: 150,
    resizeMode: "cover",
  },
  tagLine: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonWrapper: {
    position: "absolute",
    bottom: 60,
    width: "80%",
    // height: "20%",
  },
  guestbutton: {
    padding: 15,
    height: 45,
    marginBottom: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  button: {
    // backgroundColor: "#000",
    backgroundColor: "#252355",
    padding: 15,
    height: 45,
    marginBottom: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
  },
  appleButton: {
    backgroundColor: "#000",
    padding: 15,
    marginBottom: 10,
    alignItems: "center",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
  },
  googleButton: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    alignItems: "center",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
  },
  facebookbutton: {
    backgroundColor: "#252355",
    padding: 15,
    marginBottom: 10,
    alignItems: "center",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
  },
  phoneButton: {
    backgroundColor: "#000",
    padding: 15,
    marginBottom: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  icon: {
    marginRight: 10,
  },
  backButton: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  fontCenturyGothic: {
    fontFamily: "CenturyGothic",
  },
});
