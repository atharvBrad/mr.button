import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Error from "react-native-vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ColorSpace } from "react-native-reanimated";

export default function Login({ navigation }) {
  const [emailId, setEmailId] = useState("");
  const [emailVerify, setEmailVerify] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState(false);

  const handleLogin = async () => {
    if (!emailId || !password || !emailVerify || !passwordVerify) {
      alert("Please fill all fields correctly.");
      return;
    }

    const userData = {
      emailId,
      password,
    };

    const response = await fetch("http://192.168.1.43:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      const data = await response.json();
      await AsyncStorage.setItem("userId", data._id.toString());
      await AsyncStorage.setItem("token", data.token);
      await AsyncStorage.setItem(
        "userData",
        JSON.stringify({ firstName: data.firstName, emailId: data.emailId })
      );
      console.log("Stored userId:", data._id);
      console.log("Stored token:", data.token);
      navigation.navigate("DrawerStack");
    } else {
      alert("Invalid email or password.");
    }

    // if (response.ok) {
    //   const data = await response.json();
    //   await AsyncStorage.setItem("userId", data._id.toString());
    //   await AsyncStorage.setItem("token", data.token);
    //   console.log("Stored userId:", data._id);
    //   console.log("Stored token:", data.token);
    //   navigation.navigate("DrawerStack");
    // } else {
    //   alert("Invalid email or password.");
    // }

    console.log(userData);
  };

  const handleEmail = (e) => {
    const emailVar = e.nativeEvent.text.toLowerCase();
    setEmailId(emailVar);
    setEmailVerify(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailVar));
  };

  const handlePassword = (e) => {
    const passwordVar = e.nativeEvent.text;
    setPassword(passwordVar);
    setPasswordVerify(passwordVar.length > 3);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.formWrapper}>
        <Text style={[styles.headerText, styles.fontCenturyGothic]}>Login</Text>
        <Text style={[styles.subHeaderText, styles.fontCenturyGothic]}>
          Log in to your account to access the latest collabs, exclusive sneaker
          drops, and raffles. Also, checkout faster and view and track your
          orders.
        </Text>

        {/* email */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            value={emailId}
            onChange={(e) => handleEmail(e)}
            autoCapitalize="none"
          />
          {emailId.length > 3 &&
            (emailVerify ? (
              <Feather
                style={styles.icon}
                name="check-circle"
                color="green"
                size={15}
              />
            ) : (
              <Error style={styles.icon} name="error" color="red" size={15} />
            ))}
        </View>
        {emailId.length > 0 && emailId.length <= 3 && (
          <Text style={{ marginLeft: 10, marginBottom: 10, color: "red" }}>
            Enter a valid email address.
          </Text>
        )}

        {/* password */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChange={(e) => handlePassword(e)}
          />
          {password.length > 3 &&
            (passwordVerify ? (
              <Feather
                style={styles.icon}
                name="check-circle"
                color="green"
                size={15}
              />
            ) : (
              <Error style={styles.icon} name="error" color="red" size={15} />
            ))}
        </View>
        {password.length > 0 && password.length <= 3 && (
          <Text style={{ marginLeft: 10, marginBottom: 10, color: "red" }}>
            Password should be more than 3 characters.
          </Text>
        )}

        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
          <Text style={[styles.buttonText, styles.fontCenturyGothic]}>
            LOGIN
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          style={styles.backButton}
        >
          <Text style={[styles.buttonText, styles.fontCenturyGothic]}>
            BACK TO REGISTER
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 20,
  },
  formWrapper: {
    width: "80%",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  subHeaderText: {
    fontSize: 12,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    fontSize: 14,
    paddingRight: 30,
  },
  inputContainer: {
    position: "relative",
    marginBottom: 10,
  },
  icon: {
    position: "absolute",
    right: 10,
    top: 15,
  },
  loginButton: {
    backgroundColor: "#252355",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
    marginTop: 15,
  },
  backButton: {
    backgroundColor: "#BF1013",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
  },
  fontCenturyGothic: {
    fontFamily: "CenturyGothic",
  },
});
