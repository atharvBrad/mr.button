// import React, { useState, useEffect } from "react";
// import {
//   View,
//   StyleSheet,
//   Text,
//   Image,
//   TouchableOpacity,
//   FlatList,
//   Alert,
//   ActivityIndicator,
//   Dimensions,
//   TextInput,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import useFetch from "../hook/useFetch";
// import Swiper from "react-native-swiper";
// import SearchComponent from "../Components/SearchComponent";
// import { API_URL } from "@env"; // Import API_URL from environment variables

// const sliderImages = [
//   require("../assets/exploreAssets/exploreAssets1.jpeg"),
//   require("../assets/exploreAssets/exploreAssets2.jpeg"),
//   require("../assets/exploreAssets/exploreAssets3.jpeg"),
// ];

// const defaultImage = require("../assets/defaultImage.png");

// const ExploreScreen1 = () => {
//   const { data, isLoading, error, refetch } = useFetch();
//   const navigation = useNavigation();
//   const [numColumns, setNumColumns] = useState(1);
//   const [searchData, setSearchData] = useState(null);
//   const [searching, setSearching] = useState(false);

//   useEffect(() => {
//     refetch();
//     const screenWidth = Dimensions.get("window").width;
//     const newNumColumns = Math.floor(screenWidth / 200);
//     setNumColumns(newNumColumns > 0 ? newNumColumns : 1);
//   }, []);

//   const handleSearch = async (key) => {
//     try {
//       setSearching(true);
//       const response = await fetch(`${API_URL}/api/products/search/${key}`);
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const searchData = await response.json();
//       setSearchData(searchData);
//       setSearching(false);
//     } catch (error) {
//       console.error("Failed to search products:", error);
//       Alert.alert(
//         "Error",
//         "Failed to search products. Please try again later."
//       );
//       setSearching(false);
//     }
//   };

//   const renderItem = ({ item, index }) => {
//     if (index === 0) {
//       // Render swiper for slider images
//       return (
//         <View style={styles.carouselContainer}>
//           <Swiper
//             loop
//             autoplay
//             dotStyle={styles.dot}
//             activeDotStyle={styles.dotActive}
//           >
//             {sliderImages.map((image, index) => (
//               <TouchableOpacity key={index} style={styles.slide}>
//                 <Image source={image} style={styles.sliderImage} />
//               </TouchableOpacity>
//             ))}
//           </Swiper>
//         </View>
//       );
//     } else {
//       // Render product card
//       return (
//         <TouchableOpacity
//           style={styles.itemCardContainer}
//           onPress={() =>
//             navigation.navigate("ProductDetail", { product: item })
//           }
//         >
//           <View style={styles.itemCard}>
//             <Image
//               source={{ uri: item.image }}
//               style={styles.itemImage}
//               defaultSource={defaultImage}
//               onError={(error) => {
//                 console.error("Image load error:", error.nativeEvent.error);
//                 item.image = defaultImage;
//               }}
//             />
//             <Text style={styles.itemName}>{item.title}</Text>
//             {/* <Text style={styles.itemPrice}>
//               <Text style={styles.discountedPrice}>
//                 ₹{item.discountedPrice}
//               </Text>{" "}
//               ₹{item.price}
//             </Text> */}
//             <Text style={styles.itemPrice}>
//               ₹{item.discountedPrice}{" "}
//               <Text style={styles.discountedPrice}>₹{item.price}</Text>
//             </Text>
//           </View>
//         </TouchableOpacity>
//       );
//     }
//   };

//   // Key extractor function to force re-render when numColumns changes
//   const keyExtractor = (item, index) => `${index}_${numColumns}`;

