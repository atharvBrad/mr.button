import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { fetchCartData } from "../utlis/asyncStorage"; // Adjust the import path as needed

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const getCartData = async () => {
      try {
        const data = await fetchCartData();
        if (data && data.length > 0) {
          const items = data[0]?.products.map((item) => ({
            ...item,
            cartItem: item.cartItem || {}, // Ensure cartItem is defined
          }));
          setCartItems(items);
        }
      } catch (error) {
        console.error("Failed to fetch cart data:", error);
      }
    };

    getCartData();
  }, []);

  const renderItem = ({ item }) => {
    // Ensure item and item.cartItem are defined before rendering
    if (!item || !item.cartItem || !item.cartItem._id) {
      return null; // or handle this case as per your UI requirements
    }

    return (
      <View style={styles.itemContainer}>
        <Image
          source={{ uri: item.cartItem.images[0] }}
          style={styles.itemImage}
        />
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>{item.cartItem.name}</Text>
          <Text style={styles.itemPrice}>
            ₹{item.cartItem.discountedPrice || item.cartItem.price}
          </Text>
          <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {cartItems.length > 0 ? (
        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={(item) => item._id?.toString() || index.toString()} // Ensure key is a string
          contentContainerStyle={styles.listContent}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Your cart is currently empty</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listContent: {
    paddingVertical: 20,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
  },
  itemImage: {
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
  itemDetails: {
    marginLeft: 20,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 16,
    color: "#888",
    marginTop: 5,
  },
  itemQuantity: {
    fontSize: 16,
    color: "#888",
    marginTop: 5,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 20,
    color: "#888",
  },
});

export default Cart;
