import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

import Card from "@/components/Card";
import FlexView from "@/components/FlexView";
import PageHeader from "@/components/PageHeader";
import { SafeRefreshableScrollView } from "@/components/SafeRefreshableScrollView";
import { Border, Color, FontFamily, FontSize, Gap, Padding, sxUtilities } from "@/GlobalStyles";

const ConnectPage = () => {
  const navigation = useNavigation();

  const sections = [
    {
      title: "Community Forum",
      content: "Connect with others in your community through posts and alerts",
      bgColor: "#bbe6e6",
      navigateTo: "CommunityPage",
    },
    {
      title: "Find a Therapist",
      content: "Get connected with a professional to help relieve eco-anxiety",
      bgColor: Color.colorYellowgreen_200,
      navigateTo: "TherapyPage",
    },
    {
      title: "Emergency Resources",
      content: "Get informed of the necessary procedure and contacts in emergency situations",
      bgColor: "#f59d0e",
      navigateTo: "EmergencyResourcesPage",
    },
  ];

  return (
    <SafeRefreshableScrollView>
      <FlexView flexDirection="column" style={[styles.connectPage, sxUtilities.flex1, { padding: Padding.p_mini }]}>
        <View>
          <PageHeader title="Connect" />
        </View>

        <View className="nfc-cards-section" style={[sxUtilities.flex1]}>
          {sections.map((section, index) => (
            <Card key={index} onPress={() => navigation.navigate(section.navigateTo)} containerStyle={{ backgroundColor: section.bgColor }}>
              <Text style={[sxUtilities.heading2, { width: "100%", textAlign: "left" }]}>{section.title}</Text>
              <Text style={[{ width: "80%" }]}>{section.content}</Text>
            </Card>
          ))}
        </View>
      </FlexView>
    </SafeRefreshableScrollView>
  );
};

const styles = StyleSheet.create({
  connectLayout: {
    overflow: "hidden",
    borderRadius: Border.br_11xl,
  },
  connectPageInnerLayout: {
    left: 21,
    height: 160,
    width: 353,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  home1FlexBox: {
    height: 15,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorWhite,
    fontFamily: FontFamily.karlaRegular,
    fontSize: FontSize.size_smi_3,
    width: 50,
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
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  communityForumTypo: {
    width: 183,
    left: 45,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.helveticaNeueLight,
    fontWeight: "700",
    position: "absolute",
  },
  getTypo: {
    height: 90,
    fontSize: FontSize.size_xs,
    width: 183,
    left: 45,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.helveticaNeueLight,
    position: "absolute",
  },
  connectPageChild: {
    top: 20,
    left: 139,
    backgroundColor: Color.colorBlack,
    height: 37,
    position: "absolute",
  },
  profileAndHiTypeChild: {
    height: "73.85%",
    width: "14.16%",
    right: "0%",
    bottom: "26.15%",
    left: "85.84%",
    display: "none",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  helloNathan: {
    height: "72.31%",
    width: "84.39%",
    fontSize: FontSize.size_11xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.helveticaNeueLight,
    fontWeight: "700",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  goodMorning: {
    top: "55.38%",
    fontWeight: "300",
    textAlign: "center",
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.helveticaNeueLight,
    left: "0%",
    display: "none",
    position: "absolute",
  },
  profileAndHiType: {
    top: 88,
    left: 24,
    width: 346,
    height: 65,
    position: "absolute",
  },
  connectPageItem: {
    top: 164,
    left: 20,
    backgroundColor: "#bbe6e6",
    height: 160,
    width: 353,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  connectPageInner: {
    top: 348,
    backgroundColor: Color.colorYellowgreen_200,
  },
  rectanglePressable: {
    top: 532,
    backgroundColor: "#f59d0e",
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
  heartRewardSocialRatingMeIcon: {
    height: "53.33%",
    width: "51.79%",
    right: "24.7%",
    bottom: "46.67%",
    left: "23.51%",
    top: "0%",
    maxWidth: "100%",
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
  communityForum: {
    top: 192,
    height: 36,
  },
  connectWithOthers: {
    top: 217,
  },
  getConnectedWith: {
    top: 401,
  },
  getInformedOf: {
    top: 588,
  },
  findATherapist: {
    top: 376,
    height: 29,
  },
  emergencyResources: {
    top: 560,
    width: 218,
    height: 28,
    left: 45,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.helveticaNeueLight,
    fontWeight: "700",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  cogWorkLoadingCogGearSet: {
    left: "83.72%",
    top: "10.33%",
    right: "5.09%",
    bottom: "84.51%",
    width: "11.2%",
    height: "5.16%",
    position: "absolute",
  },
  connectPage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
  },
});

export default ConnectPage;
