import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import * as React from "react";
import { Linking, Pressable, StyleSheet, Text, View } from "react-native";

import FlexView from "@/components/FlexView";
import PageHeader from "@/components/PageHeader";
import { SafeRefreshableScrollView } from "@/components/SafeRefreshableScrollView";
import { Border, Color, FontFamily, FontSize, Gap, Padding } from "@/GlobalStyles";

const HelpOutPage = () => {
 const navigation = useNavigation();


 return (
   <SafeRefreshableScrollView>
     <PageHeader title="Help Out" back={true} />
     <FlexView direction="column" style={[styles.helpOutPage1, { paddingVertical: 20 }]} gap={30}>
       <View style={[styles.component6, styles.component6Position]}>
       
         <View style={[styles.component6Inner, styles.component6ChildPosition]}>
           <View style={[styles.groupChild5, styles.childPosition]} />
         </View>       
         <Text style={[styles.categories, styles.categoryIconTypo]}>Categories</Text>
         <Text style={[styles.deforestationIconText, styles.categoryIconTypo]}>Deforestation</Text>
         <Text style={[styles.plasticUseIconText, styles.categoryIconTypo]}>Plastic Use</Text>
         <Text style={[styles.biodiversityLossIconText, styles.categoryIconTypo]}>Biodiversity Loss</Text>
         <Text style={[styles.pollutionIconText,  styles.categoryIconTypo]}>Pollution</Text>
         <View style={[styles.component6Child1, styles.childPosition]} />
          {/*deforestation imaage*/}
          <Image style={styles.deforestationIcon}
           contentFit="cover" source={require("../assets/group-68732.png")} />
          {/*plastic use image*/}
          <Image
           style={[styles.plasticUseIcon, styles.component6ChildPosition]}
           contentFit="cover"
           source={require("../assets/group-68742.png")}
         />
         {/*biodiversity image*/}
         <Image
           style={styles.cat1NatureHeadCatPetAniIcon}
           contentFit="cover"
           source={require("../assets/cat1natureheadcatpetanimalsfelyne.png")}
         />
         <Image
           style={styles.pollutionIcon}
           contentFit="cover"
           source={require("../assets/PollutionIcon.png")}
         />
       </View>
       <View style={[styles.helpOutPage1Item, styles.frameChildPosition]} />
       <View style={[styles.helpOut1, styles.rectangleLayout]}>
         <View style={[styles.frameInner,  styles.frameBorder]} />
         <View style={styles.frameItem} />
         <Text style={styles.helpoutTitletypo}>Arbor Day Foundation</Text>
         <Text style={[styles.text,  styles.textTypo]}>(+1)-888-448-7337</Text>
         <View style={[styles.firstButton]}>
           <Text style={[styles.firstButtonText]}>Biodiverstiy</Text>
           <Image style={[styles.groupChild, styles.groupPosition1]} contentFit="cover" source={require("../assets/rectangle-31.png")} />
         </View>
         <View style={[styles.secondButton,  styles.secondButtonPosition]}>
           <Text style={[styles.secondButtonText,  styles.buttonLayout]}>Pollution</Text>
           <Image style={[styles.groupInner, styles.groupPosition1]} contentFit="cover" source={require("../assets/rectangle-260.png")} />
         </View>
         <View style={[styles.thirdButton, styles.groupLayout]}>
           <Text style={[styles.thirdButtonText, styles.buttonLayout]}>Deforestation</Text>
           <Image style={[styles.groupItem, styles.groupLayout]} contentFit="cover" source={require("../assets/rectangle-261.png")} />
         </View>
         <Image
           style={[styles.phoneRinging1AndroidPhoneIcon1, styles.phoneIconLayout]}
           contentFit="cover"
           source={require("../assets/phoneringing1androidphonemobiledevicesmartphoneiphoneringingincomingcall1.png")}
         />
          <Image
           style={[styles.tree3NatureTreePlantClouIcon, styles.iconChildLayout]}
           contentFit="cover"
           source={require("../assets/tree3naturetreeplantcloudshapepark1.png")}
         />
      
        <Pressable
           style={[styles.vectorGroup, styles.vectorLayout]}
           onPress={() =>
             Linking.openURL(
               "https://www.arborday.org/?form=FUNVRSMEBGY&_gl=1*1ajxalv*_gcl_au*NDIxNjM2NjkyLjE3MjUzMjc3NDY.*_ga*MTQxNjczMzYxMi4xNzI1MzI3NzQ2*_ga_S539C3X6HH*MTcyNTMyNzc0Ni4xLjAuMTcyNTMyNzc0Ni42MC4wLjA."
             )
           }
         >
           <Image
             style={[styles.rectangleIcon, styles.vectorLayout]}
             contentFit="cover"
             source={require("../assets/rectangle-2611.png")}
           />
           <Text style={[styles.donateNow, styles.donateNowTypo]}>Donate Now</Text>
         </Pressable>
       </View>


       <View style={[styles.helpOut2, styles.rectangleLayout, { marginTop: 20 }]}>
         <View style={[styles.frameInner, styles.frameBorder]} />
         <View style={styles.frameItem} />
         <Text style={styles.helpoutTitletypo}>Ocean Cleanup</Text>
         <Text style={[styles.text, styles.textTypo]}>(+1)-888-420-7329</Text>
         <View style={[styles.firstButton]}>
           <Text style={[styles.firstButtonText, styles.buttonLayout]}>Pollution</Text>
           <Image style={[styles.groupChild, styles.groupPosition1]} contentFit="cover" source={require("../assets/rectangle-31.png")} />
         </View>
         <View style={[styles.secondButton, styles.secondButtonPosition]}>
           <Text style={[styles.secondButtonText, styles.buttonLayout]}>Plastic</Text>
           <Image style={[styles.groupInner, styles.groupPosition1]} contentFit="cover" source={require("../assets/rectangle-260.png")} />
         </View>
         <View style={[styles.thirdButton, styles.groupLayout]}>
           <Text style={[styles.thirdButtonText, styles.buttonLayout]}>Climate Justice</Text>
           <Image style={[styles.groupItem, styles.groupLayout]} contentFit="cover" source={require("../assets/rectangle-261.png")} />
         </View>
       
         <Image
           style={[styles.phoneRinging1AndroidPhoneIcon1, styles.phoneIconLayout]}
           contentFit="cover"
           source={require("../assets/phoneringing1androidphonemobiledevicesmartphoneiphoneringingincomingcall1.png")}
         />
         <Image
           style={[styles.tree3NatureTreePlantClouIcon, styles.iconChildLayout]}
           contentFit="cover"
           source={require("../assets/PollutionIcon.png")}
         />
         <Pressable
           style={[styles.vectorGroup, styles.vectorLayout]}
           onPress={() =>
             Linking.openURL(
               "https://theoceancleanup.com"
             )
           }
         >
           <Image
             style={[styles.rectangleIcon, styles.vectorLayout]}
             contentFit="cover"
             source={require("../assets/rectangle-2611.png")}
           />
           <Text style={[styles.donateNow, styles.donateNowTypo]}>Donate Now</Text>
         </Pressable>
       
       </View>


       <View style={[styles.helpOut3, styles.rectangleLayout, { marginTop: 20 }]}>
         <View style={[styles.frameInner, styles.frameBorder]} />
         <View style={styles.frameItem} />
         <Text style={styles.helpoutTitletypo}>Rainforest Alliance</Text>
         <Text style={[styles.text, styles.textTypo]}>(+1)-212-677-1900</Text>
         <View style={[styles.firstButton]}>
           <Text style={[styles.firstButtonText, styles.climateLayout]}>Pollution</Text>
           <Image style={[styles.groupChild, styles.groupPosition1]} contentFit="cover" source={require("../assets/rectangle-31.png")} />
         </View>
         <View style={[styles.secondButton, styles.secondButtonPosition]}>
           <Text style={[styles.secondButtonText, styles.buttonLayout]}>Biodiversity</Text>
           <Image style={[styles.groupInner, styles.groupPosition1]} contentFit="cover" source={require("../assets/rectangle-260.png")} />
         </View>
         <View style={[styles.thirdButton, styles.groupLayout]}>
           <Text style={[styles.thirdButtonText, styles.buttonLayout]}>Deforestation</Text>
           <Image style={[styles.groupItem, styles.groupLayout]} contentFit="cover" source={require("../assets/rectangle-261.png")} />
         </View>
         <Image
           style={[styles.phoneRinging1AndroidPhoneIcon1, styles.phoneIconLayout]}
           contentFit="cover"
           source={require("../assets/phoneringing1androidphonemobiledevicesmartphoneiphoneringingincomingcall1.png")}
         />
         <Image
           style={[styles.tree3NatureTreePlantClouIcon, styles.iconChildLayout]}
           contentFit="cover"
           source={require("../assets/tree3naturetreeplantcloudshapepark1.png")}
         />
         <Pressable
           style={[styles.vectorGroup, styles.vectorLayout]}
           onPress={() =>
             Linking.openURL(
               "http://rainforest-alliance.org"
             )
           }
         >
           <Image
             style={[styles.rectangleIcon, styles.vectorLayout]}
             contentFit="cover"
             source={require("../assets/rectangle-2611.png")}
           />
           <Text style={[styles.donateNow, styles.donateNowTypo]}>Donate Now</Text>
         </Pressable>
       </View>


     
     </FlexView>
   </SafeRefreshableScrollView>
 );
};


