// hooks/useAddToWishlist.js
import { useState } from "react";
import axios from "axios";
import { getUserId } from "../utlis/asyncStorage";

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

      const response = await axios.post(
        "http://192.168.1.43:5000/wishlist/add",
        {
          userId,
          productId,
        }
      );
      setIsLoading(false);
      return response.data;
    } catch (err) {
      setIsLoading(false);
      setError(err);
    }
  };

  return { addToWishlist, isLoading, error };
};
