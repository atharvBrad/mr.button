// CUSTOM STAR COMPONENT

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
import { useReviews } from "../hook/useReviews";
import StarRating from "../Components/starRating";

const AddReview = ({ productId, fetchReviews }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const { addReview } = useReviews();

  const handleAddReview = async () => {
    try {
      if (rating < 1 || rating > 5) {
        Alert.alert("Error", "Please provide a valid rating between 1 and 5.");
        return;
      }

      if (!comment.trim()) {
        Alert.alert("Error", "Please provide a comment.");
        return;
      }

      await addReview(productId, rating, comment);
      Alert.alert("Success", "Review added successfully");
      fetchReviews(); // Refresh the reviews list
      setRating(0);
      setComment("");
    } catch (error) {
      Alert.alert("Error", "Failed to add review");
    }
  };

  return (
    <View style={styles.addReviewContainer}>
      <Text style={styles.addReviewTitle}>Add a Review</Text>
      <StarRating rating={rating} onRatingPress={setRating} />
      <TextInput
        style={styles.input}
        placeholder="Comment"
        value={comment}
        onChangeText={setComment}
      />
      <TouchableOpacity
        style={styles.submitReviewButton}
        onPress={handleAddReview}
      >
        <Text style={styles.submitReviewButtonText}>Submit Review</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  addReviewContainer: {
    width: "100%",
    padding: 10,
    marginTop: 30,
  },
  addReviewTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  submitReviewButton: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  submitReviewButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AddReview;

// STAR LIBRARY

// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Alert,
//   StyleSheet,
// } from "react-native";
// import Stars from "react-native-stars";
// import { useReviews } from "../hook/useReviews";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// const AddReview = ({ productId, fetchReviews }) => {
//   const [rating, setRating] = useState(0);
//   const [comment, setComment] = useState("");
//   const { addReview } = useReviews();

//   const handleAddReview = async () => {
//     try {
//       if (rating < 1 || rating > 5) {
//         Alert.alert("Error", "Please provide a valid rating between 1 and 5.");
//         return;
//       }

//       if (!comment.trim()) {
//         Alert.alert("Error", "Please provide a comment.");
//         return;
//       }

//       await addReview(productId, rating, comment);
//       Alert.alert("Success", "Review added successfully");
//       fetchReviews(); // Refresh the reviews list
//       setRating(0);
//       setComment("");
//     } catch (error) {
//       Alert.alert("Error", "Failed to add review");
//     }
//   };

//   return (
//     <View style={styles.addReviewContainer}>
//       <Text style={styles.addReviewTitle}>Add a Review</Text>
//       <Stars
//         default={0}
//         count={5}
//         half={true}
//         starSize={50}
//         update={(val) => setRating(val)}
//         fullStar={<Icon name="star" style={styles.myStarStyle} />}
//         emptyStar={
//           <Icon
//             name="star-outline"
//             style={[styles.myStarStyle, styles.myEmptyStarStyle]}
//           />
//         }
//         halfStar={<Icon name="star-half" style={styles.myStarStyle} />}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Comment"
//         value={comment}
//         onChangeText={setComment}
//       />
//       <TouchableOpacity
//         style={styles.submitReviewButton}
//         onPress={handleAddReview}
//       >
//         <Text style={styles.submitReviewButtonText}>Submit Review</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   addReviewContainer: {
//     width: "100%",
//     padding: 10,
//     marginTop: 30,
//   },
//   addReviewTitle: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 10,
//     textAlign: "center",
//   },
//   input: {
//     height: 40,

//     borderColor: "#ccc",
//     borderWidth: 1,
//     // marginBottom: 10,
//     marginVertical: 10,
//     paddingHorizontal: 10,
//   },
//   submitReviewButton: {
//     backgroundColor: "#000",
//     padding: 10,
//     borderRadius: 5,
//     alignItems: "center",
//   },
//   submitReviewButtonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   myStarStyle: {
//     color: "gold",
//     fontSize: "25",
//     backgroundColor: "transparent",
//     textShadowColor: "black",
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 2,
//   },
//   myEmptyStarStyle: {
//     color: "grey",
//   },
// });

// export default AddReview;
