import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useAddToCart } from "../hook/useAddToCart";

const sampleProduct = {
  id: "1",
  name: "Reckless Day Blazer",
  code: "LUXBLJ12-PINK-S",
  price: 7295,
  discountedPrice: 3648,
  image: require("../assets/artBoard/Artboard_1.webp"),
  description: "A stylish and elegant blazer perfect for any occasion.",
  rating: 4.5,
};

const ProductDetail = ({ route }) => {
  // console.log("Route params:", route.params);

  const product = route?.params?.product || sampleProduct;
  const { addToCart, isLoading, error } = useAddToCart();

  const handleAddToCart = async () => {
    console.log("Adding product to cart:", product._id);
    try {
      const data = await addToCart(product._id, 1);
      if (data) {
        Alert.alert("Success", "Product added to the cart");
      } else {
        Alert.alert("Error", "Failed to add product to the cart");
      }
    } catch (error) {
      Alert.alert(
        "Error",
        "An error occurred while adding the product to the cart"
      );
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={{ uri: product.image }} style={styles.productImage} />
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productCode}>{product.code}</Text>
        <Text style={styles.productPrice}>
          <Text style={styles.discountedPrice}>₹{product.discountedPrice}</Text>{" "}
          ₹{product.price}
        </Text>
        <Text style={styles.productTax}>Price inclusive of all taxes.</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
        <TouchableOpacity style={styles.sizeGuideButton}>
          <Text style={styles.sizeGuideText}>Size Guide</Text>
        </TouchableOpacity>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>Rating: </Text>
          {Array.from({ length: 5 }, (_, index) => (
            <FontAwesome
              key={index}
              name="star"
              size={24}
              color={index < Math.floor(product.rating) ? "#FFD700" : "#ccc"}
            />
          ))}
          <Text style={styles.ratingNumber}> ({product.rating})</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={handleAddToCart}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator size="large" color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Add to Cart</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity style={styles.buyNowButton}>
            <Text style={styles.buttonText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    alignItems: "center",
    padding: 20,
  },
  productImage: {
    width: "100%",
    height: 400,
    resizeMode: "cover",
  },
  productName: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  productCode: {
    fontSize: 16,
    color: "#888",
    marginTop: 5,
    textAlign: "center",
  },
  productPrice: {
    fontSize: 18,
    color: "#555",
    marginTop: 10,
    textAlign: "center",
  },
  discountedPrice: {
    textDecorationLine: "line-through",
    color: "red",
  },
  productTax: {
    fontSize: 14,
    color: "#888",
    marginTop: 5,
    textAlign: "center",
  },
  productDescription: {
    fontSize: 16,
    color: "#333",
    marginTop: 10,
    textAlign: "center",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  ratingText: {
    fontSize: 16,
    color: "#333",
  },
  ratingNumber: {
    fontSize: 16,
    color: "#333",
    marginLeft: 5,
  },
  sizeGuideButton: {
    marginTop: 10,
  },
  sizeGuideText: {
    fontSize: 16,
    color: "#007BFF",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "column",
    padding: 10,
    marginTop: 30,
    width: "100%",
  },
  addToCartButton: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: "center",
  },
  buyNowButton: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProductDetail;
