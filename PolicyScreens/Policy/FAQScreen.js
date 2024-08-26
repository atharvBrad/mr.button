import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const FAQScreen = ({ navigation }) => {
  const [expandedSections, setExpandedSections] = useState({
    getInTouch: false,
    collections: false,
    policy: false,
    journal: false,
  });
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [expandedQuestions, setExpandedQuestions] = useState({});
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

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>CANCELLATION AND REPLACEMENT</Text>

        <TouchableOpacity
          style={styles.questionContainer}
          onPress={() => toggleQuestion("q1")}
        >
          <Icon
            name={expandedQuestions.q1 ? "chevron-up" : "chevron-down"}
            size={24}
            color="#000"
          />
          <Text style={styles.question}>
            What if I choose to have my order replaced and the product is sold
            out?
          </Text>
        </TouchableOpacity>
        {expandedQuestions.q1 && (
          <Text style={styles.answer}>
            Replacement can be initiated only if the product is in stock.
            Unfortunately if the product is out of stock then credit coupon is
            initiated after your confirmation.
          </Text>
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
          <Text style={styles.question}>
            I have requested a replacement, when will I receive it?
          </Text>
        </TouchableOpacity>
        {expandedQuestions.q2 && (
          <Text style={styles.answer}>
            Once you have raised a replacement request, our team will
            investigate and initiate the replacement process. You will receive
            an e-mail/sms advising you on the new order confirmation.
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
            I bought a product but it does not fit my size, can I get it
            replaced?
          </Text>
        </TouchableOpacity>
        {expandedQuestions.q3 && (
          <Text style={styles.answer}>
            Yes, You can surely replace the product. For replacement, drop us a
            email at wizards@mrbutton.in
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
            If I receive a physically damaged product, can I get it replaced?
          </Text>
        </TouchableOpacity>
        {expandedQuestions.q4 && (
          <Text style={styles.answer}>
            Delivery is usually safe, but, if you receive a damaged product you
            can return it. To avoid any hassle, go through the following steps:
            *On delivery, check if the product is packed properly, is factory
            sealed and there is no physical damage to the carton. If you are
            concerned, don’t open the product yourself. Drop a mail
            wizards@mrbutton.in for further assistance.*In case you have opened
            the product and received a damaged/defective, the wizards should be
            notified within 24 hours of receipt at wizards@mrbutton.in along
            with snap shot of the product.
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
          <Text style={styles.question}>
            If I receive a wrong product, can I get it replaced?
          </Text>
        </TouchableOpacity>
        {expandedQuestions.q5 && (
          <Text style={styles.answer}>
            We take utmost care to ensure customer satisfaction. Unfortunately,
            if you receive a wrong product please raise a replacement request or
            write us at wizards@mrbutton.in
          </Text>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>TOP QUERIES</Text>

        <TouchableOpacity
          style={styles.questionContainer}
          onPress={() => toggleQuestion("q6")}
        >
          <Icon
            name={expandedQuestions.q6 ? "chevron-up" : "chevron-down"}
            size={24}
            color="#000"
          />
          <Text style={styles.question}>
            Do I have to pay any shipping and delivery charges?
          </Text>
        </TouchableOpacity>
        {expandedQuestions.q6 && (
          <Text style={styles.answer}>
            Yes, there are charges for any order below Rs 1499/- which is Rs
            149/-. *Shipping Charges are Non Refundable
          </Text>
        )}

        <TouchableOpacity
          style={styles.questionContainer}
          onPress={() => toggleQuestion("q7")}
        >
          <Icon
            name={expandedQuestions.q7 ? "chevron-up" : "chevron-down"}
            size={24}
            color="#000"
          />
          <Text style={styles.question}>
            I have placed my order. What next?
          </Text>
        </TouchableOpacity>
        {expandedQuestions.q7 && (
          <Text style={styles.answer}>
            Sit back and relax! Once your order is confirmed, we will share the
            order id and tracking details via E-mail/SMS. Click on TRACK ORDER
            to get real time status of your order.
          </Text>
        )}

        <TouchableOpacity
          style={styles.questionContainer}
          onPress={() => toggleQuestion("q8")}
        >
          <Icon
            name={expandedQuestions.q8 ? "chevron-up" : "chevron-down"}
            size={24}
            color="#000"
          />
          <Text style={styles.question}>
            What should I do if I find my package opened or tampered with upon
            delivery?
          </Text>
        </TouchableOpacity>
        {expandedQuestions.q8 && (
          <Text style={styles.answer}>
            We believe in making your shopping experience perfect. However, if
            you receive an open or a tampered package, please do not accept it.
            Report this concern within 24 hours of receiving order by dropping a
            mail on wizards@mrbutton.in
          </Text>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>MY ACCOUNT, LOGIN AND ALERTS</Text>

        <TouchableOpacity
          style={styles.questionContainer}
          onPress={() => toggleQuestion("q9")}
        >
          <Icon
            name={expandedQuestions.q9 ? "chevron-up" : "chevron-down"}
            size={24}
            color="#000"
          />
          <Text style={styles.question}>
            Should I be concerned about the privacy of my personal details I
            have shared with mrbutton.in?
          </Text>
        </TouchableOpacity>
        {expandedQuestions.q9 && (
          <Text style={styles.answer}>
            Do not worry! We are absolutely committed to safeguarding your
            personal information. The personal information collected is done to
            enable us to send you the products you have ordered and to validate
            your identity, as well as to provide us with a way to get in touch
            with you if the need should arise.
          </Text>
        )}

        <TouchableOpacity
          style={styles.questionContainer}
          onPress={() => toggleQuestion("q10")}
        >
          <Icon
            name={expandedQuestions.q10 ? "chevron-up" : "chevron-down"}
            size={24}
            color="#000"
          />
          <Text style={styles.question}>
            Are there any registration charges for creating an account on
            mrbutton.in?{" "}
          </Text>
        </TouchableOpacity>
        {expandedQuestions.q10 && (
          <Text style={styles.answer}>
            Are there any registration charges for creating an account on
            mrbutton.in?
          </Text>
        )}

        <TouchableOpacity
          style={styles.questionContainer}
          onPress={() => toggleQuestion("q11")}
        >
          <Icon
            name={expandedQuestions.q11 ? "chevron-up" : "chevron-down"}
            size={24}
            color="#000"
          />
          <Text style={styles.question}>
            Do I have to register to shop at mrbutton.in?
          </Text>
        </TouchableOpacity>
        {expandedQuestions.q11 && (
          <Text style={styles.answer}>
            You are not required to register yourself to shop on mrbutton. You
            can login as guest and can have seamless shopping experience.
            However, Creating an account on mrbutton.in is beneficial in many
            ways. You will have access to: {"\n\n"} My Orders- Quickly and
            easily manage your orders such as View Details, Track etc.My Info –
            One time creation of all your personal infoMy Address – You can set
            billing and shipping addressMy Coupons – View all your current
            couponsYou will also be eligible to receive ongoing discounts and
            offers.
          </Text>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>ORDER TRACKING</Text>

        <TouchableOpacity
          style={styles.questionContainer}
          onPress={() => toggleQuestion("q12")}
        >
          <Icon
            name={expandedQuestions.q12 ? "chevron-up" : "chevron-down"}
            size={24}
            color="#000"
          />
          <Text style={styles.question}>
            What is order verification? Why is it required?
          </Text>
        </TouchableOpacity>
        {expandedQuestions.q12 && (
          <Text style={styles.answer}>
            Order verification is done by mrbutton.in for all cash on delivery
            orders. It is a backend process to ensure authenticity of the order
            placed and to make sure there is no inconvenience caused to the
            customer.
          </Text>
        )}

        <TouchableOpacity
          style={styles.questionContainer}
          onPress={() => toggleQuestion("q13")}
        >
          <Icon
            name={expandedQuestions.q13 ? "chevron-up" : "chevron-down"}
            size={24}
            color="#000"
          />
          <Text style={styles.question}>
            How do I know my order is confirmed?
          </Text>
        </TouchableOpacity>
        {expandedQuestions.q13 && (
          <Text style={styles.answer}>
            Once your order is confirmed and processed, you will receive a
            shipment notification via E-mail/SMS advising you on the estimated
            date of delivery. You can also check the current status of your
            order, just click on TRACK ORDER to get real time status of your
            order.
          </Text>
        )}

        <TouchableOpacity
          style={styles.questionContainer}
          onPress={() => toggleQuestion("q14")}
        >
          <Icon
            name={expandedQuestions.q14 ? "chevron-up" : "chevron-down"}
            size={24}
            color="#000"
          />
          <Text style={styles.question}>
            Do I have to pay any shipping and delivery charges?
          </Text>
        </TouchableOpacity>
        {expandedQuestions.q14 && (
          <Text style={styles.answer}>
            Yes, we do have a Rs 99/- Shipping Charge, However you need not pay
            for any delivery for any order above Rs 999/- {"\n\n"} *Shipping
            Charges are Non Refundable
          </Text>
        )}

        <TouchableOpacity
          style={styles.questionContainer}
          onPress={() => toggleQuestion("q15")}
        >
          <Icon
            name={expandedQuestions.q15 ? "chevron-up" : "chevron-down"}
            size={24}
            color="#000"
          />
          <Text style={styles.question}>
            What do I do if I get wrong update messages from courier company?{" "}
          </Text>
        </TouchableOpacity>
        {expandedQuestions.q15 && (
          <Text style={styles.answer}>
            You can check the current status of your order, just click on TRACK
            ORDER to get real time status of your order or mail us on our email
            id wizards@mrbutton.in with your order number.
          </Text>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>PAYMENTS</Text>

        <TouchableOpacity
          style={styles.questionContainer}
          onPress={() => toggleQuestion("q16")}
        >
          <Icon
            name={expandedQuestions.q16 ? "chevron-up" : "chevron-down"}
            size={24}
            color="#000"
          />
          <Text style={styles.question}>
            Can I pay with my card instead of cash for a Cash on Delivery order?
          </Text>
        </TouchableOpacity>
        {expandedQuestions.q16 && (
          <Text style={styles.answer}>
            No. We only accept cash for COD orders.
          </Text>
        )}

        <TouchableOpacity
          style={styles.questionContainer}
          onPress={() => toggleQuestion("q17")}
        >
          <Icon
            name={expandedQuestions.q17 ? "chevron-up" : "chevron-down"}
            size={24}
            color="#000"
          />
          <Text style={styles.question}>
            What is the process for Cash on Delivery(COD)?
          </Text>
        </TouchableOpacity>
        {expandedQuestions.q17 && (
          <Text style={styles.answer}>
            All Cash on Delivery orders will be processed after confirming the
            order with the customer.
          </Text>
        )}

        <TouchableOpacity
          style={styles.questionContainer}
          onPress={() => toggleQuestion("q18")}
        >
          <Icon
            name={expandedQuestions.q18 ? "chevron-up" : "chevron-down"}
            size={24}
            color="#000"
          />
          <Text style={styles.question}>
            Can I pay with my debit card, credit card or net banking?
          </Text>
        </TouchableOpacity>
        {expandedQuestions.q18 && (
          <Text style={styles.answer}>Yes, you can place online orders.</Text>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>RETURN</Text>

        <TouchableOpacity
          style={styles.questionContainer}
          onPress={() => toggleQuestion("q19")}
        >
          <Icon
            name={expandedQuestions.q19 ? "chevron-up" : "chevron-down"}
            size={24}
            color="#000"
          />
          <Text style={styles.question}>
            If I am not satisfied with quality of the product, can I return it?{" "}
          </Text>
        </TouchableOpacity>
        {expandedQuestions.q19 && (
          <Text style={styles.answer}>
            NOfcourse! mrbutton.in has “Customer first Policy”. Report your
            concern by getting in touch at wizards@mrbutton.in Once the product
            passes the quality check, we would initiate the replacement/credits
            as per your choice.
          </Text>
        )}

        <TouchableOpacity
          style={styles.questionContainer}
          onPress={() => toggleQuestion("q20")}
        >
          <Icon
            name={expandedQuestions.q20 ? "chevron-up" : "chevron-down"}
            size={24}
            color="#000"
          />
          <Text style={styles.question}>
            How do I place a return request on mrbutton.in?
          </Text>
        </TouchableOpacity>
        {expandedQuestions.q20 && (
          <Text style={styles.answer}>
            To return an order, click here.The parcel should be in its original
            packaging and box as received along with all the trims & accessories
            (back support, clips, tags, laces, etc.) with the original invoice.
            Worn or damaged products will not be accepted.Once the return
            request is created, we will ensure that the return is processed as
            soon as possible.
          </Text>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>SHIPPING AND DELIVERY</Text>

        <TouchableOpacity
          style={styles.questionContainer}
          onPress={() => toggleQuestion("q21")}
        >
          <Icon
            name={expandedQuestions.q21 ? "chevron-up" : "chevron-down"}
            size={24}
            color="#000"
          />
          <Text style={styles.question}>Do you ship internationally?</Text>
        </TouchableOpacity>
        {expandedQuestions.q21 && (
          <Text style={styles.answer}>
            Uh-oh! As of now we do not ship internationally.
          </Text>
        )}

        <TouchableOpacity
          style={styles.questionContainer}
          onPress={() => toggleQuestion("q22")}
        >
          <Icon
            name={expandedQuestions.q22 ? "chevron-up" : "chevron-down"}
            size={24}
            color="#000"
          />
          <Text style={styles.question}>
            What should I do if I find my package opened or tampered with upon
            delivery?
          </Text>
        </TouchableOpacity>
        {expandedQuestions.q22 && (
          <Text style={styles.answer}>
            We believe in making your shopping experience perfect. However, if
            you receive an open or a tampered package, please do not accept it.
            Report this concern within 24 hours of receiving order by dropping a
            mail on wizards@mrbutton.in
          </Text>
        )}

        <TouchableOpacity
          style={styles.questionContainer}
          onPress={() => toggleQuestion("q23")}
        >
          <Icon
            name={expandedQuestions.q23 ? "chevron-up" : "chevron-down"}
            size={24}
            color="#000"
          />
          <Text style={styles.question}>
            Which courier company will deliver my order? Is it possible to
            choose my preferred delivery partner?
          </Text>
        </TouchableOpacity>
        {expandedQuestions.q23 && (
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
          onPress={() => toggleQuestion("q24")}
        >
          <Icon
            name={expandedQuestions.q24 ? "chevron-up" : "chevron-down"}
            size={24}
            color="#000"
          />
          <Text style={styles.question}>
            Do I have to pay any shipping and delivery charges?{" "}
          </Text>
        </TouchableOpacity>
        {expandedQuestions.q24 && (
          <Text style={styles.answer}>
            Yes, there are charges for any order below Rs 999/- which is Rs
            99/-. {"\n\n"}*Shipping Charges are Non Refundable
          </Text>
        )}

        <TouchableOpacity
          style={styles.questionContainer}
          onPress={() => toggleQuestion("q25")}
        >
          <Icon
            name={expandedQuestions.q25 ? "chevron-up" : "chevron-down"}
            size={24}
            color="#000"
          />
          <Text style={styles.question}>How are items packaged? </Text>
        </TouchableOpacity>
        {expandedQuestions.q25 && (
          <Text style={styles.answer}>
            All items are carefully & safely packed and sealed to ensure that
            they are not damaged enroute. Our delivery partners are trained to
            handle your precious cargo with extreme care.
          </Text>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>SUPPORT</Text>

        <TouchableOpacity
          style={styles.questionContainer}
          onPress={() => toggleQuestion("q26")}
        >
          <Icon
            name={expandedQuestions.q26 ? "chevron-up" : "chevron-down"}
            size={24}
            color="#000"
          />
          <Text style={styles.question}>Do you offer phone support? </Text>
        </TouchableOpacity>
        {expandedQuestions.q26 && (
          <Text style={styles.answer}>
            Yes, we offer call support. {"\n\n"}(Mon-Sat : Timing 10 am - 7 pm){" "}
            {"\n\n"} CUSTOMER CARE: +91 8810368297 {"\n\n"}For any assistance or
            help reach us at wizards@mrbutton.in
          </Text>
        )}

        <TouchableOpacity
          style={styles.questionContainer}
          onPress={() => toggleQuestion("q27")}
        >
          <Icon
            name={expandedQuestions.q27 ? "chevron-up" : "chevron-down"}
            size={24}
            color="#000"
          />
          <Text style={styles.question}>
            How do I get in touch with Customer Care Support?
          </Text>
        </TouchableOpacity>
        {expandedQuestions.q27 && (
          <Text style={styles.answer}>
            For any assistance or help reach us at wizards@mrbutton.in
          </Text>
        )}
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.headingContainer}
          onPress={() => toggleSection("getInTouch")}
        >
          <Text style={styles.headingbottom}>GET IN TOUCH</Text>
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
          <Text style={styles.headingbottom}>COLLECTIONS</Text>
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
          <Text style={styles.headingbottom}>POLICY</Text>
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
              onPress={() =>
                Linking.openURL("https://mrbutton.in/shipping-policy")
              }
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
            <Text
              style={styles.link}
              onPress={() => navigation.navigate("PrivacyPolicy")}
            >
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
          <Text style={styles.headingbottom}>JOURNAL</Text>
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

export default FAQScreen;
