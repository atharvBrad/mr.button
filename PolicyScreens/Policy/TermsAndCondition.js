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

const TermsAndCondition = ({ navigation }) => {
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
        <Text style={styles.heading}>TERMS AND CONDITIONS </Text>
        <Text style={styles.subHeading}>Welcome to MR BUTTON</Text>
        <Text style={styles.policyText}>
          This file is a digital document on the subject of the Information
          Technology Act, 2000. Being generated through a laptop device it does
          now no longer require any bodily or virtual signatures. This file is
          posted according with the provisions of Rule 3(1) of the Information
          Technology (Intermediaries Guidelines) Rules, 2011, that calls for
          publishing the Rules and Regulations, Privacy Policy and Terms of Use
          forget admission to or utilization of www.mrbutton.in.in internet
          site.
        </Text>
        <Text style={styles.policyText}>
          MR BUTTON PVT. LTD. affords you with content material and offerings to
          be had in this internet site in situation to the subsequent Terms and
          Conditions such as Privacy Policy, Payment Policy and different
          conditions. By getting access to or the usage of this internet site,
          you well known which you have read, understood and agreed to those
          Terms and Conditions.
        </Text>
        <Text style={styles.subHeading}>Overview </Text>
        <Text style={styles.policyText}>
          We welcome you to mrbutton.in.in. All offerings in this portal are
          rendered thru its platform beneath the emblem name “MR BUTTON”.
          Throughout the internet site, the phrases “We”, “Us” and “Our” check
          with MR BUTTON PVT. LTD. Usage of this internet site is ruled through
          those Terms and Conditions. Please take a couple of minutes to check
          all of the phrases, conditions, regulations and notices said here.
        </Text>

        <Text style={styles.policyText}>
          The Terms and Conditions (as can be amended from time to time) are a
          criminal agreement among you (a man or woman visitor, customer,
          vendor, service provider and/or contributor of content material of at
          the least 18 years of age) and MR BUTTON PVT. LTD.
        </Text>

        <Text style={styles.policyText}>
          MR BUTTON PVT. LTD. totally reserves the proper to alter those Terms
          and Conditions at any time without previous notice. Thus, we inspire
          you to maintain reviewing those Terms and Conditions periodically.
          Access to the internet site is authorized on a brief basis, and we
          reserve the proper to withdraw or amend the offerings without notice.
          We will now no longer be in charge if for any cause this internet site
          is unavailable at any time or for any period. We may also even
          limitation get admission to a few components or this complete internet
          site from time to time.
        </Text>
        <Text style={styles.policyText}>
          This internet site may also include hyperlinks to different websites
          ("Third-birthday birthday celebration Sites"), which aren't operated
          through www.mrbutton.in.in. MR BUTTON PVT. LTD. has no manipulate over
          the third-birthday birthday celebration web sites and accepts no duty
          for them or for any loss or harm which can stand up out of your use of
          them. Your use of the third-birthday birthday celebration web sites
          might be situation to the phrases of use and provider contained inside
          every such site.
        </Text>

        <Text style={styles.policyText}>
          We request you to now no longer use our internet site or any of its
          offerings if you do now no longer conform to any of those Terms and
          Conditions.
        </Text>

        <Text style={styles.policyText}>
          You won't use the goods to be had at the internet site for any
          unlawful or unauthorized purpose, nor you could use our offerings to
          violate any legal guidelines on your jurisdiction (along with however
          now no longer restricted to copyright legal guidelines). You will now
          no longer devote or inspire a crook offence, transmit or distribute a
          virus, hack into any component of the internet site, corrupt data,
          motive annoyance to different users, infringe upon the rights of
          another person's proprietary rights, ship any unsolicited marketing
          and marketing or promotional material, usually cited as "spam" or try
          and have an effect on the overall performance or capability of any pc
          centers of or accessed via this internet site. Breaching this
          provision could represent a crook offence and MR BUTTON PVT. LTD. will
          record such a breach to the applicable regulation enforcement
          authorities. A breach or violation of any of the Terms and Conditions
          will bring about an instantaneous termination of your get admission to
          our internet site and its offerings.
        </Text>
        <Text style={styles.subHeading}>
          SECTION 2: USER SECURITY AND CONDUCT
        </Text>
        <Text style={styles.policyText}>
          This internet site can also additionally require you to post a few
          private records through registering as a person to ensure offerings to
          be had to you. Your submission of such private records at the internet
          site is ruled through our Privacy Policy. Your private records (aside
          from credit score card records) can be transferred, unencrypted and
          involve (a) transmissions over numerous networks; and (b)
          modifications to verify and adapt to the technical necessities of
          connecting networks or devices. Credit card records is constantly
          encrypted in the course of switch over networks. Users who opt for now
          no longer to supply private records can also additionally have limited
          get admission to to the offerings.
        </Text>
        <Text style={styles.policyText}>
          By registering as a person and growing an account you're answerable
          for retaining the confidentiality of the account records and for all
          sports that arise beneath your account. You comply with right now
          notify us of any unauthorized use of your account records or another
          breach of security.
        </Text>
        <Text style={styles.policyText}>
          Products and Services for Personal Use
        </Text>
        <Text style={styles.policyText}>
          The services and products provided through MR BUTTON PVT. LTD. in this
          internet site or any samples that we offer to you are for private use
          only. You agree now no longer to reproduce, duplicate, copy, promote,
          resell or make the most any part of the internet site, use of the
          internet site, get admission to the internet site or any touch at the
          internet site without the written permission of MR BUTTON PVT. LTD.
        </Text>
        <Text style={styles.policyText}>
          MR BUTTON PVT. LTD. can't be held chargeable for any loss or harm
          springing up out of your failure to conform to the phrases of this
          section. You can be held chargeable for any losses incurred through MR
          BUTTON PVT. LTD. another account holder or person of the internet site
          because of legal or unauthorized use of your account due to your
          failure to hold your account records stable and confidential.
        </Text>
        <Text style={styles.policyText}>
          All the records which you offer to us within side the shape of
          guidelines or ideas, inquiries, feedbacks and extra are together
          referred to as Submissions. Such submissions are non-proprietary and
          non-confidential. You provide us the proper to copy, use, reproduce,
          modify, apart, translate, publish, license, distribute, promote or
          assign those submissions as can also see fit to us.
        </Text>
        <Text style={styles.policyText}>
          You agree that you may now no longer have interaction in any hobby
          that, in our judgment, interferes with or disrupts the provider, the
          servers and networks which are linked to the provider, or the sports
          of others at the internet site. You additionally agree that you may
          now no longer use this internet site to acquire or harvest non-public
          records approximately different members in this internet site;
          electronically “stalk” or in any other case harass some other person;
          installation extra account(s) for use for misleading purposes; and/or
          use the offerings, merchandise or hyperlinks to be had in this web
          website online for unlawful purposes. You well known that we've got
          the proper to manipulate the person content material transmitted or
          published in this internet site.
        </Text>
        <Text style={styles.policyText}>
          By the usage of this internet site and/or sending Emails, records or
          any shape of communiqué with us, you settle and apprehend which you
          are speaking with us thru digital facts and also you consent to
          acquire communications from us periodically as and whilst required.
        </Text>
        <Text style={styles.policyText}>
          For similarly records you could examine our Privacy Policy
          (hyperlinked) in detail.
        </Text>
        <Text style={styles.subHeading}>
          SECTION 3: ERRORS, INACCURACIES AND OMISSIONS
        </Text>
        <Text style={styles.policyText}>
          Occasionally, there can be content material on mrbutton.in.in internet
          site or within side the provider that incorporates technical,
          typographical or photographic errors, inaccuracies or omissions that
          can relate to product descriptions, pricing, promotions, offers,
          product transport charges, transit instances and availability. MR
          BUTTON PVT. LTD. does now no longer warrant that any of the substances
          at the internet site is absolutely correct or current. The cloth in
          this internet site is supplied for standard records simplest and have
          to now no longer be relied upon or used as the only foundation for
          making decisions. Any reliance at the cloth on our internet site is at
          your very own risk.
        </Text>
        <Text style={styles.policyText}>
          We reserve the proper to accurate any errors, inaccuracies or
          omissions, and to extrude, replace records or cancel orders if any
          records at the internet site is inaccurate, at any time without
          previous note (even after you've got positioned your order).
        </Text>
        <Text style={styles.policyText}>
          You agree that it's miles your obligation to screen any adjustments to
          our internet site.
        </Text>
        <Text style={styles.subHeading}>
          SECTION 4: MODIFICATIONS TO THE SERVICE AND PRICES
        </Text>
        <Text style={styles.policyText}>
          The fees of our merchandise are situation to extrude without note. We
          reserve the proper to adjust or stop a product (or any content
          material thereof) without note at any time. We shall now no longer be
          at risk of any 0.33 celebration for any modification, charge extrude,
          suspension or discontinuation of a product or provider.
        </Text>
        <Text style={styles.subHeading}>SECTION 5: PRODUCTS OR SERVICES</Text>
        <Text style={styles.policyText}>
          Products and offerings can be to be had on-line in restrained portions
          and are situation to go back or substitute as in keeping with our
          Returns and Replacement Policy simplest. We have made each attempt to
          show the colors and picas of our merchandise as it should be as
          possible. We can't assure that your laptop screen's show of any
          coloration could be correct.
        </Text>
        <Text style={styles.policyText}>
          We reserve the proper to restriction the portions of any services or
          products that we offer. All descriptions of merchandise or product
          pricing are situation to extrude at any time without note at our sole
          discretion. We reserve the proper to stop any product at any time.
        </Text>
        <Text style={styles.subHeading}>
          SECTION 6: ACCURACY OF BILLING AND ACCOUNT INFORMATION
        </Text>
        <Text style={styles.policyText}>
          We can also additionally, at our sole discretion, restriction or
          cancel portions bought in keeping with person, in keeping with family
          or in keeping with order. These regulations can also additionally
          encompass orders positioned beneath identical patron account,
          identical credit score card, and/or orders that use identical billing
          and/or transport cope with. In the occasion that we make a extrude
          to/cancel an order, we can also additionally try to notify you thru e
          mail and/or billing cope with and/or telecall Smartphone range
          supplied on the time of order affirmation. We reserve the proper to
          restriction or limit orders that, in our sole judgment, seem like
          positioned via way of means of dealers, resellers or distributors.
        </Text>
        <Text style={styles.policyText}>
          You conform to offer current, whole and correct account records for
          all purchases made on our internet site. You conform to right away
          replace your account and different records in order that we are able
          to whole your transaction and get in touch with you as and whilst
          needed.
        </Text>
        <Text style={styles.subHeading}>SECTION 7: PAYMENT</Text>
        <Text style={styles.policyText}>
          While the usage of any of the charge techniques to be had at the
          internet site, MR BUTTON PVT. LTD. will now no longer be accountable
          in assuming any legal responsibility in any way in recognize of loss
          or harm bobbing up without delay or in a roundabout way to you due to
          (a) loss of authorization for any transaction(s); (b) exceeding the
          preset restriction together agreed upon via way of means of you and
          your bank(s); (c) any charge troubles bobbing up from any transaction;
          or (d) decline of the transaction for some other reason(s) in anyway.
        </Text>
        <Text style={styles.policyText}>
          You apprehend, be given and agree that the charge facility supplied on
          mrbutton.in.in is neither a banking nor economic provider, however
          simply an automatic on-line digital charge facility for transactions
          at the internet site and makes use of present approved charge gateway
          networks. All bills made via way of means of you for purchases at the
          internet site have to be in Indian rupees and desirable within side
          the Republic of India. We will now no longer facilitate a buy
          transaction in some other fore on mrbutton.in.in.
        </Text>
        <Text style={styles.policyText}>
          We reserve the proper to postpone notifying charge affirmation if we
          deem a customer's excessive transaction volumes to be suspicious. This
          is to make sure the protection of the transaction and charge. In
          addition, MR BUTTON PVT. LTD. can also additionally withhold a charge
          without dispatching the buy (or refunding charge to the customer), or
          remit the charge to regulation enforcement officials/research groups
          at their request if the buyer is engaged in any illegal activity.
        </Text>
        <Text style={styles.policyText}>
          For further information you may read our Payment Policy (hyperlinked)
          in detail.
        </Text>
        <Text style={styles.subHeading}>SECTION 8: THIRD-PARTY LINKS</Text>
        <Text style={styles.policyText}>
          This internet site may also comprise hyperlinks to different web sites
          owned and operated through 0.33 events. These hyperlinks are furnished
          in your comfort and records, and aren't an endorsement of such 0.33
          events or their web sites. MR BUTTON PVT. LTD. has no manipulate over
          any connected 0.33-celebration internet site and isn't always
          chargeable for any records, services or products on those web sites.
          You're linking to or from any of those web sites are at your very own
          risk. We make no warranties or representations, specific or implied,
          approximately such connected 0.33-celebration web sites, the records
          contained on them, or the suitability or excellent of any in their
          services or products.
        </Text>
        <Text style={styles.policyText}>
          If making a decision to get admission to this sort of web sites,
          employ the records contained on them. We take delivery of no legal
          responsibility for any harm or loss, howsoever caused, in reference to
          the usage of records, material, services or products contained on or
          accessed via this sort of connected 0.33-celebration web sites. Please
          assessment the 0.33-celebration's regulations and practices cautiously
          and make certain you apprehend them earlier than you interact in any
          transaction. Any complaints, claims, issues or questions concerning
          such connected 0.33-celebration web sites ought to be directed to them
          and now no longer MR BUTTON PVT. LTD..
        </Text>
        <Text style={styles.subHeading}>SECTION 9: PROHIBITED USES</Text>
        <Text style={styles.policyText}>
          In addition to different prohibitions set forth within side the Terms
          and Conditions, you're prohibited from the usage of this internet site
          or its content (a) for any illegal purpose; (b) to solicit others to
          carry out or take part in any illegal acts; (c) to violate any
          international, central, nation or neighborhood regulations,
          guidelines, legal guidelines or ordinances; (d) to infringe upon or
          violate our highbrow assets rights or the highbrow assets rights of
          others; (e) to harass, abuse, insult, harm, defame, slander,
          disparage, intimidate, or discriminate primarily based totally on
          gender, sexual orientation, religion, ethnicity, race, age,
          countrywide origin, or disability; (f ) to post fake or deceptive
          records; (g) to add or transmit viruses or some other form of
          malicious code that can be utilized in any manner to have an effect on
          the capability or operation of the internet site or of any associated
          internet site, different web sites, or the Internet; (h) to accumulate
          or music the private records of others; (I) to spam, phish, harm,
          pretext, spider, move slowly or scrape; (j) for any obscene or immoral
          purpose; or (k) to intervene with or sidestep the safety functions of
          the internet site or any associated internet site, different web
          sites, or the Internet. We reserve the only proper to terminate your
          use of MR BUTTON's internet site for violating any of the prohibited
          uses.
        </Text>
        <Text style={styles.subHeading}>
          SECTION 10: SPECIAL FEATURES, FUNCTIONALITIES AND EVENTS
        </Text>
        <Text style={styles.policyText}>
          MR BUTTON PVT. LTD may also provide positive functions and
          functionalities or occasions inclusive of contests, promotions or
          different services which can be problem to phrases and situations,
          guidelines and/or regulations further to or in lieu of those Terms and
          Conditions.
        </Text>
        <Text style={styles.subHeading}>
          SECTION 11: DISCLAIMER OF WARRANTIES & LIMITATION OF LIABILITY
        </Text>
        <Text style={styles.policyText}>
          We do now no longer guarantee, constitute or warrant that your use of
          our internet site might be uninterrupted, timely, steady or
          error-free. We do now no longer warrant that the outcomes that can be
          received from the usage of the internet site might be correct or
          reliable. You agree that on occasion we may also do away with any
          products or services for indefinite durations of time or cancel it at
          any time, without previous notice.
        </Text>
        <Text style={styles.policyText}>
          The services and products introduced to you via the internet site are
          furnished “as is” and “as available” in your use, with none
          representation, warranties or situations of any kind, both specific or
          implied, which include all implied warranties or situations of
          merchantability, merchantable excellent, health for a selected
          purpose, durability, title, and non-infringement.
        </Text>
        <Text style={styles.policyText}>
          In no case shall MR BUTTON PVT. LTD, its directors, officers,
          employees, affiliates, agents, contractors, interns, suppliers,
          provider carriers or licensors be answerable for any injury, loss,
          claim, or any direct, indirect, incidental, punitive, unique or
          consequential damages of any kind, which include without limitation,
          misplaced profits, misplaced revenue, misplaced savings, lack of data,
          alternative costs, or any comparable damages, whether or not primarily
          based totally in contract, tort (which include negligence), strict
          legal responsibility or otherwise, bobbing up out of your use of any
          of the products or services procured from the internet site. In no
          occasion shall our most combination legal responsibility exceed Rs.
          2,000 only.
        </Text>
        <Text style={styles.policyText}>
          You agree that no claims or moves bobbing up out of, or associated to,
          the usage of the internet site or its Terms and Conditions will be
          delivered up through you after 1 year of the cause of action relating
          to such claim.
        </Text>
        <Text style={styles.subHeading}>SECTION 12: INDEMNIFICATION</Text>
        <Text style={styles.policyText}>
          You comply with indemnify, guard and maintain MR BUTTON PVT. LTD and
          our affiliates, directors, agents, contractors, licensors, provider
          providers, subcontractors, suppliers, interns and personnel innocent
          from any declare or demand, along with affordable attorney's fees,
          made via way of means of any 0.33 celebration because of or bobbing up
          from your breach of those Terms and Conditions, your violation of any
          law, the rights of a 3rd celebration or any harm to lifestyles and/or
          belongings due to the goods delivered.
        </Text>
        <Text style={styles.subHeading}>SECTION 13: COPYRIGHT COMPAINTS</Text>
        <Text style={styles.policyText}>
          We admire the highbrow belongings of others. If you accept as true
          with that any content material to be had in this internet site has
          been copied in a manner that constitutes copyright infringement,
          please ship us an e-mail at wizards@mrbutton.in with the subsequent
          information:
        </Text>
        <Text style={styles.policyText}>
          • Identification of the copyrighted work
        </Text>
        <Text style={styles.policyText}>
          • Identification of the copyrighted work
        </Text>
        <Text style={styles.policyText}>
          • A description of the cloth which you declare has been infringed and
          the place of the cloth at the internet site
        </Text>
        <Text style={styles.policyText}>
          • Your address, phone quantity and e-mail address
        </Text>
        <Text style={styles.policyText}>
          *Please use the furnished e-mail identification best to inform any
          copyright cloth. All different inquiries have to be directed to our
          customer support team.
        </Text>
        <Text style={styles.subHeading}>SECTION 14: TERMINATION</Text>
        <Text style={styles.policyText}>
          The duties and liabilities of the events incurred previous to the
          termination date shall live on the termination of this settlement for
          all purposes. These Terms and Conditions are powerful until and till
          terminated via way of means of both you and us. You can also
          additionally terminate those Terms and Conditions at any time via way
          of means of notifying us which you not want to apply our offerings or
          while you give up to apply our internet site.
        </Text>
        <Text style={styles.policyText}>
          If in our sole judgment you fail, or we suspect which you have failed,
          to conform with any time period or provision of those Terms and
          Conditions, we can also terminate this settlement at any time without
          be aware and you may stay accountable for all quantities due as much
          as the date of termination; and/or as a result can also additionally
          deny you get admission to our internet site (or any component
          thereof).
        </Text>
        <Text style={styles.subHeading}>SECTION 15: ENTIRE AGREEMENT</Text>
        <Text style={styles.policyText}>
          These Terms and Conditions and Policies published via way of means of
          us at the internet site or in admire to the offerings represent the
          whole settlement and information among you and us and communications
          and proposals, whether or not oral or written (along with, however now
          no longer constrained to, any earlier variations of the Terms and
          Conditions).
        </Text>
        <Text style={styles.subHeading}>
          SSECTION 16: GOVERNING LAW & DISPUTE RESOLUTION
        </Text>
        <Text style={styles.policyText}>
          Unless in any other case specified, the cloth on our internet site is
          provided entirely for the cause of promoting that merchandise in
          India. These Terms and Conditions and any separate agreements wherein
          we offer you offerings will be ruled via way of means of and construed
          according with the legal guidelines of the Republic of India and the
          courts inside New Delhi, India. If any dispute arises among you and MR
          BUTTON PVT. LTD concerning the usage of the internet site or its
          services and products of it then you definitely will be situation to
          extraordinary jurisdiction. Your duties to pay the Payment Fees shall
          now no longer be suspended for the duration of the pendency of such
          proceedings.
        </Text>
        <Text style={styles.policyText}>
          MR BUTTON PVT. LTD makes no illustration that substances at the
          internet site are suitable or to be had to be used in international
          locations apart from India. Users who select to get admission to this
          internet site from international locations apart from India achieve
          this at their personal danger and we aren't chargeable for the
          delivery of services or products to international locations apart from
          India, or for being in compliance with legal guidelines outdoor India.
        </Text>
        <Text style={styles.subHeading}>SECTION 17: CONTACT INFORMATION</Text>
        <Text style={styles.policyText}>
          Any questions on the Terms of Use must be emailed to
          wizards@mrbutton.in or directed to a consumer care consultant at +91
          8810368297.
        </Text>
        <Text style={styles.subHeading}>SECTION 18: GRIEVANCE OFFICER</Text>
        <Text style={styles.policyText}>
          In accordance with the Information Technology Act, 2000, and policies
          made there under, the call and make contact with information of the
          Grievance Officer, who may be contacted with respect to any complaints
          or concerns, are provided below:
        </Text>
        <Text style={styles.policyText}>www.mrbutton.in.</Text>
        <Text style={styles.policyText}>Ph: +91 8810368297</Text>
        <Text style={styles.policyText}>
          Time: Mon-Fri (10:00 am to 7:00 pm)
        </Text>
        <Text style={styles.policyText}>Email: wizards@mrbutton.in</Text>
        <Text style={styles.subHeading}>
          SECTION 19: MANUFACTURING INFORMATION
        </Text>
        <Text style={styles.policyText}>Made in India</Text>
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

export default TermsAndCondition;
