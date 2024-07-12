import { useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoadingReviews, setIsLoadingReviews] = useState(false);

  const fetchReviews = async (productId) => {
    setIsLoadingReviews(true);
    try {
      const response = await axios.get(
        `http://192.168.1.43:5000/api/products/${productId}/reviews`
      );
      setReviews(response.data);
    } catch (error) {
      console.error("Error fetching reviews", error);
      Alert.alert("Error", "Failed to fetch reviews");
    }
    setIsLoadingReviews(false);
  };

  const addReview = async (productId, rating, comment) => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) {
        throw new Error("You need to be logged in to add a review.");
      }

      const response = await axios.post(
        `http://192.168.1.43:5000/api/reviews`,
        {
          productId,
          rating,
          comment,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status !== 201) {
        throw new Error("Failed to add review");
      }
    } catch (error) {
      console.error(
        "Error adding review",
        error.response?.data || error.message
      );
      throw error;
    }
  };

  return {
    reviews,
    isLoadingReviews,
    fetchReviews,
    addReview,
  };
};
