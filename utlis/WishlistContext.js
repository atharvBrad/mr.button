// WishlistContext.js
import React, { createContext, useState, useContext } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = async (product) => {
    const favorites = JSON.parse(await AsyncStorage.getItem("favorites")) || [];
    const alreadyExists = favorites.some((item) => item.id === product.id);

    if (!alreadyExists) {
      const newWishlist = [...favorites, product];
      await AsyncStorage.setItem("favorites", JSON.stringify(newWishlist));
      setWishlist(newWishlist);
    }

    return !alreadyExists;
  };

  const fetchWishlist = async () => {
    try {
      const favorites =
        JSON.parse(await AsyncStorage.getItem("favorites")) || [];
      setWishlist(favorites);
    } catch (error) {
      console.error("Error fetching wishlist:", error);
    }
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, fetchWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
