import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import * as Font from "expo-font";
import { getUserData } from "../../utlis/asyncStorage";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ContactUs = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [expandedSections, setExpandedSections] = useState({
    getInTouch: false,
    collections: false,
    policy: false,
    journal: false,
  });

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        CenturyGothic: require("../../assets/fonts/CenturyGothic.ttf"),
      });
      setFontsLoaded(true);
    };

    const fetchUserData = async () => {
      const data = await getUserData();
      if (data) {
        setName(data.firstName);
        setEmail(data.emailId);
      }
    };

    loadFonts();
    fetchUserData();
  }, []);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleSend = () => {
    // Handle the send action, e.g., form submission
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  };

  if (!fontsLoaded) {
    return null; // You can return a loading spinner or placeholder here
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headcontainer}>
        <Text style={styles.heading}>CONTACT US</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>NAME</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>EMAIL</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>MESSAGE</Text>
          <TextInput
            style={[styles.input, styles.messageInput]}
            value={message}
            placeholder="Enter your message here"
            onChangeText={setMessage}
            multiline
          />
        </View>
        <View style={{ backgroundColor: "#252355" }}>
          <Button title="SEND" onPress={handleSend} color="#fff" />
        </View>
        <Text style={styles.footerText}>
          This site is protected by hCaptcha and the hCaptcha Privacy Policy and
          Terms of Service apply.
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
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  headcontainer: {
    marginBottom: 30,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    fontFamily: "CenturyGothic",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily: "CenturyGothic",
  },
  input: {
    height: 40,
    borderColor: "#000",
    borderWidth: 1,
    borderColor: "#252355",
    paddingHorizontal: 10,
    fontSize: 16,
    fontFamily: "CenturyGothic",
  },
  messageInput: {
    height: 100,
  },
  footerText: {
    marginTop: 20,
    fontSize: 12,
    textAlign: "center",
    fontFamily: "CenturyGothic",
  },
  bottomContainer: {
    borderTopColor: "#ccc",
    marginBottom: 50,
  },
  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
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

export default ContactUs;
