// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   StyleSheet,
// } from "react-native";
// import { API_URL } from "@env";

// export default function AddProductScreen({ navigation }) {
//   const [title, setTitle] = useState("");
//   const [bodyHtml, setBodyHtml] = useState("");
//   const [vendor, setVendor] = useState("");
//   const [type, setType] = useState("");
//   const [price, setPrice] = useState("");
//   const [compareAtPrice, setCompareAtPrice] = useState("");
//   const [status, setStatus] = useState("active");
//   const [variants, setVariants] = useState([
//     {
//       sku: "",
//       size: "",
//       color: "",
//       grams: "",
//       inventoryTracker: "",
//       inventoryQty: "",
//     },
//   ]);
//   const [metafields, setMetafields] = useState({
//     collarType: [],
//     design: [],
//     fabric: [],
//     occasion: [],
//   });
//   const [tags, setTags] = useState([]);
//   const [image, setImage] = useState("");

//   const handleAddProduct = async () => {
//     const productData = {
//       title,
//       bodyHtml,
//       vendor,
//       type,
//       price: parseFloat(price),
//       compareAtPrice: parseFloat(compareAtPrice),
//       status,
//       variants,
//       metafields,
//       tags,
//       image,
//     };

//     const response = await fetch(`${API_URL}/api/products/save`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(productData),
//     });

//     if (response.ok) {
//       alert("Product added successfully!");
//       navigation.navigate("AdminDashboard");
//     } else {
//       alert("Failed to add product.");
//     }
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.formWrapper}>
//         <TextInput
//           style={styles.input}
//           placeholder="Title"
//           value={title}
//           onChangeText={setTitle}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Description"
//           value={bodyHtml}
//           onChangeText={setBodyHtml}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Vendor"
//           value={vendor}
//           onChangeText={setVendor}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Type"
//           value={type}
//           onChangeText={setType}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Price"
//           value={price}
//           onChangeText={setPrice}
//           keyboardType="numeric"
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Compare at Price"
//           value={compareAtPrice}
//           onChangeText={setCompareAtPrice}
//           keyboardType="numeric"
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Image URL"
//           value={image}
//           onChangeText={setImage}
//         />
//         {/* Add other fields like variants, metafields, and tags here */}
//         <TouchableOpacity onPress={handleAddProduct} style={styles.addButton}>
//           <Text style={styles.buttonText}>Add Product</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#fff",
//   },
//   formWrapper: {
//     width: "80%",
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   addButton: {
//     backgroundColor: "#28a745",
//     padding: 15,
//     borderRadius: 5,
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "#fff",
//     fontWeight: "bold",
//   },
// });

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Button,
  FlatList,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "@env";

const sizes = ["S", "M", "L", "XL", "XXL"];

export default function AddProduct({ navigation }) {
  const [productData, setProductData] = useState({
    title: "",
    bodyHtml: "",
    vendor: "",
    type: "",
    price: "",
    compareAtPrice: "",
    metafields: {
      collarType: "",
      design: "",
      fabric: "",
      occasion: "",
    },
    tags: "",
    status: "",
    image: "",
    variants: sizes.reduce((acc, size) => {
      acc[size] = {
        sku: "",
        color: "",
        grams: "",
        inventoryTracker: "",
        inventoryQty: "",
      };
      return acc;
    }, {}),
  });

  const handleChange = (field, value) => {
    setProductData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleVariantChange = (size, field, value) => {
    setProductData((prevState) => ({
      ...prevState,
      variants: {
        ...prevState.variants,
        [size]: {
          ...prevState.variants[size],
          [field]: value,
        },
      },
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`${API_URL}/api/products/save`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        alert("Product added successfully");
        navigation.goBack();
      } else {
        alert("Failed to add product");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert("An error occurred");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerText}>Add Product</Text>

      {/* Basic Product Information */}
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={productData.title}
        onChangeText={(text) => handleChange("title", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={productData.bodyHtml}
        onChangeText={(text) => handleChange("bodyHtml", text)}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Vendor"
        value={productData.vendor}
        onChangeText={(text) => handleChange("vendor", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Type"
        value={productData.type}
        onChangeText={(text) => handleChange("type", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={productData.price}
        onChangeText={(text) => handleChange("price", text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Compare At Price"
        value={productData.compareAtPrice}
        onChangeText={(text) => handleChange("compareAtPrice", text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Collar Type"
        value={productData.metafields.collarType}
        onChangeText={(text) => handleChange("metafields.collarType", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Design"
        value={productData.metafields.design}
        onChangeText={(text) => handleChange("metafields.design", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Fabric"
        value={productData.metafields.fabric}
        onChangeText={(text) => handleChange("metafields.fabric", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Occasion"
        value={productData.metafields.occasion}
        onChangeText={(text) => handleChange("metafields.occasion", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Tags (comma-separated)"
        value={productData.tags}
        onChangeText={(text) => handleChange("tags", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Status"
        autoCapitalize="none"
        value={productData.status}
        onChangeText={(text) => handleChange("status", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Image URL"
        value={productData.image}
        onChangeText={(text) => handleChange("image", text)}
      />

      {/* Variants */}
      <Text style={styles.variantHeader}>Variants</Text>
      {sizes.map((size) => (
        <View key={size} style={styles.variantContainer}>
          <Text style={styles.variantTitle}>Size: {size}</Text>
          <TextInput
            style={styles.input}
            placeholder="SKU"
            value={productData.variants[size].sku}
            onChangeText={(text) => handleVariantChange(size, "sku", text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Color"
            value={productData.variants[size].color}
            onChangeText={(text) => handleVariantChange(size, "color", text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Grams"
            value={productData.variants[size].grams}
            onChangeText={(text) => handleVariantChange(size, "grams", text)}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Inventory Tracker"
            value={productData.variants[size].inventoryTracker}
            onChangeText={(text) =>
              handleVariantChange(size, "inventoryTracker", text)
            }
          />
          <TextInput
            style={styles.input}
            placeholder="Inventory Quantity"
            value={productData.variants[size].inventoryQty}
            onChangeText={(text) =>
              handleVariantChange(size, "inventoryQty", text)
            }
            keyboardType="numeric"
          />
        </View>
      ))}

      <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    fontSize: 14,
  },
  variantHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  variantContainer: {
    marginBottom: 20,
  },
  variantTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: "#252355",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
