import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Title } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const DrawerList = [
  { icon: "home-outline", label: "Home", navigateTo: "HomeStack" },
  { icon: "account-multiple", label: "Profile", navigateTo: "Profile" },
  { icon: "account-group", label: "User", navigateTo: "User" },
  { icon: "bookshelf", label: "Library", navigateTo: "" },
];

const DrawerLayout = ({ icon, label, navigateTo }) => {
  const navigation = useNavigation();
  return (
    <DrawerItem
      icon={({ color, size }) => (
        <Icon name={icon} color={"#fff"} size={size} />
      )}
      label={label}
      labelStyle={{ color: "#fff" }}
      onPress={() => {
        navigation.navigate(navigateTo);
      }}
    />
  );
};

const DrawerItems = (navigation) => {
  return DrawerList.map((el, i) => {
    return (
      <View key={i}>
        <DrawerLayout
          icon={el.icon}
          label={el.label}
          navigateTo={el.navigateTo}
          navigation={navigation}
        />
        {i < DrawerList.length - 1 && <View style={styles.separator} />}
      </View>
    );
    // return (
    //   <DrawerLayout
    //     key={i}
    //     icon={el.icon}
    //     label={el.label}
    //     navigateTo={el.navigateTo}
    //   />
    // );
  });
};

function DrawerContent(props) {
  const { navigation } = props;

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity style={{ marginLeft: 10, flex: 1 }}>
                <Title style={styles.title}>ATHARV</Title>
                <Text style={styles.caption} numberOfLines={1}>
                  atharvpatil322@gmail.com
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.closeDrawer()}
                style={styles.closeButton}
              >
                <Icon name="close" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.drawerSection}>
            <DrawerItems navigation={navigation} />
          </View>
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={"#fff"} size={size} />
          )}
          label="Sign Out"
          labelStyle={{ color: "#fff" }}
        />
      </View>
    </View>
  );
}

export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: "#252355",
    // backgroundColor: "transparent",
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 15,
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
    fontSize: 16,
    // marginTop: 3,
    fontWeight: "bold",
    color: "#fff",
  },
  caption: {
    fontSize: 13,
    lineHeight: 14,
    // width: "100%",
    color: "#fff",
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
    color: "#fff",
  },
  drawerSection: {
    marginTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#dedede",
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#dedede",
    borderTopWidth: 1,
    borderBottomColor: "#dedede",
    borderBottomWidth: 1,
  },
  separator: {
    height: 0.3,
    backgroundColor: "#fafafa",
    // marginVertical: ,
    marginHorizontal: 20,
    opacity: 0.6,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
