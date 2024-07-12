// import React, { useEffect, useState, useCallback } from "react";
// import {
//   View,
//   Text,
//   FlatList,
//   Image,
//   StyleSheet,
//   TouchableOpacity,
// } from "react-native";
// import { fetchCartData, getUserId } from "../utlis/asyncStorage";
// import { useNavigation, useFocusEffect } from "@react-navigation/native";

// const defaultImage = require("../assets/defaultcart.png");

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const navigation = useNavigation();

//   const getCartData = async () => {
//     try {
//       const data = await fetchCartData();
//       if (data && data.length > 0) {
//         const items = data[0]?.products.map((item) => ({
//           ...item,
//           cartItem: item.cartItem || {}, // Ensure cartItem is defined
//         }));
//         setCartItems(items);
//       }
//     } catch (error) {
//       console.error("Failed to fetch cart data:", error);
//     }
//   };

//   useFocusEffect(
//     useCallback(() => {
//       getCartData();
//     }, [])
//   );

//   const updateCartItemQuantity = async (cartItem, action) => {
//     const userId = await getUserId();
//     try {
//       const response = await fetch(
//         `http://192.168.1.43:5000/api/cart/${action}`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ userId, cartItem: cartItem.cartItem._id }),
//         }
//       );

//       if (response.ok) {
//         await getCartData(); // Re-fetch the cart data after updating
//       } else {
//         console.error(`Failed to ${action} product in cart`);
//       }
//     } catch (error) {
//       console.error(`Error updating cart item quantity: ${error}`);
//     }
//   };

//   const handleIncrement = (item) => updateCartItemQuantity(item, "increment");
//   const handleDecrement = (item) => updateCartItemQuantity(item, "decrement");

//   const navigateToProduct = (product) => {
//     navigation.navigate("ProductDetail", { product });
//   };

//   const renderItem = ({ item }) => {
//     // Ensure item and item.cartItem are defined before rendering
//     if (!item || !item.cartItem || !item.cartItem._id) {
//       return null; // or handle this case as per your UI requirements
//     }

//     return (
//       <TouchableOpacity
//         style={styles.itemContainer}
//         onPress={() => navigateToProduct(item.cartItem)}
//       >
//         <Image
//           source={{ uri: item.cartItem.images[0] }}
//           style={styles.itemImage}
//           defaultSource={defaultImage} // Use default image
//           // onError={(error) => {
//           //   console.error("Image load error:", error.nativeEvent.error);
//           //   // Update image to default if it fails to load
//           //   item.image = defaultImage;
//           // }}
//         />
//         <View style={styles.itemDetails}>
//           <Text style={styles.itemName}>{item.cartItem.name}</Text>
//           <Text style={styles.itemPrice}>
//             ₹{item.cartItem.discountedPrice || item.cartItem.price}
//           </Text>
//           <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
//           <View style={styles.quantityControls}>
//             <TouchableOpacity
//               style={styles.controlButton}
//               onPress={() => handleDecrement(item)}
//             >
//               <Text style={styles.controlButtonText}>-</Text>
//             </TouchableOpacity>
//             <Text style={styles.quantityText}>{item.quantity}</Text>
//             <TouchableOpacity
//               style={styles.controlButton}
//               onPress={() => handleIncrement(item)}
//             >
//               <Text style={styles.controlButtonText}>+</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       {cartItems.length > 0 ? (
//         <FlatList
//           data={cartItems}
//           renderItem={renderItem}
//           keyExtractor={(item, index) =>
//             item._id?.toString() || index.toString()
//           } // Ensure key is a string
//           contentContainerStyle={styles.listContent}
//         />
//       ) : (
//         <View style={styles.emptyContainer}>
//           <Text style={styles.emptyText}>Your cart is currently empty</Text>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   listContent: {
//     paddingVertical: 20,
//     marginTop: 70,
//     marginHorizontal: 15,
//   },
//   // itemContainer: {
//   //   flexDirection: "row",
//   //   alignItems: "center",
//   //   marginBottom: 20,
//   //   padding: 10,
//   //   borderWidth: 1,
//   //   borderColor: "#ccc",
//   //   borderRadius: 10,
//   // },
//   itemContainer: {
//     flexDirection: "row",
//     marginVertical: 10,
//     padding: 10,
//     backgroundColor: "#f9f9f9",
//     borderRadius: 5,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.23,
//     shadowRadius: 2.62,
//     elevation: 4,
//   },
//   itemImage: {
//     width: 100,
//     height: 100,
//     resizeMode: "cover",
//     borderRadius: 10,
//   },
//   itemDetails: {
//     marginLeft: 20,
//   },
//   itemName: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   itemPrice: {
//     fontSize: 16,
//     color: "#888",
//     marginTop: 5,
//   },
//   itemQuantity: {
//     fontSize: 16,
//     color: "#888",
//     marginTop: 5,
//   },
//   quantityControls: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 10,
//   },
//   controlButton: {
//     width: 30,
//     height: 30,
//     justifyContent: "center",
//     alignItems: "center",
//     borderWidth: 1,
//     borderColor: "#888",
//     borderRadius: 5,
//     marginHorizontal: 10,
//     backgroundColor: "#252355",
//   },
//   controlButtonText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#888",
//   },
//   quantityText: {
//     fontSize: 16,
//     color: "#888",
//   },
//   emptyContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   emptyText: {
//     fontSize: 20,
//     color: "#888",
//   },
// });

