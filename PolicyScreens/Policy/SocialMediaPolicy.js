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

const SocialMediaPolicy = ({ navigation }) => {
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
        <Text style={styles.heading}>
          ENDORSEMENTS & SOCIAL MEDIA ENGAGEMENT POLICY
        </Text>
        <Text style={styles.subHeading}>MR BUTTON</Text>
        <Text style={styles.policyText}>
          Endorsements & Social Media Engagement Policy ("Policy")
        </Text>
        <Text style={styles.policyText}>
          Except in which prohibited through regulation, in case you are a
          "fan," "follower" of or in any other case voluntarily interact with MR
          BUTTON through emailing, posting, importing or in any other case
          filling photographs, graphics, videos, messages, remarks or different
          fabric (together cited herein as "Post(s)") on any MR BUTTON page,
          profile, or feed (together cited herein as "Pages") of any social
          media platform ("Platform") (e.g. Facebook, Twitter, Instagram,
          Pinterest, Snap Chat, Google Plus, Google Business Page, YouTube et
          al.), or making any non-public announcement thru a Post or in any
          other case in any media/medium which endorses MR BUTTON merchandise or
          services ("Endorsement"), you furnish your complete and unconditional
          settlement (or your determine or prison guardian's complete and
          unconditional settlement in case you are beneath the age of majority
          for your jurisdiction) to this Policy. If you do now no longer observe
          this Policy at any time, MR BUTTON reserves the proper to limitation
          your use of or get admission to to MR BUTTON's Pages at its sole
          discretion without earlier notice, further to any to be had treatments
          allowed through regulation or contract. For the reason of this Policy,
          all and sundry who engages in any way with any MR BUTTON Page is a
          "User".
        </Text>
        <Text style={styles.policyText}>
          For facts on how we can also additionally gather and/or use your
          non-public facts, please see our Privacy Policy. MR BUTTON's Pages do
          in no manner subsidized or encouraged through the regulated
          Platform(s) themselves. Those Pages do now no longer weld the
          privateness and protection of another any Platform. Please carefully
          review every respective Platform's privateness coverage and phrases of
          carrier when you have questions on such Platform's phrases of use and
          privateness or protection practices.
        </Text>
        <Text style={styles.subHeading}>Contents</Text>
        <Text style={styles.policyText}>• User Generated Content</Text>
        <Text style={styles.policyText}>• Endorsements</Text>
        <Text style={styles.policyText}>• Posting Guidelines</Text>
        <Text style={styles.subHeading}>User Generated Content</Text>
        <Text style={styles.policyText}>
          If you tag your Post (a) through commenting with one in all our
          promoted hash tags or through tagging “MR BUTTON” within side the
          Post, you settle to the following:
        </Text>

        <Text style={styles.policyText}>
          You consent and furnish to MR BUTTON the irrevocable, non-exclusive,
          transferable, sub-licensable, royalty free, global proper (however now
          no longer the obligation), to (1) use, copy, perform, reproduce, edit,
          modify, display, broadcast, distribute, put together spinoff works of
          (or comprise into different works), and in any other case take
          advantage of the Post (or any component thereof) in any form, way or
          media now or hereafter recognized such as however now no longer
          restricted to posting or reposting the Post throughout MR BUTTON 's
          virtual properties (e.g., on MR BUTTON 's branded web sites and social
          media pages) and the usage of the Post for industrial functions such
          as marketing, advertising, and exposure and (2) use your name, image,
          likeness, and username/ cope with in reference to, or to reference the
          reality of, your Post to the quantity you consist of such facts for
          your Post. You recognize and agree that you may now no longer have any
          proper to investigate or approve MR BUTTON's use of the Post, the Post
          will now no longer be back to you, and you'll now no longer be paid or
          in any other case compensated for MR BUTTON's use of your Post. Aside
          from the rights particularly granted herein, you hold possession of
          all rights in your Post.
        </Text>
        <Text style={styles.policyText}>
          You constitute and warrant that (1) your Post is your unique advent
          for that you personal and/or manipulate all rights, (2) your Post does
          now no longer infringe the highbrow property, privateness or exposure
          rights or another prison or ethical rights of any 1/3 party, or
          violate another relevant legal guidelines or regulations, (3) your
          Post will now no longer comprise obscene, indecent, or harassing
          fabric or function nudity or drug/alcohol use, (4) you've got acquired
          the explicit permission of every identifiable man or woman performing
          for your Post to be blanketed and displayed within side the Post as
          supplied herein, and (5) you've got the total strength and authority
          to furnish the rights pondered herein.
        </Text>
        <Text style={styles.policyText}>
          You recognize and renowned that your Post can be open to public remark
          that isn't beneath the MR BUTTON's direct manipulate and does now no
          longer always mirror the perspectives of MR BUTTON. While MR BUTTON
          can also additionally curate Posts, MR BUTTON isn't accountable for
          their content material or accuracy. You recognize that you'll be
          uncovered to different Posts which you discover offensive, indecent or
          in any other case objectionable. You recognize and renowned that MR
          BUTTON shall now no longer be responsible for any loss or harm of any
          type suffered through you in reference to Posts made to be had on MR
          BUTTON's web sites or social media pages. Posts can be eliminated
          through MR BUTTON at any time and for any reason.
        </Text>
        <Text style={styles.policyText}>
          You agree now no longer to take any prison motion against, and hereby
          irrevocably launch and discharge, MR BUTTON, and its directors,
          officers, employees, agents, affiliates, franchisees, licensees, or
          another man or woman or entity appearing on its behalf, from all
          claims in reference to the use or viewing of Posts as pondered herein
          such as however now no longer restricted to any claims primarily based
          totally on trademark, copyright, proper of exposure, defamation or
          invasion or invasion of privacy.
        </Text>
        <Text style={styles.policyText}>
          To the quantity authorized through relevant law, you settle to defend,
          indemnify and preserve innocent MR BUTTON and its directors, officers,
          personnel, agents, affiliates, franchisees, and licensees, from and
          towards any and all claims, damages, obligations, losses, liabilities,
          expenses or debt, and expenses (such as however now no longer
          constrained to attorney's fees) bobbing up from: (I) your violation of
          any time period of this Policy; (ii) your violation of any 0.33
          birthday celebration proper, such as without dilemma any trademark,
          copyright, belongings, or privateness proper; or (iii) any declare
          that your Post induced harm to a 3rd birthday celebration.
        </Text>
        <Text style={styles.policyText}>
          The rights to MR BUTTON's statistics can be covered through patent,
          copyright, trademark, exchange secrets and techniques or different
          proprietary rights owned through a 3rd birthday celebration apart from
          MR BUTTON. Additionally, sure content material displayed and contained
          inside MR BUTTON Pages is the unique authorship of MR BUTTON and is
          owned solely through MR BUTTON. By being a User of or Posting on any
          of MR BUTTON's Pages, you well known that you can now no longer
          modify, publish, transmit, display, copy, take part within side the
          switch or sale, create by-product works, or in any manner take
          advantage of any of the content material observed, whether or not
          owned through MR BUTTON or a 3rd birthday celebration, apart from as
          supplied herein.
        </Text>
        <Text style={styles.policyText}>
          You can also additionally request elimination of any of your
          User-Generated Content through sending a elimination request e-mail to
          WIZARDS@MRBUTTON.IN Your e-mail have to encompass a hyperlink to the
          URL of the web page on which your User-Generated Content is published
          or an outline of the web page on which it's miles published.
        </Text>
        <Text style={styles.policyText}>
          MR BUTTON respects the highbrow belongings rights of others and
          expects Users to do the same. If you accept as true with that your
          copyrighted paintings has been copied in a manner that constitutes
          copyright infringement you can e-mail to WIZARDS@MRBUTTON.IN. Please
          make certain to encompass the subsequent statistics together along
          with your notification:
        </Text>
        <Text style={styles.policyText}>
          • Identity of the cloth this is claimed to be infringing and
          statistics fairly enough to allow MR BUTTON to find the cloth such as
          a hyperlink to or URL for the cloth;
        </Text>
        <Text style={styles.policyText}>
          • Identity of the copyrighted paintings or a consultant listing of the
          works claimed to were infringed;
        </Text>
        <Text style={styles.policyText}>
          • An digital or bodily signature of the character legal to behave on
          behalf of the proprietor of the extraordinary proper this is allegedly
          infringed;
        </Text>
        <Text style={styles.policyText}>
          • your name, address, cell phone number, and e-mail address, in order
          that we can also additionally touch you if necessary;
        </Text>
        <Text style={styles.policyText}>
          • An announcement which you have a very good religion notion that the
          disputed use isn't always legal through the copyright proprietor, its
          agent, or the law; and
        </Text>
        <Text style={styles.policyText}>
          • An announcement through you, made beneath penalty of perjury, that
          the above statistics for your note is correct and which you are the
          copyright proprietor or legal to behave at the copyright proprietor's
          behalf.
        </Text>
        <Text style={styles.policyText}>• Endorsements</Text>
        <Text style={styles.policyText}>
          • MR BUTTON is dedicated to complying with all relevant legal
          guidelines and guidelines requiring clean and correct marketing and
          marketing messages, Endorsements and testimonials while speaking with
          the public, such as the disclosure of all cloth connections among an
          MR BUTTON advertising and marketing advertising the usage of any Page
          and a User's participation in that advertising. This Policy is
          supposed to offer tips crucial to making sure compliance with the ones
          legal guidelines and guidelines. Therefore, this Policy applies to all
          MR BUTTON personnel, unbiased contractors, agents (such as anybody
          speaking, writing, blogging, posting on any Platform, or in any other
          case commonly endorsing MR BUTTON services or products), and some
          other person or entity engaged in promotional endorsement sports on
          behalf of MR BUTTON, whether or not they're engaged through MR BUTTON
          without delay or thru an agency, consultant of an agency. This Policy
          applies regardless of the discussion board wherein the Endorsement or
          testimonial is being made, written or verbal, such as, however now no
          longer constrained to, TV commercials, print advertisements, websites,
          blogs, cell applications, Platforms in widespread or some other shape
          of media which can be used to advertise.
        </Text>
        <Text style={styles.policyText}>
          • Endorsers are liable for their opinions, remarks and content
          material made in Posts and can be held in my opinion answerable for
          any statement deemed to be defamatory, libelous, obscene, or an
          infringement at the proprietary rights of MR BUTTON or any 0.33
          birthday celebration; consequently, Endorsers have to take into
          account of this capacity legal responsibility while disseminating
          opinions, remarks and content material thru Posts. In addition,
          Endorsers have to always be conscious that Posts can also additionally
          continue to be public or can be archived in order that such Posts can
          be saved and retrievable, indefinitely.
        </Text>
        <Text style={styles.policyText}>
          • With admire to statements or different claims made in marketing and
          marketing messages or promotional communications approximately MR
          BUTTON and/or its services or products, Endorsers have to adhere to
          the subsequent widespread requirements and disclosure requirements:
        </Text>
        <Text style={styles.subHeading}>1. General Standards </Text>
        <Text style={styles.policyText}>
          • Endorsers can also additionally most effectively make statements
          that replicate their sincere opinions, finding, ideals or stories.
          Endorsers won't make statements approximately stories with a product
          now no longer in my opinion used, tested or evaluated.
        </Text>
        <Text style={styles.policyText}>
          • Endorsements through groups have to replicate the collective
          judgment of the organization.
        </Text>
        <Text style={styles.policyText}>
          • Endorsers won't make deceptive, deceptive or untruthful claims
          approximately MR BUTTON's services or products.
        </Text>
        <Text style={styles.policyText}>
          • Endorsers won't make any claims approximately MR BUTTON's services
          or products that aren't substantiated.
        </Text>
        <Text style={styles.policyText}>
          • Endorsers won't have interaction in any verbal exchange this is
          defamatory or infringes upon the highbrow belongings or privateness
          and exposure rights of others.
        </Text>
        <Text style={styles.policyText}>
          • Endorsers won't use any highbrow belongings of MR BUTTON of their
          Endorsement without the previous written consent of MR BUTTON in every
          instance, and such use have to be according with the precise tips
          supplied through MR BUTTON.
        </Text>
        <Text style={styles.policyText}>
          • Endorsers won't make any remarks or Posts that during any manner
          promotes hazardous or risky sports.
        </Text>
        <Text style={styles.policyText}>
          • Endorsers won't make any remarks or Posts that violate relevant
          local, kingdom or federal legal guidelines or guidelines.
        </Text>
        <Text style={styles.policyText}>
          • Endorsers which can be additionally personnel of MR BUTTON have to
          adhere to all worker tips observed within side the worker handbook,
          mainly such as the “Social Media & Networking” section.
        </Text>
        <Text style={styles.policyText}>
          • Endorsers can also additionally have got entry to or without delay
          or not directly be uncovered to statistics of a proprietary and
          personal nature approximately MR BUTTON (such as without dilemma its
          commercial enterprise operations and sports, strategic plans and
          monetary statistics). Endorsers shall preserve personal and now no
          longer divulge confidential and not disclose any such information.
        </Text>

        <Text style={styles.subHeading}>2. Disclosure Requirements </Text>
        <Text style={styles.policyText}>
          • Endorsers ought to really and conspicuously divulge any “fabric
          connections” to MR BUTTON in all advertising, promotional and
          Endorsement associated communications regarding MR BUTTON and/or its
          merchandise or services.
        </Text>
        <Text style={styles.policyText}>
          • A “fabric connection” is one which isn't always moderately
          anticipated via way of means of the target market or now no longer
          easily obvious from the context of the communiqué which can have an
          effect on the burden or credibility an affordable client could provide
          to the communications or messages made via way of means of the
          Endorser.
        </Text>
        <Text style={styles.policyText}>
          • Such connections can be discovered within side the shape of:
        </Text>
        <Text style={styles.policyText}>
          • Receiving attention (i.e., economic compensation, which include
          expenses or commissions; present cards; occasion access; prizes; loose
          or discounted merchandise or services) furnished via way of means of
          MR BUTTON (or any of its marketers performing on its behalf) to the
          Endorser;
        </Text>
        <Text style={styles.policyText}>
          • A dating among MR BUTTON and the Endorser (consisting of employment
          or contractual relationships); or
        </Text>
        <Text style={styles.policyText}>
          • Potential attention won via a merchandising, contest, or sweepstakes
          for which participation is conditioned upon an Endorsement.
        </Text>
        <Text style={styles.policyText}>
          • Some examples of good enough fabric connection disclosures can be as
          follows:
        </Text>
        <Text style={styles.policyText}>
          • I received [product] from MR BUTTON as a present;
        </Text>
        <Text style={styles.policyText}>
          • [Thanks to] [Courtesy of] MR BUTTON, I turned into given [product];
        </Text>
        <Text style={styles.policyText}>
          • MR BUTTON dispatched me [product] to try;
        </Text>
        <Text style={styles.policyText}>
          • This submits is a paid commercial for MR BUTTON;
        </Text>
        <Text style={styles.policyText}>• I am a worker of MR BUTTON; or</Text>
        <Text style={styles.policyText}>
          • Tagging an Endorsement on any Platform with a hash tag that
          discloses the fabric connection of the Endorsement to MR BUTTON or a
          particular merchandising or contest; viable ideal examples may also
          consist of #MR BUTTON, #MR BUTTONGIVEAWAY #MR BUTTONCONTENTALERT, etc.
        </Text>
        <Text style={styles.policyText}>
          • The above are most effective examples of disclosures which can be
          good enough. Variations of these examples will also be good enough
          relying at the context. The keys to reveal that there may be a dating
          among MR BUTTON and the Endorser which an affordable client analyzing
          the Endorsement won't have realized (e.g., an employment dating, a
          paid advertiser dating, or associated with a merchandising or contest
          marketed via way of means of MR BUTTON).
        </Text>
        <Text style={styles.policyText}>
          • Disclosures want to be made in a clean and conspicuous manner. This
          commonly manner the disclosure cannot be buried inner a link or on the
          very backside of an extended Post. Rather, disclosures commonly need
          to arise in near proximity to wherein the Endorsement turned into made
          and in a comparable size, font and color.
        </Text>
        <Text style={styles.policyText}>
          • Endorsers who submit their personal opinions, feedback, and content
          material or tips approximately MR BUTTON, and/or its merchandise or
          services, ought to divulge that their perspectives do now no longer
          always constitute the ones of MR BUTTON.
        </Text>
        <Text style={styles.subHeading}>Posting Guidelines </Text>
        <Text style={styles.policyText}>
          • Failure to conform with the subsequent Guidelines will motive a Post
          to be rejected and pulled from MR BUTTON's Pages and might bring about
          instantaneously disqualification from being a User of MR BUTTON's
          Pages:
        </Text>
        <Text style={styles.policyText}>
          • Personal Attacks: Disrespecting, insulting or in my opinion
          attacking different Users or Posts will now no longer be authorized.
          Behavior and feedback which can bring about others feeling threatened
          or mainly focused or abused will now no longer be authorized.
        </Text>
        <Text style={styles.policyText}>
          • Discrimination: Discrimination or prejudice primarily based totally
          upon race, color, religion, creed, sex, sexual orientation, country
          wide origin, age, disability, veteran reputation, and another
          reputation blanketed via way of means of law, will now no longer be
          tolerated. Any prejudicial statements, behaviors, feedback or comments
          will motive the Post to be at once disqualified and removed.
        </Text>
        <Text style={styles.policyText}>
          • Pornographic Material: Pornographic fabric and/or references to it
          aren't authorized in Posts and Posts containing such may be removed.
        </Text>
        <Text style={styles.policyText}>
          • Violence: Any Post or declaration inciting or at once relating to
          violence, beyond violence or the hazard of violence is illegitimate
          and may be removed.
        </Text>
        <Text style={styles.policyText}>
          • Hatred: Constructive debate is authorized; however hatred closer to
          any User or particular classes of Users will now no longer be
          tolerated.
        </Text>
        <Text style={styles.policyText}>
          • Libelous Statements: Libel of any type isn't always authorized.
          Libel is a declaration or remark approximately someone or employer
          that cannot be proved to be genuine and can be taken into
          consideration detrimental to their popularity and/or interests.
        </Text>
        <Text style={styles.policyText}>
          • SPAM: Any Post or declaration that disrupts the ordinary float of
          chat isn't always authorized. Examples: garbled or nonsense sentences,
          duplication of phrases and numbers. Users won't use the network in
          reference to surveys, contests, pyramid schemes, chain letters, junk
          email, spamming or any duplicative or unsolicited messages (business
          or in any other case). Also, posting below a couple of nicknames isn't
          always allowed.
        </Text>
        <Text style={styles.policyText}>
          • Slang or References to Upsetting/Distressing Subjects: Slang
          relating to scary or distressing subjects, in MR BUTTON's sole
          discretion, will now no longer be authorized and may be at once
          removed. Such references consist of drug use, sexual acts of an
          indecent nature (and whatever taken into consideration to be
          explicitly sexual in nature), references to religion, political
          opinions or whatever deemed to misery Users or the mother and father
          or guardians of Users or whatever deemed to be socially unacceptable.
        </Text>
        <Text style={styles.policyText}>
          • Criminal or Immoral Activity: Any point out of or connection with
          crook or immoral hobby will now no longer be authorized, which include
          drugs, prostitution, fraud, stalking, extortion and terrorism.
        </Text>
        <Text style={styles.policyText}>
          • Unauthorized Content: The content material you publish to MR BUTTON
          Pages will now no longer incorporate any trademarked or copyrighted
          fabric or fabric this is challenge to different 0.33 celebration
          proprietary rights, except you've got permission from the proprietor
          of such fabric or you're in any other case certified to Post the
          fabric and to supply MR BUTTON all applicable licenses and permissions
          to apply the fabric as pondered herein.
        </Text>
        <Text style={styles.policyText}>
          Associates who violate any part of this Policy may be disciplined, as
          much as and which include termination.
        </Text>
        <Text style={styles.policyText}>
          MR BUTTON reserves the proper to change, alter, or alter this Policy
          at any time without previous notice. If you do now no longer
          completely conform to this Policy, then do not submit any Posts or
          Endorsements.
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
    marginBottom: 30,
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

export default SocialMediaPolicy;
