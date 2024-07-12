// import React from "react";
// import {
//   View,
//   StyleSheet,
//   Text,
//   Image,
//   TouchableOpacity,
//   FlatList,
//   ScrollView,
//   ActivityIndicator,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import useFetch from "../hook/useFetch";
// import Swiper from "react-native-swiper";

// const sliderImages = [
//   require("../assets/exploreAssets/exploreAssets1.jpeg"),
//   require("../assets/exploreAssets/exploreAssets2.jpeg"),
//   require("../assets/exploreAssets/exploreAssets3.jpeg"),
// ];

// // default image for now
// const defaultImage = require("../assets/defaultImage.png");

// const ExploreScreen1 = () => {
//   const { data, isLoading, error } = useFetch();
//   const navigation = useNavigation();

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
//               <TouchableOpacity key={index} style={styles.slide}>
//                 <Image source={image} style={styles.sliderImage} />
//               </TouchableOpacity>
//             ))}
//           </Swiper>
//         </View>
//         <View style={styles.content}>
//           {isLoading ? (
//             <ActivityIndicator />
//           ) : error ? (
//             <Text>Something went wrong</Text>
//           ) : (
//             <FlatList
//               data={data}
//               renderItem={({ item }) => (
//                 <TouchableOpacity
//                   style={styles.itemCardContainer}
//                   onPress={() =>
//                     navigation.navigate("ProductDetail", { product: item })
//                   }
//                 >
//                   <View style={styles.itemCard}>
//                     <Image
//                       source={{ uri: item.image }}
//                       style={styles.itemImage}
//                       // remove this before pushing on git
//                       defaultSource={defaultImage} // Use default image
//                       onError={(error) => {
//                         console.error(
//                           "Image load error:",
//                           error.nativeEvent.error
//                         );
//                         // Update image to default if it fails to load
//                         item.image = defaultImage;
//                       }}
//                     />
//                     <Text style={styles.itemName}>{item.name}</Text>
//                     <Text style={styles.itemPrice}>
//                       <Text style={styles.discountedPrice}>
//                         ₹{item.discountedPrice}
//                       </Text>{" "}
//                       ₹{item.price}
//                     </Text>
//                   </View>
//                 </TouchableOpacity>
//               )}
//               keyExtractor={(item) => item._id}
//               contentContainerStyle={styles.list}
//               numColumns={2}
//             />
//           )}
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
//   list: {
//     padding: 10,
//   },
//   itemCardContainer: {
//     flex: 1,
//     padding: 5,
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
//   carouselContainer: {
//     height: 500,
//     alignItems: "center",
//     justifyContent: "center",
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

// removed scrollview to avoid virtualized error
// import React from "react";
// import {
//   View,
//   StyleSheet,
//   Text,
//   Image,
//   TouchableOpacity,
//   FlatList,
//   ActivityIndicator,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import useFetch from "../hook/useFetch";
// import Swiper from "react-native-swiper";

// const sliderImages = [
//   require("../assets/exploreAssets/exploreAssets1.jpeg"),
//   require("../assets/exploreAssets/exploreAssets2.jpeg"),
//   require("../assets/exploreAssets/exploreAssets3.jpeg"),
// ];

// // default image for now
// const defaultImage = require("../assets/defaultImage.png");

// const ExploreScreen1 = () => {
//   const { data, isLoading, error } = useFetch();
//   const navigation = useNavigation();

//   return (
//     <View style={styles.container}>
//       <View style={styles.carouselContainer}>
//         <Swiper
//           loop
//           autoplay
//           dotStyle={styles.dot}
//           activeDotStyle={styles.dotActive}
//         >
//           {sliderImages.map((image, index) => (
//             <TouchableOpacity key={index} style={styles.slide}>
//               <Image source={image} style={styles.sliderImage} />
//             </TouchableOpacity>
//           ))}
//         </Swiper>
//       </View>
//       <View style={styles.content}>
//         {isLoading ? (
//           <ActivityIndicator />
//         ) : error ? (
//           <Text>Something went wrong</Text>
//         ) : (
//           <FlatList
//             data={data}
//             renderItem={({ item }) => (
//               <TouchableOpacity
//                 style={styles.itemCardContainer}
//                 onPress={() =>
//                   navigation.navigate("ProductDetail", { product: item })
//                 }
//               >
//                 <View style={styles.itemCard}>
//                   <Image
//                     source={{ uri: item.image }}
//                     style={styles.itemImage}
//                     // remove this before pushing on git
//                     defaultSource={defaultImage} // Use default image
//                     onError={(error) => {
//                       console.error(
//                         "Image load error:",
//                         error.nativeEvent.error
//                       );
//                       // Update image to default if it fails to load
//                       item.image = defaultImage;
//                     }}
//                   />
//                   <Text style={styles.itemName}>{item.name}</Text>
//                   <Text style={styles.itemPrice}>
//                     <Text style={styles.discountedPrice}>
//                       ₹{item.discountedPrice}
//                     </Text>{" "}
//                     ₹{item.price}
//                   </Text>
//                 </View>
//               </TouchableOpacity>
//             )}
//             keyExtractor={(item) => item._id}
//             contentContainerStyle={styles.list}
//             numColumns={2}
//           />
//         )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   content: {
//     flex: 1,
//   },
//   list: {
//     padding: 10,
//   },
//   itemCardContainer: {
//     flex: 1,
//     padding: 5,
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
//   carouselContainer: {
//     height: 500,
//     alignItems: "center",
//     justifyContent: "center",
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

