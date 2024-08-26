import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Linking,
  TouchableOpacity,
} from "react-native";
import * as Font from "expo-font";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const PrivacyPolicy = ({ navigation }) => {
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

  if (!fontsLoaded) {
    return null; // You can return a loading spinner or placeholder here
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <View style={styles.headingbg}>
          <Text style={styles.heading}>MR BUTTON - Privacy Policy</Text>
        </View>
        <Text style={styles.paragraph}>
          This Privacy Policy assertion applies handiest to the facts amassed
          on-line via mrbutton.in - Global, or cellular web sites (together our
          “Websites”) &and its subsidiaries and divisions that expressly adopt,
          display, or hyperlink to this Privacy Policy, or via our pages on
          social media web sites, along with Facebook, Twitter, Instagram, et
          al. (“Social Media Pages").
        </Text>
        <Text style={styles.paragraph}>
          In order to make your visits to the diverse MR BUTTON on-line channels
          as responsive as possible, we accumulate facts whilst you go to us
          on-line. To assist make certain an exciting on-line revel in, we offer
          this precis of what facts we accumulate on-line and the way that facts
          is used. Your use of the Website/App confirms your attractiveness of
          this Privacy Policy and your settlement to be certain with the aid of
          using it. If you do now no longer receive this Privacy Policy, please
          do now no longer use this Website/App.
        </Text>
      </View>
      <View style={styles.section}>
        <View style={styles.headingbg}>
          <Text style={styles.heading}>1. General Browsing</Text>
        </View>
        <Text style={styles.paragraph}>
          We accumulate standard facts approximately our site visitors' revel in
          with our websites and these standard facts isn't related to for my
          part identifiable facts approximately man or woman site visitors. The
          facts amassed consists of which pages our site visitors are viewing on
          our websites and whether or not site visitors arrived via a hyperlink
          for our websites. It additionally consists of facts at the kind of
          browser and provider company used. For site visitors the use of a
          cellular model of our websites, this consists of technical facts
          approximately the tool used, along with display screen length, cookie
          assist with the aid of using the tool and the way pics might also
          additionally appear. All of this fact enables us offer a higher revel
          in for our site visitors with the aid of using being capable of decide
          things like the way to first-rate layout our cellular websites for
          diverse devices, our maximum preferred pages, merchandise and
          features, the way to first-rate direct site visitors to our websites,
          and in which there is probably browser or provider company connection
          issues.
        </Text>
      </View>
      <View style={styles.section}>
        <View style={styles.headingbg}>
          <Text style={styles.heading}>
            2. Personally Identifiable Information We Collect
          </Text>
        </View>
        <Text style={styles.paragraph}>
          MR BUTTON collects for my part identifiable facts from you whilst you
          offer us with these facts, both with the aid of using filling out all
          or a part of a shape or finishing the shape with the aid of using
          filing it. You can offer us this for my part identifiable facts many
          times for the duration of our Websites, or with the aid of using
          sending us an e-mail, for instance whilst you engage with the
          subsequent opportunities: putting an order via one in all our
          Websites; setting up an account; including your picks and facts
          approximately your self and others for your account; registering to
          take part in a promotion; or on an E-Gift Card; coming into a
          competition or sweepstakes; taking a survey; contacting us with a
          remark or question; signing as much as get hold of emails
          approximately our merchandise and services; replying to an e-mail
          inquiring for facts from you.. We additionally accumulate facts via
          use of cookies, pixel tags (additionally called Web beacons and clean
          GIFs) and URL links, as defined under "Cookies" under. While now no
          longer for my part identifiable facts with the aid of using itself, MR
          BUTTON additionally collects and keeps the subsequent and friends it
          together along with you for my part identifiable facts: your IP deal
          with, your interactions with our websites, your moves in reaction to
          our communications to you, and the purchases you make.
        </Text>
        <Text style={styles.paragraph}>
          Categories of for my part identifiable facts amassed on-line consist
          of name, deal with, gender, month and day of birth, e-mail deal with,
          telecall smartphone number, cellular telecall smartphone number,
          charge card facts, recipient's name, deal with and e-mail deal with,
          modeling facts (together with name, length stats, paintings facts, and
          call facts), use of our Websites tied to this sort of classes and
          every other facts you pick to offer, together with via your private
          social media accounts, as defined under.
        </Text>
        <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
          Information Collected on Pages MR BUTTON Has on Social Media Sites.
        </Text>
        <Text style={styles.paragraph}>
          Personal facts can be amassed without delay with the aid of using MR
          BUTTON via our Social Media Pages and can additionally be amassed with
          the aid of using the social media web page web website hosting the MR
          BUTTON Social Media Page.
        </Text>
        <Text style={styles.paragraph}>
          Personal Information amassed without delay with the aid of using HOUSE
          OF MIRS: The series of private facts without delay with the aid of
          using MR BUTTON on our Social Media Pages will consist of the kind of
          facts addressed under “Personally Identifiable Information We Collect”
          above. Examples of the way private facts can be without delay amassed
          on MR BUTTON Social Media Pages could. Consist of imparting facts via
          a utility or shape which has a hyperlink to this privateness coverage.
          We will use and proportion the facts we accumulate on our Social Media
          Pages withinside the way distinct under in “Using Information We
          Collect Online” and in “Information We Share with Third Parties.”
        </Text>
        <Text style={styles.paragraph}>
          The social media web sites in which MR BUTTON has Social Media Pages
          might also additionally offer combination facts and evaluation to MR
          BUTTON approximately your use of our Social Media Pages. This permits
          us to higher apprehend and examine our consumer growth, standard
          demographic facts approximately the customers of our Social Media
          Pages, and interplay with content material on our Social Media Pages.
          Overall, these facts can be used to assist us apprehend the forms of
          site visitors and customers of ourSocial Media Pages and use of the
          content.
        </Text>
      </View>
      <View style={styles.section}>
        <View style={styles.headingbg}>
          <Text style={styles.heading}>
            Using Information, We Collect Online
          </Text>
        </View>
        <Text style={styles.paragraph}>
          We may also use the facts we gather below this coverage to meet
          product orders; to meet your requests (including touch us, click on to
          chat, etc); to touch you or the product recipient(s) withinside the
          occasion of order or shipping difficulties; to serve web page content
          material; to ship advertising and marketing communications concerning
          our merchandise, services, and promotions to you; to research your
          interest with us, which includes interplay with our Websites/emails,
          the effectiveness of our advertising, and your purchases; to customize
          our communications to you; to reply for your inquiries and different
          communications; to replace facts maintained to your on-line account;
          to behavior contests; to broaden our merchandise, services, and
          Websites; and to keep in mind you for employment. In addition, the
          facts gathered withinside the Online Store might be used for those
          equal advertising and marketing communications approximately our
          merchandise, services, and Websites. MR BUTTON makes use of the facts
          gathered on its Social Media Pages to ship communications concerning
          our merchandise, services, and promotions; to reply for your
          inquiries; to behavior contests; to research your interest on our
          Social Media Pages, and to broaden our merchandise and services;
          replying to an e-mail soliciting for facts from you. See the “Opt-Out”
          phase beneath for the picks you've got associated with receiving
          advertising and marketing communications from us.
        </Text>
        <Text style={styles.paragraph}>
          We may also use the facts that we gather below this Privacy Policy for
          the reason of imparting personalized content material throughout
          specific Internet browsers or gadgets which you use to get right of
          entry to our websites and cellular applications, which includes the
          synchronization of want lists and buying bags. Any modifications made
          to privateness settings (which includes you decide-out preferences) on
          one browser or tool will now no longer be synchronized among browsers
          and/or gadgets. Alternatively, any modifications made to privateness
          settings need to be made on every browser or tool on a person basis.
        </Text>
        <Text style={styles.paragraph}>
          If MR BUTTON have been ever merged with or received with the aid of
          using every other entity, or if it acquires every other commercial
          enterprise entity or is concerned in a company reorganization or
          different alternate of control, a few or all the non-public facts
          gathered approximately you may be shared with this entity, and might
          additionally be retained with the aid of using HOUSE OF MIRS. Other
          than this acquisition, sale, or reorganization, we donot sell or rent
          your email address to unrelated third parties.
        </Text>
      </View>
      <View style={styles.section}>
        <View style={styles.headingbg}>
          <Text style={styles.heading}>Cookies</Text>
        </View>
        <Text style={{ fontWeight: "800", fontSize: 16, marginBottom: 10 }}>
          1. What Are Cookies, Pixel Tags and URL Links, and How Are These Used
          on Our Websites or in Our Emails?{" "}
        </Text>
        <Text style={styles.paragraph}>
          Our websites and emails use, and our 0.33 celebration provider
          companies may also use, a browser function referred to as a cookie,
          which assigns a completely unique identity for your computer. The
          cookies are normally saved in your computer's difficult force or cell
          tool. The facts gathered whilst traveling our Websites or interacting
          with our emails may also consist of the following: an IP address, the
          URL of the web page from that you arrived; your browser type;
          different technical facts approximately your tool used to go to our
          Websites or have interaction with our emails; the pages you view; the
          functions you use; whether or not you create an account or signal into
          an account and in which you cross on our Websites as soon as signed
          into your account; whether or not you entire a transaction; whether or
          not you've got formerly finished a survey; and the time of your go to.
          This fact permits us to decide things like which elements of our
          websites are maximum visited or used, what merchandise are browsed
          and/or purchased, the effectiveness of our websites and emails, your
          particular interplay with our websites and emails, and problems you
          could enjoy in gaining access to our websites or emails. With this
          knowledge, we will enhance the high-satisfactory of you enjoy on our
          websites and interplay with our emails through spotting and turning in
          greater of the maximum preferred functions and facts, customise you
          enjoy, and clear up get entry to problems. In addition, our websites
          use cookies to assist maintain song of objects you positioned into
          your buying cart, whether or not you buy all or any of these objects,
          and to inform us whether or not you've got visited certainly
          considered one among our websites withinside the past. This permits
          you to hold buying carts among visits and permits us to inquire
          approximately your endured hobby in objects on your buying cart or
          which you considered on certainly considered one among our websites.
          Our websites additionally use cookies to assist maintain song of
          checkout facts, apart from price approach facts, at the same time as
          you continue to be on our websites. In addition, the facts gathered
          through us or our provider company(s) can be connected to and blended
          with facts that we gather approximately you out of your visits to our
          websites or interplay with our emails.
        </Text>
        <Text style={styles.paragraph}>
          Our websites and emails use, and our 0.33 celebration provider
          companies may additionally use, Pixel Tags (additionally referred to
          as Web beacons, Web bugs, and Clear GIFs). A Pixel Tag is an almost
          invisible pixel-sized photo on a Webpage or e-mail message. Pixel Tags
          can be used to gather the equal facts approximately your go to this is
          gathered thru cookies, as stated above. We may additionally gather
          facts approximately a seek engine used, and a seek engine commercial
          clicked to navigate to the Websites. Pixel Tags in emails assist us
          affirm the receipt of, and reaction to, our emails (such as your
          interplay with our websites because of receiving the e-mail) and the
          time our e-mail is considered. This fact allows us to make comparable
          critiques approximately our websites and emails as with cookies and to
          decide the maximum preferred functions and facts in order that we will
          offer the ones functions and facts to you and customise our
          interactions with you. These facts can also be connected to and
          blended with facts that we gather approximately you out of your visits
          to our websites.
        </Text>
        <Text style={styles.paragraph}>
          In addition, our communications (e.g., emails, direct messages through
          social media platforms, et al.) to you could consist of "click-thru
          URLs" connected to specific pages on certainly considered one among
          our websites. By clicking on one of the URLs, you may routinely input
          certainly considered one among our websites and we may also gather
          facts associated with the "click-thru". We may also use cookies to
          partner facts withinside the click-thru together along with your
          preceding studies on our Websites/Apps. You may also keep away from
          having these facts gathered through now no longer clicking at the URL
          hyperlinks in our e-mail communications.
        </Text>
        <Text style={styles.paragraph}>
          To make it less complicated for you, we've moved you opt-out choice
          selections to this phase of the privateness coverage.
        </Text>
      </View>
      <View style={styles.section}>
        <View style={styles.headingbg}>
          <Text style={styles.heading}>Email</Text>
        </View>

        <Text style={styles.paragraph}>
          To unsubscribe from receiving advertising and marketing emails from MR
          BUTTON comply with the Unsubscribe in any advertising and marketing
          e-mail. If you created an account, visit the Newsletters phase of the
          Account Dashboard, deselect the newsletters you not desire to get hold
          of, and click on save. If you signed as much as, get hold of
          advertising and marketing emails from certainly considered one among
          our affiliates, comply with the opt-out commands on any advertising
          and marketing e-mail you get hold of from that associate. Please be
          aware, however, even in case you request be eliminated from our e-mail
          advertising and marketing list, you could nonetheless get hold of
          non-advertising and marketing emails, together with confirmations for
          any orders positioned on our websites.{" "}
        </Text>
      </View>
      <View style={styles.section}>
        <View style={styles.headingbg}>
          <Text style={styles.heading}>International Users</Text>
        </View>

        <Text style={styles.paragraph}>
          If you're traveling certainly considered one among our websites from
          an area outdoor of the United States/Canada, please maintain in
          thoughts that its miles a US/Canada primarily based totally internet
          and/or trade site. This privateness coverage governs the facts
          gathered through or on behalf of our websites no matter in which
          you're positioned while you get entry to it, browse it, have
          interaction with it, and make purchases thru it (such as the ones
          which are shipped to addresses outdoor the US). If, for any reason,
          you're gaining access to a rustic particular internet site for a
          rustic in that you aren't positioned (e.g., using a proxy server)
          please touch Customer Service.{" "}
        </Text>
        <Text style={styles.paragraph}>
          With admire to non-public facts you offer to MR BUTTON at the Social
          Media Pages, as soon as obtained from the social media sites, its
          miles maintained and processed through us on servers and inner
          structures positioned withinside the United States/Canada. This method
          your non-public facts can be saved outdoor of the province, state,
          and/or us of a in that you reside, and processed through us, an
          associate or a 3rd celebration provider company as defined on this
          privateness coverage. Moreover, governmental our bodies which have
          jurisdiction over us withinside the United States/Canada (e.g., courts
          and regulation enforcement agencies) can be entitled to get entry to
          your non-public facts.
        </Text>
      </View>
      <View style={styles.section}>
        <View style={styles.headingbg}>
          <Text style={styles.heading}>
            Updating Personal Information in Your Account
          </Text>
        </View>

        <Text style={styles.paragraph}>
          With admire to non-public facts you offer to MR BUTTON at the Social
          Media Pages, as soon as obtained from the social media sites, its
          miles maintained and processed through us on servers and inner
          structures positioned withinside the United States/Canada. This method
          your non-public facts can be saved outdoor of the province, state,
          and/or us of a in that you reside, and processed through us, an
          associate or a 3rd celebration provider company as defined on this
          privateness coverage. Moreover, governmental our bodies which have
          jurisdiction over us withinside the United States/Canada (e.g., courts
          and regulation enforcement agencies) can be entitled to get entry to
          your non-public facts.
        </Text>
        <Text style={styles.paragraph}>
          To request to have your account cancelled, please contact us at
          wizards@mrbutton.in or call us at 1-866-646-5531 during our business
          hours of 10am to 6pm Eastern, Monday to Friday.
        </Text>
      </View>
      <View style={styles.section}>
        <View style={styles.headingbg}>
          <Text style={styles.heading}>Links</Text>
        </View>

        <Text style={styles.paragraph}>
          For your convenience and enjoyment, our Websites may contain links to
          other websites. We do not evaluate and are not responsible for the
          privacy practices or the content of such websites. We would urge you
          to review the privacy policies on each link to ensure that you are
          comfortable with their privacy policies and practices.{" "}
        </Text>
      </View>
      <View style={styles.section}>
        <View style={styles.headingbg}>
          <Text style={styles.heading}>Updates to Privacy Policy</Text>
        </View>

        <Text style={styles.paragraph}>
          As we continue to offer you new and different types of content and
          services, we may modify our information collection, use, or disclosure
          practices. Should there be a material change to our information
          collection, use or disclosure practices, it will be applied only to
          information collected on a going-forward basis, and we will update
          this privacy policy statement. It is your responsibility to
          familiarize yourself with this privacy policy.{" "}
        </Text>
      </View>
      <View style={styles.section}>
        <View style={styles.headingbg}>
          <Text style={styles.heading}>Security Statement</Text>
        </View>

        <Text style={styles.paragraph}>
          MR BUTTON limits the number of employees who have access to the
          databases that contain personal data, and MR BUTTON employees are
          advised of the importance of confidentiality. In addition, it is our
          policy to never send your payment card number via email.
        </Text>
        <Text style={styles.paragraph}>
          We designed our online store to accept orders only from Web browsers
          that permit communication through Transport Layer Security (TLS)
          technology. Browsers that do not meet this requirement will be
          prevented from navigating the online store section of our Websites.
          See "Supported Web Browsers" for more information. While we implement
          the above security measures on our Websites, you should be aware that
          100% security is not always possible.{" "}
        </Text>
      </View>
      <View style={styles.section}>
        <View style={styles.headingbg}>
          <Text style={styles.heading}>Supported Web Browsers</Text>
        </View>

        <Text style={styles.paragraph}>
          mrbutton.in supports Microsoft Internet Explorer 11.0+, Android 5.0+,
          Apple OS X 10.9+, and Apple iOS 9.0+. We recommend if you are viewing
          our websites on Google Chrome or Mozilla Firefox to download the
          latest version in order to maximize your experience, otherwise you may
          not be able to access or utilize all pages on our websites as
          intended.{" "}
        </Text>
        <Text style={styles.paragraph}>
          We designed our online store to accept orders only from Web browsers
          that permit communication through Transport Layer Security (TLS)
          technology. Browsers that do not meet this requirement will be
          prevented from navigating the online store section of our Websites.
          See "Supported Web Browsers" for more information. While we implement
          the above security measures on our Websites, you should be aware that
          100% security is not always possible.
        </Text>
      </View>
      <View style={styles.section}>
        <View style={styles.headingbg}>
          <Text style={styles.heading}>Questions/Contact Us</Text>
        </View>

        <Text style={styles.paragraph}>
          If you have any questions, comments or concerns regarding our privacy
          practices, please email us at wizards@mrbutton{" "}
        </Text>
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

        {/* <View style={styles.socialMedia}>
          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL("https://www.facebook.com/mrbuttonindia")
            }
          >
            <FontAwesome name="facebook" size={30} color="#3b5998" />
          </Text>
          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL("https://www.instagram.com/mrbutton_in/")
            }
          >
            <AntDesign name="instagram" size={30} color="#C13584" />
          </Text>
          <Text
            style={styles.link}
            onPress={() => Linking.openURL("https://twitter.com/MrButton_in")}
          >
            <FontAwesome name="twitter" size={30} color="#1DA1F2" />
          </Text>
          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL("https://in.pinterest.com/mrbutton_in/")
            }
          >
            <FontAwesome name="pinterest-p" size={30} color="#E60023" />
          </Text>
        </View> */}
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
  section: {
    // marginBottom: 30,
  },
  headingbg: {
    backgroundColor: "#252355",
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    // color: "#fff",
  },
  heading: {
    fontSize: 15,
    color: "#fff",
    // padding: 20,
    fontWeight: "bold",
    fontFamily: "CenturyGothic",
    // marginBottom: 15,
  },
  paragraph: {
    fontSize: 14,
    fontFamily: "CenturyGothic",
    marginBottom: 15,
    lineHeight: 24,
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

export default PrivacyPolicy;
