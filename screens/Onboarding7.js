import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { Border, Color, FontFamily, FontSize, Padding } from "@/GlobalStyles";

const Onboarding7 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.onboarding17]}>
      <View style={styles.onboarding17Inner}>
        <Image style={styles.frameChild} contentFit="cover" source={require("../assets/group-11.png")} />
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image style={{width: "120%", height: 1200, top: 100, resizeMode: "contain"}} source={require("../assets/union.png")} />
      </View>
      <Pressable style={styles.arrowLeftCircle} onPress={() => navigation.navigate("Mainpage1")}>
        <Image style={[styles.icon, styles.iconLayout]} contentFit="cover" source={require("../assets/arrowleftcircle.png")} />
      </Pressable>
      <Text style={[styles.whatCategoriesAre, styles.plasticUseTypo]}>What categories are you interested in?</Text>
      <View style={[styles.rectangleParent, styles.groupParentLayout]}>
        <View style={[styles.groupChild, styles.groupParentLayout]} />
        <Text style={[styles.plasticUse, styles.plasticUseTypo]}>Plastic use</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.groupParentLayout]}>
        <View style={[styles.groupChild, styles.groupParentLayout]} />
        <Text style={[styles.plasticUse, styles.plasticUseTypo]}>Deforestation</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.groupParentLayout]}>
        <View style={[styles.groupChild, styles.groupParentLayout]} />
        <Text style={[styles.plasticUse, styles.plasticUseTypo]}>Pollution</Text>
      </View>
      <View style={[styles.groupView, styles.groupParentLayout]}>
        <View style={[styles.groupChild, styles.groupParentLayout]} />
        <Text style={[styles.plasticUse, styles.plasticUseTypo]}>Extreme weather events</Text>
      </View>
      <View style={[styles.rectangleParent1, styles.groupParentLayout]}>
        <View style={[styles.groupChild, styles.groupParentLayout]} />
        <Text style={[styles.plasticUse, styles.plasticUseTypo]}>Biodiversity Loss</Text>
      </View>
      <Text style={[styles.thisWillHelp, styles.plasticUseTypo]}>This will help us personalize your experience.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  plasticUseTypo: {
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeueLight,
    position: "absolute",
  },
  groupParentLayout: {
    height: 73,
    width: 351,
    position: "absolute",
  },
  frameChild: {
    width: 354,
    height: 0,
    position: "absoulte",
    left:0,
  },
  onboarding17Inner: {
    top: -474,
    left: 197,
    width: 392,
    paddingHorizontal: Padding.p_lgi,
    paddingVertical: Padding.p_lg,
    position: "absolute",
    overflow: "hidden",
  },
  unionIcon: {
    width: "100%",
    height: "85%",
    bottom :0, 
    left :0,
    position: "absolute",
    overflow :"hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  arrowLeftCircle: {
    left: 289,
    top: 738,
    width: 75,
    height: 75,
    position: "absolute",
  },
  whatCategoriesAre: {
    top: 53,
    fontSize: FontSize.size_11xl,
    color: Color.colorBlack,
    width: 339,
    fontWeight: "700",
    fontFamily: FontFamily.helveticaNeueLight,
    left: 21,
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: 12,
    backgroundColor: Color.colorDarkslategray_300,
  },
  plasticUse: {
    top: 25,
    left: 44,
    fontSize: FontSize.size_lgi_1,
    fontWeight: "500",
    color: Color.colorYellowgreen_100,
  },
  rectangleParent: {
    top: 246,
    left: 21,
  },
  rectangleGroup: {
    top: 335,
    left: 21,
  },
  rectangleContainer: {
    top: 424,
    left: 21,
  },
  groupView: {
    top: 513,
    left: 21,
  },
  rectangleParent1: {
    top: 602,
    left: 21,
  },
  thisWillHelp: {
    top: 138,
    left: 19,
    fontSize: FontSize.size_mini,
    color: Color.colorDarkslategray_300,
    width: 356,
    fontWeight: "700",
    fontFamily: FontFamily.helveticaNeueLight,
  },
  onboarding17: {
    backgroundColor: Color.colorYellowgreen_200,
    flex: 1,
    height: 852,
  },
});

export default Onboarding7;
