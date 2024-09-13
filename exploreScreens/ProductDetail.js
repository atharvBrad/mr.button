
import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Alert,
  FlatList,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useAddToCart } from "../hook/useAddToCart";
import { useAddToWishlist } from "../hook/addToWishlist";
import { useReviews } from "../hook/useReviews";
import AddReview from "../screens/AddReview";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { API_URL } from "@env";

const defaultImage = require("../assets/defaultImage.png");
const sizes = ["S", "M", "L", "XL", "XXL"];

const ProductDetail = ({ route }) => {
  const product = route?.params?.product || {};
  const { addToCart, isLoading: isLoadingCart } = useAddToCart();
  const { addToWishlist, isLoading: isLoadingWishlist } = useAddToWishlist();
  const { reviews, isLoadingReviews, fetchReviews } = useReviews();
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    fetchReviews(product._id);
  }, [product._id]);

  const handleAddToCart = async () => {
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

  const handleAddToWishlist = async () => {
    try {
      const data = await addToWishlist(product._id);
      if (data) {
        Alert.alert("Success", "Product added to the wishlist");
      } else {
        Alert.alert("Error", "Failed to add product to the wishlist");
      }
    } catch (error) {
      Alert.alert(
        "Error",
        "An error occurred while adding the product to the wishlist"
      );
    }
  };

  const renderSizeButtons = () => {
    return sizes.map((size) => (
      <TouchableOpacity
        key={size}
        style={[
          styles.sizeButton,
          selectedSize === size && styles.selectedSizeButton,
        ]}
        onPress={() => setSelectedSize(size)}
      >
        <Text
          style={[
            styles.sizeButtonText,
            selectedSize === size && styles.selectedSizeButtonText,
          ]}
        >
          {size}
        </Text>
      </TouchableOpacity>
    ));
  };

  const filteredVariants = product.variants?.filter(
    (variant) => variant.size === selectedSize
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={{ uri: product.image }} style={styles.productImage} />
        <Text style={styles.productName}>{product.title}</Text>
        <Text style={styles.productCode}>{product.code}</Text>

        {/* Variant Details */}
        {selectedSize && filteredVariants.length > 0 && (
          <View style={styles.variantDetails}>
            <Text style={styles.variantText}>
              sku: {filteredVariants[0].sku}
            </Text>
            <Text style={styles.variantText}>
              color: {filteredVariants[0].color}
            </Text>
            <Text style={styles.variantText}>
              In Stock: {filteredVariants[0].inventoryQty}
            </Text>
          </View>
        )}

        {/* Price Section */}
        {/* <Text style={styles.productPrice}>
          ₹{product.price}{" "}
          <Text style={styles.discountedPrice}>₹{product.compareAtPrice}</Text>
        </Text> */}
        <View style={styles.priceSection}>
          <Text style={styles.discountedPrice}>₹{product.compareAtPrice}</Text>
          <Text style={styles.productPrice}>₹{product.price}</Text>
        </View>

        <Text style={styles.productTax}>Price inclusive of all taxes.</Text>
        {/* <Text style={styles.productDescription}>
          {product.bodyHtml.replace(/<\/?[^>]+(>|$)/g, "")}
        </Text> */}

        {/* Size and Color */}
        <Text style={styles.sectionTitle}>Sizes :</Text>
        <View style={styles.sizeButtonsContainer}>{renderSizeButtons()}</View>

        <TouchableOpacity style={styles.sizeGuideButton}>
          <Text style={styles.sizeGuideText}>Size Guide</Text>
        </TouchableOpacity>

        {/* Buttons Section */}
        {/* <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.addToWishlistButton, styles.button]}
            onPress={handleAddToWishlist}
            disabled={isLoadingWishlist}
          >
            {isLoadingWishlist ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Add to Favourites</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.addToCartButton, styles.button]}
            onPress={handleAddToCart}
            disabled={isLoadingCart}
          >
            {isLoadingCart ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Add to Cart</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buyNowButton, styles.button]}
            onPress={() => console.log("Buy Now pressed")}
          >
            <Text style={{ color: "#fff", fontSize: 16 }}>Buy Now</Text>
          </TouchableOpacity>
        </View> */}

        {/* Buttons Section */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.cartbutton, styles.addToCartButton]}
            onPress={handleAddToCart}
            disabled={isLoadingCart}
          >
            {isLoadingCart ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Add to Cart</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.iconButton, styles.addToWishlistButton]}
            onPress={handleAddToWishlist}
            disabled={isLoadingWishlist}
          >
            {isLoadingWishlist ? (
              <ActivityIndicator size="small" color="#000" />
            ) : (
              // <FontAwesome name="heart" size={24} color="red" />
              <MaterialCommunityIcons
                name="heart-outline"
                size={24}
                color="#252355"
              />
            )}
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[styles.button, styles.buyNowButton]}
          onPress={() => console.log("Buy Now pressed")}
        >
          <Text style={{ color: "#000", fontSize: 16, fontFamily: "Avenir" }}>
            Buy Now
          </Text>
        </TouchableOpacity>

        <Text style={styles.productDescription}>
          {product.bodyHtml.replace(/<\/?[^>]+(>|$)/g, "")}
        </Text>

        <AddReview
          productId={product._id}
          fetchReviews={() => fetchReviews(product._id)}
        />

        {/* Reviews Section */}
        <Text style={styles.reviewsTitle}>Reviews</Text>
        {isLoadingReviews ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : (
          <FlatList
            data={reviews}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <View style={styles.reviewItem}>
                <Text style={styles.reviewUser}>
                  {item.user.firstName} {item.user.lastName}
                </Text>
                <Text style={styles.reviewRating}>
                  {item.rating}{" "}
                  <FontAwesome name="star" size={18} color="gold" />
                </Text>
                <Text style={styles.reviewComment}>{item.comment}</Text>
              </View>
            )}
          />
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
    marginTop: 70,
  },
  productImage: {
    width: "100%",
    height: 500,
    marginTop: 20,
    resizeMode: "cover",
  },
  productName: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 20,
    paddingHorizontal: 10,
    fontFamily: "Avenir",
  },
  productCode: {
    fontSize: 16,
    color: "#888",
    marginTop: 10,
    paddingHorizontal: 10,
    fontFamily: "Avenir",
  },
  // productPrice: {
  //   fontSize: 20,
  //   fontWeight: "bold",
  //   marginTop: 10,
  //   paddingHorizontal: 10,
  //   fontFamily: "Avenir",
  // },
  // discountedPrice: {
  //   textDecorationLine: "line-through",
  //   color: "red",
  //   fontFamily: "Avenir",
  // },
  priceSection: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 10,
  },
  discountedPrice: {
    fontSize: 20,
    color: "red",
    textDecorationLine: "line-through",
    fontFamily: "Avenir",
    marginRight: 10, // Space between discounted and regular price
  },
  productPrice: {
    fontSize: 20,
    color: "#000",
    fontFamily: "Avenir",
    fontWeight: "bold",
  },
  productTax: {
    fontSize: 12,
    color: "#888",
    paddingHorizontal: 10,
    fontFamily: "Avenir",
  },
  productDescription: {
    fontSize: 16,
    marginTop: 10,
    paddingHorizontal: 10,
    fontFamily: "Avenir",
  },
  sizeGuideButton: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  sizeGuideText: {
    fontSize: 16,
    color: "blue",
    textDecorationLine: "underline",
    fontFamily: "Avenir",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    paddingHorizontal: 10,
    fontFamily: "Avenir",
  },
  sizeButtonsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingHorizontal: 10,
    marginTop: 10,
    fontFamily: "Avenir",
  },
  sizeButton: {
    padding: 10,
    width: 50,
    marginHorizontal: 5,
    alignItems: "center",
    backgroundColor: "#ddd",
    // borderRadius: 5,
  },
  selectedSizeButton: {
    backgroundColor: "#252355",
  },
  sizeButtonText: {
    fontSize: 16,
    color: "#333",
    fontFamily: "Avenir",
  },
  selectedSizeButtonText: {
    color: "#fff",
    fontFamily: "Avenir",
  },
  variantDetails: {
    paddingHorizontal: 10,
    // marginTop: 10,
    fontFamily: "Avenir",
  },
  variantText: {
    fontFamily: "Avenir",
  },
  // buttonContainer: {
  //   flexDirection: "column",
  //   justifyContent: "space-between",
  //   marginTop: 20,
  //   paddingHorizontal: 10,
  // },
  // button: {
  //   flex: 1,
  //   padding: 20,
  //   // borderRadius: 5,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   marginVertical: 10,
  //   borderWidth: 1,
  //   borderColor: " #252355",
  // },
  // addToWishlistButton: {
  //   backgroundColor: "#fff",
  // },
  // addToCartButton: {
  //   backgroundColor: "#fff", // Replace with your desired color
  // },
  // buyNowButton: {
  //   backgroundColor: "#252355", // Replace with your desired color
  // },
  // buttonText: {
  //   color: "#000",
  //   fontSize: 16,
  //   // fontWeight: "bold",
  //   fontFamily: "Avenir",
  // },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    marginHorizontal: 10,
    fontFamily: "Avenir",
    justifyContent: "space-between",
    // paddingHorizontal: 5,
  },
  button: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
    // borderRadius: 5,
    marginHorizontal: 5,
    fontFamily: "Avenir",
  },
  cartbutton: {
    // flex: 1,
    alignItems: "center",
    paddingVertical: 10,
    // borderRadius: 5,
    width: "76%",
    // marginRight: 5,
    // marginHorizontal: 5,
    fontFamily: "Avenir",
  },
  addToCartButton: {
    backgroundColor: "#252355",
  },
  addToWishlistButton: {
    backgroundColor: "#ddd",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Avenir",
  },
  iconButton: {
    alignItems: "center",
    paddingVertical: 10,
    // borderRadius: 5,
    width: "21%",

    // marginRight: 5,
    // marginHorizontal: 5,
  },
  buyNowButton: {
    // backgroundColor: "orange",
    paddingVertical: 12,
    borderWidth: 1,
    marginHorizontal: 10,
    marginTop: 20,
    // borderRadius: 5,
    alignItems: "center",
    fontFamily: "Avenir",
  },
  reviewsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
    paddingHorizontal: 10,
    textAlign: "center",
    fontFamily: "Avenir",
  },
  reviewUser: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Avenir",
  },
  reviewItem: {
    marginTop: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
    fontFamily: "Avenir",
  },
  reviewRating: {
    fontSize: 16,
    color: "gold",
    fontFamily: "Avenir",
  },
  reviewComment: {
    fontSize: 16,
    color: "#555",
    fontFamily: "Avenir",
  },
});

export default ProductDetail;
