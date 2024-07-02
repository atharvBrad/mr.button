// ---------------%%--------------------

// import React from "react";
// import {
//   View,
//   StyleSheet,
//   Text,
//   Image,
//   TouchableOpacity,
//   Dimensions,
// } from "react-native";
// import Swiper from "react-native-swiper";

// const { height, width } = Dimensions.get("window");

// const categories = [
//   {
//     id: "1",
//     name: "Shirt",
//     image: require("../assets/artBoard/Artboard_1.webp"),
//     screen: "ExploreScreen1",
//   },
//   {
//     id: "2",
//     name: "Blazer",
//     image: require("../assets/artBoard/Artboard_3.webp"),
//     screen: "ExploreScreen1",
//   },
//   {
//     id: "3",
//     name: "Trouser",
//     image: require("../assets/artBoard/Artboard_4.webp"),
//     screen: "TrouserScreen",
//   },
//   {
//     id: "4",
//     name: "Nehru Jackets",
//     image: require("../assets/artBoard/Artboard_2.webp"),
//     screen: "NehruJacketsScreen",
//   },
//   {
//     id: "5",
//     name: "Tunic",
//     image: require("../assets/artBoard/Artboard_5.webp"),
//     screen: "TunicScreen",
//   },
// ];

// const CardSlider = ({ navigation }) => {
//   const handleCategoryPress = (category) => {
//     navigation.navigate(category.screen);
//   };

//   return (
//     <Swiper
//       style={styles.wrapper}
//       showsPagination={false}
//       loop={false}
//       vertical={true}
//     >
//       {categories.map((item) => (
//         <View key={item.id} style={styles.card}>
//           <TouchableOpacity
//             style={styles.touchable}
//             onPress={() => handleCategoryPress(item)}
//           >
//             <Image source={item.image} style={styles.cardImage} />
//             <View style={styles.exploreButton}>
//               <Text style={styles.exploreText}>Explore {item.name}</Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//       ))}
//     </Swiper>
//   );
// };

// const styles = StyleSheet.create({
//   wrapper: {
//     height: height,
//   },
//   card: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     width: width,
//     height: height,
//   },
//   touchable: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     width: "100%",
//   },
//   cardImage: {
//     width: "100%",
//     height: "100%",
//     resizeMode: "cover",
//   },
//   exploreButton: {
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//     paddingVertical: 5,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//     position: "absolute",
//     bottom: 20,
//   },
//   exploreText: {
//     color: "#fff",
//     fontSize: 14,
//     textAlign: "center",
//   },
// });

// export default CardSlider;

// ---------%%--------------------

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";

const { height, width } = Dimensions.get("window");

const categories = [
  {
    id: "1",
    name: "Shirt",
    image: require("../assets/artBoard/Artboard_1.webp"),
    screen: "ExploreScreen1",
  },
  {
    id: "2",
    name: "Blazer",
    image: require("../assets/artBoard/Artboard_3.webp"),
    screen: "ExploreScreen1",
  },
  {
    id: "3",
    name: "Trouser",
    image: require("../assets/artBoard/Artboard_4.webp"),
    screen: "ExploreScreen1",
  },
  {
    id: "4",
    name: "Nehru Jackets",
    image: require("../assets/artBoard/Artboard_2.webp"),
    screen: "ExploreScreen1",
  },
  {
    id: "5",
    name: "Tunic",
    image: require("../assets/artBoard/Artboard_5.webp"),
    screen: "ExploreScreen1",
  },
];

const CardSlider = ({ navigation }) => {
  const handleCategoryPress = (category) => {
    navigation.navigate(category.screen);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => handleCategoryPress(item)}
      >
        <Image source={item.image} style={styles.cardImage} />
        <View style={styles.exploreButton}>
          <Text style={styles.exploreText}>Explore {item.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={categories}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      pagingEnabled={false}
      showsVerticalScrollIndicator={false}
      snapToAlignment="start"
      decelerationRate="fast"
      snapToInterval={height}
      vertical
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    width: width,
    height: height,
  },
  touchable: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  exploreButton: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    position: "absolute",
    bottom: 20,
    marginBottom: 100,
  },
  exploreText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
});

export default CardSlider;

// -----------%%%%%%%%%%-----------