// // ----working----
// import React from "react";
// import {
//   View,
//   StyleSheet,
//   Text,
//   Image,
//   TouchableOpacity,
//   FlatList,
//   ActivityIndicator,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import useFetch from "../hook/useFetch";
// import Swiper from "react-native-swiper";

// const sliderImages = [
//   require("../assets/exploreAssets/exploreAssets1.jpeg"),
//   require("../assets/exploreAssets/exploreAssets2.jpeg"),
//   require("../assets/exploreAssets/exploreAssets3.jpeg"),
// ];

// // default image for now
// const defaultImage = require("../assets/defaultImage.png");

// const ExploreScreen1 = () => {
//   const { data, isLoading, error } = useFetch();
//   const navigation = useNavigation();

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
//               // remove this before pushing on git
//               defaultSource={defaultImage} // Use default image
//               onError={(error) => {
//                 console.error("Image load error:", error.nativeEvent.error);
//                 // Update image to default if it fails to load
//                 item.image = defaultImage;
//               }}
//             />
//             <Text style={styles.itemName}>{item.name}</Text>
//             <Text style={styles.itemPrice}>
//               <Text style={styles.discountedPrice}>
//                 ₹{item.discountedPrice}
//               </Text>{" "}
//               ₹{item.price}
//             </Text>
//           </View>
//         </TouchableOpacity>
//       );
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={[{ type: "slider" }, ...data]}
//         renderItem={({ item, index }) => renderItem({ item, index })}
//         keyExtractor={(item, index) => index.toString()}
//         contentContainerStyle={styles.list}
//         numColumns={2}
//       />
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
import { useNavigation } from "@react-navigation/native";
import useFetch from "../hook/useFetch";
import Swiper from "react-native-swiper";
import SearchComponent from "../Components/SearchComponent";

const sliderImages = [
  require("../assets/exploreAssets/exploreAssets1.jpeg"),
  require("../assets/exploreAssets/exploreAssets2.jpeg"),
  require("../assets/exploreAssets/exploreAssets3.jpeg"),
];

const defaultImage = require("../assets/defaultImage.png");

const ExploreScreen1 = () => {
  const { data, isLoading, error, refetch } = useFetch();
  const navigation = useNavigation();
  const [numColumns, setNumColumns] = useState(1);
  const [searchData, setSearchData] = useState(null);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    refetch();
    const screenWidth = Dimensions.get("window").width;
    const newNumColumns = Math.floor(screenWidth / 200);
    setNumColumns(newNumColumns > 0 ? newNumColumns : 1);
  }, []);

  const handleSearch = async (key) => {
    try {
      setSearching(true);
      const response = await fetch(
        `http://192.168.1.43:5000/api/products/search/${key}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const searchData = await response.json();
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

  const renderItem = ({ item, index }) => {
    if (index === 0) {
      // Render swiper for slider images
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
      // Render product card
      return (
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
              defaultSource={defaultImage}
              onError={(error) => {
                console.error("Image load error:", error.nativeEvent.error);
                item.image = defaultImage;
              }}
            />
            <Text style={styles.itemName}>{item.name}</Text>
            {/* <Text style={styles.itemPrice}>
              <Text style={styles.discountedPrice}>
                ₹{item.discountedPrice}
              </Text>{" "}
              ₹{item.price}
            </Text> */}
            <Text style={styles.itemPrice}>
              ₹{item.discountedPrice}{" "}
              <Text style={styles.discountedPrice}>₹{item.price}</Text>
            </Text>
          </View>
        </TouchableOpacity>
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
                <Image
                  source={{ uri: item.image }}
                  style={styles.itemImage}
                  defaultSource={defaultImage}
                  onError={(error) => {
                    console.error("Image load error:", error.nativeEvent.error);
                    item.image = defaultImage;
                  }}
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
    padding: 5,
    width: "50%",
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
