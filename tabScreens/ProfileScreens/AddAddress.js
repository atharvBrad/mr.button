import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AddAddress = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [houseBuildingName, setHouseBuildingName] = useState("");
  const [areaName, setAreaName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [addressType, setAddressType] = useState("Home");

  const handleAddressType = (type) => {
    setAddressType(type);
  };

  const handleSaveAddress = async () => {
    if (
      !fullName ||
      !country ||
      !pincode ||
      !city ||
      !currentLocation ||
      !houseBuildingName ||
      !areaName ||
      !mobileNumber
    ) {
      Alert.alert("Error", "All fields are required");
      return;
    }

    const addressData = {
      fullName,
      country,
      pincode,
      city,
      currentLocation,
      houseBuildingName,
      areaName,
      mobileNumber,
      addressType,
    };

    try {
      const token = await AsyncStorage.getItem("token"); // Get the token from AsyncStorage
      const response = await axios.post(
        "http://192.168.1.43:5000/api/address",
        addressData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      Alert.alert("Success", "Address added successfully");
      navigation.goBack(); // Navigate back after successful submission
    } catch (error) {
      console.error(
        "Error adding address:",
        error.response ? error.response.data : error.message
      );
      Alert.alert("Error", "Failed to add address");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Full Name"
        style={styles.input}
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        placeholder="Country"
        style={styles.input}
        value={country}
        onChangeText={setCountry}
      />
      <TextInput
        placeholder="Pincode"
        style={styles.input}
        value={pincode}
        onChangeText={setPincode}
      />
      <TextInput
        placeholder="City"
        style={styles.input}
        value={city}
        onChangeText={setCity}
      />
      <TextInput
        placeholder="Current Location"
        style={styles.input}
        value={currentLocation}
        onChangeText={setCurrentLocation}
      />
      <TextInput
        placeholder="House No., Building Name"
        style={styles.input}
        value={houseBuildingName}
        onChangeText={setHouseBuildingName}
      />
      <TextInput
        placeholder="Area Name"
        style={styles.input}
        value={areaName}
        onChangeText={setAreaName}
      />
      <TextInput
        placeholder="Mobile Number"
        style={styles.input}
        value={mobileNumber}
        onChangeText={setMobileNumber}
      />
      <View style={styles.addressType}>
        <TouchableOpacity
          style={[
            styles.addressTypeButton,
            addressType === "Home" && styles.selectedButton,
          ]}
          onPress={() => handleAddressType("Home")}
        >
          <Text style={styles.addressTypeButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.addressTypeButton,
            addressType === "Office" && styles.selectedButton,
          ]}
          onPress={() => handleAddressType("Office")}
        >
          <Text style={styles.addressTypeButtonText}>Office</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.addressTypeButton,
            addressType === "Others" && styles.selectedButton,
          ]}
          onPress={() => handleAddressType("Others")}
        >
          <Text style={styles.addressTypeButtonText}>Others</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveAddress}>
        <Text style={styles.saveButtonText}>Save Address</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  addressType: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  addressTypeButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
  },
  addressTypeButtonText: {
    color: "#666",
  },
  selectedButton: {
    backgroundColor: "#252355",
    borderColor: "#252355",
    color: "#fff",
  },
  saveButton: {
    backgroundColor: "#252355",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  cancelButton: {
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  cancelButtonText: {
    color: "#000",
    fontSize: 16,
  },
});

export default AddAddress;