const styles = StyleSheet.create({
 rectangleLayout: {
   height: 224,
   // width: 353,
   left: 20,
   // position: "absolute",
 },
 frameBorder: {
   borderWidth: 1,
   borderColor: Color.colorBlack,
   borderRadius: Border.br_base,
   borderStyle: "solid",
   left: 0,
   top: 0,
   width: 353,
   position: "absolute",
   backgroundColor: Color.colorWhite,
 },
 textTypo: {
   color: Color.colorGray_200,
   fontSize: FontSize.size_sm,
   left: 168,
   height: 29,
   width: 175,
   textAlign: "left",
   fontFamily: FontFamily.helveticaNeueLight,
   position: "absolute",
 },
 groupParentLayout: {
   height: 34,
   position: "absolute",
 },
 buttonLayout: {
   height: 17,
   position: "absolute",
 },
 groupPosition1: {
   borderRadius: Border.br_71xl,
   left: 0,
   top: 0,
 },
 groupLayout: {
   height: 37,
   position: "absolute",
 },
 secondButtonPosition: {
   left: 243,
   width: 83,
 },
 phoneIconLayout: {
   height: 14,
   width: 14,
   left: 150,
   position: "absolute",
   overflow: "hidden",
 },
 iconChildLayout: {
   maxHeight: "100%",
   maxWidth: "100%",
   overflow: "hidden",
 },
 vectorLayout: {
   width: 305,
   height: 45,
   position: "absolute",
 },
 donateNowTypo: {
   textAlign: "center",
   fontSize: FontSize.size_xl,
   color: Color.colorBlack,
   fontFamily: FontFamily.helveticaNeueLight,
 },
 component6Position: {
   left: 18,
   // position: "absolute",
 },
 cogPosition: {
   top: "1.52%",
   position: "absolute",
 },
 iconLayout: {
   height: "100%",
   width: "100%",
 },
 groupPosition: {
   top: 108,
   height: 34,
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
   textAlign: "center",
   left: 0,
   position: "absolute",
 },
 iconPosition: {
   left: "25.9%",
   right: "26.29%",
   width: "47.81%",
   top: "0%",
   maxHeight: "100%",
   maxWidth: "100%",
   position: "absolute",
   overflow: "hidden",
 },
 component6ChildPosition: {
   bottom: "14.65%",
   top: "28.03%",
   width: "22.33%",
   height: "57.32%",
 },
 childPosition: {
   borderRadius: Border.br_3xs,
   right: "0%",
   backgroundColor: Color.colorYellowgreen_200,
   position: "absolute",
 },
 categoryIconTypo: {
   fontFamily: FontFamily.karlaExtraBold,
   fontWeight: "800",
   textAlign: "center",
   color: Color.colorBlack,
   position: "absolute",
 },
 frameChild: {
   height: 233,
 },
 frameChildPosition: {
   borderStyle: "solid",
   left: 0,
   // position: "absolute",
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
 helpoutTitletypo: {
   fontWeight: "700",
   height: 29,
   width: 178,
   fontFamily: FontFamily.helveticaNeueLight,
   textAlign: "left",
   color: Color.colorBlack,
   fontSize: FontSize.size_lg,
   left: 151,
   top: 21,
   position: "absolute",
 },
 text: {
   top: 53,
 },


 groupChild: {
   height: 34,
   position: "absolute",
   width: 88,
 },
  groupItem: {
   width: 141,
   height: 37,
   borderRadius: Border.br_71xl,
   left: 0,
   top: 0,
 },
 firstButton: {
   width: 88,
   top: 79,
   height: 34,
   left: 151,
 },
 secondButton: {
   width: 83,
   height: 34,
   position: "absolute",
   top: 79,
 },
thirdButton: {
   top: 120,
   width: 141,
   height: 37,
   left: 151,
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
   top:8,
   left: 0,
   height: 17,
   fontSize: FontSize.size_sm,
   textAlign: "center",
   color: Color.colorBlack,
   fontFamily: FontFamily.helveticaNeueLight,
  
 },
 groupInner: {
   width: 83,
   height: 34,
   position: "absolute",
 },
 phoneRinging1AndroidPhoneIcon: {
   top: 56,
 },
 tree3NatureTreePlantClouIcon: {
  height:60,
  width:60,
  top: 20,
  alignContent :"center",
  justifyContent : "center", 
  // right: "68.84%",
 //  bottom: "48.66%",
  left: 50,
  // position: "absolute",
 },
 rectangleIcon: {
   borderRadius: Border.br_mini,
   height: 45,
   left: 0,
   top: 0,
 },
 donateNow: {
   top: 11,
   left: 55,
   width: 196,
   height: 20,
   position: "absolute",
 },
 vectorParent: {
   top: 166,
   height: 45,
   left: 24,
   width: 305,
 },
 helpOut1: {
   // top: 640,
 },
 helpOut2: {
   // top: 640,
 },
 profileAndHiTypeChild: {
   height: "73.85%",
   width: "14.16%",
   bottom: "26.15%",
   left: "85.84%",
   top: "0%",
   right: "0%",
   maxHeight: "100%",
   maxWidth: "100%",
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
   left: "0%",
   top: "0%",
   position: "absolute",
 },
 cogWorkLoadingCogGearSet: {
   left: "88.35%",
   right: "-0.85%",
   bottom: "31.82%",
   width: "12.5%",
   height: "66.67%",
 },
 headerWithBackarrow: {
   top: 87,
   width: 352,
   height: 66,
 },
 frameInner: {
   height: 245,
 },
 text1: {
   top: 82,
 },
 pollutionGroup: {
   width: 88,
   left: 151,
 },
 naturalDisastersGroup: {
   top: 149,
   width: 141,
   height: 37,
   left: 151,
 },
 climateGroup: {
   width: 83,
   left: 243,
 },
 phoneRinging1AndroidPhoneIcon1: {
   top: 54,
 },
 vectorGroup: {
   top: 180,
   height: 45,
   left: 24,
   width: 305,
 },
 helpOut2: {
   // top: 361,
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
   width: 50,
   height: 45,
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
 plasticUseIcon: {
   right: "51.61%",
   left: "26.05%",
   maxHeight: "100%",
   maxWidth: "100%",
   overflow: "hidden",
   position: "absolute",
 },
 groupChild5: {
   height: "100%",
   width: "100%",
   left: "0%",
   top: "0%",
   bottom: "0%",
 },
 component6Inner: {
   right: "25.81%",
   left: "51.86%",
   position: "absolute",
 },
 deforestationIcon: {
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
 biodiversityLossIconText: {
   left: 206,
   fontSize: FontSize.size_xs,
   top: 139,
   fontWeight: "800",
 },
 pollutionIconText: {
   left: 326,
   fontSize: FontSize.size_xs,
   top: 139,
   fontWeight: "800",
 },
 categories: {
   left: "0%",
   top: "0%",
   fontWeight: "800",
   fontSize: FontSize.size_5xl,
 },
 component6Child1: {
   left: "77.67%",
   bottom: "14.65%",
   top: "28.03%",
   width: "22.33%",
   height: "57.32%",
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
 component6: {
   // top: 164,
   width: 403,
   height: 157,
 },
 helpOutPage1Item: {
  // top: 341,
   borderColor: Color.colorLightgray_100,
   borderTopWidth: 1,
  // width: 394,
   height: 1,
   borderStyle: "solid",
   //left: 0,
  //x position: "absolute",
 },
 helpOutPage1: {
   flex: 1,
   height: 1000,
   width: "100%",
   backgroundColor: Color.colorWhite,
 },
});


export default HelpOutPage;



