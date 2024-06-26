// import React, { useState, useEffect } from "react";
// import Swiper from "react-native-swiper";
// import {
//   View,
//   StyleSheet,
//   Text,
//   Image,
//   FlatList,
//   ScrollView,
//   TouchableOpacity,
//   TouchableWithoutFeedback,
// } from "react-native";

// const items = [
//   {
//     id: "1",
//     name: "Cuban Links Blazer",
//     price: 4998,
//     discountedPrice: 1949,
//     image: require("../assets/artBoard/Artboard_1.webp"),
//   },
//   {
//     id: "2",
//     name: "Double Truffle Blazer",
//     price: 7495,
//     discountedPrice: 3748,
//     image: require("../assets/artBoard/Artboard_2.webp"),
//   },
//   {
//     id: "3",
//     name: "Another Blazer",
//     price: 3998,
//     discountedPrice: 1999,
//     image: require("../assets/artBoard/Artboard_3.webp"),
//   },
//   {
//     id: "4",
//     name: "Yet Another Blazer",
//     price: 6495,
//     discountedPrice: 3248,
//     image: require("../assets/artBoard/Artboard_4.webp"),
//   },
// ];

// const sliderImages = [
//   require("../assets/image2.png"),
//   require("../assets/image3.png"),
//   require("../assets/image4.png"),
// ];

// const ExploreScreen1 = () => {
//   const [selectedSort, setSelectedSort] = useState(null);
//   const [isDropdownOpen, setDropdownOpen] = useState(false);
//   const [sortedItems, setSortedItems] = useState(items);

//   useEffect(() => {
//     if (selectedSort === "lowToHigh") {
//       setSortedItems([...items].sort((a, b) => a.price - b.price));
//     } else if (selectedSort === "highToLow") {
//       setSortedItems([...items].sort((a, b) => b.price - a.price));
//     } else {
//       setSortedItems(items);
//     }
//   }, [selectedSort]);

