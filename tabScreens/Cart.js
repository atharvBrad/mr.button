import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { fetchCartData, getUserId } from "../utlis/asyncStorage";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { API_URL } from "@env"; // Import API_URL from .env

const defaultImage = require("../assets/defaultcart.png");

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const navigation = useNavigation();

  const getCartData = async () => {
    try {
      const data = await fetchCartData();
      if (data && data.length > 0) {
        const items = data[0]?.products.map((item) => ({
          ...item,
          product: item.cartItem || {}, // Ensure product is defined
        }));
        setCartItems(items);
        setSelectedItems([]);
        setTotalAmount(0);
      }
    } catch (error) {
      console.error("Failed to fetch cart data:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getCartData();
    }, [])
  );

  useEffect(() => {
    const newTotalAmount = selectedItems.reduce(
      (total, item) =>
        total +
        (item.product.compareAtPrice || item.product.price) * item.quantity,
      0
    );
    setTotalAmount(newTotalAmount);
  }, [selectedItems]);

  const updateCartItemQuantity = async (cartItem, action) => {
    const userId = await getUserId();
    try {
      const response = await fetch(`${API_URL}/api/cart/${action}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, cartItem: cartItem.product._id }),
      });

      if (response.ok) {
        await getCartData();
      } else {
        console.error(`Failed to ${action} product in cart`);
      }
    } catch (error) {
      console.error(`Error updating cart item quantity: ${error}`);
    }
  };

  const handleIncrement = (item) => {
    updateCartItemQuantity(item, "increment");
  };

  const handleDecrement = (item) => {
    if (item.quantity === 1) {
      setSelectedItems(selectedItems.filter((i) => i._id !== item._id));
    }
    updateCartItemQuantity(item, "decrement");
  };

  const navigateToProduct = (product) => {
    navigation.navigate("ProductDetail", { product });
  };

  const handleSelectItem = (item) => {
    setSelectedItems((prevSelected) => {
      if (prevSelected.includes(item)) {
        return prevSelected.filter((i) => i !== item);
      } else {
        return [...prevSelected, item];
      }
    });
  };

  const handleCheckout = () => {
    navigation.navigate("Checkout", {
      selectedItems,
      totalAmount,
    });
  };

  const renderItem = ({ item }) => {
    if (!item || !item.product || !item.product._id) {
      return null;
    }

    const isSelected = selectedItems.includes(item);

    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity
          style={styles.radioButton}
          onPress={() => handleSelectItem(item)}
        >
          <View
            style={[
              styles.radioButtonInner,
              isSelected && styles.radioButtonSelected,
            ]}
          />
        </TouchableOpacity>
        <Image source={{ uri: item.product.image }} style={styles.itemImage} />
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>{item.product.title}</Text>
          <Text style={styles.itemPrice}>
            ₹{item.product.compareAtPrice || item.product.price}
          </Text>
          <View style={styles.quantityControls}>
            <TouchableOpacity
              style={styles.controlButton}
              onPress={() => handleDecrement(item)}
            >
              <Text style={styles.controlButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{item.quantity}</Text>
            <TouchableOpacity
              style={styles.controlButton}
              onPress={() => handleIncrement(item)}
            >
              <Text style={styles.controlButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {cartItems.length > 0 ? (
        <>
          <FlatList
            data={cartItems}
            renderItem={renderItem}
            keyExtractor={(item, index) =>
              item._id?.toString() || index.toString()
            }
            contentContainerStyle={styles.listContent}
          />
          <View style={styles.footer}>
            <Text style={styles.totalAmountText}>
              Total amount: ₹{totalAmount}
            </Text>
            <TouchableOpacity
              style={styles.checkoutButton}
              onPress={handleCheckout}
              disabled={selectedItems.length === 0}
            >
              <Text style={styles.checkoutButtonText}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </>
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
    paddingBottom: 100, // Additional padding for the footer
  },
  listContent: {
    paddingVertical: 20,
    marginHorizontal: 15,
    marginTop: 60,
  },
  itemContainer: {
    flexDirection: "row",
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    alignItems: "center",
  },
  radioButton: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  radioButtonInner: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#252355",
    justifyContent: "center",
    alignItems: "center",
  },
  radioButtonSelected: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#252355",
  },
  itemImage: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 10,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 20,
    justifyContent: "space-between",
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Avenir",
  },
  itemPrice: {
    fontSize: 14,
    color: "#888",
    fontFamily: "Avenir",

    marginTop: 5,
  },
  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginLeft: "auto", // Align to the right side
  },
  controlButton: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: "#252355",
  },
  controlButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "Avenir",
  },
  quantityText: {
    fontSize: 16,
    color: "#888",
    marginHorizontal: 10,
    fontFamily: "Avenir",
  },
  footer: {
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    borderTopWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalAmountText: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Avenir",
  },
  checkoutButton: {
    backgroundColor: "#252355",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  checkoutButtonText: {
    color: "#fff",
    fontFamily: "Avenir",

    fontSize: 18,
    fontWeight: "bold",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 20,
    fontFamily: "Avenir",

    color: "#888",
  },
});

export default Cart;
