import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

import FlexView from "@/components/FlexView";
import PageHeader from "@/components/PageHeader";
import { SafeRefreshableScrollView } from "@/components/SafeRefreshableScrollView";
import { Border, Color, FontFamily, FontSize, Gap, Padding } from "@/GlobalStyles";

const EmergencyResourcesPage = () => {
  const navigation = useNavigation();

  return (
    <SafeRefreshableScrollView>
      <PageHeader back={true} title="Resources" />
      <FlexView style={[styles.emergencyResourcesPage1, { paddingVertical: 20 }]} direction="column" gap={30}>
        <View style={[styles.component7, styles.component7Position]}>
          <View style={[styles.component7Inner, styles.component7ChildPosition]}>
            <View style={[styles.groupChild3, styles.childPosition]} />
          </View>
          <Text style={[styles.categories, styles.categoryIconTypo]}>Categories</Text>
          <Text style={[styles.deforestationIconText, styles.categoryIconTypo]}>Deforestation</Text>
          <Text style={[styles.plasticUseIconText, styles.categoryIconTypo]}>Plastic Use</Text>
          <Text style={[styles.biodiversityLossIconText, styles.categoryIconTypo]}>{`Biodiversity
      Loss`}</Text>
          <Text style={[styles.pollutionIconText, styles.categoryIconTypo]}>Pollution</Text>
          <View style={[styles.component7Child1, styles.childPosition]} />
          <Image
            style={[styles.component7Child, styles.component7ChildPosition]}
            contentFit="cover"
            source={require("../assets/group-68741.png")}
          />

          <Image style={styles.component7Item} contentFit="cover" source={require("../assets/group-68731.png")} />
          <Image
            style={styles.cat1NatureHeadCatPetAniIcon}
            contentFit="cover"
            source={require("../assets/cat1natureheadcatpetanimalsfelyne.png")}
          />
          <Image style={styles.pollutionIcon} contentFit="cover" source={require("../assets/PollutionIcon.png")} />
        </View>
        <View style={[styles.emergencyResourcesPage1Item, styles.frameChildPosition]} />

        <View style={[styles.resourceOne, styles.rectangleLayout]}>
          <View style={[styles.frameChild, styles.frameChildPosition]} />
          <View style={styles.frameItem} />
          <Text style={styles.nationalForestService}>National Forest Service</Text>
          <Text style={[styles.townState, styles.textTypo]}>Washington DC</Text>
          <Text style={[styles.phonenumber, styles.textTypo]}>(+1)-800-832-1355</Text>
          <View style={[styles.pollutionParent, styles.groupChildLayout]}>
            <Text style={[styles.pollution, styles.climateTypo]}>Pollution</Text>
            <Image style={[styles.groupChild, styles.groupPosition]} contentFit="cover" source={require("../assets/rectangle-31.png")} />
          </View>
          <View style={[styles.naturalDisastersParent, styles.groupItemLayout]}>
            <Text style={[styles.naturalDisasters, styles.climateTypo]}>Deforestation</Text>
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
            style={[styles.locationPin3NavigationMapIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/locationpin3navigationmapmapspingpslocation.png")}
          />
          <Image
            style={[styles.phoneRinging1AndroidPhoneIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/phoneringing1androidphonemobiledevicesmartphoneiphoneringingincomingcall.png")}
          />
          <Image
            style={[styles.tree3NatureTreePlantClouIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/tree3naturetreeplantcloudshapepark.png")}
          />
        </View>
        <View style={[styles.resourceTwo, styles.rectangleLayout]}>
          <View style={[styles.frameChild, styles.frameChildPosition]} />
          <View style={styles.frameItem} />
          <Text style={styles.nationalForestService}>National Weather Service</Text>
          <Text style={[styles.townState, styles.textTypo]}>Silver Spring, MD</Text>
          <Text style={[styles.phonenumber, styles.textTypo]}>301-427-9855</Text>
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
            style={[styles.locationPin3NavigationMapIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/locationpin3navigationmapmapspingpslocation.png")}
          />
          <Image
            style={[styles.phoneRinging1AndroidPhoneIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/phoneringing1androidphonemobiledevicesmartphoneiphoneringingincomingcall.png")}
          />
          <Image
            style={[styles.tree3NatureTreePlantClouIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/PollutionIcon.png")}
          />
        </View>

        <View style={[styles.resourceThree, styles.rectangleLayout]}>
          <View style={[styles.frameChild, styles.frameChildPosition]} />
          <View style={styles.frameItem} />
          <Text style={styles.nationalForestService}>Ocean Conservancy</Text>
          <Text style={[styles.townState, styles.textTypo]}>Washington DC</Text>
          <Text style={[styles.phonenumber, styles.textTypo]}>1-800-519-1541</Text>
          <View style={[styles.pollutionParent, styles.groupChildLayout]}>
            <Text style={[styles.pollution, styles.climateTypo]}>Pollution</Text>
            <Image style={[styles.groupChild, styles.groupPosition]} contentFit="cover" source={require("../assets/rectangle-31.png")} />
          </View>
          <View style={[styles.naturalDisastersParent, styles.groupItemLayout]}>
            <Text style={[styles.naturalDisasters, styles.climateTypo]}>Biodiverstiy Loss</Text>
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
            style={[styles.locationPin3NavigationMapIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/locationpin3navigationmapmapspingpslocation.png")}
          />
          <Image
            style={[styles.phoneRinging1AndroidPhoneIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/phoneringing1androidphonemobiledevicesmartphoneiphoneringingincomingcall.png")}
          />
          <Image
            style={[styles.tree3NatureTreePlantClouIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/PollutionIcon.png")}
          />
        </View>
      </FlexView>
    </SafeRefreshableScrollView>
  );
};

const styles = StyleSheet.create({
  component7Position: {
    left: 18,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  rectangleLayout: {
    height: 224,
    width: 353,
  },
  frameChildPosition: {
    borderStyle: "solid",
    left: 0,
    // position: "absolute",
  },
  textTypo: {
    color: Color.colorGray_200,
    fontSize: FontSize.size_sm,
    height: 29,
    width: 175,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeueLight,
    position: "absolute",
  },
  groupChildLayout: {
    height: 34,
    width: 88,
    position: "absolute",
  },
  climateTypo: {
    height: 17,
    left: 17,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.helveticaNeueLight,
    position: "absolute",
  },
  groupPosition: {
    borderRadius: Border.br_71xl,
    left: 0,
    top: 0,
  },
  groupItemLayout: {
    width: 141,
    height: 37,
    position: "absolute",
  },
  groupInnerLayout: {
    width: 83,
    height: 34,
    position: "absolute",
  },
  iconLayout: {
    height: 14,
    width: 14,
    position: "absolute",
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
  component7ChildPosition: {
    bottom: "14.65%",
    top: "28.03%",
    width: "22.33%",
    height: "57.32%",
  },
  childPosition: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorYellowgreen_200,
    right: "0%",
    position: "absolute",
  },
  categoryIconTypo: {
    fontFamily: FontFamily.karlaExtraBold,
    fontWeight: "800",
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  resources: {
    height: "72.31%",
    width: "84.39%",
    fontSize: FontSize.size_11xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.helveticaNeueBold,
    fontWeight: "700",
    left: "0%",
    top: "0%",
    position: "absolute",
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
    left: "1.7%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  arrowRightMiniCircle: {
    top: "-7.58%",
    right: "85.8%",
    bottom: "31.82%",
    width: "14.2%",
    height: "75.76%",
    left: "0%",
    position: "absolute",
  },
  headerWithBackarrow: {
    top: 50,
    width: 352,
    height: 66,
  },
  frameChild: {
    borderRadius: Border.br_base,
    borderColor: Color.colorBlack,
    borderWidth: 1,
    top: 0,
    height: 224,
    width: 353,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
  },
  frameItem: {
    left: 25,
    height: 124,
    width: 110,
    backgroundColor: Color.colorYellowgreen_200,
    top: 21,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  nationalForestService: {
    height: 29,
    width: 190,
    fontSize: FontSize.size_mid_3,
    left: 150,
    top: 21,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.helveticaNeueBold,
    fontWeight: "700",
    position: "absolute",
  },

  pollution: {
    width: 55,
    top: 8,
    left: 17,
  },
  groupChild: {
    height: 34,
    width: 88,
    position: "absolute",
  },
  pollutionParent: {
    top: 126,
    left: 151,
  },
  naturalDisasters: {
    top: 10,
    width: 110,
  },
  groupItem: {
    borderRadius: Border.br_71xl,
    left: 0,
    top: 0,
  },
  naturalDisastersParent: {
    top: 167,
    left: 151,
  },
  climate: {
    width: 49,
    top: 8,
    left: 17,
  },
  groupInner: {
    borderRadius: Border.br_71xl,
    left: 0,
    top: 0,
  },
  climateParent: {
    left: 243,
    top: 126,
  },
  locationPin3NavigationMapIcon: {
    top: 60,
    left: 151,
  },
  phoneRinging1AndroidPhoneIcon: {
    top: 80,
    left: 150,
    overflow: "hidden",
  },
  townState: {
    top: 60,
    left: 169,
  },
  phonenumber: {
    top: 80,
    left: 168,
  },
  tree3NatureTreePlantClouIcon: {
    height: "26.79%",
    width: "17%",
    top: "24.55%",
    right: "68.84%",
    bottom: "48.66%",
    left: "14.16%",
    position: "absolute",
  },
  resourceOne: {
    top: 240,
    left: 20,
    width: 353,
    position: "absolute",
  },
  resourceTwo: {
    top: 490,
    left: 20,
    width: 353,
    position: "absolute",
  },
  resourceThree: {
    top: 740,
    left: 20,
    width: 353,
    position: "absolute",
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
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  component7Child: {
    right: "51.61%",
    left: "26.05%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  groupChild3: {
    height: "100%",
    width: "100%",
    left: "0%",
    top: "0%",
    bottom: "0%",
  },
  component7Inner: {
    right: "25.81%",
    left: "51.86%",
    position: "absolute",
  },
  component7Item: {
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
  deforestationIconText: {
    left: 5,
    fontSize: FontSize.size_xs,
    top: 139,
    fontWeight: "800",
  },
  plasticUseIconText: {
    left: 117,
    fontSize: FontSize.size_xs,
    top: 139,
    fontWeight: "800",
  },
  categories: {
    fontWeight: "800",
    fontSize: FontSize.size_5xl,
    left: "0%",
    top: "0%",
  },
  component7Child1: {
    left: "77.67%",
    bottom: "14.65%",
    top: "28.03%",
    width: "22.33%",
    height: "57.32%",
  },
  biodiversityLossIconText: {
    left: 218,
    fontSize: FontSize.size_xs,
    top: 139,
    fontWeight: "800",
  },
  pollutionIconText: {
    left: 328,
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
  pollutionIcon: {
    top: 66,
    left: 328,
    width: 44,
    height: 44,
    position: "absolute",
    overflow: "hidden",
  },
  component7: {
    top: 20,
    width: 403,
    height: 157,
  },
  emergencyResourcesPage1Item: {
    top: 190,
    borderColor: Color.colorLightgray_100,
    borderTopWidth: 1,
    width: 394,
    height: 1,
  },
  emergencyResourcesPage1: {
    flex: 1,
    height: 1000,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default EmergencyResourcesPage;
