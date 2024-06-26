import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-swiper";
import { useNavigation } from "@react-navigation/native";
import CardSlider from "./CardSlider";

const categories = [
  {
    id: "1",
    name: "Shirt",
    image: require("../assets/categories/cat-1.png"),
    screen: "ShirtScreen",
  },
  {
    id: "2",
    name: "Blazer",
    image: require("../assets/categories/cat-2.png"),
    screen: "Login",
  },
  {
    id: "3",
    name: "Trouser",
    image: require("../assets/categories/cat-3.png"),
    screen: "TrouserScreen",
  },
  {
    id: "4",
    name: "Nehru Jackets",
    image: require("../assets/categories/cat-4.png"),
    screen: "NehruJacketsScreen",
  },
  {
    id: "5",
    name: "Tunic",
    image: require("../assets/categories/cat-5.png"),
    screen: "TunicScreen",
  },
  {
    id: "6",
    name: "Shop All",
    image: require("../assets/Mr Button Logo blue.png"),
    screen: "ShopAllScreen",
  },
];

const sliderImages = [
  require("../assets/image2.png"),
  require("../assets/image3.png"),
  require("../assets/image4.png"),
];

export default function HomeScreen() {
  const navigation = useNavigation(); // Hook to get navigation object

  const handleCategoryPress = (category) => {
    navigation.navigate(category.screen);
  };

  const handleSlidePress = (index) => {
    navigation.navigate("SlideScreen", { slideIndex: index });
  };
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      {/* <Image
        source={require("../assets/Mr Button Logo png.png")} // Replace with your logo path
        style={styles.logo}
      /> */}
      {/* Render slides as touchable */}
      <View style={styles.categoriesContainer}>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item.id}
              style={styles.categoryItem}
              onPress={() => handleCategoryPress(item)}
            >
              <Image source={item.image} style={styles.categoryImage} />
              <Text style={styles.categoryText}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.categoriesList}
        />
      </View>

      <View style={styles.carouselContainer}>
        <Swiper
          loop
          autoplay
          dotStyle={styles.dot}
          activeDotStyle={styles.dotActive}
        >
          {sliderImages.map((image, index) => (
            <TouchableOpacity
              key={index}
              style={styles.slide}
              onPress={() => handleSlidePress(index)}
            >
              <Image source={image} style={styles.sliderImage} />
            </TouchableOpacity>
          ))}
        </Swiper>
      </View>

      {/* Slideable Cards */}
      <CardSlider navigation={navigation} />
      {/* <Text style={styles.headerText}>SHOP BY CATEGORY</Text> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  categoriesContainer: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginVertical: 20,
    resizeMode: "contain",
  },
  carouselContainer: {
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  slide: {
    width: "100%",
    alignItems: "center",
  },
  sliderImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  slideText: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 10,
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
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  categoriesList: {
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  categoryItem: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  categoryContainer: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#e0e0e0",
    resizeMode: "cover",
  },
  categoryText: {
    marginTop: 5,
    fontSize: 12,
    textAlign: "center",
  },
});
