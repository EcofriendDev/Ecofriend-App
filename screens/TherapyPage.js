import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { ImageAndIconAssets } from "@/components/Icons";
import { SafeRefreshableScrollView } from "@/components/SafeRefreshableScrollView";
import { Border, Color, FontFamily, FontSize, Gap, Padding, sxUtilities } from "@/GlobalStyles";

const TherapyPage = () => {
  const navigation = useNavigation();

  return (
    <SafeRefreshableScrollView>
      <View style={[styles.therapyPage1]}>
        <View style={[styles.rectangleOne, styles.rectangleLayout, sxUtilities.widthFull]}>
          <View style={[styles.frameChild, styles.frameChildPosition]} />
          <View style={styles.frameItem}>
            <Image
              style={{ width: '100%', height: '100%' }} // scale to fit the view
              contentFit="cover"
              source={ImageAndIconAssets.Therapist1Icon}
            />
          </View>
          <Text style={styles.therapist}>Amy Coleman</Text>
          <Text style={styles.townState}>New York, New York</Text>
          <View style={[styles.pollutionParent, styles.groupChildLayout]}>
            <Text style={[styles.pollution, styles.climateTypo]}>Pollution</Text>
            <Image style={[styles.groupChild, styles.groupPosition]} contentFit="cover" source={require("../assets/rectangle-31.png")} />
          </View>
          <View style={[styles.naturalDisastersParent, styles.groupItemLayout]}>
            <Text style={[styles.naturalDisasters, styles.climateTypo]}>Natural Disasters</Text>
            <Image style={[styles.groupItem, styles.groupItemLayout]} contentFit="cover" source={require("../assets/rectangle-261.png")} />
          </View>
          <View style={[styles.climateParent, styles.groupInnerLayout]}>
            <Text style={[styles.climate, styles.climateTypo]}>Climate</Text>
            <Image
              style={[styles.groupInner, styles.groupInnerLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-260.png")}
            />
          </View>
          <Image
            style={[styles.star1RewardRatingRateSocIcon, styles.star1IconLayout]}
            contentFit="cover"
            source={require("../assets/star1rewardratingratesocialstarmediafavoritelikestars.png")}
          />
          <Image
            style={[styles.star1RewardRatingRateSocIcon1, styles.star1IconLayout]}
            contentFit="cover"
            source={require("../assets/star1rewardratingratesocialstarmediafavoritelikestars1.png")}
          />
          <Image
            style={[styles.star1RewardRatingRateSocIcon2, styles.star1IconLayout]}
            contentFit="cover"
            source={require("../assets/star1rewardratingratesocialstarmediafavoritelikestars1.png")}
          />
          <Image
            style={[styles.star1RewardRatingRateSocIcon3, styles.star1IconLayout]}
            contentFit="cover"
            source={require("../assets/star1rewardratingratesocialstarmediafavoritelikestars1.png")}
          />
          <Image
            style={[styles.star1RewardRatingRateSocIcon4, styles.star1IconLayout]}
            contentFit="cover"
            source={require("../assets/star1rewardratingratesocialstarmediafavoritelikestars1.png")}
          />
        </View>
        <Text style={[styles.ecofriendRecommended, styles.therapyTypo]}>
          <Text style={styles.ecofriend}>Ecofriend</Text>
          <Text style={styles.recommended}> Recommended</Text>
        </Text>
        {/*}
        <Image
          style={[styles.locationPin3NavigationMapIcon, styles.star1IconLayout, {martinTop:10}]}
          contentFit="cover"
          source={require("../assets/locationpin3navigationmapmapspingpslocation.png")}
        />*/}
        <View style={[styles.rectangleSecond, styles.rectangleLayout]}>
          <View style={[styles.frameChild, styles.frameChildPosition]} />
          <View style={styles.frameItem}>
            <Image
              style={{ width: '100%', height: '100%' }} // scale to fit the view
              contentFit="cover"
              source={ImageAndIconAssets.Therapist2Icon}
            />
            
          </View>
          <Text style={styles.therapist}>Maia Kiley </Text>
          <Text style={styles.townState}>Los Angeles, CA</Text>
          <View style={[styles.pollutionParent, styles.groupChildLayout]}>
            <Text style={[styles.pollution, styles.climateTypo]}>Pollution</Text>
            <Image style={[styles.groupChild, styles.groupPosition]} contentFit="cover" source={require("../assets/rectangle-31.png")} />
          </View>
          <View style={[styles.naturalDisastersParent, styles.groupItemLayout]}>
            <Text style={[styles.naturalDisasters, styles.climateTypo]}>Natural Disasters</Text>
            <Image style={[styles.groupItem, styles.groupItemLayout]} contentFit="cover" source={require("../assets/rectangle-261.png")} />
          </View>
          <View style={[styles.climateParent, styles.groupInnerLayout]}>
            <Text style={[styles.climate, styles.climateTypo]}>Climate</Text>
            <Image
              style={[styles.groupInner, styles.groupInnerLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-260.png")}
            />
          </View>
          <Image
            style={[styles.star1RewardRatingRateSocIcon, styles.star1IconLayout]}
            contentFit="cover"
            source={require("../assets/star1rewardratingratesocialstarmediafavoritelikestars.png")}
          />
          <Image
            style={[styles.star1RewardRatingRateSocIcon1, styles.star1IconLayout]}
            contentFit="cover"
            source={require("../assets/star1rewardratingratesocialstarmediafavoritelikestars1.png")}
          />
          <Image
            style={[styles.star1RewardRatingRateSocIcon2, styles.star1IconLayout]}
            contentFit="cover"
            source={require("../assets/star1rewardratingratesocialstarmediafavoritelikestars1.png")}
          />
          <Image
            style={[styles.star1RewardRatingRateSocIcon3, styles.star1IconLayout]}
            contentFit="cover"
            source={require("../assets/star1rewardratingratesocialstarmediafavoritelikestars1.png")}
          />
          <Image
            style={[styles.star1RewardRatingRateSocIcon4, styles.star1IconLayout]}
            contentFit="cover"
            source={require("../assets/star1rewardratingratesocialstarmediafavoritelikestars1.png")}
          />
        </View>
        <Image
          style={[styles.locationPin3NavigationMapIcon1, styles.star1IconLayout]}
          contentFit="cover"
          source={require("../assets/locationpin3navigationmapmapspingpslocation.png")}
        />
          <View style={[styles.rectangleThird, styles.rectangleLayout, sxUtilities.widthFull]}>
          <View style={[styles.frameChild, styles.frameChildPosition]} />
          <View style={styles.frameItem}>
            <Image
              style={{ width: '100%', height: '100%' }} // scale to fit the view
              contentFit="cover"
              source={ImageAndIconAssets.Therapist3Icon}
            />
          </View>
          <Text style={styles.therapist}>Michael Burke</Text>
          <Text style={styles.townState}>New York, NY</Text>
          <View style={[styles.pollutionParent, styles.groupChildLayout]}>
            <Text style={[styles.pollution, styles.climateTypo]}>Pollution</Text>
            <Image style={[styles.groupChild, styles.groupPosition]} contentFit="cover" source={require("../assets/rectangle-31.png")} />
          </View>
          <View style={[styles.naturalDisastersParent, styles.groupItemLayout]}>
            <Text style={[styles.naturalDisasters, styles.climateTypo]}>Natural Disasters</Text>
            <Image style={[styles.groupItem, styles.groupItemLayout]} contentFit="cover" source={require("../assets/rectangle-261.png")} />
          </View>
          <View style={[styles.climateParent, styles.groupInnerLayout]}>
            <Text style={[styles.climate, styles.climateTypo]}>Climate</Text>
            <Image
              style={[styles.groupInner, styles.groupInnerLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-260.png")}
            />
          </View>
          <Image
            style={[styles.star1RewardRatingRateSocIcon, styles.star1IconLayout]}
            contentFit="cover"
            source={require("../assets/star1rewardratingratesocialstarmediafavoritelikestars.png")}
          />
          <Image
            style={[styles.star1RewardRatingRateSocIcon1, styles.star1IconLayout]}
            contentFit="cover"
            source={require("../assets/star1rewardratingratesocialstarmediafavoritelikestars1.png")}
          />
          <Image
            style={[styles.star1RewardRatingRateSocIcon2, styles.star1IconLayout]}
            contentFit="cover"
            source={require("../assets/star1rewardratingratesocialstarmediafavoritelikestars1.png")}
          />
          <Image
            style={[styles.star1RewardRatingRateSocIcon3, styles.star1IconLayout]}
            contentFit="cover"
            source={require("../assets/star1rewardratingratesocialstarmediafavoritelikestars1.png")}
          />
          <Image
            style={[styles.star1RewardRatingRateSocIcon4, styles.star1IconLayout]}
            contentFit="cover"
            source={require("../assets/star1rewardratingratesocialstarmediafavoritelikestars1.png")}
          />
        </View>
        <View style={[styles.therapyPage1Child, styles.groupItemLayout]} />
        <View style={styles.headerWithBackarrow}>
          <View style={styles.profileAndHiType}>
            <Text style={[styles.therapy, styles.therapyPosition, { left: 40 }]}> Therapy</Text>
            <Pressable style={styles.cogWorkLoadingCogGearSet} onPress={() => navigation.navigate("MyProfile1")}>
              <Image
                style={[styles.icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/cogworkloadingcoggearsettingsmachine.png")}
              />
            </Pressable>
          </View>
          <Pressable style={[styles.arrowRightMiniCircle, styles.therapyPosition]} onPress={() => navigation.navigate("ConnectPage")}>
            <Image style={[styles.icon, styles.iconLayout]} contentFit="cover" source={require("../assets/arrowrightminicircle.png")} />
          </Pressable>
        </View>
        <Image
          style={[styles.locationPin3NavigationMapIcon2, styles.star1IconLayout]}
          contentFit="cover"
          source={require("../assets/locationpin3navigationmapmapspingpslocation.png")}
        />
      </View>
    </SafeRefreshableScrollView>
  );
};

const styles = StyleSheet.create({
  therapyLayout: {
    borderRadius: Border.br_11xl,
    overflow: "hidden",
  },
  rectangleLayout: {
    height: 191,
    width: 353,
  },
  frameChildPosition: {
    left: 0,
    position: "absolute",
  },
  groupChildLayout: {
    height: 34,
    width: 88,
    position: "absolute",
  },
  climateTypo: {
    height: 17,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.helveticaNeueLight,
    left: 17,
    position: "absolute",
  },
  groupPosition: {
    borderRadius: Border.br_71xl,
    left: 0,
    top: 0,
  },
  groupItemLayout: {
    height: 37,
    position: "absolute",
  },
  groupInnerLayout: {
    width: 83,
    height: 34,
    position: "absolute",
  },
  star1IconLayout: {
    height: 14,
    width: 14,
    position: "absolute",
  },
  therapyTypo: {
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeueBold,
    fontWeight: "700",
  },
  therapyPosition: {
    left: "0%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
    textAlign: "center",
    left: 0,
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
  frameChild: {
    borderRadius: Border.br_base,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    top: 0,
    height: 191,
    width: 353,
    backgroundColor: Color.colorWhite,
  },
  frameItem: {
    left: 25,
    backgroundColor: Color.colorYellowgreen_200,
    height: 124,
    width: 110,
    top: 21,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  therapist: {
    height: 29,
    width: 175,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.helveticaNeueLight,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    left: 151,
    top: 21,
    position: "absolute",
  },
  townState: {
    top: 51,
    color: Color.colorGray_200,
    fontSize: FontSize.size_sm,
    left: 150,
    height: 29,
    width: 175,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeueLight,
    position: "absolute",
  },
  pollution: {
    width: 55,
    top: 8,
    height: 17,
  },
  groupChild: {
    height: 34,
    width: 88,
    position: "absolute",
  },
  pollutionParent: {
    top: 92,
    left: 151,
  },
  naturalDisasters: {
    top: 10,
    width: 110,
  },
  groupItem: {
    width: 141,
    height: 37,
    borderRadius: Border.br_71xl,
    left: 0,
    top: 0,
  },
  naturalDisastersParent: {
    top: 133,
    width: 141,
    height: 37,
    left: 151,
  },
  climate: {
    width: 49,
    top: 8,
    height: 17,
  },
  groupInner: {
    borderRadius: Border.br_71xl,
    left: 0,
    top: 0,
  },
  climateParent: {
    left: 243,
    top: 92,
  },
  star1RewardRatingRateSocIcon: {
    left: 215,
    top: 72,
    height: 14,
    width: 14,
    overflow: "hidden",
  },
  star1RewardRatingRateSocIcon1: {
    top: 72,
    height: 14,
    width: 14,
    overflow: "hidden",
    left: 151,
  },
  star1RewardRatingRateSocIcon2: {
    left: 167,
    top: 72,
    height: 14,
    width: 14,
    overflow: "hidden",
  },
  star1RewardRatingRateSocIcon3: {
    left: 183,
    top: 72,
    height: 14,
    width: 14,
    overflow: "hidden",
  },
  star1RewardRatingRateSocIcon4: {
    left: 199,
    top: 72,
    height: 14,
    width: 14,
    overflow: "hidden",
  },
  rectangleOne: {
    top: 207,
    left: 17,
    width: 353,
    position: "absolute",
  },
  rectangleThird: {
    top: 640,
    left: 17,
    width: 353,
    position: "absolute",
  },
  ecofriend: {
    color: Color.colorDarkslategray_300,
  },
  recommended: {
    color: Color.colorBlack,
  },
  ecofriendRecommended: {
    top: 165,
    width: 337,
    height: 41,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.helveticaNeueLight,
    fontWeight: "700",
    left: 17,
    position: "absolute",
  },
  locationPin3NavigationMapIcon: {
    top: 249,
    left: 168,
  },
  rectangleSecond: {
    top: 422,
    left: 17,
    width: 353,
    position: "absolute",
  },
  locationPin3NavigationMapIcon1: {
    top: 742,
    left: 170,
  },
  therapy: {
    height: "72.31%",
    width: "84.39%",
    fontSize: FontSize.size_11xl,
    top: "0%",
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeueBold,
    fontWeight: "700",
    color: Color.colorBlack,
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
    top: 87,
    left: 18,
    width: 352,
    height: 66,
    position: "absolute",
  },
  locationPin3NavigationMapIcon2: {
    top: 732,
    left: 169,
    height: 14,
    width: 14,
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
    overflow: "hidden",
  },
  therapyPage1: {
    flex: 1,
    height: 852,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default TherapyPage;
