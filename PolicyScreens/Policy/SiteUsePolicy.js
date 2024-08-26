import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import * as Font from "expo-font";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const SiteUsePolicy = ({ navigation }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
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
      <View style={styles.headcontainer}>
        <Text style={styles.heading}>SITE USE </Text>
        <Text style={styles.subHeading}>MR BUTTON- WEBSITE TERMS OF USE</Text>
        <Text style={styles.policyText}>
          Welcome to this MR BUTTON website - www.mrbutton.in (this "Website").
          There is a requirement to review the essential terms and conditions
          before the website is taken under use, which under certain
          circumstances can be modified at time intervals without any notice,
          applied to all the visitors as well as the users of the website:
        </Text>
        <Text style={styles.policyText}>You’re Use Generally</Text>
        <Text style={styles.policyText}>
          The use of the website by you curtain’s your acceptance of these Terms
          and Conditions stated along with you agreeing to be bound by them. If
          there is no acceptance of the terms and conditions, there shouldn’t be
          any use of the website by take by you under no circumstances. In the
          event of a violation of these Terms and Conditions, MR BUTTON reserves
          the right to seek all remedies available by law and in equity. We may
          terminate your access or use of this Website at any time, for any
          reason, or no reason, and without prior notice to you. There is a
          process of revising the website from our end at any time period
          without any notice by updating the postings made by our side. There
          should be a constant timely visit by you to this page for reviewing
          the terms and conditions in order to understand the changes and learn
          about them as they are binding statements on you. The usage on you
          ends for the website following any such revisions constitutes and is
          considered to be followed and be bound by the terms as revised.
        </Text>
        <Text style={styles.policyText}>Ownership of Content</Text>
        <Text style={styles.policyText}>
          The distinctive design of the website constituting and not limited to
          of its materials including its software or HTML code, scripts, text,
          artwork, photographs, images, designs video, audio and written
          including other materials which appear as a part of the website.
          Collectively, "Content" is protected by INDIA copyright laws and other
          U.S. and international laws and treaties. All Content is provided by
          MR BUTTON under a limited license as a service to its current and
          prospective customers and may be used only for personal (that is, for
          the purchase of our merchandise) use. This limited license is subject
          to the following restrictions: (a) you may not copy, reproduce,
          publish, transmit, distribute, perform, display, post, modify, create
          derivative works from, sell, license, allow others to copy, or
          otherwise exploit this Website, any of the Contents, or any related
          software; and (b) you may not access or use the Website for any
          competitive or commercial purpose. Any sorts of incompetent
          authorization with respect to copying, alteration, transmission,
          performance, display, sale or any other illegal use of the content is
          strictly prohibited.MR BUTTON may revoke this limited license at any
          time for any or no reason. Any unauthorized use of MR BUTTON Content,
          such as framing, in line linking or other association with content or
          information not originating from the MR BUTTON Website is not
          permitted. Linking to any MR BUTTON web page also is prohibited. MR
          BUTTON will fully and aggressively enforce its intellectual property
          rights of the law.
        </Text>
        <Text style={styles.policyText}>Trademarks</Text>
        <Text style={styles.policyText}>
          At MR BUTTON, we take pride in our brand and do not condone and will
          not tolerate any unauthorized use of our trademarks, trade names,
          logos, names and trade dress (collectively, the 'Trademarks and Trade
          Dress'). MR BUTTON and its affiliated companies retain all rights
          regarding the Trademarks and Trade Dress. The protection of the
          Trademarks and the Trade dress is undertaken by India and which
          include the state trademark laws, international law and treaties.
          There won’t be any sort of licence grant for the use of Trademarks or
          Trade dress under these terms and conditions or by any sort of usage
          by the website. There is a strict prohibition of usage of our
          Trademarks and Trade dress under unauthorized sources.
        </Text>
        <Text style={styles.policyText}>Patents</Text>
        <Text style={styles.policyText}>
          One to several patents may be applied to the Website.
        </Text>

        <Text style={styles.subHeading}>Our Products</Text>
        <Text style={styles.policyText}>
          •All sorts of features, specifications, product and prices of the
          product and services as described on the website can be changed at any
          point of time without any notice. From time to time there may be
          information on the Website that contains typographical errors,
          inaccuracies, or omissions that may relate to product descriptions,
          pricing, and availability. There is no representation from our side as
          to the completeness, accuracy, or currency of any information on this
          Website. We reserve and protect the right to make changes to the
          information with respect to the price, description, or availability
          without notice. There is even a reserve in rights from out end,
          uninformed, to limit the order quantity as well as refuse to the
          customer about the provision of services with regards to the product.
          We have made every possible effort to display the accuracy as possible
          from our end with regards to the colors of our products that appear on
          the Website; however, the actual color you see will depend on screen
          will depend on your device, and we cannot guarantee that your device
          will accurately display our colors. The sum of all the product and
          services included on the website does not imply or warrant that the
          availability of these products and services will be at a specific time
          period.
        </Text>
        <Text style={styles.policyText}>Comments and other Communications</Text>
        <Text style={styles.policyText}>
          All remarks, feedback, suggestions, ideas, and different
          communications (collectively, 'Communications') submitted or presented
          to MR BUTTON through this Website, in reference to your use of this
          Website, or through -mail, postal mail, tale cell smart-phone support,
          or any touch with us, will be and stay belongings of MR BUTTON. MR
          BUTTON will be unfastened to apply any ideas, concepts, know-how, or
          strategies contained in any Communication you ship to us for any cause
          in any way which includes, however now no longer restricted to,
          developing, production and advertising and marketing merchandise the
          use of such facts. Any in my opinion identifiable facts you offer to
          MR BUTTON thru the Website will be challenge to our Privacy Policy,
          and in my opinion identifiable facts as described here.
        </Text>
        <Text style={styles.subHeading}>User Generated Content</Text>
        <Text style={styles.policyText}>Posting Guidelines</Text>
        <Text style={styles.policyText}>
          The Website can also additionally allow you to voluntarily add and/or
          submit content ("User-Generated Content"), inclusive of snap shots,
          videos, feedback or different cloth. If you submit feedback or
          different text, you affirm which you are as a minimum 14 years antique
          or have your parent/guardian's permission; in case you submit snap
          shots or videos, you affirmyou'reas a minimum 18 years antique or have
          your parent/guardian's permission; and through posting any
          User-Generated Content, you compromise to the subsequent terms: (a)
          Posting such User-Generated Content constitutes your consent and
          supply to MR BUTTON of an irrevocable, non-exclusive, perpetual,
          worldwide, royalty-free, unrestricted, and limitless proper and
          permission, however now no longer the obligation, to utilize,
          reproduce, exploit, alter, edit, modify, distribute, publish, exhibit,
          digitize, broadcast, display, publicly perform, and put together
          spinoff works of the User-Generated Content, your name, likeness,
          voice and biographical information, and any cloth primarily based
          totally thereon or derived there from, in any shape or media now or
          hereafter recognised for any and all functions during the World
          whatsoever, inclusive of, without limitation, advertising, advertising
          or industrial functions, with none price to or similarly authorization
          through you. (b) You waive any proper to check out or approve any
          cloth wherein MR BUTTON can also additionally sooner or later use your
          User-Generated Content and apprehend that MR BUTTON can also
          additionally crop, shape, or in any other case modify any
          User-Generated Content. (c) You constitute and warrant that the
          User-Generated Content will now no longer violate the highbrow
          belongings or proprietary rights of any 1/3celebration and are legally
          entitled to submit the User-Generated Content and to supply all
          applicable licenses and permissions to apply the User-Generated
          Content as pondered herein. (d) You agree now no longer to take any
          felony motion against, and launch and discharge MR BUTTON and its
          directors, officers, employees, sellers and affiliates, or some other
          character or entity performing on its behalf, from all claims in
          reference tousling the User-Generated Content, your name, likeness,
          voice or biographical information, as pondered herein. (e) You
          apprehend and agree that such User-Generated Content can be accessed
          and regarded through others, inclusive of through the overall public,
          and, whether or not or now no longer such User-Generated Content is
          published, MR BUTTON does now no longer assure any confidentiality
          with appreciate to any User-Generated Content. You are entirely
          chargeable for your very own User-Generated Content and the results in
          their e-book in this Website or elsewhere (assuming we pick to submit
          them as soon as submitted). We reserve the proper to decide in our
          sole discretion whether or not User-Generated Content is appropriate;
          whether or not it complies with those Terms and Conditions, our
          standards, and relevant law; and whether or not they’ll be published
          or removed. You can also additionally request elimination of any of
          your User-Generated Content in this Website through sending
          elimination request electronic mail to contact@mrbutton.infromthe
          e-mail cope with supplied whilst you submitted your User-Generated
          Content; your electronic mail ought to consist of a hyperlink to the
          URL of the web page on which your User-Generated Content is published
          or an outline of the web page on which it's far which is posted.
        </Text>
        <Text style={styles.policyText}>Prohibited Uses of Website</Text>
        <Text style={styles.policyText}>
          You shall now no longer post, transmit, redistribute, upload, or sell
          any communications, User-Generated Content or substances that
          incorporate corrupted files, viruses, or another comparable software
          program files, the reason of that is to harm the operation of
          another's device; are unlawful, threatening, harassing, abusive,
          defamatory, invasive of privateness or exposure rights, vulgar,
          obscene, sexually explicit, hateful, profane, indecent, racially or
          ethnically derogatory, or in any other case objectionable; incorporate
          chain letters or pyramid schemes; incorporate any unsolicited
          advertising, promotional substances, or differenttypes of solicitation
          to different users, people or entities; impersonate any person,
          commercial enterprise or entity, consisting of us (our brands, traces
          of commercial enterprise, subsidiaries, and affiliated companies) and
          our personnel and agents; inspire behaviour that could represent a
          crook offense; provide upward thrust to civil liability; violate any
          law; or show off any behaviour that, in our judgment, restricts,
          impairs, interferes or inhibits another consumer from the use of or
          playing the Website and/or our related services and products.
        </Text>
        <Text style={styles.policyText}>Our Account</Text>
        <Text style={styles.policyText}>
          You can also additionally pick out to sign in with us thru our Website
          and create an account (the 'Account'). If you do, you may have got
          right of entry to for your Account with the aid of using imparting an
          e mail deal with and password. You are accountable for preserving the
          confidentiality of your get right of entry to statistics and for
          controlling get right of entry to for your Account and your device.
          You agree to just accept duty for all sports that arise beneath your
          Account. We can also additionally terminate your Account at any time,
          for any purpose or no purpose and without previous be aware to you.
          Linking Links can be hooked up from this Website to 1 or extra outside
          web sites or assets operated with the aid of using1/3 parties (the
          "Third Party Sites"). In addition, positive Third Party Sites
          additionally can also additionally offer hyperlinks to the Website.
          None of such hyperlinks have to be deemed to mean that MR BUTTON
          endorses the Third Party Sites or any content material therein. MR
          BUTTON does now no longer manipulate and isn’t accountable or
          chargeable for any Third Party Sites or any content material,
          advertising, products, or different substances on or to be had from
          such Third Party Sites. Access to any Third Party Sites is at your
          very own hazard and MR BUTTON will don't have any legal responsibility
          springing up out of or associated with such web sites and/or their
          content material or for any damages or loss brought about or purported
          to be resulting from or in reference to any purchase, use of or
          reliance on this type of content material, goods, or offerings to be
          had on or thru this type of Third Party Site.
        </Text>
        <Text style={styles.policyText}>Disclaimer</Text>
        <Text style={styles.policyText}>
          This Website and all Content of the Website is furnished to our
          clients and potential clients "AS IS" and "AS AVAILABLE" and without
          warranties of any kind, whether or not specific or implied, INCLUDING
          BUT NOT LIMITED TO, THOSE OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
          PURPOSE, TITLE, OR NONINFRINGEMENT. You acknowledge, with the aid of
          using your use of the Website, that your use is at your sole hazard.
          Some jurisdictions do now no longer permit the disclaimer of implied
          warranties. In such jurisdictions, the foregoing disclaimer might not
          observe to you.
        </Text>
        <Text style={styles.policyText}>Limitation of Liability</Text>
        <Text style={styles.policyText}>
          IN NO EVENT WILL MR BUTTON BE LIABLE TO ANY PARTY FOR ANY DIRECT,
          INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES FOR
          USE OF THIS WEBSITE OR ANY OTHER LINKED WEBSITE, INCLUDING, WITHOUT
          LIMITATION, LOST PROFITS OR REVENUES, COSTS OF REPLACEMENT, BUSINESS
          INTERRUPTIONS, LOSS OF DATA OR DAMAGES RESULTING FROM USE OF OR
          RELIANCE ON THE INFORMATION PRESENT, EVEN IF MR BUTTON IS EXPRESSLY
          ADVISED ABOUT THE POSSIBILITY OF SUCH DAMAGES. In a few jurisdictions,
          obstacles of legal responsibility aren’t permitted. In such
          jurisdictions, the foregoing obstacles on legal responsibility might
          not observe to you.
        </Text>
        <Text style={styles.policyText}>Jurisdiction </Text>
        <Text style={styles.policyText}>
          No implication is made that the substances posted in this Website are
          suitable to be used outdoor of the United States/India. If you get
          right of entry to this Website from outdoor of the United
          States/India, you do quickly your very own initiative and you’re
          accountable for compliance with neighbourhood legal guidelines. MR
          BUTTON controls this Website from its places of work inside the
          Province of Ontario. The Terms and Conditions of this Website will be
          ruled with the aid of using the legal guidelines of India, with regard
          to conflict of law principles.
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
    backgroundColor: "#fff",
  },
  headcontainer: {
    marginBottom: 30,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    fontFamily: "CenturyGothic",
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "CenturyGothic",
  },
  policyText: {
    fontSize: 16,
    marginBottom: 10,
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
  //   heading: {
  //     fontSize: 18,
  //     fontWeight: "bold",
  //     fontFamily: "CenturyGothic",
  //   },
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

export default SiteUsePolicy;