// export default Cart;

// //////////////////////////////////////////////////////////////////////////////////////////////

/////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// // TOTAL FAIR RESETS ON QUANTITY UPDATE
// import React, { useEffect, useState, useCallback } from "react";
// import {
//   View,
//   Text,
//   FlatList,
//   Image,
//   StyleSheet,
//   TouchableOpacity,
// } from "react-native";
// import { fetchCartData, getUserId } from "../utlis/asyncStorage";
// import { useNavigation, useFocusEffect } from "@react-navigation/native";

// const defaultImage = require("../assets/defaultcart.png");

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [totalAmount, setTotalAmount] = useState(0); // State to store total amount
//   const navigation = useNavigation();

//   const getCartData = async () => {
//     try {
//       const data = await fetchCartData();
//       if (data && data.length > 0) {
//         const items = data[0]?.products.map((item) => ({
//           ...item,
//           cartItem: item.cartItem || {}, // Ensure cartItem is defined
//         }));
//         setCartItems(items);
//         // Reset selected items and total amount when fetching new cart data
//         setSelectedItems([]);
//         setTotalAmount(0);
//       }
//     } catch (error) {
//       console.error("Failed to fetch cart data:", error);
//     }
//   };

//   useFocusEffect(
//     useCallback(() => {
//       getCartData();
//     }, [])
//   );

//   useEffect(() => {
//     // Calculate total amount for selected items
//     const newTotalAmount = selectedItems.reduce(
//       (total, item) =>
//         total +
//         (item.cartItem.discountedPrice || item.cartItem.price) * item.quantity,
//       0
//     );
//     setTotalAmount(newTotalAmount);
//   }, [selectedItems]);

//   const updateCartItemQuantity = async (cartItem, action) => {
//     const userId = await getUserId();
//     try {
//       const response = await fetch(
//         `http://192.168.1.43:5000/api/cart/${action}`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ userId, cartItem: cartItem.cartItem._id }),
//         }
//       );

//       if (response.ok) {
//         await getCartData(); // Re-fetch the cart data after updating
//       } else {
//         console.error(`Failed to ${action} product in cart`);
//       }
//     } catch (error) {
//       console.error(`Error updating cart item quantity: ${error}`);
//     }
//   };

//   const handleIncrement = (item) => {
//     updateCartItemQuantity(item, "increment");
//   };

//   const handleDecrement = (item) => {
//     if (item.quantity === 1) {
//       setSelectedItems(selectedItems.filter((i) => i._id !== item._id));
//     }
//     updateCartItemQuantity(item, "decrement");
//   };

//   const navigateToProduct = (product) => {
//     navigation.navigate("ProductDetail", { product });
//   };

//   const handleSelectItem = (item) => {
//     setSelectedItems((prevSelected) => {
//       if (prevSelected.includes(item)) {
//         return prevSelected.filter((i) => i !== item);
//       } else {
//         return [...prevSelected, item];
//       }
//     });
//   };

//   const handleCheckout = () => {
//     navigation.navigate("Checkout", {
//       selectedItems,
//       totalAmount,
//     });
//   };

//   const renderItem = ({ item }) => {
//     if (!item || !item.cartItem || !item.cartItem._id) {
//       return null;
//     }

//     const isSelected = selectedItems.includes(item);

