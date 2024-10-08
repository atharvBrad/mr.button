import "react-native-reanimated";
import "react-native-gesture-handler";
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
import Login from "./screens/Login";
import Register from "./screens/Register";
import SignIn from "./screens/SignIn";
import DrawerContent from "./screens/DrawerContent";
import BottomTabNavigation from "./tabScreens/BottomTabNavigation";
import ExploreScreen1 from "./exploreScreens/ExploreScreen1";
import ProductDetail from "./exploreScreens/ProductDetail";
import Checkout from "./screens/Checkout";
import Cart from "./tabScreens/Cart";
import CategoryScreen from "./exploreScreens/CategoryScreen";
import AddAddress from "./tabScreens/ProfileScreens/AddAddress";
import ReturnAndExchange from "./screens/ReturnAndExchange";
import Profile from "./tabScreens/Profile";
import PrivacyPolicy from "./tabScreens/ProfileScreens/PrivacyPolicy";
import FAQScreen from "./PolicyScreens/Policy/FAQScreen";
import ShippingPolicy from "./PolicyScreens/Policy/ShippingPolicy";
import RetExPolicy from "./PolicyScreens/Policy/RetExPolicy";
import SocialMediaPolicy from "./PolicyScreens/Policy/SocialMediaPolicy";
import SiteUsePolicy from "./PolicyScreens/Policy/SiteUsePolicy";
import TermsAndCondition from "./PolicyScreens/Policy/TermsAndCondition";
import ContactUs from "./PolicyScreens/GetInTouch/ContactUs";
import HelpCenter from "./tabScreens/ProfileScreens/HelpCenter";
import AddProductScreen from "./tabScreens/ProfileScreens/AddProductScreen";

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
      <Stack.Screen
        name="Checkout"
        component={Checkout}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate(Cart)}>
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
          headerTitle: true,
        }}
      />
      <Stack.Screen
        name="CategoryScreen"
        component={CategoryScreen}
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
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="AddAddress"
        component={AddAddress}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate(Profile)}>
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
          headerTitle: "Address",
        }}
      />
      <Stack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate(Profile)}>
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
          headerTitle: true,
        }}
      />
      <Stack.Screen
        name="HelpCenter"
        component={HelpCenter}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate(Profile)}>
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
          headerTitle: true,
        }}
      />
      <Stack.Screen
        name="AddProductScreen"
        component={AddProductScreen}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate(Profile)}>
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
          headerTitle: true,
        }}
      />
      <Stack.Screen
        name="FAQScreen"
        component={FAQScreen}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate(ReturnAndExchange)}
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
        }}
      />
      <Stack.Screen
        name="ShippingPolicy"
        component={ShippingPolicy}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate(ReturnAndExchange)}
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
        }}
      />
      <Stack.Screen
        name="RetExPolicy"
        component={RetExPolicy}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate(ReturnAndExchange)}
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
        }}
      />
      <Stack.Screen
        name="SocialMediaPolicy"
        component={SocialMediaPolicy}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate(ReturnAndExchange)}
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
        }}
      />
      <Stack.Screen
        name="SiteUsePolicy"
        component={SiteUsePolicy}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate(ReturnAndExchange)}
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
        }}
      />
      <Stack.Screen
        name="TermsAndCondition"
        component={TermsAndCondition}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate(ReturnAndExchange)}
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
        }}
      />
      <Stack.Screen
        name="ContactUs"
        component={ContactUs}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
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
        }}
      />
      <Stack.Screen
        name="ReturnAndExchange"
        component={ReturnAndExchange}
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
          // backgroundColor: "#e8e8e8",
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
      {/* <Drawer.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={{ headerShown: false }}
      /> */}
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
