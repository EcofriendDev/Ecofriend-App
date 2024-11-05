import { Image } from "expo-image";
import * as React from "react";
import { Linking, Pressable, StyleSheet, Text, View } from "react-native";

import FlexView from "@/components/FlexView";
import { ImageAndIconAssets } from "@/components/Icons";
import PageHeader from "@/components/PageHeader";
import { SafeRefreshableScrollView } from "@/components/SafeRefreshableScrollView";
import { Border, Color, FontFamily, FontSize, Gap, Padding } from "@/GlobalStyles";

const EcoHeroesPage = () => {
  return (
    <SafeRefreshableScrollView>
      <PageHeader back={true} title="Eco Heroes" />
      <FlexView style={[styles.ecoHeroesPage1, { paddingVertical: 20 }]} direction="column" gap={30}>
        
        <View style={[styles.component4, styles.component4Position]}>
          
          <View style={[styles.component4Inner, styles.component4ChildPosition]}>
            <View style={[styles.groupChild7, styles.childPosition]} />
          </View>
          <Image
            style={[styles.deforestationIcon, styles.component4ChildPosition]}
            contentFit="cover"
            source={require("../assets/group-68742.png")}
          />
          <Image 
            style={styles.plasticIcon} 
            contentFit="cover" 
            source={require("../assets/group-68732.png")} />
          <Image
            style={styles.cat1NatureHeadCatPetAniIcon}
            contentFit="cover"
            source={require("../assets/cat1natureheadcatpetanimalsfelyne.png")}
          />
        
          <Text style={[styles.categories, styles.categoryIconTypo]}>Categories</Text>
          <Text style={[styles.deforestationIconText, styles.categoryIconTypo]}>Deforestation</Text>
          <Text style={[styles.plasticUseIconText, styles.categoryIconTypo]}>Plastic Use</Text>
          <Text style={[styles.biodiversityLossIconText, styles.categoryIconTypo]}>{`Biodiversity
Loss`}</Text>
          <Text style={[styles.pollutionIconText, styles.categoryIconTypo]}>Pollution</Text>
          <View style={[styles.component4Child1, styles.childPosition]} />
         
          <Image
            style={styles.pollutionIcon}
            contentFit="cover"
            source={require("../assets/PollutionIcon.png")}
          />
        </View>
        <View style={[styles.ecoHeroesPage1Item, styles.frameChildPosition]} />


        <View style={[styles.ecohero1, styles.rectangleLayout]}>
          <View style={[styles.frameChild, styles.frameChildPosition]} />
          <View style={styles.frameItem}>
          <Image style={styles.ecoheroimage} contentFit="cover" source={ImageAndIconAssets.EcoHero1Icon} />
          </View>
          <Text style={styles.ecoheroname}>Greta Thunberg</Text>
          <View style={[styles.firstButton, styles.groupChildLayout]}>
            <Text style={[styles.firstButtonText, styles.secondButtonPosition]}>Pollution</Text>
            <Image
              style={[styles.groupChild, styles.groupChildPosition]}
              contentFit="cover"
              source={require("../assets/rectangle-31.png")}
            />
          </View>
          <View style={[styles.secondButton, styles.groupInnerLayout]}>
            <Text style={[styles.secondButtonText, styles.secondButtonPosition]}>Climate</Text>
            <Image
              style={[styles.groupInner, styles.groupInnerLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-260.png")}
            />
          </View>
          <View style={[styles.thirdButton, styles.groupInnerLayout]}>
            <Text style={[styles.thirdButtonText, styles.thirdButtonPosition]}>Biodiversity</Text>   
          <Image style={[styles.frameInner, styles.frameInnerLayout]} contentFit="cover" source={require("../assets/rectangle-261.png")} />
         </View>
          <Pressable
            style={[styles.vectorParent, styles.groupItemLayout]}
            onPress={() => Linking.openURL("https://en.wikipedia.org/wiki/Greta_Thunberg")}
          >
            <Image style={[styles.groupItem, styles.groupItemLayout]} contentFit="cover" source={require("../assets/rectangle-2611.png")} />
            <Text style={[styles.learnMore, styles.arrestedPosition]}>Learn More</Text>
          </Pressable>
        </View>

        <View style={[styles.ecohero2, styles.rectangleLayout, { marginTop: 20 }]}>
          <View style={[styles.frameChild, styles.frameChildPosition]} />
          <View style={styles.frameItem} >
              <Image style={styles.ecoheroimage} contentFit="cover" source={ImageAndIconAssets.EcoHero2Icon} />
          </View>
          <Text style={styles.ecoheroname}>David Attenborough </Text>
          <View style={[styles.firstButton, styles.groupChildLayout]}>
            <Text style={[styles.firstButtonText, styles.secondButtonPosition]}>Pollution</Text>
            <Image
              style={[styles.groupChild, styles.groupChildPosition]}
              contentFit="cover"
              source={require("../assets/rectangle-31.png")}
            />
          </View>
      
          <View style={[styles.secondButton, styles.groupInnerLayout]}>
            <Text style={[styles.secondButtonText, styles.secondButtonPosition]}>Climate</Text>
            <Image
              style={[styles.groupInner, styles.groupInnerLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-260.png")}
            />
          </View>
      
          <View style={[styles.thirdButton, styles.groupInnerLayout]}>
            <Text style={[styles.thirdButtonText, styles.thirdButtonPosition]}>Biodiversity</Text>   
          <Image style={[styles.frameInner, styles.frameInnerLayout]} contentFit="cover" source={require("../assets/rectangle-261.png")} />
         </View>
          
          <Pressable
            style={[styles.vectorParent, styles.groupItemLayout]}
            onPress={() => Linking.openURL("https://en.wikipedia.org/wiki/David_Attenborough")}
          >
            <Image style={[styles.groupItem, styles.groupItemLayout]} contentFit="cover" source={require("../assets/rectangle-2611.png")} />
            <Text style={[styles.learnMore, styles.arrestedPosition]}>Learn More</Text>
          </Pressable>
        
        
        
        </View>

        <View style={[styles.rectangleContainer, styles.rectangleLayout, { marginTop: 20 }]}>
          <View style={[styles.frameChild, styles.frameChildPosition]} />
          <View style={styles.frameItem} >
            <Image style={styles.ecoheroimage} contentFit="cover" source={ImageAndIconAssets.EcoHero3Icon} />
          </View>
          <Text style={styles.ecoheroname}>Jane Goodall </Text>
          <View style={[styles.firstButton, styles.groupChildLayout]}>
            <Text style={[styles.firstButtonText, styles.secondButtonPosition]}>Pollution</Text>
            <Image
              style={[styles.groupChild, styles.groupChildPosition]}
              contentFit="cover"
              source={require("../assets/rectangle-31.png")}
            />
          </View>
      
          <View style={[styles.secondButton, styles.groupInnerLayout]}>
            <Text style={[styles.secondButtonText, styles.secondButtonPosition]}>Climate</Text>
            <Image
              style={[styles.groupInner, styles.groupInnerLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-260.png")}
            />
          </View>
          <Image style={[styles.frameInner, styles.frameInnerLayout]} contentFit="cover" source={require("../assets/rectangle-261.png")} />
          <Pressable
            style={[styles.vectorParent, styles.groupItemLayout]}
            onPress={() => Linking.openURL("https://en.wikipedia.org/wiki/Jane_Goodall")}
          >
            <Image style={[styles.groupItem, styles.groupItemLayout]} contentFit="cover" source={require("../assets/rectangle-2611.png")} />
            <Text style={[styles.learnMore, styles.arrestedPosition]}>Learn More</Text>
          </Pressable>
          <View style={[styles.thirdButton, styles.groupInnerLayout]}>
            <Text style={[styles.thirdButtonText, styles.thirdButtonPosition]}>Biodiversity</Text>   
          <Image style={[styles.frameInner, styles.frameInnerLayout]} contentFit="cover" source={require("../assets/rectangle-261.png")} />
         </View>
          <View style={[styles.stTrailingIcon, styles.containerFlexBox]}>
            <View style={[styles.container, styles.containerFlexBox]}>
              <View style={[styles.stateLayer, styles.containerFlexBox]}>
                <Image style={styles.icon2} contentFit="cover" source={require("../assets/icon.png")} />
              </View>
            </View>
          </View>
        </View>
      </FlexView>
    </SafeRefreshableScrollView>
  );
};

const styles = StyleSheet.create({
  component4Position: {
    left: 18,
    // position: "absolute",
  },
  categoriesPosition: {
    left: "0%",
    top: "0%",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  rectangleLayout: {
    height: 224,
    // width: 356,
    left: 19,
    // position: "absolute",
  },
  frameChildPosition: {
    borderStyle: "solid",
    left: 0,
    // position: "absolute",
  },
  groupChildLayout: {
    height: 34,
    width: 88,
    position: "absolute",
  },
  secondButtonPosition: {
    height: 17,
    left: 17,
    top: 8,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.helveticaNeueLight,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  thirdButtonPosition: {
    height: 17,
    left: 170,
    top: 110,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.helveticaNeueLight,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  groupChildPosition: {
    borderRadius: Border.br_71xl,
    left: 0,
    top: 0,
  },
  frameInnerLayout: {
    width: 141,
    height: 37,
    position: "absolute",
  },
  groupItemLayout: {
    //learn more text box
    width: 305,
    height: 50,
    position: "absolute",
  },
  arrestedPosition: {
    top: 10,
    height: 20, // "learn more" height
    textAlign: "center",
    fontFamily: FontFamily.helveticaNeueLight,
    color: Color.colorBlack,
    position: "absolute",
  },
  groupInnerLayout: {
    width: 83,
    height: 34,
    position: "absolute",
  },
  containerFlexBox: {
    justifyContent: "center",
    alignItems: "center",
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
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  component4ChildPosition: {
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
    fontSize: FontSize.size_11xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.helveticaNeueBold,
    fontWeight: "700",
  },
  profileAndHiType: {
    height: "98.48%",
    width: "98.3%",
    left: "1.7%",
    bottom: "0%",
    right: "0%",
    top: "1.52%",
    position: "absolute",
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
    top: 87,
    height: 66,
    width: 352,
  },
  frameChild: {
    borderRadius: Border.br_base,
    borderColor: Color.colorBlack,
    borderWidth: 1,
    height: 243,
    top: 0,
    width: 352,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
  },
  frameItem: {
    height: 124,
    width: 110,
    backgroundColor: Color.colorYellowgreen_200,
    left: 25,
    top: 21,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
 ecoheroname: {
    fontWeight: "700",
    width: 180,
    height: 29,
    fontSize: FontSize.size_lgi_1,
    left: 151,
    top: 21,
    fontFamily: FontFamily.helveticaNeueLight,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  firstButtonText: {
    width: "100%", 
    left: 0,
    height: 17,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.helveticaNeueLight,
    top: 8,
  },
  secondButtonText: {
    width: "100%", 
    left: 0,
    height: 17,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.helveticaNeueLight,
    top: 8,
  },
  thirdButtonText: {
    width: "100%", 
    left: 0,
    height: 17,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.helveticaNeueLight,
    top: 8,
  },
  groupChild: {
    height: 34,
    width: 88,
    position: "absolute",
  },
  firstButton: {
    top: 62,
    left: 151,
  },
  frameInner: {
    top: 101,
    left: 151,
  },
  groupItem: {
    borderRadius: Border.br_mini,
    height: 45,
    left: 0,
    top: 0,
  },
  learnMore: {
    left: 55,
    width: 196,
    top: 10,
    fontSize: FontSize.size_xl,
  },
  vectorParent: {
    top: 170,
    height: 45,
    left: 25, // position of learn more text box
  },
  secondButtonText: {
    width: 49,
  },
  groupInner: {
    borderRadius: Border.br_71xl,
    left: 0,
    top: 0,
  },
  secondButton: {
    left: 241,
    top: 62,
  },
  ecoheroimage: {
    height: "100%",
    width: "100",   

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
    marginTop: 57,
    top: "50%",
    width: 48,
    height: 48,
    left: 25,
    position: "absolute",
  },
  ecohero1: {
    // top: 361,
  },
  ecohero2: {
    // top: 628,
  },
  ecohero3: {
  },
  arrested: {
    left: 15,
    fontSize: FontSize.size_sm,
    top: 10,
    width: 110,
  },
  groupChild4: {
    borderRadius: Border.br_71xl,
    left: 0,
    top: 0,
  },
  rectangleContainer: {
    // top: 872,
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
    width: 50,
    height: 45,
  },
  magnifyingGlassGlassSearchIcon: {
    left: 13,
    height: 25,
    width: 24,
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
    paddingHorizontal: Padding.p_19xl,
    paddingVertical: Padding.p_mini,
    gap: Gap.gap_md,
    flexDirection: "row",
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },

  groupChild7: {
    height: "100%",
    width: "100%",
    left: "0%",
    top: "0%",
    bottom: "0%",
  },
  component4Inner: {
    right: "25.81%",
    left: "51.86%",
    position: "absolute",
  },
  deforestationIcon: {
    right: "51.61%",
    left: "26.05%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  plasticIcon: {
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
    fontSize: FontSize.size_5xl,
    left: "0%",
    top: "0%",
  },
  component4Child1: {
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
 
  component4: {
    // top: 164,
    width: 403,
    height: 157,
  },
  ecoHeroesPage1Item: {
    // top: 341,
    borderColor: Color.colorLightgray_100,
    borderTopWidth: 1,
    // width: 394,
    height: 1,
  },
  ecoHeroesPage1: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default EcoHeroesPage;
