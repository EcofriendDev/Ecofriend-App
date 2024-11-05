import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { SafeRefreshableScrollView } from "@/components/SafeRefreshableScrollView";
import { Border, Color, FontFamily, FontSize, Gap, Padding } from "@/GlobalStyles";

const CommunityPage = () => {
  const navigation = useNavigation();

  return (
    <SafeRefreshableScrollView>
      <View style={[styles.communityPage1]}>
        <View style={[styles.communityPage1Child, styles.communityLayout3]} />
        <View style={[styles.communityPage1Item, styles.communityChildBorder]} />
        <View style={[styles.communityPage1Inner, styles.communityLayout]} />
        <View style={styles.headerWithBackarrow}>
          <View style={styles.profileAndHiType}>
            <Text style={[styles.pageHeader, styles.CommunityTitle, { left: 40 }]}> Community</Text>
            <Pressable style={styles.cogWorkLoadingCogGearSet} onPress={() => navigation.navigate("MyProfile1")}>
              <Image
                style={[styles.icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/cogworkloadingcoggearsettingsmachine.png")}
              />
            </Pressable>
          </View>
          <Pressable style={[styles.arrowRightMiniCircle, styles.helloNathanPosition]} onPress={() => navigation.navigate("ConnectPage")}>
            <Image style={[styles.icon, styles.iconLayout]} contentFit="cover" source={require("../assets/arrowrightminicircle2.png")} />
          </Pressable>
        </View>
        <Image style={[styles.ellipseIcon, styles.ellipseIconPosition]} contentFit="cover" source={require("../assets/ellipse-50.png")} />
        <View style={[styles.categoryUsernameContainer, styles.categoryContainerLayout]}>
          <Text style={styles.category}>Plastic Use</Text>
          <Text style={styles.username10h}>nathanzhang · 10h Ago</Text>
        </View>
        <View style={[styles.communityPageFirstRectangle, styles.rectangleViewLayout]} />
             <Image 
              style={[styles.communityPageFirstRectangle, styles.rectangleViewLayout]} // Ensure this style has dimensions that match the rectangle
              contentFit="cover" // This may not work as expected; use resizeMode instead 
              resizeMode="cover"
              source={require("../assets/plasticCupMadeFromCorn.png")}
              />
       
        <Text style={[styles.Community1, styles.ellipseIconPosition]}>Plastic cups made from corn</Text>
        <View style={[styles.lineView, styles.communityChildLayout2]} />
        <View style={[styles.communityPage1Child1, styles.communityChildLayout2]} />
        <Image
          style={[styles.heartRewardSocialRatingMeIcon, styles.heartIconLayout]}
          contentFit="cover"
          source={require("../assets/heartrewardsocialratingmediaheartitlikefavoritelove.png")}
        />
        <Image
          style={[styles.chatBubbleTypingOvalMessaIcon, styles.chatIconLayout]}
          contentFit="cover"
          source={require("../assets/chatbubbletypingovalmessagesmessagebubbletypingchat.png")}
        />
        <Image
          style={[styles.mailSendEmailMessageSendIcon, styles.mailIconLayout]}
          contentFit="cover"
          source={require("../assets/mailsendemailmessagesendemailpaperairplanedeliver.png")}
        />
        <Image
          style={[styles.inboxTray1MailEmailOutboIcon, styles.inboxIconLayout]}
          contentFit="cover"
          source={require("../assets/inboxtray1mailemailoutboxdraweremptyopeninboxarrowdown.png")}
        />
        <Text style={[styles.text, styles.textTypo1]}>10</Text>
        <Text style={[styles.text1, styles.textTypo]}>2</Text>
        <View style={[styles.communityPage1Child2, styles.communityChildLayout1]} />
        <View style={[styles.communityPage1Child3, styles.communityChildPosition1]} />
        <View style={[styles.communityPage1Child4, styles.communityChildPosition]} />
        <View style={[styles.communityPage1Child5, styles.communityLayout]} />
        <Image
          style={[styles.communityPage1Child6, styles.ellipseIconPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-50.png")}
        />
         <View style={[styles.categoryUsernameContainer1, styles.categoryContainerLayout]}>
         <Text style={styles.category}>Natural Disasters</Text>
          <Text style={styles.username10h}>sophiashen · 40m Ago</Text>
        </View>
        <View style={[styles.communityPageSecondRectangle, styles.rectangleViewLayout]} />
        <Image 
              style={[styles.communityPageSecondRectangle, styles.rectangleViewLayout]} // Ensure this style has dimensions that match the rectangle
              contentFit="cover" // This may not work as expected; use resizeMode instead 
              resizeMode="cover"
              source={require("../assets/wildfirephoto.png")}
              />
       
        <Text style={[styles.Community2, styles.ellipseIconPosition]}>Wildfires in California</Text>
        <View style={[styles.communityPage1Child8, styles.communityChildLayout2]} />
        <Image
          style={[styles.heartRewardSocialRatingMeIcon1, styles.heartIconLayout]}
          contentFit="cover"
          source={require("../assets/heartrewardsocialratingmediaheartitlikefavoritelove1.png")}
        />
        <Image
          style={[styles.chatBubbleTypingOvalMessaIcon1, styles.textIconPosition]}
          contentFit="cover"
          source={require("../assets/chatbubbletypingovalmessagesmessagebubbletypingchat1.png")}
        />
        <Image
          style={[styles.mailSendEmailMessageSendIcon1, styles.textIconPosition]}
          contentFit="cover"
          source={require("../assets/mailsendemailmessagesendemailpaperairplanedeliver1.png")}
        />
        <Image
          style={[styles.inboxTray1MailEmailOutboIcon1, styles.textIconPosition]}
          contentFit="cover"
          source={require("../assets/inboxtray1mailemailoutboxdraweremptyopeninboxarrowdown1.png")}
        />
        <Text style={[styles.text2, styles.textIconPosition]}>20</Text>
        <Text style={[styles.text3, styles.textIconPosition]}>4</Text>
        <View style={[styles.communityPage1Child9, styles.communityChildPosition]} />
        <View style={[styles.communityPage1Child10, styles.communityChildPosition]} />
        <Image
          style={[styles.rectangleIcon, styles.rectangleIconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-254.png")}
        />
        <Text style={[styles.searchTags, styles.energyTypo]}>Search Tags</Text>
        <Image
          style={[styles.communityPage1Child11, styles.rectangleIconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-255.png")}
        />
        <Text style={[styles.plasticUse, styles.energyTypo]}>Plastic Use</Text>
        <Image
          style={[styles.communityPage1Child12, styles.communityChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-256.png")}
        />
        <Text style={[styles.pollution, styles.energyTypo]}>Pollution</Text>
        <Image
          style={[styles.communityPage1Child13, styles.communityChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-256.png")}
        />
        <Text style={[styles.energy, styles.energyTypo]}>Energy</Text>
      </View>
    </SafeRefreshableScrollView>
  );
};

const styles = StyleSheet.create({
  communityLayout3: {
    overflow: "hidden",
    borderRadius: Border.br_11xl,
  },
  communityChildBorder: {
    height: 31,
    borderColor: Color.colorLightgray_200,
    borderStyle: "solid",
    top: 538,
    position: "absolute",
  },
  communityLayout: {
    height: 30,
    width: 78,
    left: 283,
    borderWidth: 2,
    borderColor: Color.colorLightgray_200,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_11xl,
  },
  CommunityTitle: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.helveticaNeueBold,
    fontWeight: "700",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  helloNathanPosition: {
    left: "0%",
    position: "absolute",
  },
  ellipseIconPosition: {
    height: 40,
    left: 20,
    position: "absolute",
  },
  categoryContainerLayout: {
    height: 60,
    width: 155,
    fontSize: FontSize.size_xs,
    left: 68,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  rectangleViewLayout: {
    height: 184,
    width: 353,
    backgroundColor: Color.colorCadetblue,
    left: 20,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  communityChildLayout2: {
    height: 1,
    width: 394,
    borderTopWidth: 1,
    borderColor: Color.colorLightgray_100,
    left: 0,
    borderStyle: "solid",
    position: "absolute",
  },
  heartIconLayout: {
    left: "11.96%",
    right: "84.22%",
    width: "3.82%",
    height: "1.76%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  chatIconLayout: {
    height: 15,
    width: 15,
    left: 128,
  },
  mailIconLayout: {
    left: 334,
    height: 15,
    width: 15,
  },
  inboxIconLayout: {
    left: 295,
    height: 15,
    width: 15,
  },
  textTypo1: {
    height: 12,
    width: 29,
    left: 75,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.helveticaNeueLight,
  },
  textTypo: {
    left: 156,
    height: 12, 
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.helveticaNeueLight,
  },
  community1Icon: { 
    top: 342,    
  }, 
  community2Icon: {
    top: 695, 
  }, 
  communityChildLayout1: {
    width: 2,
    borderRightWidth: 2,
    left: 115,
  },
  communityChildPosition1: {
    left: 321,
    width: 2,
    borderRightWidth: 2,
  },
  communityChildPosition: {
    top: 891,
    height: 31,
    borderColor: Color.colorLightgray_200,
    borderStyle: "solid",
    position: "absolute",
  },
  textIconPosition: {
    top: 899,
    position: "absolute",
  },
  rectangleIconLayout: {
    height: 48,
    borderRadius: Border.br_71xl,
    top: 168,
    position: "absolute",
  },
  energyTypo: {
    fontSize: FontSize.size_mini,
    top: 182,
    fontWeight: "500",
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.helveticaNeueBold,
    position: "absolute",
  },
  communityChildLayout: {
    width: 94,
    height: 48,
    borderRadius: Border.br_71xl,
    top: 168,
    position: "absolute",
  },
  home1FlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorWhite,
    fontFamily: FontFamily.karlaRegular,
    fontSize: FontSize.size_smi_3,
    width: 50,
    height: 15,
    left: 0,
    textAlign: "center",
    position: "absolute",
  },
  iconPosition: {
    left: "25.9%",
    right: "26.29%",
    width: "47.81%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  communityPage1Item: {
    width: 165,
    borderWidth: 2,
    left: 32,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_11xl,
  },
  communityPage1Inner: {
    top: 539,
  },
  pageHeader: {
    height: "72.31%",
    width: "84.39%",
    fontSize: FontSize.size_11xl,
    left: "0%",
    position: "absolute",
    top: "0%",
  },

  icon: {
    height: "100%",
    width: "100%",
  },
  cogWorkLoadingCogGearSet: {
    left: "88.15%",
    top: "-1.54%",
    right: "-0.87%",
    bottom: "33.85%",
    width: "12.72%",
    height: "67.69%",
    position: "absolute",
  },
  profileAndHiType: {
    height: "98.48%",
    width: "98.3%",
    top: "1.52%",
    right: "0%",
    bottom: "0%",
    left: "1.7%",
    position: "absolute",
  },
  arrowRightMiniCircle: {
    top: "-7.58%",
    right: "85.8%",
    bottom: "31.82%",
    width: "14.2%",
    height: "75.76%",
  },
  headerWithBackarrow: {
    top: 88,
    left: 18,
    width: 352,
    height: 66,
    position: "absolute",
  },
  ellipseIcon: {
    top: 240,
    width: 40,
    height: 40,
  },
  category: {
    fontFamily: FontFamily.helveticaNeueBold,
    fontWeight: "700",
  },
  username10h: {
    textAlign : "left", 
    fontWeight: "500",
    fontFamily: FontFamily.helveticaNeueLight,
    postition: "absolute", 
    overflow :"hidden"
  },
  categoryUsernameContainer: {
    top: 245,
  },
  communityPageFirstRectangle: {
    top: 342,
  },
  Community1: {
    top: 290,
    fontSize: FontSize.size_lg,
    width: 309,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.helveticaNeueBold,
    fontWeight: "700",
  },
  Community2: {
    top: 650,
    fontSize: FontSize.size_lg,
    width: 309,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.helveticaNeueBold,
    fontWeight: "700",
  }, 
  lineView: {
    top: 581,
  },
  communityPage1Child1: {
    top: 228,
  },
  heartRewardSocialRatingMeIcon: {
    top: "60.5%",
    bottom: "34.15%",
  },
  chatBubbleTypingOvalMessaIcon: {
    top: 546,
    position: "absolute",
  },
  mailSendEmailMessageSendIcon: {
    top: 546,
    position: "absolute",
  },
  inboxTray1MailEmailOutboIcon: {
    top: 546,
    position: "absolute",
  },
  text: {
    top: 546,
    position: "absolute",
  },
  text1: {
    top: 546,
    position: "absolute",
  },
  communityPage1Child2: {
    height: 31,
    borderColor: Color.colorLightgray_200,
    borderStyle: "solid",
    top: 538,
    position: "absolute",
  },
  communityPage1Child3: {
    height: 31,
    borderColor: Color.colorLightgray_200,
    borderStyle: "solid",
    top: 538,
    position: "absolute",
  },
  communityPage1Child4: {
    width: 165,
    borderWidth: 2,
    left: 32,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_11xl,
  },
  communityPage1Child5: {
    top: 892,
  },
  communityPage1Child6: {
    top: 593,
    width: 40,
    height: 40,
  },
  categoryUsernameContainer1: {
    top: 598,
  },
  communityPageSecondRectangle: {
    top: 695,
  },
  communityPage1Child8: {
    top: 934,
  },
  heartRewardSocialRatingMeIcon1: {
    top: "105.52%",
    bottom: "-7.28%",
  },
  chatBubbleTypingOvalMessaIcon1: {
    height: 15,
    width: 15,
    left: 128,
  },
  mailSendEmailMessageSendIcon1: {
    left: 334,
    height: 15,
    width: 15,
  },
  inboxTray1MailEmailOutboIcon1: {
    left: 295,
    height: 15,
    width: 15,
  },
  text2: {
    height: 11,
    width: 29,
    left: 75,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.helveticaNeueLight,
  },
  text3: {
    left: 156,
    height: 11,
    width: 29,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.helveticaNeueLight,
  },
  communityPage1Child9: {
    width: 2,
    borderRightWidth: 2,
    left: 115,
  },
  communityPage1Child10: {
    left: 321,
    width: 2,
    borderRightWidth: 2,
  },
  rectangleIcon: {
    width: 110,
    left: 20,
    height: 48,
    borderRadius: Border.br_71xl,
    top: 168,
  },
  searchTags: {
    left: 32,
    top: 182,
  },
  communityPage1Child11: {
    left: 142,
    width: 109,
  },
  plasticUse: {
    left: 158,
  },
  communityPage1Child12: {
    left: 263,
  },
  pollution: {
    left: 279,
  },
  communityPage1Child13: {
    left: 369,
  },
  energy: {
    left: 391,
  },
  home1: {
    top: 28,
  },
  home3HomeHouseRoofShelteIcon: {
    height: "55.81%",
    bottom: "44.19%",
  },
  home: {
    height: 43,
    width: 50,
  },
  heartRewardSocialRatingMeIcon2: {
    height: "53.33%",
    width: "51.79%",
    right: "24.7%",
    bottom: "46.67%",
    left: "23.51%",
    top: "0%",
    position: "absolute",
  },
  connect1: {
    top: 30,
  },
  connect: {
    height: 45,
    width: 50,
  },
  magnifyingGlassGlassSearchIcon: {
    top: 0,
    left: 13,
    width: 24,
    height: 25,
    position: "absolute",
  },
  explore1: {
    top: 29,
  },
  explore: {
    height: 44,
    width: 50,
  },
  pencilChangeEditModifyPenIcon: {
    height: "53.69%",
    bottom: "46.31%",
  },
  navigationBar: {
    top: 729,
    backgroundColor: Color.colorDarkslategray_300,
    width: 393,
    height: 123,
    flexDirection: "row",
    paddingHorizontal: Padding.p_19xl,
    paddingVertical: Padding.p_mini,
    gap: Gap.gap_md,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  communityPage1: {
    flex: 1,
    height: 900,
    width: "100%",
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
  },
});

export default CommunityPage;
