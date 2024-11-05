import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

import FlexView from "@/components/FlexView";
import PageHeader from "@/components/PageHeader";
import { Recommendations } from "@/components/Recommedations";
import { SafeRefreshableScrollView } from "@/components/SafeRefreshableScrollView";
import { Border, Color, FontFamily, FontSize, Gap, Padding } from "@/GlobalStyles";

const ArticlesPage3 = () => {
  const navigation = useNavigation();

  return (
    <SafeRefreshableScrollView>
      <PageHeader title={"Articles"} back={true} />

      <FlexView flexDirection="column " style={([styles.articlesPage1], { minHeight: 800, paddingVertical: 20 })} flex={10} gap={40}>
        <View style={[styles.component2, styles.component2Position1]}>
          <Image
            style={[styles.component2Child, styles.component2Position]}
            contentFit="cover"
            source={require("../assets/group-6874.png")}
          />
          <View style={[styles.component2Inner, styles.component2Position]}>
            <View style={[styles.groupChild, styles.groupInnerBg]} />
          </View>
          <Image style={styles.component2Item} contentFit="cover" source={require("../assets/group-6873.png")} />
          <Text style={[styles.deforestation, styles.plasticUseTypo]}>Deforestation</Text>
          <Text style={[styles.plasticUse, styles.plasticUseTypo]}>Plastic Use</Text>

          <View style={[styles.rectangleView, styles.component2Position]} />
          <Text style={[styles.biodiversityLoss, styles.plasticUseTypo]}>{`Biodiversity
Loss`}</Text>
          <Text style={[styles.pollutions, styles.plasticUseTypo]}>Pollutions</Text>
          <Text style={[styles.naturalDisasters, styles.plasticUseTypo]}>Natural Disasters</Text>
          <Text style={[styles.categories, styles.plasticUseTypo]}>Categories</Text>
          <Image
            style={styles.cat1NatureHeadCatPetAniIcon}
            contentFit="cover"
            source={require("../assets/cat1natureheadcatpetanimalsfelyne.png")}
          />
        </View>

        <View style={styles.articlesPage1Child} />

        {/* <View style={[styles.headerWithBackarrow, styles.component2Position1]}>
          <View style={[styles.profileAndHiType, styles.groupChildPosition1]}>
            <Image style={styles.profileAndHiTypeChild} contentFit="cover" source={require("../assets/ellipse-26.png")} />
          </View>
        </View> */}

        <View style={[styles.articlesPage1Item, styles.itemShadowBox]}></View>
        <View style={[styles.articlesPage1Inner, styles.groupInnerBg]} />

        <View style={styles.lineView} />

        <View style={[styles.rectangleParent, styles.groupItemLayout]}>
          <View style={[styles.groupItem, styles.groupItemLayout]} />
          <View style={[styles.groupInner, styles.groupInnerBg]} />
        </View>
      </FlexView>
      <View style={{ padding: Padding.p_mini }}>
        <Recommendations direction="vertical" />
      </View>
    </SafeRefreshableScrollView>
  );
};

const styles = StyleSheet.create({
  component2Position1: {
    left: 18,
    // position: "absolute",
  },
  groupChildPosition1: {
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  groupChildPosition: {
    left: "0%",
    top: "0%",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  itemShadowBox: {
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  groupInnerBg: {
    backgroundColor: Color.colorYellowgreen_200,
    borderRadius: Border.br_3xs,
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
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  component2Position: {
    bottom: "14.65%",
    top: "28.03%",
    width: "22.33%",
    height: "57.32%",
    position: "absolute",
  },
  plasticUseTypo: {
    fontFamily: FontFamily.karlaExtraBold,
    fontWeight: "800",
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  groupItemLayout: {
    height: 213,
    width: 331,
    // position: "absolute",
  },
  profileAndHiTypeChild: {
    height: "73.85%",
    width: "14.16%",
    bottom: "26.15%",
    left: "85.84%",
    display: "none",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  pageHeader: {
    fontSize: FontSize.size_11xl, // keep the font size as needed
    color: Color.colorBlack, // text color
    fontFamily: FontFamily.helveticaNeueBold,
    fontWeight: "700",
    marginLeft: 5, // Add a margin to space the text from the image
  },

  profileAndHiType: {
    height: "98.48%",
    width: "98.3%",
    left: "1.7%",
    top: "1.52%",
  },
  icon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  arrowRightMiniCircle: {
    right: "85.8%",
    bottom: "24.24%",
    width: "14.2%",
    height: "75.76%",
    position: "absolute",
  },
  cogWorkLoadingCogGearSet: {
    left: "88.35%",
    right: "-0.85%",
    bottom: "31.82%",
    width: "12.5%",
    height: "66.67%",
    top: "1.52%",
    position: "absolute",
  },
  headerWithBackarrow: {
    // top: 87,
    width: 352,
    height: 66,
  },
  articlesPage1Item: {
    // top: 759,
    left: 31,
    width: 332,
    height: 390,
    // position: "absolute",
  },
  articlesPage1Inner: {
    // top: 791,
    left: 50,
    width: 297,
    height: 154,
    // position: "absolute",
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
    left: 13,
    width: 24,
    height: 25,
    top: 0,
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
  component2Child: {
    right: "51.61%",
    left: "26.05%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupChild: {
    height: "100%",
    width: "100%",
    left: "0%",
    top: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  component2Inner: {
    right: "25.81%",
    left: "51.86%",
  },
  component2Item: {
    top: "27.39%",
    right: "77.42%",
    bottom: "15.29%",
    left: "0.25%",
    width: "22.33%",
    height: "57.32%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  deforestation: {
    left: 5,
    fontSize: FontSize.size_xs,
    top: 139,
    fontWeight: "800",
  },
  pollutions: {
    left: 323,
    fontSize: FontSize.size_xs,
    top: 139,
    fontWeight: "800",
  },
  naturalDisasters: {
    left: 424,
    fontSize: FontSize.size_xs,
    top: 139,
    fontWeight: "800",
  },

  categories: {
    fontSize: FontSize.size_5xl,
    left: "0%",
    top: "0%",
  },
  rectangleView: {
    left: "77.67%",
    backgroundColor: Color.colorYellowgreen_200,
    borderRadius: Border.br_3xs,
    right: "0%",
    top: "28.03%",
  },
  plasticUse: {
    left: 118,
    fontSize: FontSize.size_xs,
    top: 139,
    fontWeight: "800",
  },
  biodiversityLoss: {
    left: 218,
    fontSize: FontSize.size_xs,
    top: 139,
    fontWeight: "800",
  },
  cat1NatureHeadCatPetAniIcon: {
    top: 66,
    left: 232,
    width: 44,
    height: 44,
    position: "absolute",
    overflow: "hidden",
  },
  component2: {
    // top: 164,
    width: 403,
    height: 157,
  },
  lineView: {
   // top: 228,
    borderStyle: "solid",
    borderColor: Color.colorLightgray_100,
    borderTopWidth: 1,
    width: 394,
    height: 1,
   // left: 0,
   // position: "absolute",
  },
  groupItem: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  groupInner: {
    top: 32,
    left: 178,
    width: 138,
    height: 150,
    position: "absolute",
  },
  rectangleParent: {
    // top: 361,
    left: 30,
  },
  articlesPage1: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: "100%",
    width: "100%",
  },
});

export default ArticlesPage3;