//   return (
//     <View style={styles.container}>
//       <SearchComponent onSearch={handleSearch} />
//       {searching && <ActivityIndicator size="large" color="#000" />}
//       {!searchData && !isLoading && (
//         <FlatList
//           data={[{ type: "slider" }, ...data]}
//           renderItem={({ item, index }) => renderItem({ item, index })}
//           keyExtractor={keyExtractor}
//           contentContainerStyle={styles.list}
//           numColumns={numColumns}
//         />
//       )}
//       {searchData && (
//         <FlatList
//           data={searchData}
//           renderItem={({ item }) => (
//             <TouchableOpacity
//               style={styles.itemCardContainer}
//               onPress={() =>
//                 navigation.navigate("ProductDetail", { product: item })
//               }
//             >
//               <View style={styles.itemCard}>
//                 <Image
//                   source={{ uri: item.image }}
//                   style={styles.itemImage}
//                   defaultSource={defaultImage}
//                   onError={(error) => {
//                     console.error("Image load error:", error.nativeEvent.error);
//                     item.image = defaultImage;
//                   }}
//                 />
//                 <Text style={styles.itemName}>{item.name}</Text>
//                 <Text style={styles.itemPrice}>
//                   <Text style={styles.discountedPrice}>
//                     ₹{item.discountedPrice}
//                   </Text>{" "}
//                   ₹{item.price}
//                 </Text>
//               </View>
//             </TouchableOpacity>
//           )}
//           keyExtractor={(item) => item._id}
//           contentContainerStyle={styles.list}
//           numColumns={numColumns}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   carouselContainer: {
//     height: 500,
//     alignItems: "center",
//     justifyContent: "center",
//     marginBottom: 10,
//   },
//   slide: {
//     width: "100%",
//     alignItems: "center",
//   },
//   sliderImage: {
//     width: "100%",
//     height: 500,
//     resizeMode: "cover",
//   },
//   list: {
//     padding: 10,
//   },
//   itemCardContainer: {
//     flex: 1,
//     padding: 5,
//     width: "50%",
//   },
//   itemCard: {
//     backgroundColor: "#f0f0f0",
//     borderRadius: 10,
//     marginBottom: 10,
//     padding: 10,
//     height: 300,
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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from "react";
// import {
//   View,
//   StyleSheet,
//   Text,
//   Image,
//   TouchableOpacity,
//   FlatList,
//   Alert,
//   ActivityIndicator,
//   Dimensions,
//   TextInput,
// } from "react-native";
// import * as Font from "expo-font";
// import { useNavigation } from "@react-navigation/native";
// import useFetch from "../hook/useFetch";
// import Swiper from "react-native-swiper";
// import SearchComponent from "../Components/SearchComponent";
// import { API_URL } from "@env"; // Import API_URL from environment variables

// const sliderImages = [
//   require("../assets/exploreAssets/exploreAssets1.jpeg"),
//   require("../assets/exploreAssets/exploreAssets2.jpeg"),
//   require("../assets/exploreAssets/exploreAssets3.jpeg"),
// ];

// const defaultImage = require("../assets/defaultImage.png");

// const ExploreScreen1 = () => {
//   const { data, isLoading, error, refetch } = useFetch();
//   const navigation = useNavigation();
//   const [fontsLoaded, setFontsLoaded] = useState(false);

//   const [numColumns] = useState(2); // Set numColumns to a constant value of 2
//   const [searchData, setSearchData] = useState(null);
//   const [searching, setSearching] = useState(false);

//   useEffect(() => {
//     refetch();
//   }, []);

//   useEffect(() => {
//     const loadFonts = async () => {
//       await Font.loadAsync({
//         Futura: require("../assets/fonts/CenturyGothic.ttf"), // Replace with your font file path
//       });
//       setFontsLoaded(true);
//     };

//     loadFonts();
//   }, []);

//   const handleSearch = async (key) => {
//     try {
//       setSearching(true);
//       const response = await fetch(`${API_URL}/api/products/search/${key}`);
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const searchData = await response.json();
//       console.log("searchdata", searchData);
//       setSearchData(searchData);
//       setSearching(false);
//     } catch (error) {
//       console.error("Failed to search products:", error);
//       Alert.alert(
//         "Error",
//         "Failed to search products. Please try again later."
//       );
//       setSearching(false);
//     }
//   };

//   const renderItem = ({ item, index }) => {
//     if (index === 0) {
//       // Render swiper for slider images
//       return (
//         <View style={styles.carouselContainer}>
//           <Swiper
//             loop
//             autoplay
//             dotStyle={styles.dot}
//             activeDotStyle={styles.dotActive}
//           >
//             {sliderImages.map((image, index) => (
//               <TouchableOpacity key={index} style={styles.slide}>
//                 <Image source={image} style={styles.sliderImage} />
//               </TouchableOpacity>
//             ))}
//           </Swiper>
//         </View>
//       );
//     } else {
//       // Render product card
//       return (
//         <TouchableOpacity
//           style={styles.itemCardContainer} // Remove padding from itemCardContainer
//           onPress={() =>
//             navigation.navigate("ProductDetail", { product: item })
//           }
//         >
//           <View style={styles.itemCard}>
//             <Image source={{ uri: item.image }} style={styles.itemImage} />
//             <Text style={[styles.itemName, styles.centuryGothic]}>
//               {item.title}
//             </Text>
//             <View style={styles.itemDetails}>
//               <Text style={[styles.itemPrice, styles.centuryGothic]}>
//                 ₹{item.price}{" "}
//                 <Text style={[styles.discountedPrice, styles.centuryGothic]}>
//                   ₹{item.compareAtPrice}
//                 </Text>
//               </Text>
//             </View>
//           </View>
//         </TouchableOpacity>
//       );
//     }
//   };

