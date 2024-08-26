// import React, { useState, useEffect } from "react";
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
// import DefaultImage from "../assets/defaultImage.png";
// import { API_URL } from "@env";

// const CategoryScreen = ({ route }) => {
//   const { category } = route.params;
//   const navigation = useNavigation();
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch(
//           `${API_URL}/api/products/category/${category}`
//         );
//         const result = await response.json();
//         setData(result);
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Failed to fetch products:", error);
//         setIsLoading(false);
//       }
//     };

//     fetchProducts();
//   }, [category]);

//   const renderItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.itemCardContainer}
//       onPress={() => navigation.navigate("ProductDetail", { product: item })}
//     >
//       <View style={styles.itemCard}>
//         <Image
//           source={item.image ? { uri: item.image } : DefaultImage}
//           style={styles.itemImage}
//         />
//         <Text style={styles.itemName}>{item.name}</Text>
//         <Text style={styles.itemPrice}>
//           <Text style={styles.discountedPrice}>₹{item.discountedPrice}</Text> ₹
//           {item.price}
//         </Text>
//       </View>
//     </TouchableOpacity>
//   );

//   if (isLoading) {
//     return <ActivityIndicator size="large" color="#000" />;
//   }

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={(item) => item._id}
//         contentContainerStyle={styles.list}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
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
// });

// export default CategoryScreen;

import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import DefaultImage from "../assets/defaultImage.png";
import { API_URL } from "@env";

const CategoryScreen = ({ route }) => {
  const { type } = route.params; // Use type instead of category
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const type = "Shirts";
        const response = await fetch(`${API_URL}/api/products/type/${type}`);
        console.log(`${API_URL}/api/products/type/${type}`);

        const result = await response.json();
        setData(result);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [type]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemCardContainer}
      onPress={() => navigation.navigate("ProductDetail", { product: item })}
    >
      <View style={styles.itemCard}>
        <Image
          source={item.image ? { uri: item.image } : DefaultImage}
          style={styles.itemImage}
        />
        <Text style={styles.itemName}>{item.title}</Text>
        <View style={styles.itemDetails}>
          <Text style={styles.itemPrice}>
            ₹{item.price}{" "}
            <Text style={styles.discountedPrice}>₹{item.compareAtPrice}</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  if (isLoading) {
    return <ActivityIndicator size="large" color="#000" />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
});

export default CategoryScreen;
