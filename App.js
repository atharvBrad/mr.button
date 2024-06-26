// import "react-native-gesture-handler";
// import "react-native-reanimated";
// import React from "react";
// import {
//   NavigationContainer,
//   useNavigation,
//   DrawerActions,
// } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import HomeScreen from "./screens/HomeScreen";
// import Login from "./screens/Login"; // Ensure the path is correct
// import Register from "./screens/Register";
// import DrawerContent from "./screens/DrawerContent"; // Ensure the path is correct
// import Icon from "react-native-vector-icons/Entypo";
// import { Image, Text, TouchableOpacity, View } from "react-native"; // Import Image component

// const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

// const HomeStackNavigator = () => {
//   const navigation = useNavigation();

//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="HomScreen"
//         component={HomeScreen}
//         options={{
//           headerLeft: () => (
//             <TouchableOpacity
//               onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
//             >
//               <Icon name="menu" size={30} color="#000" />
//             </TouchableOpacity>
//           ),
//           headerTitle: () => (
//             <View style={{ flexDirection: "row", alignItems: "center" }}>
//               <Image
//                 source={require("./assets/Logo name.png")}
//                 style={{ width: 100, height: 40 }}
//                 resizeMode="contain"
//               />
//               {/* <Text style={{ marginLeft: 10, fontSize: 18 }}>Your Title</Text> */}
//             </View>
//           ),
//           // headerShown: true,
//           headerTitleAlign: "center",
//         }}
//       />
//     </Stack.Navigator>
//   );
// };

// const AuthStackNavigator = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Login"
//         component={Login}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="Register"
//         component={Register}
//         options={{ headerShown: false }}
//       />
//     </Stack.Navigator>
//   );
// };

// const DrawerNavigator = () => {
//   return (
//     <Drawer.Navigator
//       drawerContent={(props) => <DrawerContent {...props} />}
//       screenOptions={{
//         headerShown: false,
//         drawerStyle: {
//           backgroundColor: "#252552",
//         },
//         drawerLabelStyle: {
//           color: "#fff",
//         },
//         drawerActiveTintColor: "#fff",
//         drawerInactiveTintColor: "#fff",
//       }}
//     >
//       <Drawer.Screen
//         name="HomeStack"
//         component={HomeStackNavigator}
//         options={{ headerShown: false }}
//       />
//     </Drawer.Navigator>
//   );
// };

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           headerShown: false,
//         }}
//       >
//         <Stack.Screen name="AuthStack" component={AuthStackNavigator} />
//         <Stack.Screen name="DrawerStack" component={DrawerNavigator} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

// ------------------------%%------------------------

import "react-native-gesture-handler";
import "react-native-reanimated";
import React from "react";
import {
  NavigationContainer,
  useNavigation,
  DrawerActions,
} from "@react-navigation/native";
import Icon from "react-native-vector-icons/Entypo";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/Login";
import Register from "./screens/Register";
import DrawerContent from "./screens/DrawerContent";
import BottomTabNavigation from "./tabScreens/BottomTabNavigation";
import ExploreScreen1 from "./exploreScreens/ExploreScreen1";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackNavigator = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        // component={HomeScreen}
        component={BottomTabNavigation}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            >
              <Icon name="menu" size={30} color="#000" />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("./assets/Logo name.png")}
                style={{ width: 100, height: 40 }}
                resizeMode="contain"
              />
            </View>
          ),
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="ExploreScreen1"
        component={ExploreScreen1}
        options={{
          // headerLeft: () => (
          //   <TouchableOpacity onPress={() => navigation.goBack()}>
          //     <Icon name="back" size={30} color="#000" />
          //   </TouchableOpacity>
          // ),
          headerTitle: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("./assets/Logo name.png")}
                style={{ width: 100, height: 40 }}
                resizeMode="contain"
              />
            </View>
          ),
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
};

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: "#252552",
        },
        drawerLabelStyle: {
          color: "#fff",
        },
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#fff",
      }}
    >
      <Drawer.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="AuthStack" component={AuthStackNavigator} />
        <Stack.Screen name="DrawerStack" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
