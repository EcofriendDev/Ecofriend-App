import { useNavigation } from "@react-navigation/native";
import { Card } from "@rneui/themed";
import { Image } from "expo-image";
import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import Button from "@/components/Buttons";
import FlexView from "@/components/FlexView";
import { Icon, ImageAndIconAssets } from "@/components/Icons";
import PageHeader from "@/components/PageHeader";
import { SafeRefreshableScrollView } from "@/components/SafeRefreshableScrollView";
import { Border, Color, FontFamily, FontSize, Gap, Padding, sxUtilities } from "@/GlobalStyles";
import useClimateNews from "@/services/newsApi";

const ExploreCard = ({ imageUrl = null, content = null }) => (
  <Card
    containerStyle={[
      {
        padding: 0,
        margin: 0,
        zIndex: 2,
        borderCurve: Border.br_mini,
        backgroundColor: "linear-gradient(0deg, #FFFFFF 0%, #FFFFFF 50%, #000000 50% #000000 100%)",
        borderRadius: Border.br_mini,
      },
      sxUtilities.flex1,
    ]}
    wrapperStyle={{
      backgroundColor: "linear-gradient(0deg, #FFFFFF 0%, #FFFFFF 50%, #000000 50% #000000 100%)",
      overflow: "hidden",
      borderRadius: Border.br_mini,
    }}
  >
    <View style={[sxUtilities.flexCol, { minHeight: 210 }]}>
      <View style={[sxUtilities.flex1, { backgroundColor: Color.colorYellowgreen_200, overflow: "hidden", height: 110 }]}>
        {!!imageUrl && <Image style={[{ width: "100%", height: "100%" }]} contentFit="fill" source={imageUrl} />}
      </View>
      <View style={[sxUtilities.flex1, { backgroundColor: Color.colorGainsboro_200, padding: 5, height: 110 }]}>
        <Text>{content ?? <></>}</Text>
      </View>
    </View>
  </Card>
);

const ExplorePage1 = () => {
  const navigation = useNavigation();
  const { news } = useClimateNews();

  const sections = [
    {
      title: "Articles",
      navigateTo: "ArticlesPage3",
      cards: news
        ?.filter((newsItem) => newsItem.urlToImage) // Filter news to only include those with an image
        .slice(0, 2) // Get the first two news items with an image
        .map((newsItem) => ({
          imageUrl: newsItem.urlToImage,
          content: newsItem.content.slice(0, 100),
        })),
    },
    {
      title: "Help Out",
      navigateTo: "HelpOutPage",
      cards: [
        { imageUrl: require("../assets/arborday.png"), content: "Arbor Day Foundation" },
        { imageUrl: require("../assets/oceancleanup.png"), content: "The Ocean Cleanup" },
      ],
    },
    {
      title: "Eco Heroes",
      navigateTo: "EcoHeroesPage",
      cards: [
        { imageUrl: require("../assets/EcoheroGretaThunberg.png"), content: "Greta Thunberg" },
        { imageUrl: require("../assets/EcoHeroDavidAttenborough.png"), content: "David Attenborough" },
      ],
    },
  ];

  return (
    <SafeRefreshableScrollView>
      <FlexView className="nfc-root" style={[styles.explorePage1, sxUtilities.flexCol]}>
        <View style={{ padding: Padding.p_mini }}>
          <PageHeader title="Explore" subtitle={""} />
        </View>

        <Image style={styles.explorepageIcon} contentFit="cover" source={ImageAndIconAssets.ExplorePageIcon} />

        <View style={[styles.explorePage1Item, styles.exploreLayout]} />

        {sections.map((section, index) => (
          <View key={section.title} style={[sxUtilities.flexCol, { gap: Gap.gap_sm }]}>
            <View style={[sxUtilities.flexCol, { gap: Gap.gap_sm, paddingLeft: 20, paddingRight: 10, paddingVertical: 10 }]}>
              <Pressable onPress={() => navigation.navigate(section.navigateTo)}>
                <View style={[sxUtilities.flexRow, { gap: 20 }, sxUtilities.justifyContentBetween, sxUtilities.alignItemsCenter]}>
                  <Text style={[sxUtilities.heading2]}>{section.title} </Text>
                  <View style={{ transform: [{ rotate: "180deg" }] }}>
                    <Button variant="text" onPress={() => navigation.navigate(section.navigateTo)}>
                      <Icon iconAsset={ImageAndIconAssets.ArrowLeftMiniCircle} scale={2} />
                    </Button>
                  </View>
                </View>
              </Pressable>
              <View style={[sxUtilities.flexRow, { gap: 20 }]}>
                {section.cards.map((card, cardIndex) => (
                  <Pressable
                    key={card.imageUrl + ""}
                    style={{ width: 200, minHeight: 200 }}
                    onPress={() => navigation.navigate(section.navigateTo)}
                  >
                    <ExploreCard key={cardIndex} imageUrl={card.imageUrl} content={card.content} />
                  </Pressable>
                ))}
              </View>
            </View>
          </View>
        ))}
      </FlexView>
    </SafeRefreshableScrollView>
  );
};

