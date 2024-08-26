// import React, { useEffect, useState } from "react";
// import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
// import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
// import { Title } from "react-native-paper";
// import { useNavigation } from "@react-navigation/native";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import { getUserData } from "../utlis/asyncStorage";

// // Update the values of the categories array to capitalize initials
// const categories = [
//   { label: "Shirts", value: "Shirts" },
//   { label: "Blazers", value: "Blazers" },
//   { label: "Co-ords", value: "Co-ords" },
//   { label: "Trousers", value: "Trousers" },
//   { label: "Tunics", value: "Tunics" },
//   { label: "Nehru Jackets", value: "Nehru Jackets" },
//   { label: "Jackets", value: "Jackets" },
//   { label: "All Products", value: "All Products" },
// ];

// const drawerOptions = [
//   { label: "New In Sand Is Live", navigateTo: "NewInSand" },
//   { label: "EOSS", navigateTo: "EOSS" },
//   { label: "Wedding Store", navigateTo: "WeddingStore" },
//   { label: "Suit Store", navigateTo: "SuitStore" },
//   { label: "Clearance", navigateTo: "Clearance" },
// ];

// const DrawerLayout = ({ label, navigateTo }) => {
//   const navigation = useNavigation();
//   return (
//     <TouchableOpacity
//       onPress={() => navigation.navigate(navigateTo)}
//       style={styles.drawerOption}
//     >
//       <Text style={styles.drawerOptionText}>{label}</Text>
//     </TouchableOpacity>
//   );
// };

// function DrawerContent(props) {
//   const { navigation } = props;
//   const [userData, setUserData] = useState({ firstName: "", emailId: "" });
//   const [showCategories, setShowCategories] = useState(false);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       const data = await getUserData();
//       if (data) {
//         setUserData(data);
//       }
//     };

//     fetchUserData();
//   }, []);

//   const handleCategorySelect = (category) => {
//     navigation.navigate("CategoryScreen", { category });
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <DrawerContentScrollView {...props}>
//         <View style={styles.drawerContent}>
//           <View style={styles.userInfoSection}>
//             <View style={{ flexDirection: "row", alignItems: "center" }}>
//               <TouchableOpacity style={{ marginLeft: 10, flex: 1 }}>
//                 <Title style={styles.title}>{userData.firstName}</Title>
//                 <Text style={styles.caption} numberOfLines={1}>
//                   {userData.emailId}
//                 </Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 onPress={() => navigation.closeDrawer()}
//                 style={styles.closeButton}
//               >
//                 <Icon name="close" size={24} color="#000" />
//               </TouchableOpacity>
//             </View>
//           </View>
//           <View style={styles.drawerSection}>
//             <View style={styles.categorySection}>
//               <TouchableOpacity
//                 style={styles.dropdownHeader}
//                 onPress={() => setShowCategories(!showCategories)}
//               >
//                 <Text style={styles.categoryTitle}>Category</Text>
//                 <Icon
//                   name={showCategories ? "chevron-up" : "chevron-down"}
//                   size={24}
//                   color="#000"
//                 />
//               </TouchableOpacity>
//               {showCategories && (
//                 <View style={styles.dropdownContainer}>
//                   {categories.map((category, index) => (
//                     <TouchableOpacity
//                       key={index}
//                       style={styles.categoryItem}
//                       onPress={() => handleCategorySelect(category.value)}
//                     >
//                       <Text style={styles.categoryText}>{category.label}</Text>
//                     </TouchableOpacity>
//                   ))}
//                 </View>
//               )}
//             </View>
//             {drawerOptions.map((option, index) => (
//               <DrawerLayout
//                 key={index}
//                 label={option.label}
//                 navigateTo={option.navigateTo}
//               />
//             ))}
//           </View>
//         </View>
//       </DrawerContentScrollView>
//       <View style={styles.bottomDrawerSection}>
//         <DrawerItem
//           icon={({ color, size }) => (
//             <Icon name="exit-to-app" color={"#000"} size={size} />
//           )}
//           label="Return Order"
//           labelStyle={{ color: "#000" }}
//           onPress={() => navigation.navigate("ReturnAndExchange")}
//         />
//         <DrawerItem
//           icon={({ color, size }) => (
//             <Icon name="email" color={"#000"} size={size} />
//           )}
//           label="Contact"
//           labelStyle={{ color: "#000" }}
//           onPress={() => navigation.navigate("ContactUs")}
//         />
//         <DrawerItem
//           icon={({ color, size }) => (
//             <Icon name="login" color={"#000"} size={size} />
//           )}
//           label="Log In"
//           labelStyle={{ color: "#000" }}
//           onPress={() => navigation.navigate("LogIn")}
//         />
//       </View>
//     </View>
//   );
// }

// export default DrawerContent;