//   const handleSortSelection = (value) => {
//     setSelectedSort(value);
//     setDropdownOpen(false);
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView style={styles.scrollView}>
//         <View style={styles.carouselContainer}>
//           <Swiper
//             loop
//             autoplay
//             dotStyle={styles.dot}
//             activeDotStyle={styles.dotActive}
//           >
//             {sliderImages.map((image, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={styles.slide}
//                 onPress={() => handleSlidePress(index)}
//               >
//                 <Image source={image} style={styles.sliderImage} />
//               </TouchableOpacity>
//             ))}
//           </Swiper>
//         </View>
//         <View style={styles.content}>
//           <View style={styles.filterSortContainer}>
//             <TouchableWithoutFeedback
//               onPress={() => setDropdownOpen(!isDropdownOpen)}
//             >
//               <View style={styles.dropdown}>
//                 <Text style={styles.dropdownText}>
//                   {selectedSort ? selectedSort : "Sort"}
//                 </Text>
//               </View>
//             </TouchableWithoutFeedback>
//             {isDropdownOpen && (
//               <View style={styles.dropdownOptions}>
//                 <TouchableOpacity
//                   style={styles.dropdownOption}
//                   onPress={() => handleSortSelection("lowToHigh")}
//                 >
//                   <Text style={styles.dropdownOptionText}>
//                     Price: Low to High
//                   </Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   style={styles.dropdownOption}
//                   onPress={() => handleSortSelection("highToLow")}
//                 >
//                   <Text style={styles.dropdownOptionText}>
//                     Price: High to Low
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//             )}
//           </View>
//           <FlatList
//             data={sortedItems}
//             renderItem={({ item }) => (
//               <View style={styles.itemCard}>
//                 <Image source={item.image} style={styles.itemImage} />
//                 <Text style={styles.itemName}>{item.name}</Text>
//                 <Text style={styles.itemPrice}>
//                   <Text style={styles.discountedPrice}>
//                     ₹{item.discountedPrice}
//                   </Text>{" "}
//                   ₹{item.price}
//                 </Text>
//               </View>
//             )}
//             keyExtractor={(item) => item.id}
//             contentContainerStyle={styles.list}
//           />
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   scrollView: {
//     flex: 1,
//   },
//   content: {
//     flex: 1,
//   },
//   filterSortContainer: {
//     position: "relative", // Ensure relative positioning for absolute children
//     padding: 10,
//     backgroundColor: "#f0f0f0",
//     zIndex: 1, // Ensure dropdown container is above carousel
//   },
//   dropdown: {
//     backgroundColor: "#fafafa",
//     padding: 10,
//     borderRadius: 5,
//   },
//   dropdownText: {
//     fontSize: 16,
//     color: "#000",
//   },
//   dropdownOptions: {
//     position: "absolute", // Position dropdown absolutely
//     top: 50,
//     left: 10,
//     backgroundColor: "#fff",
//     borderRadius: 5,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//     zIndex: 2, // Ensure dropdown is above FlatList content
//   },
//   dropdownOption: {
//     padding: 10,
//   },
//   dropdownOptionText: {
//     fontSize: 16,
//   },
//   list: {
//     padding: 10,
//   },
//   itemCard: {
//     backgroundColor: "#f0f0f0",
//     borderRadius: 10,
//     marginBottom: 10,
//     padding: 10,
//   },
//   itemImage: {
//     width: "100%",
//     height: 200,
//     resizeMode: "cover",
//     borderRadius: 10,
//   },
//   itemName: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginTop: 10,
//   },
//   itemPrice: {
//     fontSize: 14,
//     color: "#555",
//   },
//   discountedPrice: {
//     textDecorationLine: "line-through",
//     color: "red",
//   },
//   carouselContainer: {
//     height: 200,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   slide: {
//     width: "100%",
//     alignItems: "center",
//   },
//   sliderImage: {
//     width: "100%",
//     height: 200,
//     resizeMode: "contain",
//   },
//   slideText: {
//     fontSize: 20,
//     textAlign: "center",
//     marginVertical: 10,
//   },
//   dot: {
//     backgroundColor: "#ccc",
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     marginHorizontal: 5,
//   },
//   dotActive: {
//     backgroundColor: "#000",
//     width: 21,
//     height: 7,
//     borderRadius: 5,
//     marginHorizontal: 5,
//   },
// });

// export default ExploreScreen1;

import React, { useState, useEffect } from "react";
import Swiper from "react-native-swiper";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

const items = [
  {
    id: "1",
    name: "Cuban Links Blazer",
    price: 4998,
    discountedPrice: 1949,
    image: require("../assets/artBoard/Artboard_1.webp"),
  },
  {
    id: "2",
    name: "Double Truffle Blazer",
    price: 7495,
    discountedPrice: 3748,
    image: require("../assets/artBoard/Artboard_2.webp"),
  },
  {
    id: "3",
    name: "Another Blazer",
    price: 3998,
    discountedPrice: 1999,
    image: require("../assets/artBoard/Artboard_3.webp"),
  },
  {
    id: "4",
    name: "Yet Another Blazer",
    price: 6495,
    discountedPrice: 3248,
    image: require("../assets/artBoard/Artboard_4.webp"),
  },
];

const sliderImages = [
  require("../assets/image2.png"),
  require("../assets/image3.png"),
  require("../assets/image4.png"),
];

const ExploreScreen1 = () => {
  const navigation = useNavigation();

  const [selectedSort, setSelectedSort] = useState(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [sortedItems, setSortedItems] = useState(items);

  useEffect(() => {
    if (selectedSort === "lowToHigh") {
      setSortedItems([...items].sort((a, b) => a.price - b.price));
    } else if (selectedSort === "highToLow") {
      setSortedItems([...items].sort((a, b) => b.price - a.price));
    } else {
      setSortedItems(items);
    }
  }, [selectedSort]);

  const handleSortSelection = (value) => {
    setSelectedSort(value);
    setDropdownOpen(false);
  };

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
        <View style={styles.content}>
          <View style={styles.filterSortContainer}>
            <TouchableWithoutFeedback
              onPress={() => setDropdownOpen(!isDropdownOpen)}
            >
              <View style={styles.dropdown}>
                <Text style={styles.dropdownText}>
                  {selectedSort ? selectedSort : "Sort"}{" "}
                  <Image
                    source={require("../assets/dropdown_icon.svg")}
                    style={styles.dropdownIcon}
                  />
                </Text>
              </View>
            </TouchableWithoutFeedback>
            {isDropdownOpen && (
              <View style={styles.dropdownOptions}>
                <TouchableOpacity
                  style={styles.dropdownOption}
                  onPress={() => handleSortSelection("lowToHigh")}
                >
                  <Text style={styles.dropdownOptionText}>
                    Price: Low to High
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.dropdownOption}
                  onPress={() => handleSortSelection("highToLow")}
                >
                  <Text style={styles.dropdownOptionText}>
                    Price: High to Low
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.dropdownOption}
                  onPress={() => handleSortSelection("featured")}
                >
                  <Text style={styles.dropdownOptionText}>Featured</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
          <FlatList
            data={sortedItems}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <View style={styles.itemCard}>
                  <Image source={item.image} style={styles.itemImage} />
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
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.list}
          />
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
  filterSortContainer: {
    position: "relative", // Ensure relative positioning for absolute children
    padding: 10,
    backgroundColor: "#f0f0f0",
    zIndex: 1, // Ensure dropdown container is above carousel
    flexDirection: "row", // Align items in row
    alignItems: "center", // Center items vertically
  },
  dropdown: {
    flexDirection: "row", // Align items in row
    backgroundColor: "#fafafa",
    padding: 10,
    width: "100%",
    borderRadius: 5,
    alignItems: "center", // Center items vertically
  },
  dropdownText: {
    fontSize: 16,
    color: "#000",
  },
  dropdownIcon: {
    width: 2,
    height: 2,
    marginLeft: 5,
  },
  dropdownOptions: {
    position: "absolute", // Position dropdown absolutely
    top: 50,
    left: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 2, // Ensure dropdown is above FlatList content
  },
  dropdownOption: {
    padding: 10,
  },
  dropdownOptionText: {
    fontSize: 16,
  },
  list: {
    padding: 10,
  },
  itemCard: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
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
});

export default ExploreScreen1;
