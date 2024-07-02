import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import useFetch from "../hook/useFetch";
import Swiper from "react-native-swiper";

const sliderImages = [
  require("../assets/exploreAssets/exploreAssets1.jpeg"),
  require("../assets/exploreAssets/exploreAssets2.jpeg"),
  require("../assets/exploreAssets/exploreAssets3.jpeg"),
];

const ExploreScreen1 = () => {
  const { data, isLoading, error } = useFetch();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.carouselContainer}>
          <Swiper
            loop
            autoplay
            dotStyle={styles.dot}
            activeDotStyle={styles.dotActive}
          >
            {sliderImages.map((image, index) => (
              <TouchableOpacity key={index} style={styles.slide}>
                <Image source={image} style={styles.sliderImage} />
              </TouchableOpacity>
            ))}
          </Swiper>
        </View>
        <View style={styles.content}>
          {isLoading ? (
            <ActivityIndicator />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : (
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.itemCardContainer}
                  onPress={() =>
                    navigation.navigate("ProductDetail", { product: item })
                  }
                >
                  <View style={styles.itemCard}>
                    <Image
                      source={{ uri: item.image }}
                      style={styles.itemImage}
                    />
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemPrice}>
                      <Text style={styles.discountedPrice}>
                        ₹{item.discountedPrice}
                      </Text>{" "}
                      ₹{item.price}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item._id}
              contentContainerStyle={styles.list}
              numColumns={2}
            />
          )}
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
  scrollView: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  list: {
    padding: 10,
  },
  itemCardContainer: {
    flex: 1,
    padding: 5,
  },
  itemCard: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    height: 300,
  },
  itemImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  itemPrice: {
    fontSize: 14,
    color: "#555",
  },
  discountedPrice: {
    textDecorationLine: "line-through",
    color: "red",
  },
  carouselContainer: {
    height: 500,
    alignItems: "center",
    justifyContent: "center",
  },
  slide: {
    width: "100%",
    alignItems: "center",
  },
  sliderImage: {
    width: "100%",
    height: 500,
    resizeMode: "cover",
  },
  dot: {
    backgroundColor: "#ccc",
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  dotActive: {
    backgroundColor: "#000",
    width: 21,
    height: 7,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default ExploreScreen1;