// const styles = StyleSheet.create({
//   drawerContent: {
//     flex: 1,
//     // backgroundColor: "#252355",
//   },
//   userInfoSection: {
//     paddingLeft: 20,
//     paddingRight: 20,
//     paddingVertical: 15,
//   },
//   closeButton: {
//     marginLeft: 50,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#000",
//     fontFamily: "Avenir",
//   },
//   caption: {
//     fontSize: 13,
//     lineHeight: 14,
//     color: "#000",
//     fontFamily: "Avenir",
//   },
//   drawerSection: {
//     marginTop: 15,
//     borderBottomColor: "#dedede",
//   },
//   bottomDrawerSection: {
//     marginBottom: 15,
//   },
//   separator: {
//     height: 0.3,
//     backgroundColor: "#fafafa",
//     marginHorizontal: 20,
//     opacity: 0.6,
//   },
//   categorySection: {
//     marginTop: 15,
//     paddingHorizontal: 20,
//   },
//   categoryTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#000",
//     marginBottom: 10,
//     fontFamily: "Avenir",
//   },
//   dropdownHeader: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 10,
//   },
//   dropdownContainer: {
//     // backgroundColor: "#e8e8e8",
//     color: "#fff",
//     borderRadius: 5,
//     // borderWidth: 1,
//     borderColor: "#ccc",
//   },
//   categoryItem: {
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//   },
//   categoryText: {
//     fontSize: 16,
//     color: "#000",
//     fontFamily: "Avenir",
//     // fontStyle: "italic",
//   },
//   drawerOption: {
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//   },
//   drawerOptionText: {
//     fontSize: 16,
//     color: "#000",
//     fontFamily: "Avenir",
//   },
// });

import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Title } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { getUserData } from "../utlis/asyncStorage";

// Update the values of the categories array to capitalize initials
const categories = [
  { label: "Shirts", value: "Shirts" },
  { label: "Blazers", value: "Blazers" },
  { label: "Co-ords", value: "Co-ords" },
  { label: "Trousers", value: "Trousers" },
  { label: "Tunics", value: "Tunics" },
  { label: "Nehru Jackets", value: "Nehru Jackets" },
  { label: "Jackets", value: "Jackets" },
  { label: "All Products", value: "All Products" },
];

const drawerOptions = [
  { label: "New In Sand Is Live", navigateTo: "NewInSand" },
  { label: "EOSS", navigateTo: "EOSS" },
  { label: "Wedding Store", navigateTo: "WeddingStore" },
  { label: "Suit Store", navigateTo: "SuitStore" },
  { label: "Clearance", navigateTo: "Clearance" },
];

const DrawerLayout = ({ label, navigateTo }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(navigateTo)}
      style={styles.drawerOption}
    >
      <Text style={styles.drawerOptionText}>{label}</Text>
    </TouchableOpacity>
  );
};

function DrawerContent(props) {
  const { navigation } = props;
  const [userData, setUserData] = useState({ firstName: "", emailId: "" });
  const [showCategories, setShowCategories] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getUserData();
      if (data) {
        setUserData(data);
      }
    };

    fetchUserData();
  }, []);

  const handleCategorySelect = (category) => {
    if (category) {
      navigation.navigate("CategoryScreen", { category });
    } else {
      console.error("Category is undefined");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity style={{ marginLeft: 10, flex: 1 }}>
                <Title style={styles.title}>{userData.firstName}</Title>
                <Text style={styles.caption} numberOfLines={1}>
                  {userData.emailId}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.closeDrawer()}
                style={styles.closeButton}
              >
                <Icon name="close" size={24} color="#000" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.drawerSection}>
            <View style={styles.categorySection}>
              <TouchableOpacity
                style={styles.dropdownHeader}
                onPress={() => setShowCategories(!showCategories)}
              >
                <Text style={styles.categoryTitle}>Category</Text>
                <Icon
                  name={showCategories ? "chevron-up" : "chevron-down"}
                  size={24}
                  color="#000"
                />
              </TouchableOpacity>
              {showCategories && (
                <View style={styles.dropdownContainer}>
                  {categories.map((category, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.categoryItem}
                      onPress={() => handleCategorySelect(category.value)}
                    >
                      <Text style={styles.categoryText}>{category.label}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
            {drawerOptions.map((option, index) => (
              <DrawerLayout
                key={index}
                label={option.label}
                navigateTo={option.navigateTo}
              />
            ))}
          </View>
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={"#000"} size={size} />
          )}
          label="Return Order"
          labelStyle={{ color: "#000" }}
          onPress={() => navigation.navigate("ReturnAndExchange")}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="email" color={"#000"} size={size} />
          )}
          label="Contact"
          labelStyle={{ color: "#000" }}
          onPress={() => navigation.navigate("ContactUs")}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="login" color={"#000"} size={size} />
          )}
          label="Log In"
          labelStyle={{ color: "#000" }}
          onPress={() => navigation.navigate("LogIn")}
        />
      </View>
    </View>
  );
}

export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingVertical: 15,
  },
  closeButton: {
    marginLeft: 50,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    fontFamily: "Avenir",
  },
  caption: {
    fontSize: 13,
    lineHeight: 14,
    color: "#000",
    fontFamily: "Avenir",
  },
  drawerSection: {
    marginTop: 15,
    borderBottomColor: "#dedede",
  },
  bottomDrawerSection: {
    marginBottom: 15,
  },
  categorySection: {
    marginTop: 15,
    paddingHorizontal: 20,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
    fontFamily: "Avenir",
  },
  dropdownHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  dropdownContainer: {
    borderRadius: 5,
    borderColor: "#ccc",
  },
  categoryItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  categoryText: {
    fontSize: 16,
    color: "#000",
    fontFamily: "Avenir",
  },
  drawerOption: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  drawerOptionText: {
    fontSize: 16,
    color: "#000",
    fontFamily: "Avenir",
  },
});