//     return (
//       <TouchableOpacity
//         style={[styles.itemContainer, isSelected && styles.selectedItem]}
//         onPress={() => handleSelectItem(item)}
//       >
//         <Image
//           source={{ uri: item.cartItem.images[0] }}
//           style={styles.itemImage}
//           defaultSource={defaultImage}
//         />
//         <View style={styles.itemDetails}>
//           <Text style={styles.itemName}>{item.cartItem.name}</Text>
//           <Text style={styles.itemPrice}>
//             ₹{item.cartItem.discountedPrice || item.cartItem.price}
//           </Text>
//           <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
//           <View style={styles.quantityControls}>
//             <TouchableOpacity
//               style={styles.controlButton}
//               onPress={() => handleDecrement(item)}
//             >
//               <Text style={styles.controlButtonText}>-</Text>
//             </TouchableOpacity>
//             <Text style={styles.quantityText}>{item.quantity}</Text>
//             <TouchableOpacity
//               style={styles.controlButton}
//               onPress={() => handleIncrement(item)}
//             >
//               <Text style={styles.controlButtonText}>+</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       {cartItems.length > 0 ? (
//         <>
//           <FlatList
//             data={cartItems}
//             renderItem={renderItem}
//             keyExtractor={(item, index) =>
//               item._id?.toString() || index.toString()
//             }
//             contentContainerStyle={styles.listContent}
//           />
//           <View style={styles.footer}>
//             <Text style={styles.totalAmountText}>
//               Total amount: ₹{totalAmount}
//             </Text>
//             <TouchableOpacity
//               style={styles.checkoutButton}
//               onPress={handleCheckout} // Replace with your checkout logic
//               disabled={selectedItems.length === 0}
//             >
//               <Text style={styles.checkoutButtonText}>Checkout</Text>
//             </TouchableOpacity>
//           </View>
//         </>
//       ) : (
//         <View style={styles.emptyContainer}>
//           <Text style={styles.emptyText}>Your cart is currently empty</Text>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   listContent: {
//     paddingVertical: 20,
//     marginTop: 70,
//     marginHorizontal: 15,
//   },
//   itemContainer: {
//     flexDirection: "row",
//     marginVertical: 10,
//     padding: 10,
//     backgroundColor: "#f9f9f9",
//     borderRadius: 5,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.23,
//     shadowRadius: 2.62,
//     elevation: 4,
//   },
//   selectedItem: {
//     borderColor: "#252355",
//     borderWidth: 2,
//   },
//   itemImage: {
//     width: 100,
//     height: 100,
//     resizeMode: "cover",
//     borderRadius: 10,
//   },
//   itemDetails: {
//     marginLeft: 20,
//   },
//   itemName: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   itemPrice: {
//     fontSize: 16,
//     color: "#888",
//     marginTop: 5,
//   },
//   itemQuantity: {
//     fontSize: 16,
//     color: "#888",
//     marginTop: 5,
//   },
//   quantityControls: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 10,
//   },
//   controlButton: {
//     width: 30,
//     height: 30,
//     justifyContent: "center",
//     alignItems: "center",
//     borderWidth: 1,
//     borderColor: "#888",
//     borderRadius: 5,
//     marginHorizontal: 10,
//     backgroundColor: "#252355",
//   },
//   controlButtonText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#fff",
//   },
//   quantityText: {
//     fontSize: 16,
//     color: "#888",
//   },
//   footer: {
//     position: "absolute",
//     bottom: 100,
//     left: 0,
//     right: 0,
//     padding: 5,
//     // borderTopWidth: 1,
//     borderColor: "#ddd",
//     backgroundColor: "#fff",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   totalAmountText: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   checkoutButton: {
//     backgroundColor: "#252355",
//     padding: 15,
//     borderRadius: 5,
//     alignItems: "center",
//   },
//   checkoutButtonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   emptyContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   emptyText: {
//     fontSize: 20,
//     color: "#888",
//   },
// });

// export default Cart;

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
          cartItem: item.cartItem || {}, // Ensure cartItem is defined
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
        (item.cartItem.discountedPrice || item.cartItem.price) * item.quantity,
      0
    );
    setTotalAmount(newTotalAmount);
  }, [selectedItems]);

  const updateCartItemQuantity = async (cartItem, action) => {
    const userId = await getUserId();
    try {
      const response = await fetch(
        `http://192.168.1.43:5000/api/cart/${action}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId, cartItem: cartItem.cartItem._id }),
        }
      );

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
    if (!item || !item.cartItem || !item.cartItem._id) {
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
        <Image
          source={{ uri: item.cartItem.images[0] }}
          style={styles.itemImage}
          defaultSource={defaultImage}
        />
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>{item.cartItem.name}</Text>
          <Text style={styles.itemPrice}>
            ₹{item.cartItem.discountedPrice || item.cartItem.price}
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
    justifyContent: "center",
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 14,
    color: "#888",
    marginTop: 5,
  },
  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  controlButton: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 5,
    marginHorizontal: 10,
    backgroundColor: "#252355",
  },
  controlButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  quantityText: {
    fontSize: 16,
    color: "#888",
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
  },
  checkoutButton: {
    backgroundColor: "#252355",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  checkoutButtonText: {
    color: "#fff",
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
    color: "#888",
  },
});

export default Cart;
