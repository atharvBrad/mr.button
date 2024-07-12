// import React, { useEffect, useState, useCallback } from "react";
// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   Alert,
//   ActivityIndicator,
// } from "react-native";
// import axios from "axios";
// import { useFocusEffect, useNavigation } from "@react-navigation/native";
// import { getUserId } from "../utlis/asyncStorage";

// const WishlistScreen = () => {
//   const [wishlist, setWishlist] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const navigation = useNavigation();

//   useFocusEffect(
//     useCallback(() => {
//       fetchWishlist();
//     }, [])
//   );

//   const fetchWishlist = async () => {
//     setIsLoading(true);
//     try {
//       const userId = await getUserId();
//       if (!userId) {
//         Alert.alert("Error", "User not logged in");
//         setIsLoading(false);
//         return;
//       }
//       const response = await axios.get(
//         `http://192.168.1.43:5000/wishlist/${userId}`
//       );
//       setWishlist(response.data.products);
//     } catch (error) {
//       console.error("Error fetching wishlist", error);
//       Alert.alert("Error", "Failed to fetch wishlist");
//     }
//     setIsLoading(false);
//   };

//   const removeFromWishlist = async (productId) => {
//     setIsLoading(true);
//     try {
//       const userId = await getUserId();
//       if (!userId) {
//         Alert.alert("Error", "User not logged in");
//         setIsLoading(false);
//         return;
//       }
//       await axios.post("http://192.168.1.43:5000/wishlist/remove", {
//         userId,
//         productId,
//       });
//       fetchWishlist();
//     } catch (error) {
//       console.error("Error removing from wishlist", error);
//       Alert.alert("Error", "Failed to remove from wishlist");
//     }
//     setIsLoading(false);
//   };

//   const renderWishlistItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.itemContainer}
//       onPress={() =>
//         navigation.navigate("ProductDetail", { productId: item._id })
//       }
//     >
//       <Image
//         source={{ uri: item.image }}
//         style={styles.productImage}
//         defaultSource={require("../assets/defaultImage.png")}
//       />
//       <View style={styles.productDetails}>
//         <Text style={styles.productName}>{item.name}</Text>
//         <Text style={styles.productPrice}>₹{item.price}</Text>
//         <TouchableOpacity
//           style={styles.removeButton}
//           onPress={() => removeFromWishlist(item._id)}
//         >
//           <Text style={styles.buttonText}>Remove from Wishlist</Text>
//         </TouchableOpacity>
//       </View>
//     </TouchableOpacity>
//   );

//   if (isLoading) {
//     return (
//       <View style={styles.loaderContainer}>
//         <ActivityIndicator size="large" color="#000" />
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={wishlist}
//         keyExtractor={(item) => item._id}
//         renderItem={renderWishlistItem}
//         ListEmptyComponent={
//           <Text style={styles.emptyText}>Your wishlist is empty.</Text>
//         }
//         contentContainerStyle={styles.listContent}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     padding: 10,
//   },
//   listContent: {
//     paddingVertical: 20,
//     marginTop: 70,
//     marginHorizontal: 15,
//   },
//   loaderContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
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
//   productImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 5,
//   },
//   productDetails: {
//     flex: 1,
//     marginLeft: 10,
//     justifyContent: "center",
//   },
//   productName: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   productPrice: {
//     fontSize: 16,
//     color: "#888",
//     marginVertical: 5,
//   },
//   removeButton: {
//     backgroundColor: "#BF1013",
//     padding: 10,
//     borderRadius: 5,
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 14,
//   },
//   emptyText: {
//     textAlign: "center",
//     marginTop: 20,
//     fontSize: 16,
//     color: "#888",
//   },
// });

// export default WishlistScreen;

import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getUserId } from "../utlis/asyncStorage";
import { useAddToCart } from "../hook/useAddToCart";
import Icon from "react-native-vector-icons/FontAwesome"; // Ensure you have this library installed

const WishlistScreen = () => {
  const [wishlist, setWishlist] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { addToCart } = useAddToCart();
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      fetchWishlist();
    }, [])
  );

  const fetchWishlist = async () => {
    setIsLoading(true);
    try {
      const userId = await getUserId();
      if (!userId) {
        Alert.alert("Error", "User not logged in");
        setIsLoading(false);
        return;
      }
      const response = await axios.get(
        `http://192.168.1.43:5000/wishlist/${userId}`
      );
      setWishlist(response.data.products);
    } catch (error) {
      console.error("Error fetching wishlist", error);
      Alert.alert("Error", "Failed to fetch wishlist");
    }
    setIsLoading(false);
  };

  const removeFromWishlist = async (productId) => {
    setIsLoading(true);
    try {
      const userId = await getUserId();
      if (!userId) {
        Alert.alert("Error", "User not logged in");
        setIsLoading(false);
        return;
      }
      await axios.post("http://192.168.1.43:5000/wishlist/remove", {
        userId,
        productId,
      });
      fetchWishlist();
    } catch (error) {
      console.error("Error removing from wishlist", error);
      Alert.alert("Error", "Failed to remove from wishlist");
    }
    setIsLoading(false);
  };

  const handleAddToCart = async (productId) => {
    const result = await addToCart(productId);
    if (result) {
      Alert.alert("Success", "Product added to cart");
    } else {
      Alert.alert("Error", "Failed to add product to cart");
    }
  };

  const renderWishlistItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate("ProductDetail", { product: item })}
    >
      <Image
        source={{ uri: item.image }}
        style={styles.productImage}
        defaultSource={require("../assets/defaultImage.png")}
      />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>₹{item.price}</Text>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={() => handleAddToCart(item._id)}
        >
          <Text style={styles.buttonText}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => removeFromWishlist(item._id)}
      >
        <Icon name="times" size={20} color="#fff" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={wishlist}
        keyExtractor={(item) => item._id}
        renderItem={renderWishlistItem}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Your wishlist is empty.</Text>
        }
        contentContainerStyle={styles.listContent}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  listContent: {
    marginTop: 60,
    paddingVertical: 20,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer: {
    flex: 1,
    flexDirection: "column",
    margin: 10,
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
    position: "relative",
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 5,
  },
  productDetails: {
    marginTop: 10,
    alignItems: "center",
  },
  productName: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  productPrice: {
    fontSize: 14,
    color: "#888",
    marginVertical: 5,
  },
  addToCartButton: {
    backgroundColor: "#252355",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
    marginTop: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
  },
  removeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(128, 128, 128, 0.5)",
    padding: 5,
    borderRadius: 15,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "#888",
  },
});

export default WishlistScreen;
