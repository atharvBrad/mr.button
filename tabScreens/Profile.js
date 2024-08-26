import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import * as Font from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = ({ navigation }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        CenturyGothic: require("../assets/fonts/CenturyGothic.ttf"),
      });
      setFontsLoaded(true);
    };

    const checkAdminStatus = async () => {
      try {
        const userData = await AsyncStorage.getItem("userData");
        if (userData) {
          const parsedData = JSON.parse(userData);
          console.log("Stored User Data:", parsedData); // Debug statement
          if (parsedData.isAdmin !== undefined) {
            console.log("Admin status:", parsedData.isAdmin); // Check if isAdmin exists
            setIsAdmin(parsedData.isAdmin);
          } else {
            console.log("isAdmin key is missing in the stored user data.");
          }
        } else {
          console.log("No user data found in AsyncStorage");
        }
      } catch (error) {
        console.error("Error retrieving user data:", error);
      }
    };

    loadFonts();
    checkAdminStatus();
  }, []);

  if (!fontsLoaded) {
    return null; // You can return a loading spinner or placeholder here
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.membershipSection}>
          <TouchableOpacity style={styles.membershipButton}>
            <Text style={styles.buttonText}>Your Membership</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.quickActions}>
          <View style={styles.quickActionRow}>
            <TouchableOpacity style={styles.actionButton}>
              <Icon name="shopping-bag" size={20} color="#fff" />
              <Text style={styles.actionButtonText}>Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Icon name="favorite" size={20} color="#fff" />
              <Text style={styles.actionButtonText}>Wishlist</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.quickActionRow}>
            <TouchableOpacity style={styles.actionButton}>
              <Icon name="card-giftcard" size={20} color="#fff" />
              <Text style={styles.actionButtonText}>Coupons</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Icon name="feedback" size={20} color="#fff" />
              <Text style={styles.actionButtonText}>Share Feedback</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.ordersSection}>
          <View style={styles.orderLine}>
            <Text style={styles.sectionTitle}>Your Orders</Text>
            <Text style={styles.seeAllText}>See All</Text>
          </View>
          <View style={styles.orderBorder}>
            <Text style={styles.noOrdersText}>
              You haven't placed anything yet!
            </Text>
            <TouchableOpacity style={styles.shopNowButton}>
              <Text style={styles.shopButtonText}>Shop Now</Text>
              <Icon name="arrow-right" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.accountSection}>
          <Text style={styles.boxTitle}>Accounts</Text>
          <TouchableOpacity
            style={styles.accountButton}
            onPress={() => navigation.navigate("AddAddress")}
          >
            <Text style={styles.buttonText}>Address</Text>
            <Icon name="arrow-forward-ios" size={15} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.accountButton}>
            <Text style={styles.buttonText}>Edit Profile</Text>
            <Icon name="arrow-forward-ios" size={15} color="#000" />
          </TouchableOpacity>

          {isAdmin && (
            <TouchableOpacity
              style={styles.accountButton}
              onPress={() => navigation.navigate("AddProductScreen")}
            >
              <Text style={styles.buttonText}>Products Updation</Text>
              <Icon name="arrow-forward-ios" size={15} color="#000" />
            </TouchableOpacity>
          )}

          <TouchableOpacity style={styles.accountButton}>
            <Text style={styles.buttonText}>
              Mr Button Wallet/Credits/Gifts
            </Text>
            <Icon name="arrow-forward-ios" size={15} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.accountButton}>
            <Text style={styles.buttonText}>Settings</Text>
            <Icon name="arrow-forward-ios" size={15} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={styles.activitySection}>
          <Text style={styles.boxTitle}>Activity</Text>
          <TouchableOpacity style={styles.activityButton}>
            <Text style={styles.buttonText}>About us</Text>
            <Icon name="arrow-forward-ios" size={15} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.activityButton}
            onPress={() => navigation.navigate("PrivacyPolicy")}
          >
            <Text style={styles.buttonText}>Privacy Policy</Text>
            <Icon name="arrow-forward-ios" size={15} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.activityButton}
            onPress={() => navigation.navigate("HelpCenter")}
          >
            <Text style={styles.buttonText}>Help Center</Text>
            <Icon name="arrow-forward-ios" size={15} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  itemContainer: {
    marginTop: 70,
  },
  membershipSection: {
    padding: 20,
  },
  membershipButton: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    alignItems: "center",
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontFamily: "CenturyGothic",
  },
  quickActions: {
    flexDirection: "column",
    justifyContent: "space-around",
    padding: 20,
  },
  quickActionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  actionButton: {
    backgroundColor: "#252355",
    padding: 10,
    borderRadius: 10,
    width: "48%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  actionButtonText: {
    color: "#fff",
    marginLeft: 5,
    fontFamily: "CenturyGothic",
  },
  ordersSection: {
    padding: 20,
  },
  orderLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  orderBorder: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "CenturyGothic",
  },
  seeAllText: {
    color: "#000",
    textDecorationLine: "underline",
    fontFamily: "CenturyGothic",
  },
  noOrdersText: {
    marginBottom: 10,
    color: "#666",
    fontSize: 15,
    fontFamily: "CenturyGothic",
  },
  shopNowButton: {
    backgroundColor: "#252355",
    padding: 10,
    margin: 5,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  shopButtonText: {
    color: "#fff",
    marginRight: 5,
    fontFamily: "CenturyGothic",
  },
  accountSection: {
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
  },
  accountButton: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  activitySection: {
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    marginBottom: 100,
  },
  activityButton: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  boxTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    fontFamily: "CenturyGothic",
  },
});

export default Profile;