//   // Key extractor function to force re-render when numColumns changes
//   const keyExtractor = (item, index) => `${index}_${numColumns}`;

//   return (
//     <View style={styles.container}>
//       <SearchComponent onSearch={handleSearch} />
//       {searching && <ActivityIndicator size="large" color="#000" />}
//       {!searchData && !isLoading && (
//         <FlatList
//           data={[{ type: "slider" }, ...data]}
//           renderItem={({ item, index }) => renderItem({ item, index })}
//           keyExtractor={keyExtractor}
//           contentContainerStyle={styles.list}
//           numColumns={numColumns}
//         />
//       )}
//       {searchData && (
//         <FlatList
//           data={searchData}
//           renderItem={({ item }) => (
//             <TouchableOpacity
//               style={styles.itemCardContainer}
//               onPress={() =>
//                 navigation.navigate("ProductDetail", { product: item })
//               }
//             >
//               <View style={styles.itemCard}>
//                 <Image
//                   source={{ uri: item.image }}
//                   style={styles.itemImage}
//                   defaultSource={defaultImage}
//                   onError={(error) => {
//                     console.error("Image load error:", error.nativeEvent.error);
//                     item.image = defaultImage;
//                   }}
//                 />
//                 <Text style={[styles.itemName, styles.centuryGothic]}>
//                   {item.title}
//                 </Text>
//                 <View style={styles.itemDetails}>
//                   <Text style={[styles.itemPrice, styles.centuryGothic]}>
//                     ₹{item.price}{" "}
//                     <Text
//                       style={[styles.discountedPrice, styles.centuryGothic]}
//                     >
//                       ₹{item.compareAtPrice}
//                     </Text>
//                   </Text>
//                 </View>
//               </View>
//             </TouchableOpacity>
//           )}
//           keyExtractor={(item) => item._id}
//           contentContainerStyle={styles.list}
//           numColumns={numColumns}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   carouselContainer: {
//     height: 500,
//     alignItems: "center",
//     justifyContent: "center",
//     marginBottom: 10,
//   },
//   slide: {
//     width: "100%",
//     alignItems: "center",
//   },
//   sliderImage: {
//     width: "100%",
//     height: 500,
//     resizeMode: "cover",
//   },
//   list: {
//     padding: 10,
//   },
//   itemCardContainer: {
//     flex: 1,
//     paddingHorizontal: 5,
//     width: "100%", // Set width to 100%
//   },
//   itemDetails: {
//     flex: 1,
//     justifyContent: "flex-end",
//     marginBottom: 10, // Align items to the bottom
//   },
//   itemCard: {
//     backgroundColor: "#f0f0f0",
//     // borderRadius: 10,
//     marginBottom: 10,
//     padding: 5,
//     height: 300,
//   },
//   itemOptions: {
//     fontSize: 14,
//     color: "#555",
//     marginTop: 5,
//   },
//   itemImage: {
//     width: "100%",
//     height: 200,
//     resizeMode: "cover",
//     // borderRadius: 10,
//   },
//   itemName: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginTop: 10,
//   },
//   itemPrice: {
//     // marginTop: 10,
//     fontSize: 12,
//     color: "#555",
//   },
//   discountedPrice: {
//     textDecorationLine: "line-through",
//     color: "red",
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
//   centuryGothic: {
//     fontFamily: "CenturyGothic", // Replace with your desired font name
//   },
// });

// export default ExploreScreen1;

import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
  ActivityIndicator,
  Dimensions,
  TextInput,
} from "react-native";
import * as Font from "expo-font";
import { useNavigation } from "@react-navigation/native";
import useFetch from "../hook/useFetch";
import Swiper from "react-native-swiper";
import SearchComponent from "../Components/SearchComponent";
import { API_URL } from "@env"; // Import API_URL from environment variables

const sliderImages = [
  require("../assets/exploreAssets/exploreAssets1.jpeg"),
  require("../assets/exploreAssets/exploreAssets2.jpeg"),
  require("../assets/exploreAssets/exploreAssets3.jpeg"),
];

const defaultImage = require("../assets/defaultImage.png");

