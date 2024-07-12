import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "../screens/HomeScreen";
import Profile from "./Profile";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import Orders from "./Orders";

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: true,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
          elevation: 0,
          height: 100,
          backgroundColor: route.name === "Home" ? "transparent" : "#fff",
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 10,
          color: "#000",
        },
        tabBarIconStyle: {
          marginTop: 10,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
          tabBarLabel: "Cart",
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart" color={color} size={size} />
          ),
          tabBarLabel: "Wishlist",
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="clipboard-list"
              color={color}
              size={size}
            />
          ),
          tabBarLabel: "Orders",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          tabBarLabel: "Profile",
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
