// hooks/useAddToWishlist.js
import { useState } from "react";
import axios from "axios";
import { getUserId } from "../utlis/asyncStorage";
import { API_URL } from "@env"; // Import API_URL from .env

export const useAddToWishlist = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const addToWishlist = async (productId) => {
    setIsLoading(true);
    setError(null);
    try {
      const userId = await getUserId();
      if (!userId) {
        throw new Error("User not logged in");
      }

      const response = await axios.post(`${API_URL}/wishlist/add`, {
        userId,
        productId,
      });
      setIsLoading(false);
      return response.data;
    } catch (err) {
      setIsLoading(false);
      setError(err);
    }
  };

  return { addToWishlist, isLoading, error };
};
