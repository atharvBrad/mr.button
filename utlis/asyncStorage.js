import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { API_URL } from "@env"; // Import API_URL from .env

export const getUserData = async () => {
  try {
    const userData = await AsyncStorage.getItem("userData");
    return userData ? JSON.parse(userData) : null;
  } catch (error) {
    console.error("Failed to fetch userData from AsyncStorage", error);
    return null;
  }
};

export const getUserId = async () => {
  try {
    const userId = await AsyncStorage.getItem("userId");
    return userId;
  } catch (error) {
    console.error("Failed to fetch userId from AsyncStorage", error);
    return null;
  }
};

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    return token;
  } catch (error) {
    console.error("Failed to fetch token from AsyncStorage", error);
    return null;
  }
};

export const isAdmin = async () => {
  try {
    const userData = await getUserData();
    return userData && userData.isAdmin === true;
  } catch (error) {
    console.error("Failed to check if user is admin", error);
    return false;
  }
};

export const fetchCartData = async () => {
  try {
    const userId = await AsyncStorage.getItem("userId");
    if (!userId) {
      throw new Error("User not logged in");
    }

    const response = await axios.get(`${API_URL}/api/cart/find/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch cart data", error);
    return null;
  }
};
