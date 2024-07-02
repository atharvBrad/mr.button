import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Error from "react-native-vector-icons/MaterialIcons";

export default function Register({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [firstVerify, setFirstVerify] = useState(false);
  const [lastName, setLastName] = useState("");
  const [lastVerify, setLastVerify] = useState(false);
  const [emailId, setEmailId] = useState("");
  const [emailVerify, setEmailVerify] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState(false);

  const handleRegister = async () => {
    try {
      if (
        !firstName ||
        !lastName ||
        !emailId ||
        !password ||
        !confirmPassword
      ) {
        alert("Please fill all fields correctly.");
        return;
      }

      if (!firstVerify || !lastVerify || !emailVerify || !passwordVerify) {
        alert("Please ensure all fields are correctly formatted.");
        return;
      }

      const userData = {
        firstName,
        lastName,
        emailId,
        password,
      };

      const response = await fetch("http://192.168.1.42:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Registration failed");
      }

      // Registration successful, navigate to main app screen or provide feedback
      // navigation.navigate("DrawerStack");
      navigation.navigate("SignIn");

      Alert.alert("Success", "Registration successful");
    } catch (error) {
      console.error("Registration Error:", error);
      Alert.alert("Error", error.message || "Registration failed");
    }
  };

  const handleFirstName = (e) => {
    // console.log(e.nativeEvent.text);
    const firstNameVar = e.nativeEvent.text;
    setFirstName(firstNameVar);
    setFirstVerify(false);
    if (firstNameVar.length > 3) {
      setFirstVerify(true);
    }
  };

  const handleLastName = (e) => {
    const lastNameVar = e.nativeEvent.text;
    setLastName(lastNameVar);
    setLastVerify(false);
    if (lastNameVar.length > 3) {
      setLastVerify(true);
    }
  };

  const handleEmail = (e) => {
    const emailVar = e.nativeEvent.text;
    setEmailId(emailVar);
    setEmailVerify(false);
    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailVar)) {
      setEmailId(emailVar);
      setEmailVerify(true);
    }
  };

  const handlePassword = (e) => {
    const passwordVar = e.nativeEvent.text;
    setPassword(passwordVar);
    setPasswordVerify(passwordVar === confirmPassword);
  };

  const handleConfirmPassword = (e) => {
    const confirmPasswordVar = e.nativeEvent.text;
    setConfirmPassword(confirmPasswordVar);
    setPasswordVerify(confirmPasswordVar === password);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.formWrapper}>
        <Text style={[styles.headerText, styles.fontCenturyGothic]}>
          Create Account
        </Text>
        <Text style={[styles.subHeaderText, styles.fontCenturyGothic]}>
          Create an account to stay up to date with the latest collabs,
          exclusive sneaker drops and raffles, also checkout faster and view and
          track your orders.
        </Text>

        {/* first name */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={firstName}
            onChange={(e) => handleFirstName(e)}
          />
          {firstName.length <= 3 ? null : firstVerify ? (
            <Feather
              style={styles.icon}
              name="check-circle"
              color="green"
              size={15}
            />
          ) : (
            <Error style={styles.icon} name="error" color="red" size={15} />
          )}
        </View>
        {firstName.length > 0 && firstName.length <= 3 ? (
          <Text
            style={{
              marginLeft: 10,
              marginBottom: 10,
              color: "red",
            }}
          >
            Firts Name should be more than 3 characters.
          </Text>
        ) : null}

        {/* last name */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => handleLastName(e)}
          />
          {lastName.length <= 3 ? null : lastVerify ? (
            <Feather
              style={styles.icon}
              name="check-circle"
              color="green"
              size={15}
            />
          ) : (
            <Error style={styles.icon} name="error" color="red" size={15} />
          )}
        </View>
        {lastName.length > 0 && lastName.length <= 3 ? (
          <Text
            style={{
              marginLeft: 10,
              marginBottom: 10,
              color: "red",
            }}
          >
            Last Name should be more than 3 characters.
          </Text>
        ) : null}

        {/* email */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            value={emailId}
            onChange={(e) => handleEmail(e)}
            autoCapitalize="none"
          />
          {emailId.length <= 3 ? null : emailVerify ? (
            <Feather
              style={styles.icon}
              name="check-circle"
              color="green"
              size={15}
            />
          ) : (
            <Error style={styles.icon} name="error" color="red" size={15} />
          )}
        </View>
        {emailId.length > 0 && emailId.length <= 3 ? (
          <Text
            style={{
              marginLeft: 10,
              marginBottom: 10,
              color: "red",
            }}
          >
            Enter a valid email address.
          </Text>
        ) : null}

        {/* password */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChange={(e) => handlePassword(e)}
          />
          {password.length <= 3 ? null : passwordVerify ? (
            <Feather
              style={styles.icon}
              name="check-circle"
              color="green"
              size={15}
            />
          ) : (
            <Error style={styles.icon} name="error" color="red" size={15} />
          )}
        </View>
        {password.length > 0 && password.length <= 3 ? (
          <Text
            style={{
              marginLeft: 10,
              marginBottom: 10,
              color: "red",
            }}
          >
            Password should be more than 3 characters.
          </Text>
        ) : null}

        {/* confirm password */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry
            value={confirmPassword}
            onChange={(e) => handleConfirmPassword(e)}
          />
          {confirmPassword.length <= 3 ? null : passwordVerify ? (
            <Feather
              style={styles.icon}
              name="check-circle"
              color="green"
              size={15}
            />
          ) : (
            <Error style={styles.icon} name="error" color="red" size={15} />
          )}
        </View>
        {confirmPassword.length > 0 && confirmPassword.length <= 3 ? (
          <Text
            style={{
              marginLeft: 10,
              marginBottom: 10,
              color: "red",
            }}
          >
            Confirm Password should be more than 3 characters.
          </Text>
        ) : null}

        {password !== confirmPassword && (
          <Text
            style={{
              marginLeft: 10,
              marginBottom: 10,
              color: "red",
            }}
          >
            Password and Confirm Password do not match.
          </Text>
        )}

        <TouchableOpacity
          onPress={handleRegister}
          style={styles.registerButton}
        >
          <Text style={[styles.buttonText, styles.fontCenturyGothic]}>
            REGISTER
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.backButton}
        >
          <Text style={[styles.buttonText, styles.fontCenturyGothic]}>
            BACK TO LOGIN
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
  view: {
    paddingBottom: 5,
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
  //   inputContainer: {
  //     position: "relative",
  //     marginBottom: 10,
  //   },
  icon: {
    position: "absolute",
    right: 10,
    top: 15,
  },
  registerButton: {
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
