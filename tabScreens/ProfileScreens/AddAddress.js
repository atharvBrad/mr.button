// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
// } from "react-native";
// import axios from "axios";
// import CountryCodeDropdownPicker from "react-native-dropdown-country-picker";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import * as Location from "expo-location";
// import { MaterialIcons } from "@expo/vector-icons";
// import { API_URL } from "@env"; // Import API_URL from .env

// const AddAddress = ({ navigation }) => {
//   const [fullName, setFullName] = useState("");
//   const [country, setCountry] = useState("");
//   const [pincode, setPincode] = useState("");
//   const [city, setCity] = useState("");
//   const [currentLocation, setCurrentLocation] = useState("");
//   const [houseBuildingName, setHouseBuildingName] = useState("");
//   const [areaName, setAreaName] = useState("");
//   const [mobileNumber, setMobileNumber] = useState("");
//   const [addressType, setAddressType] = useState("Home");
//   const [selectedCountryCode, setSelectedCountryCode] = useState("+91");

//   const handleAddressType = (type) => {
//     setAddressType(type);
//   };

//   const handleSaveAddress = async () => {
//     if (
//       !fullName ||
//       !country ||
//       !pincode ||
//       !city ||
//       !currentLocation ||
//       !houseBuildingName ||
//       !areaName ||
//       !mobileNumber
//     ) {
//       Alert.alert("Error", "All fields are required");
//       return;
//     }

//     const addressData = {
//       fullName,
//       country,
//       pincode,
//       city,
//       currentLocation,
//       houseBuildingName,
//       areaName,
//       mobileNumber,
//       addressType,
//     };

//     try {
//       const token = await AsyncStorage.getItem("token"); // Get the token from AsyncStorage
//       const response = await axios.post(`${API_URL}/api/address`, addressData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       console.log(response.data);
//       Alert.alert("Success", "Address added successfully");
//       navigation.goBack(); // Navigate back after successful submission
//     } catch (error) {
//       console.error(
//         "Error adding address:",
//         error.response ? error.response.data : error.message
//       );
//       Alert.alert("Error", "Failed to add address");
//     }
//   };

//   const getCurrentLocation = async () => {
//     let { status } = await Location.requestForegroundPermissionsAsync();
//     if (status !== "granted") {
//       Alert.alert("Permission to access location was denied");
//       return;
//     }

//     let location = await Location.getCurrentPositionAsync({});
//     let { latitude, longitude } = location.coords;

