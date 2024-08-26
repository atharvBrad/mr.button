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
// import { useAddToCart } from "../hook/useAddToCart";
// import Icon from "react-native-vector-icons/FontAwesome";
// import { API_URL } from "@env";

// const WishlistScreen = () => {
//   const [wishlist, setWishlist] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const { addToCart } = useAddToCart();
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
//       const response = await axios.get(`${API_URL}/wishlist/${userId}`);
//       setWishlist(response.data.products);
//     } catch (error) {
//       console.error("Error fetching wishlist", error);
//       if (error.response && error.response.status === 404) {
//         setWishlist([]);
//       } else {
//         Alert.alert("Error", "Failed to fetch wishlist");
//       }
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
//       await axios.post(`${API_URL}/wishlist/remove`, {
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

//   const handleAddToCart = async (productId) => {
//     const result = await addToCart(productId);
//     if (result) {
//       Alert.alert("Success", "Product added to cart");
//     } else {
//       Alert.alert("Error", "Failed to add product to cart");
//     }
//   };

//   const renderWishlistItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.itemContainer}
//       onPress={() => navigation.navigate("ProductDetail", { product: item })}
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
//           style={styles.addToCartButton}
//           onPress={() => handleAddToCart(item._id)}
//         >
//           <Text style={styles.buttonText}>ADD TO CART</Text>
//         </TouchableOpacity>
//       </View>
//       <TouchableOpacity
//         style={styles.removeButton}
//         onPress={() => removeFromWishlist(item._id)}
//       >
//         <Icon name="times" size={20} color="#fff" />
//       </TouchableOpacity>
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
//           <Text style={styles.emptyText}>Your wishlist is currently empty</Text>
//         }
//         contentContainerStyle={styles.listContent}
//         numColumns={2}
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
//     marginTop: 60,
//     paddingVertical: 20,
//   },
//   loaderContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   itemContainer: {
//     flex: 1,
//     flexDirection: "column",
//     margin: 10,
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
//     alignItems: "center",
//     position: "relative",
//   },
//   productImage: {
//     width: 150,
//     height: 150,
//     borderRadius: 5,
//   },
//   productDetails: {
//     marginTop: 10,
//     alignItems: "center",
//   },
//   productName: {
//     fontSize: 14,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   productPrice: {
//     fontSize: 14,
//     color: "#888",
//     marginVertical: 5,
//   },
//   addToCartButton: {
//     backgroundColor: "#252355",
//     padding: 10,
//     borderRadius: 5,
//     alignItems: "center",
//     width: "100%",
//     marginTop: 5,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 14,
//   },
//   removeButton: {
//     position: "absolute",
//     top: 10,
//     right: 10,
//     backgroundColor: "rgba(128, 128, 128, 0.5)",
//     padding: 5,
//     borderRadius: 15,
//   },
//   emptyText: {
//     textAlign: "center",
//     alignContent: "center",
//     justifyContent: "center",
//     marginTop: 275,
//     fontSize: 20,
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
import Icon from "react-native-vector-icons/FontAwesome";
import { API_URL } from "@env";

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
      const response = await axios.get(`${API_URL}/wishlist/${userId}`);
      setWishlist(response.data.products);
    } catch (error) {
      console.error("Error fetching wishlist", error);
      if (error.response && error.response.status === 404) {
        setWishlist([]);
      } else {
        Alert.alert("Error", "Failed to fetch wishlist");
      }
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
      await axios.post(`${API_URL}/wishlist/remove`, {
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
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.title}</Text>
        {/* <Text style={styles.productPrice}>₹{item.price}</Text> */}
        <Text style={styles.productPrice}>
          ₹{item.price}{" "}
          <Text style={styles.discountedPrice}>₹{item.compareAtPrice}</Text>
        </Text>
        {/* {item.metafields && (
          <>
            <Text style={styles.productMetafield}>
              Collar Type: {item.metafields.collarType.join(", ")}
            </Text>
            <Text style={styles.productMetafield}>
              Design: {item.metafields.design.join(", ")}
            </Text>
            <Text style={styles.productMetafield}>
              Fabric: {item.metafields.fabric.join(", ")}
            </Text>
            <Text style={styles.productMetafield}>
              Occasion: {item.metafields.occasion.join(", ")}
            </Text>
          </>
        )}
        {item.tags && (
          <Text style={styles.productTags}>Tags: {item.tags.join(", ")}</Text>
        )} */}
        <View style={styles.addToCart}>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={() => handleAddToCart(item._id)}
          >
            <Text style={styles.buttonText}>ADD TO CART</Text>
          </TouchableOpacity>
        </View>
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
  // console.log("Wishlist data:", wishlist);

  return (
    <View style={styles.container}>
      <FlatList
        data={wishlist}
        keyExtractor={(item) => item._id}
        renderItem={renderWishlistItem}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Your wishlist is currently empty</Text>
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
    flexDirection: "column",
    margin: 10,
    padding: 5,
    width: "100%",
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    position: "relative",
    // Adding flex: 1 to stretch the card
    flex: 1,
  },
  productImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    // Adjusting the border radius
    // borderRadius: 5,
  },
  productDetails: {
    flex: 1,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "space-between", // Space between details and button
  },
  productName: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Avenir",
  },
  productPrice: {
    fontSize: 14,
    color: "#888",
    marginVertical: 5,
    fontFamily: "Avenir",
  },
  discountedPrice: {
    textDecorationLine: "line-through",
    color: "red",
    fontFamily: "Avenir",
  },
  productMetafield: {
    fontSize: 12,
    color: "#666",
    fontFamily: "Avenir",
  },
  productTags: {
    fontSize: 12,
    color: "#666",
    marginTop: 5,
    fontFamily: "Avenir",
  },
  addToCartButton: {
    backgroundColor: "#252355",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
    marginTop: 10,
    marginBottom: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Avenir",
  },
  removeButton: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "rgba(128, 128, 128, 0.5)",
    padding: 5,
    // borderRadius: 15,
  },
  emptyText: {
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
    marginTop: 275,
    fontSize: 20,
    color: "#888",
  },
});

export default WishlistScreen;
