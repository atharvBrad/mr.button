import { useState } from "react";
import { getUserId } from "../utlis/asyncStorage";
import { API_URL } from "@env"; // Import API_URL from .env

export const useAddToCart = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const addToCart = async (productId, quantity = 1) => {
    const userId = await getUserId();
    console.log("Received userId:", userId);
    console.log("Received cartItem:", productId);
    console.log("Received quantity:", quantity);

    if (!userId) {
      setError("User not logged in");
      return false;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/cart/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          cartItem: productId,
          quantity,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add product to cart");
      }

      const data = await response.json();
      console.log("Add to cart response:", data);
      return data;
    } catch (error) {
      console.error("Error adding to cart:", error);
      setError(error.message);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { addToCart, isLoading, error };
};