//     try {
//       let reverseGeocode = await Location.reverseGeocodeAsync({
//         latitude,
//         longitude,
//       });
//       let address = reverseGeocode[0];
//       let addressString = `${address.name}, ${address.street}, ${address.city}, ${address.region}, ${address.postalCode}, ${address.country}`;
//       console.log(addressString);
//       setCurrentLocation(addressString);
//     } catch (error) {
//       console.error("Error with reverse geocoding:", error);
//       Alert.alert("Error", "Failed to get address from location");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         placeholder="Full Name"
//         style={styles.input}
//         value={fullName}
//         onChangeText={setFullName}
//       />
//       <TextInput
//         placeholder="Country"
//         style={styles.input}
//         value={country}
//         onChangeText={setCountry}
//       />
//       <View style={styles.row}>
//         <TextInput
//           placeholder="Pincode"
//           style={[styles.input, styles.halfInput]}
//           value={pincode}
//           onChangeText={setPincode}
//           keyboardType="numeric"
//         />
//         <TextInput
//           placeholder="City"
//           style={[styles.input, styles.halfInput]}
//           value={city}
//           onChangeText={setCity}
//         />
//       </View>
//       <View style={styles.locationContainer}>
//         <TextInput
//           placeholder="Current Location"
//           style={[styles.input, { flex: 1 }]}
//           value={currentLocation}
//           onChangeText={setCurrentLocation}
//         />
//         <TouchableOpacity onPress={getCurrentLocation} style={styles.gpsButton}>
//           <MaterialIcons name="gps-fixed" size={24} color="black" />
//         </TouchableOpacity>
//       </View>
//       <TextInput
//         placeholder="House No., Building Name"
//         style={styles.input}
//         value={houseBuildingName}
//         onChangeText={setHouseBuildingName}
//       />
//       <TextInput
//         placeholder="Area Name"
//         style={styles.input}
//         value={areaName}
//         onChangeText={setAreaName}
//       />
//       <View style={[styles.inputContainer, { borderBottomColor: "#244DB7" }]}>
//         <CountryCodeDropdownPicker
//           selected={selectedCountryCode}
//           setSelected={setSelectedCountryCode}
//           phone={mobileNumber}
//           setPhone={setMobileNumber}
//           countryCodeTextStyles={{ fontSize: 13 }}
//           countryCodeContainerStyles={[styles.countryCode]}
//           style={styles.countryPickerStyle}
//           searchStyles={[styles.search]}
//           dropdownStyles={[styles.dropdown]}
//         />
//       </View>
//       <View style={styles.addressType}>
//         <TouchableOpacity
//           style={[
//             styles.addressTypeButton,
//             addressType === "Home" && styles.selectedButton,
//           ]}
//           onPress={() => handleAddressType("Home")}
//         >
//           <Text style={styles.addressTypeButtonText}>Home</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[
//             styles.addressTypeButton,
//             addressType === "Office" && styles.selectedButton,
//           ]}
//           onPress={() => handleAddressType("Office")}
//         >
//           <Text style={styles.addressTypeButtonText}>Office</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[
//             styles.addressTypeButton,
//             addressType === "Others" && styles.selectedButton,
//           ]}
//           onPress={() => handleAddressType("Others")}
//         >
//           <Text style={styles.addressTypeButtonText}>Others</Text>
//         </TouchableOpacity>
//       </View>
//       <TouchableOpacity style={styles.saveButton} onPress={handleSaveAddress}>
//         <Text style={styles.saveButtonText}>Save Address</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.cancelButton}
//         onPress={() => navigation.goBack()}
//       >
//         <Text style={styles.cancelButtonText}>Cancel</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#fff",
//   },
//   input: {
//     height: 40,
//     borderColor: "#ccc",
//     borderWidth: 1,
//     marginBottom: 20,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//   },
//   row: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 20,
//   },
//   halfInput: {
//     flex: 1,
//     marginRight: 10,
//   },
//   inputContainer: {
//     flexDirection: "row",
//     marginBottom: 20,
//     padding: 5,
//     borderRadius: 10,
//     backgroundColor: "#fff",
//     borderColor: "#C0C0C0",
//     borderWidth: 1,
//     alignItems: "center",
//   },
//   countryPickerStyle: {
//     flex: 1,
//   },
//   countryCode: {
//     height: 40,
//   },
//   search: {
//     height: 40,
//   },
//   dropdown: {
//     height: 178,
//   },
//   addressType: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 20,
//   },
//   addressTypeButton: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     padding: 10,
//     borderRadius: 5,
//   },
//   addressTypeButtonText: {
//     color: "#666",
//   },
//   selectedButton: {
//     backgroundColor: "#252355",
//     borderColor: "#252355",
//     color: "#fff",
//   },
//   saveButton: {
//     backgroundColor: "#252355",
//     padding: 15,
//     borderRadius: 5,
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   saveButtonText: {
//     color: "#fff",
//     fontSize: 16,
//   },
//   cancelButton: {
//     padding: 15,
//     borderRadius: 5,
//     alignItems: "center",
//     borderWidth: 1,
//     borderColor: "#ccc",
//   },
//   cancelButtonText: {
//     color: "#000",
//     fontSize: 16,
//   },
//   locationContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   gpsButton: {
//     marginLeft: 10,
// marginBottom: 20,
// marginHorizontal: 5,
//   },
// });

// export default AddAddress;

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
import CountryCodeDropdownPicker from "react-native-dropdown-country-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Location from "expo-location";
import { MaterialIcons } from "@expo/vector-icons";
import { API_URL } from "@env"; // Import API_URL from .env

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
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");

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
      const response = await axios.post(`${API_URL}/api/address`, addressData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    let { latitude, longitude } = location.coords;

    try {
      let reverseGeocode = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      let address = reverseGeocode[0];
      let addressString = `${address.name}, ${address.street}, ${address.city}, ${address.region}, ${address.postalCode}, ${address.country}`;
      console.log(addressString);
      setCurrentLocation(addressString);
    } catch (error) {
      console.error("Error with reverse geocoding:", error);
      Alert.alert("Error", "Failed to get address from location");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Full Name"
        placeholderTextColor="#aaa"
        style={[styles.input, styles.placeholderFont]}
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        placeholder="Country"
        placeholderTextColor="#aaa"
        style={[styles.input, styles.placeholderFont]}
        value={country}
        onChangeText={setCountry}
      />
      <View style={styles.row}>
        <TextInput
          placeholder="Pincode"
          placeholderTextColor="#aaa"
          style={[styles.input, styles.halfInput, styles.placeholderFont]}
          value={pincode}
          onChangeText={setPincode}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="City"
          placeholderTextColor="#aaa"
          style={[styles.input, styles.halfInput, styles.placeholderFont]}
          value={city}
          onChangeText={setCity}
        />
      </View>
      <View style={styles.locationContainer}>
        <TextInput
          placeholder="Current Location"
          placeholderTextColor="#aaa"
          style={[styles.input, { flex: 1 }, styles.placeholderFont]}
          value={currentLocation}
          onChangeText={setCurrentLocation}
        />
        <TouchableOpacity onPress={getCurrentLocation} style={styles.gpsButton}>
          <MaterialIcons name="gps-fixed" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <TextInput
        placeholder="House No., Building Name"
        placeholderTextColor="#aaa"
        style={[styles.input, styles.placeholderFont]}
        value={houseBuildingName}
        onChangeText={setHouseBuildingName}
      />
      <TextInput
        placeholder="Area Name"
        placeholderTextColor="#aaa"
        style={[styles.input, styles.placeholderFont]}
        value={areaName}
        onChangeText={setAreaName}
      />
      <View style={[styles.inputContainer, { borderBottomColor: "#244DB7" }]}>
        <CountryCodeDropdownPicker
          selected={selectedCountryCode}
          setSelected={setSelectedCountryCode}
          phone={mobileNumber}
          setPhone={setMobileNumber}
          countryCodeTextStyles={{ fontSize: 13 }}
          countryCodeContainerStyles={[styles.countryCode]}
          style={styles.countryPickerStyle}
          searchStyles={[styles.search]}
          dropdownStyles={[styles.dropdown]}
        />
      </View>
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
  placeholderFont: {
    fontFamily: "CenturyGothic",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  halfInput: {
    flex: 1,
    marginRight: 10,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
    padding: 5,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderColor: "#C0C0C0",
    borderWidth: 1,
    alignItems: "center",
  },
  countryPickerStyle: {
    flex: 1,
  },
  countryCode: {
    height: 40,
  },
  search: {
    height: 40,
  },
  dropdown: {
    height: 178,
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
    borderColor: "#252355",
  },
  cancelButtonText: {
    color: "#252355",
    fontSize: 16,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  gpsButton: {
    marginLeft: 15,
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    // marginHorizontal: 5,
  },
});

export default AddAddress;
