import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Linking,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import * as Font from "expo-font";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const ReturnAndExchange = ({ navigation }) => {
  const [expandedSections, setExpandedSections] = useState({
    getInTouch: false,
    collections: false,
    policy: false,
    journal: false,
  });
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        CenturyGothic: require("../assets/fonts/CenturyGothic.ttf"),
      });
      setFontsLoaded(true);
    };
    loadFonts();
  }, []);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  if (!fontsLoaded) {
    return null; // You can return a loading spinner or placeholder here
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.infoText}>
          Return/exchange your product in just a few clicks. Please enter your
          order number and email/mobile number to continue.
        </Text>
        <TextInput style={styles.input} placeholder="Order Number" />
        <TextInput style={styles.input} placeholder="Email or Phone" />
        <TouchableOpacity style={styles.findButton}>
          <Text style={styles.findButtonText}>Find Your Order</Text>
        </TouchableOpacity>
        <Text style={styles.noteText}>
          Please read our return/exchange policies before proceeding.
        </Text>
        <Text style={styles.noteText}>
          Please note that ₹250 logistic charge will be deducted as part of the
          refund process.
        </Text>
        <Text style={styles.noteText}>
          There will be no refund on products with a discount of 50%. Credit
          amount will be added to your Mr Button Wallet.
        </Text>
        <Text style={styles.noteText}>
          For any further queries kindly email us at: wizards@mrbutton.in
        </Text>
        <Text style={styles.securedBy}>
          Secured by <Text style={styles.returnPrime}>Return Prime</Text>
        </Text>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.headingContainer}
          onPress={() => toggleSection("getInTouch")}
        >
          <Text style={styles.heading}>GET IN TOUCH</Text>
          <Icon
            name={expandedSections.getInTouch ? "chevron-up" : "chevron-down"}
            size={24}
            color="#000"
          />
        </TouchableOpacity>
        {expandedSections.getInTouch && (
          <View style={styles.sectionContent}>
            <Text>
              Email:{" "}
              <Text
                style={styles.link}
                onPress={() => Linking.openURL("mailto:wizards@mrbutton.in")}
              >
                wizards@mrbutton.in
              </Text>
            </Text>
            <Text>
              WhatsApp:{" "}
              <Text
                style={styles.link}
                onPress={() => Linking.openURL("tel:+918810368297")}
              >
                +91 8810368297
              </Text>
            </Text>
            <Text>(Mon-Sat : Timing 10 am - 7 pm)</Text>
            <Text
              style={styles.link}
              onPress={() => navigation.navigate("ContactUs")}
            >
              CONTACT US
            </Text>
            <Text
              style={styles.link}
              onPress={() => navigation.navigate("ReturnAndExchange")}
            >
              RETURN/EXCHANGE REQUEST
            </Text>
          </View>
        )}

        <TouchableOpacity
          style={styles.headingContainer}
          onPress={() => toggleSection("collections")}
        >
          <Text style={styles.heading}>COLLECTIONS</Text>
          <Icon
            name={expandedSections.collections ? "chevron-up" : "chevron-down"}
            size={24}
            color="#000"
          />
        </TouchableOpacity>
        {expandedSections.collections && (
          <View style={styles.sectionContent}>
            {/* Add your collections content here */}
          </View>
        )}

        <TouchableOpacity
          style={styles.headingContainer}
          onPress={() => toggleSection("policy")}
        >
          <Text style={styles.heading}>POLICY</Text>
          <Icon
            name={expandedSections.policy ? "chevron-up" : "chevron-down"}
            size={24}
            color="#000"
          />
        </TouchableOpacity>
        {expandedSections.policy && (
          <View style={styles.sectionContent}>
            <Text
              style={styles.link}
              onPress={() => navigation.navigate("FAQScreen")}
            >
              FAQ'S
            </Text>
            <Text
              style={styles.link}
              onPress={() => navigation.navigate("RetExPolicy")}
            >
              RETURN/EXCHANGE POLICY
            </Text>
            <Text
              style={styles.link}
              onPress={() => navigation.navigate("ShippingPolicy")}
            >
              SHIPPING POLICY
            </Text>
            <Text
              style={styles.link}
              onPress={() => navigation.navigate("SocialMediaPolicy")}
            >
              SOCIAL MEDIA ENGAGEMENT POLICY
            </Text>
            <Text
              style={styles.link}
              onPress={() => navigation.navigate("PrivacyPolicy")}
            >
              PRIVACY POLICY
            </Text>
            <Text
              style={styles.link}
              onPress={() => navigation.navigate("SiteUsePolicy")}
            >
              SITE USE
            </Text>
            <Text
              style={styles.link}
              onPress={() => navigation.navigate("TermsAndCondition")}
            >
              TERMS & CONDITIONS
            </Text>
          </View>
        )}

        <TouchableOpacity
          style={styles.headingContainer}
          onPress={() => toggleSection("journal")}
        >
          <Text style={styles.heading}>JOURNAL</Text>
          <Icon
            name={expandedSections.journal ? "chevron-up" : "chevron-down"}
            size={24}
            color="#000"
          />
        </TouchableOpacity>
        {expandedSections.journal && (
          <View style={styles.sectionContent}>
            <Text
              style={styles.link}
              onPress={() => Linking.openURL("https://mrbutton.in/blog")}
            >
              BLOG
            </Text>
          </View>
        )}

        <View style={styles.socialMedia}>
          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL("https://www.facebook.com/MenatMrButton/")
            }
          >
            <FontAwesome name="facebook" size={30} color="#3b5998" />
          </Text>
          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL("https://www.instagram.com/mrbutton/?hl=en")
            }
          >
            <AntDesign name="instagram" size={30} color="#C13584" />
          </Text>
          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL(
                "https://x.com/i/flow/login?redirect_after_login=%2Fmenatmrbutton"
              )
            }
          >
            <FontAwesome name="twitter" size={30} color="#1DA1F2" />
          </Text>
          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL("https://in.pinterest.com/menatmrbutton/")
            }
          >
            <FontAwesome name="pinterest-p" size={30} color="#E60023" />
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    fontFamily: "CenturyGothic",
  },
  topContainer: {
    padding: 10,
    marginBottom: 20,
  },
  infoText: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 16,
    fontFamily: "CenturyGothic",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    fontFamily: "CenturyGothic",
  },
  findButton: {
    backgroundColor: "#252355",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
  },
  findButtonText: {
    color: "#fff",
    fontFamily: "CenturyGothic",
  },
  noteText: {
    textAlign: "center",
    marginBottom: 5,
    fontFamily: "CenturyGothic",
  },
  securedBy: {
    textAlign: "center",
    marginVertical: 10,
    fontFamily: "CenturyGothic",
  },
  returnPrime: {
    fontWeight: "bold",
  },
  bottomContainer: {
    borderTopColor: "#ccc",
  },
  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "CenturyGothic",
  },
  sectionContent: {
    paddingVertical: 10,
    alignItems: "center",
    // padding: 30,
  },
  link: {
    textDecorationLine: "underline",
    marginVertical: 5,
    fontFamily: "CenturyGothic",
    // margin: 5,
  },
  socialMedia: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
    marginBottom: 70,
  },
});

export default ReturnAndExchange;
