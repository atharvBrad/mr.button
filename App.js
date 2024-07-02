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
import SignIn from "./screens/SignIn";
import DrawerContent from "./screens/DrawerContent";
import BottomTabNavigation from "./tabScreens/BottomTabNavigation";
import ExploreScreen1 from "./exploreScreens/ExploreScreen1";
import ProductDetail from "./exploreScreens/ProductDetail";

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
              style={{ backgroundColor: "transparent" }}
            >
              <Icon name="menu" size={30} color="#000" />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "transparent",
              }}
            >
              <Image
                source={require("./assets/Logo name.png")}
                style={{ width: 100, height: 40 }}
                resizeMode="contain"
              />
            </View>
          ),
          headerTitleAlign: "center",
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="ExploreScreen1"
        component={ExploreScreen1}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Tabs")}>
              <Icon name="chevron-small-left" size={30} color="#000" />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "transparent",
              }}
            >
              <Image
                source={require("./assets/Logo name.png")}
                style={{ width: 100, height: 40 }}
                resizeMode="contain"
              />
            </View>
          ),
          // headerTitle: "",
          headerTitleAlign: "center",
          // headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate(ExploreScreen1)}
            >
              <Icon name="chevron-small-left" size={30} color="#000" />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "transparent",
              }}
            >
              <Image
                source={require("./assets/Logo name.png")}
                style={{ width: 100, height: 40 }}
                resizeMode="contain"
              />
            </View>
          ),
          headerTitleAlign: "center",
          headerTransparent: true,
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
      <Stack.Screen
        name="SignIn"
        component={SignIn}
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
