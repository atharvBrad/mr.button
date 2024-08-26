import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as Font from "expo-font";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const ShippingPolicy = ({ navigation }) => {
  const [expandedQuestions, setExpandedQuestions] = useState({});

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
        CenturyGothic: require("../../assets/fonts/CenturyGothic.ttf"),
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

  const toggleQuestion = (question) => {
    setExpandedQuestions((prev) => ({
      ...prev,
      [question]: !prev[question],
    }));
  };

  if (!fontsLoaded) {
    return null; // You can return a loading spinner or placeholder here
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>SHIPPING POLICY</Text>

        <TouchableOpacity
          style={styles.questionContainer}
          onPress={() => toggleQuestion("q1")}
        >
          <Icon
            name={expandedQuestions.q1 ? "chevron-up" : "chevron-down"}
            size={24}
            color="#000"
          />
          <Text style={styles.question}>Estimated delivery time.</Text>
        </TouchableOpacity>
        {expandedQuestions.q1 && (
          <Text style={styles.answer}>Delivery time is 7-10 working days</Text>
        )}

        <TouchableOpacity
          style={styles.questionContainer}
          onPress={() => toggleQuestion("q2")}
        >
          <Icon
            name={expandedQuestions.q2 ? "chevron-up" : "chevron-down"}
            size={24}
            color="#000"
          />
          <Text style={styles.question}>Do you ship internationally?</Text>
        </TouchableOpacity>
        {expandedQuestions.q2 && (
          <Text style={styles.answer}>
            Uh-oh! As of now we do not ship internationally.
          </Text>
        )}

        <TouchableOpacity
          style={styles.questionContainer}
          onPress={() => toggleQuestion("q3")}
        >
          <Icon
            name={expandedQuestions.q3 ? "chevron-up" : "chevron-down"}
            size={24}
            color="#000"
          />
          <Text style={styles.question}>
            What should I do if I find my package opened or tampered with upon
            delivery?
          </Text>
        </TouchableOpacity>
        {expandedQuestions.q3 && (
          <Text style={styles.answer}>
            We believe in making your shopping experience perfect. However, if
            you receive an open or a tampered package, please do not accept it.
            Report this concern within 24 hours of receiving order by dropping a
            mail on wizards@mrbutton.in
          </Text>
        )}

        <TouchableOpacity
          style={styles.questionContainer}
          onPress={() => toggleQuestion("q4")}
        >
          <Icon
            name={expandedQuestions.q4 ? "chevron-up" : "chevron-down"}
            size={24}
            color="#000"
          />
          <Text style={styles.question}>
            Which courier company will deliver my order? Is it possible to
            choose my preferred delivery partner?
          </Text>
        </TouchableOpacity>
        {expandedQuestions.q4 && (
          <Text style={styles.answer}>
            To ensure smooth & safe delivery of your orders, we have tied up
            with a number of trustworthy delivery partners. Once your order is
            dispatched, you will be informed about the delivery details via
            e-mail/SMS.Courier partner is selected based on their serviceability
            in a particular pin code.Unfortunately, we do not offer the option
            to choose your preferred delivery partner. However, we will inform
            you when such services are rolled out in future.
          </Text>
        )}

        <TouchableOpacity
          style={styles.questionContainer}
          onPress={() => toggleQuestion("q5")}
        >
          <Icon
            name={expandedQuestions.q5 ? "chevron-up" : "chevron-down"}
            size={24}
            color="#000"
          />
          <Text style={styles.question}>How are items packaged?</Text>
        </TouchableOpacity>
        {expandedQuestions.q5 && (
          <Text style={styles.answer}>
            All items are carefully & safely packed and sealed to ensure that
            they are not damaged enroute. Our delivery partners are trained to
            handle your precious cargo with extreme care.
          </Text>
        )}
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
              onPress={() => Linking.openURL("https://mrbutton.in/contact-us")}
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
              onPress={() =>
                Linking.openURL("https://mrbutton.in/return-exchange-policy")
              }
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
              onPress={() =>
                Linking.openURL(
                  "https://mrbutton.in/social-media-engagement-policy"
                )
              }
            >
              SOCIAL MEDIA ENGAGEMENT POLICY
            </Text>
            <Text style={styles.link} onPress={() => na}>
              PRIVACY POLICY
            </Text>
            <Text
              style={styles.link}
              onPress={() => Linking.openURL("https://mrbutton.in/site-use")}
            >
              SITE USE
            </Text>
            <Text
              style={styles.link}
              onPress={() =>
                Linking.openURL("https://mrbutton.in/terms-and-conditions")
              }
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
    // marginBottom: 40,
    backgroundColor: "#fff",
    fontFamily: "CenturyGothic",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "CenturyGothic",
  },
  questionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    paddingRight: 20,
    // margin: 5,
  },
  question: {
    fontSize: 18,
    marginLeft: 10,
    fontFamily: "CenturyGothic",
  },
  answer: {
    fontSize: 14,
    marginBottom: 10,
    paddingLeft: 34,
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
  headingbottom: {
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

export default ShippingPolicy;
