import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Title } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { getUserData } from "../utlis/asyncStorage";

// now when updating this file update the value of this categories array(i.e. caps the intials of the value)
const categories = [
  { label: "Shirts", value: "Shirts" },
  { label: "Blazers", value: "Blazers" },
  { label: "Co-ords", value: "co-ords" },
  { label: "Trousers", value: "trousers" },
  { label: "Tunics", value: "tunics" },
  { label: "Nehru Jackets", value: "nehru_jackets" },
  { label: "Jackets", value: "jackets" },
  { label: "All Products", value: "all_products" },
];

const drawerOptions = [
  { label: "New In Sand Is Live", navigateTo: "NewInSand" },
  { label: "EOSS", navigateTo: "EOSS" },
  { label: "Wedding Store", navigateTo: "WeddingStore" },
  { label: "Suit Store", navigateTo: "SuitStore" },
  { label: "Clearance", navigateTo: "Clearance" },
];

const DrawerLayout = ({ label, navigateTo }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(navigateTo)}
      style={styles.drawerOption}
    >
      <Text style={styles.drawerOptionText}>{label}</Text>
    </TouchableOpacity>
  );
};

function DrawerContent(props) {
  const { navigation } = props;
  const [userData, setUserData] = useState({ firstName: "", emailId: "" });
  const [showCategories, setShowCategories] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getUserData();
      if (data) {
        setUserData(data);
      }
    };

    fetchUserData();
  }, []);

  const handleCategorySelect = (category) => {
    navigation.navigate("CategoryScreen", { category });
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity style={{ marginLeft: 10, flex: 1 }}>
                <Title style={styles.title}>{userData.firstName}</Title>
                <Text style={styles.caption} numberOfLines={1}>
                  {userData.emailId}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.closeDrawer()}
                style={styles.closeButton}
              >
                <Icon name="close" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.drawerSection}>
            <View style={styles.categorySection}>
              <TouchableOpacity
                style={styles.dropdownHeader}
                onPress={() => setShowCategories(!showCategories)}
              >
                <Text style={styles.categoryTitle}>Category</Text>
                <Icon
                  name={showCategories ? "chevron-up" : "chevron-down"}
                  size={24}
                  color="#fff"
                />
              </TouchableOpacity>
              {showCategories && (
                <View style={styles.dropdownContainer}>
                  {categories.map((category, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.categoryItem}
                      onPress={() => handleCategorySelect(category.value)}
                    >
                      <Text style={styles.categoryText}>{category.label}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
            {drawerOptions.map((option, index) => (
              <DrawerLayout
                key={index}
                label={option.label}
                navigateTo={option.navigateTo}
              />
            ))}
          </View>
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={"#fff"} size={size} />
          )}
          label="Return Order"
          labelStyle={{ color: "#fff" }}
          onPress={() => navigation.navigate("ReturnOrder")}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="email" color={"#fff"} size={size} />
          )}
          label="Contact"
          labelStyle={{ color: "#fff" }}
          onPress={() => navigation.navigate("Contact")}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="login" color={"#fff"} size={size} />
          )}
          label="Log In"
          labelStyle={{ color: "#fff" }}
          onPress={() => navigation.navigate("LogIn")}
        />
      </View>
    </View>
  );
}

export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: "#252355",
  },
  userInfoSection: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingVertical: 15,
  },
  closeButton: {
    marginLeft: 50,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  caption: {
    fontSize: 13,
    lineHeight: 14,
    color: "#fff",
  },
  drawerSection: {
    marginTop: 15,
    // borderBottomWidth: 1,
    borderBottomColor: "#dedede",
  },
  bottomDrawerSection: {
    marginBottom: 15,
    // borderTopColor: "#dedede",
    // borderTopWidth: 1,
    // borderBottomColor: "#dedede",
    // borderBottomWidth: 1,
  },
  separator: {
    height: 0.3,
    backgroundColor: "#fafafa",
    marginHorizontal: 20,
    opacity: 0.6,
  },
  categorySection: {
    marginTop: 15,
    paddingHorizontal: 20,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  dropdownHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  dropdownContainer: {
    backgroundColor: "#252355",
    color: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  categoryItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    // borderBottomWidth: 1,
    // borderBottomColor: "#ccc",
  },
  categoryText: {
    fontSize: 16,
    color: "#fff",
  },
  drawerOption: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  drawerOptionText: {
    fontSize: 16,
    color: "#fff",
  },
});