const ExploreScreen1 = () => {
  const { data, isLoading, error, refetch } = useFetch();
  const navigation = useNavigation();
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const [numColumns] = useState(2); // Set numColumns to a constant value of 2
  const [searchData, setSearchData] = useState(null);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        Futura: require("../assets/fonts/CenturyGothic.ttf"), // Replace with your font file path
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  const handleSearch = async (key) => {
    try {
      setSearching(true);
      const response = await fetch(`${API_URL}/api/products/search/${key}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const searchData = await response.json();
      console.log("searchdata", searchData);
      setSearchData(searchData);
      setSearching(false);
    } catch (error) {
      console.error("Failed to search products:", error);
      Alert.alert(
        "Error",
        "Failed to search products. Please try again later."
      );
      setSearching(false);
    }
  };

  const ProductItem = ({ item, onPress }) => {
    const [loading, setLoading] = useState(true);

    return (
      <TouchableOpacity style={styles.itemCardContainer} onPress={onPress}>
        <View style={styles.itemCard}>
          {loading && (
            <ActivityIndicator
              size="small"
              color="#000"
              style={styles.loader}
            />
          )}
          <Image
            source={{ uri: item.image }}
            style={styles.itemImage}
            onLoadEnd={() => setLoading(false)}
            onError={(error) => {
              console.error("Image load error:", error.nativeEvent.error);
              setLoading(false);
            }}
          />
          <Text style={[styles.itemName, styles.centuryGothic]}>
            {item.title}
          </Text>
          <View style={styles.itemDetails}>
            <Text style={[styles.itemPrice, styles.centuryGothic]}>
              ₹{item.price}{" "}
              <Text style={[styles.discountedPrice, styles.centuryGothic]}>
                ₹{item.compareAtPrice}
              </Text>
            </Text>
          </View>
          {/* <View style={styles.itemDetails}>
            <Text style={[styles.discountedPrice, styles.centuryGothic]}>
              ₹{item.compareAtPrice}{" "}
            </Text>
            <Text style={[styles.itemPrice, styles.centuryGothic]}>
              ₹{item.price}
            </Text>
          </View> */}
        </View>
      </TouchableOpacity>
    );
  };

  const renderItem = ({ item, index }) => {
    if (index === 0) {
      return (
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
      );
    } else {
      return (
        <ProductItem
          item={item}
          onPress={() =>
            navigation.navigate("ProductDetail", { product: item })
          }
        />
      );
    }
  };

  // Key extractor function to force re-render when numColumns changes
  const keyExtractor = (item, index) => `${index}_${numColumns}`;

  return (
    <View style={styles.container}>
      <SearchComponent onSearch={handleSearch} />
      {searching && <ActivityIndicator size="large" color="#000" />}
      {!searchData && !isLoading && (
        <FlatList
          data={[{ type: "slider" }, ...data]}
          renderItem={({ item, index }) => renderItem({ item, index })}
          keyExtractor={keyExtractor}
          contentContainerStyle={styles.list}
          numColumns={numColumns}
        />
      )}
      {searchData && (
        <FlatList
          data={searchData}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.itemCardContainer}
              onPress={() =>
                navigation.navigate("ProductDetail", { product: item })
              }
            >
              <View style={styles.itemCard}>
                <Image source={{ uri: item.image }} style={styles.itemImage} />
                <Text style={[styles.itemName, styles.centuryGothic]}>
                  {item.title}
                </Text>
                <View style={styles.itemDetails}>
                  <Text style={[styles.itemPrice, styles.centuryGothic]}>
                    ₹{item.price}{" "}
                    <Text
                      style={[styles.discountedPrice, styles.centuryGothic]}
                    >
                      ₹{item.compareAtPrice}
                    </Text>
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item._id}
          contentContainerStyle={styles.list}
          numColumns={numColumns}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  carouselContainer: {
    height: 500,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
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
  list: {
    padding: 10,
  },
  itemCardContainer: {
    flex: 1,
    paddingHorizontal: 5,
    width: "100%", // Set width to 100%
  },
  itemDetails: {
    flex: 1,
    justifyContent: "flex-start",
    // alignContent: "flex-end",
    // alignItems: "flex-end",
    justifyContent: "flex-end",

    // flexDirection: "row", // Arrange the prices in a row
    // alignItems: "center", // Vertically center the price and discounted price
    marginBottom: 10,
    // paddingBottom: 10,
  },
  itemCard: {
    backgroundColor: "#f0f0f0",
    marginBottom: 10,
    padding: 5,
    height: 300,
  },
  itemOptions: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
  itemImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    // borderRadius: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  // itemDetails: {
  //   flex: 1,
  //   // justifyContent: "flex-end",
  //   flexDirection: "row",
  //   marginBottom: 10,
  // },

  itemPrice: {
    // marginTop: 10,
    // fontSize: 12,
    color: "#555",
    marginLeft: 5,
  },
  discountedPrice: {
    textDecorationLine: "line-through",
    color: "red",
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
  centuryGothic: {
    fontFamily: "CenturyGothic", // Replace with your desired font name
  },
  // loader: {
  //   paddingVertical: 25,
  // },
});

export default ExploreScreen1;