const styles = StyleSheet.create({
  exploreLayout1: {
    borderRadius: Border.br_11xl,
    overflow: "hidden",
  },
  contentParentPosition: {
    left: 24,
    // position: "absolute",
  },
  exploreLayout: {
    width: "100%",
    marginVertical: 20,
    top: 30,
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    // position: "absolute",
  },
  containerFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  bodyLayout: {
    height: 262,
    width: 333,
    left: 30,
    // position: "absolute",
  },
  body3ChildLayout: {
    height: 211,
    width: 157,
    top: 51,
    position: "absolute",
  },
  glassPosition: {
    top: 0,
    position: "absolute",
  },
  innerChildLayout: {
    height: 99,
    backgroundColor: Color.colorGainsboro_200,
    borderBottomLeftRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_3xs,
    width: 157,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  home1Typo: {
    height: 15,
    display: "flex",
    color: Color.colorWhite,
    fontFamily: FontFamily.karlaRegular,
    fontSize: FontSize.size_smi_3,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
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
  vector2Position: {
    left: "96.4%",
    right: "0%",
    width: "3.6%",
    position: "absolute",
  },
  innerShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  explorePage1Child: {
    // top: 20,
    left: 139,
    backgroundColor: Color.colorBlack,
    width: 114,
    height: 37,
    // position: "absolute",
    overflow: "hidden",
  },
  explorepageIcon: {
    zIndex: -2,
    marginTop: -50,
    marginBottom: -50,
    left: 58,
    width: 272,
    height: 275,
    // position: "absolute",
  },
  helloNathan: {
    height: "72.31%",
    width: "84.39%",
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.hiraKakuStdW8,
    textAlign: "left",
    color: Color.colorBlack,
    left: "0%",
    // top: "0%",
    // position: "absolute",
  },
  goodMorning: {
    // top: "55.38%",
    fontSize: FontSize.size_xl,
    fontWeight: "300",
    display: "none",
    textAlign: "center",
    left: "0%",
    fontFamily: FontFamily.helveticaNeueLight,
  },
  profileAndHiType: {
    // top: 88,
    width: 346,
    height: 65,
  },
  explorePage1Item: {
    // top: 913,
    left: 2,
  },
  explorePage1Inner: {
    // top: 1229,
    left: 0,
  },
  content: {
    // top: 15,
    left: 29,
    width: 248,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_base,
    alignItems: "center",
    flexDirection: "row",
    height: 48,
    // position: "absolute",
  },
  icon: {
    height: 24,
    width: 24,
  },
  stateLayer: {
    padding: Padding.p_5xs,
    flexDirection: "row",
  },
  container: {
    borderRadius: Border.br_81xl,
    flexDirection: "row",
    overflow: "hidden",
  },
  stTrailingIcon: {
    right: 10,
    top: 5,
    width: 48,
    height: 48,
    justifyContent: "center",
    position: "absolute",
  },
  contentParent: {
    // top: 357,
    borderRadius: Border.br_9xl,
    backgroundColor: "#e5e5e5",
    width: 345,
    height: 56,
  },
  body3Child: {
    backgroundColor: Color.colorYellowgreen_200,
    borderRadius: Border.br_3xs,
    width: 157,
    top: 51,
    left: 0,
  },
  helpOut: {
    fontSize: FontSize.size_5xl,
    fontWeight: "800",
    fontFamily: FontFamily.karlaExtraBold,
    color: Color.colorGray_400,
    left: 0,
    textAlign: "center",
  },
  body3Item: {
    left: 175,
    backgroundColor: Color.colorYellowgreen_200,
    borderRadius: Border.br_3xs,
    width: 157,
    top: 51,
  },
  body3Inner: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 163,
    backgroundColor: Color.colorGainsboro_200,
    borderBottomLeftRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_3xs,
    left: 0,
  },
  rectangleView: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 163,
    backgroundColor: Color.colorGainsboro_200,
    borderBottomLeftRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_3xs,
    left: 175,
  },
  vector2Stroke: {
    height: "6.72%",
    // top: "10.04%",
    // bottom: "83.24%",
    left: "96.4%",
    right: "0%",
    width: "3.6%",
    // position: "absolute",
  },
  body3: {
    // top: 1253,
  },
  body2Inner: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 163,
    backgroundColor: Color.colorGainsboro_200,
    borderBottomLeftRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_3xs,
    left: 0,
  },
  body2Child1: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 163,
    backgroundColor: Color.colorGainsboro_200,
    borderBottomLeftRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_3xs,
    left: 175,
  },
  body2: {
    top: 937,
    height: 253,
    width: 333,
    left: 30,
    position: "absolute",
  },
  home1: {
    top: 31,
  },
  home3HomeHouseRoofShelteIcon: {
    height: "55.81%",
    bottom: "44.19%",
  },
  home: {
    height: 43,
    width: 50,
  },
  vectorIcon: {
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
    left: 13,
    height: 25,
    width: 24,
  },
  explore1: {
    top: 29,
  },
  explore: {
    height: 44,
    width: 50,
  },
  vectorIcon1: {
    height: "53.69%",
    bottom: "46.31%",
  },
  navigationBar: {
    top: 729,
    backgroundColor: Color.colorDarkslategray_300,
    width: 393,
    height: 123,
    paddingHorizontal: Padding.p_19xl,
    paddingVertical: Padding.p_mini,
    gap: Gap.gap_md,
    flexDirection: "row",
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  vector2Stroke2: {
    top: "31.07%",
    bottom: "6.07%",
    height: "62.86%",
  },
  articlesParent: {
    height: 28,
    width: 333,
    left: 0,
  },
  body4Child: {
    left: 1,
    width: 157,
    // top: 51,
  },
  frameChild: {
    top: 112,
    left: 0,
  },
  body4Inner: {
    left: 176,
    height: 211,
    width: 157,
    top: 51,
    position: "absolute",
    backgroundColor: Color.colorYellowgreen_200,
    borderRadius: Border.br_3xs,
  },
  janeGoodallObserves: {
    // top: 176,
    left: 11,
    fontSize: FontSize.size_xs,
    lineHeight: 14,
    fontWeight: "700",
    width: 135,
    textAlign: "left",
  },
  body4: {
    top: 450,
  },
  lineView: {
    top: 426,
    left: 0,
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
  explorePage1: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default ExplorePage1;
