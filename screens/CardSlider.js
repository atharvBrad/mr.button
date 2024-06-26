// import React from "react";
// import {
//   View,
//   StyleSheet,
//   Text,
//   Image,
//   TouchableOpacity,
//   FlatList,
// } from "react-native";

// const categories = [
//   {
//     id: "1",
//     name: "Shirt",
//     image: require("../assets/cat-1.png"),
//     screen: "ShirtScreen",
//   },
//   {
//     id: "2",
//     name: "Blazer",
//     image: require("../assets/cat-2.png"),
//     screen: "Login",
//   },
//   {
//     id: "3",
//     name: "Trouser",
//     image: require("../assets/cat-3.png"),
//     screen: "TrouserScreen",
//   },
//   {
//     id: "4",
//     name: "Nehru Jackets",
//     image: require("../assets/cat-4.png"),
//     screen: "NehruJacketsScreen",
//   },
//   {
//     id: "5",
//     name: "Tunic",
//     image: require("../assets/cat-5.png"),
//     screen: "TunicScreen",
//   },
//   {
//     id: "6",
//     name: "Shop All",
//     image: require("../assets/Mr Button Logo png.png"),
//     screen: "ShopAllScreen",
//   },
// ];

// const CardSlider = ({ navigation }) => {
//   const handleCategoryPress = (category) => {
//     navigation.navigate(category.screen);
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={categories}
//         // horizontal
//         showsHorizontalScrollIndicator={false}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             style={styles.card}
//             onPress={() => handleCategoryPress(item)}
//           >
//             <Image source={item.image} style={styles.cardImage} />
//             <Text style={styles.cardText}>{item.name}</Text>
//             <View style={styles.exploreButton}>
//               <Text style={styles.exploreText}>Explore Now</Text>
//             </View>
//           </TouchableOpacity>
//         )}
//         keyExtractor={(item) => item.id}
//         contentContainerStyle={styles.cardList}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#fff",
//     paddingHorizontal: 10,
//     paddingVertical: 15,
//     marginBottom: 20,
//   },
//   cardList: {
//     flexGrow: 1,
//   },
//   card: {
//     backgroundColor: "#f0f0f0",
//     borderRadius: 10,
//     // marginRight: 10,
//     padding: 10,
//     marginBottom: 10,
//     width: "100%", // Adjust the width of each card as per your preference
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   cardImage: {
//     width: "100%", // Ensure the image takes up the full width of the card
//     height: 400, // Adjust the height of the image as per your preference
//     resizeMode: "contain",
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   cardText: {
//     fontSize: 14,
//     textAlign: "center",
//   },
//   exploreButton: {
//     backgroundColor: "#1e88e5", // Example color for Explore Now button
//     paddingVertical: 5,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//     marginTop: 5,
//   },
//   exploreText: {
//     color: "#fff",
//     fontSize: 12,
//     textAlign: "center",
//   },
// });

// export default CardSlider;

import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";

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
    screen: "TrouserScreen",
  },
  {
    id: "4",
    name: "Nehru Jackets",
    image: require("../assets/artBoard/Artboard_2.webp"),
    screen: "NehruJacketsScreen",
  },
  {
    id: "5",
    name: "Tunic",
    image: require("../assets/artBoard/Artboard_5.webp"),
    screen: "TunicScreen",
  },
  // {
  //   id: "6",
  //   name: "Shop All",
  //   image: require("../assets/Mr Button Logo png.png"),
  //   screen: "ShopAllScreen",
  // },
];

const CardSlider = ({ navigation }) => {
  const handleCategoryPress = (category) => {
    navigation.navigate(category.screen);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => handleCategoryPress(item)}
          >
            <Image source={item.image} style={styles.cardImage} />
            {/* <View style={styles.textContainer}>
              <Text style={styles.cardText}>{item.name}</Text>
            </View> */}
            <View style={styles.exploreButton}>
              <Text style={styles.exploreText}>Explore {item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.cardList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginBottom: 20,
  },
  cardList: {
    flexGrow: 1,
  },
  card: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    // padding: 10,
    marginBottom: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  cardImage: {
    width: "100%",
    height: 400,
    resizeMode: "cover",
    borderRadius: 10,
  },
  textContainer: {
    position: "absolute",
    bottom: 50, // Adjust as needed to position the text above the button
    left: "50%",
    transform: [{ translateX: -50 }],
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional: Add a background for better readability
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  cardText: {
    fontSize: 14,
    textAlign: "center",
    color: "#fff", // Change to white if using a dark background
  },
  exploreButton: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional: Add a background for better readability
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    position: "absolute",
    bottom: 20,
    height: 25,
    // left: "50%",
    // transform: [{ translateX: -50 }],
  },
  exploreText: {
    color: "#fff",
    fontSize: 14,
    // height: 25,
    textAlign: "center",
  },
});

export default CardSlider;
