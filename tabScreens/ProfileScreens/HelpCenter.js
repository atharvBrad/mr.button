import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const HelpCenter = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>How can we help you?</Text>
      </View>
      <View style={styles.quickAssists}>
        <Text style={styles.quickAssistsTitle}>Quick Assists</Text>
        <Text style={styles.quickAssistsSubtitle}>
          Answers to our most frequently asked questions are just one click
          away.
        </Text>
        <View style={styles.assists}>
          <TouchableOpacity style={styles.assistButton}>
            <Text style={styles.assistButtonText}>Dispatch & Delivery</Text>
            <Icon name="arrow-forward-ios" size={15} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.assistButton}>
            <Text style={styles.assistButtonText}>Returns</Text>
            <Icon name="arrow-forward-ios" size={15} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.assistButton}>
            <Text style={styles.assistButtonText}>Shopping</Text>
            <Icon name="arrow-forward-ios" size={15} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.assistButton}>
            <Text style={styles.assistButtonText}>Company Info</Text>
            <Icon name="arrow-forward-ios" size={15} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.assistButton}>
            <Text style={styles.assistButtonText}>Account Management</Text>
            <Icon name="arrow-forward-ios" size={15} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.assistButton}>
            <Text style={styles.assistButtonText}>Product Information</Text>
            <Icon name="arrow-forward-ios" size={15} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.assistButton}
            onPress={() => navigation.navigate("ContactUs")}
          >
            <Text style={styles.assistButtonText}>Contact Us</Text>
            <Icon name="arrow-forward-ios" size={15} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.assistButton}
            onPress={() => navigation.navigate("FAQScreen")}
          >
            <Text style={styles.assistButtonText}>FAQs</Text>
            <Icon name="arrow-forward-ios" size={15} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.feedback}>
        <Text style={styles.feedbackText}>
          Does this information solve your issue?
        </Text>
        <View style={styles.feedbackButtons}>
          <TouchableOpacity style={styles.feedbackButton}>
            <Text style={styles.feedbackButtonText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.feedbackButton}>
            <Text style={styles.feedbackButtonText}>No</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "CenturyGothic",
  },
  quickAssists: {
    marginBottom: 20,
  },
  assists: {
    marginTop: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ccc",
  },
  quickAssistsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "CenturyGothic",
  },
  quickAssistsSubtitle: {
    fontSize: 14,
    marginBottom: 10,
    fontFamily: "CenturyGothic",
  },
  assistButton: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  assistButtonText: {
    fontSize: 16,
    fontFamily: "CenturyGothic",
  },
  feedback: {
    marginTop: 20,
    alignItems: "center",
  },
  feedbackText: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: "CenturyGothic",
  },
  feedbackButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  feedbackButton: {
    backgroundColor: "#252355",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    width: 100,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  feedbackButtonText: {
    color: "#fff",
    fontFamily: "CenturyGothic",
  },
});

export default HelpCenter;
