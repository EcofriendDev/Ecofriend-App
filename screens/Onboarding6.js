import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ProgressBar } from "react-native-paper";

import { ImageAndIconAssets } from "@/components/Icons";
import { Color, FontFamily, FontSize, Padding } from "@/GlobalStyles";

const Onboarding6 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.onboarding16, { height: "100%" }]}>
      <Text style={[styles.withEcofriendYouContainer, styles.drawnGraphicHereTypo, { padding: 10 }]}>
        <Text style={styles.withEcofriendYou}>{`With ecofriend, you can `}</Text>
        <Text style={styles.explore}>explore</Text>
        <Text style={styles.withEcofriendYou}>{` ways to help prevent climate change & donate.`}</Text>
      </Text>
      <View style={styles.onboarding16Inner}>
        <Image style={styles.frameChild} contentFit="cover" source={require("../assets/group-1.png")} />
      </View>
      <View style={styles.onboarding16Inner}>
        <ProgressBar style={styles.progressbar} progress={0.9} />
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image style={{ width: "120%", height: 1200, top: 150, resizeMode: "contain" }} source={ImageAndIconAssets.EarthlyWoman} />
      </View>
      <Pressable style={[styles.arrowLeftCircle, styles.arrowLayout]} onPress={() => navigation.navigate("Onboarding7")}>
        <Image style={[styles.icon, styles.iconLayout]} contentFit="cover" source={require("../assets/arrowleftcircle.png")} />
      </Pressable>
      <Pressable style={[styles.arrowRightMiniCircle, styles.arrowLayout]} onPress={() => navigation.navigate("Onboarding5")}>
        <Image style={[styles.icon, styles.iconLayout]} contentFit="cover" source={require("../assets/arrowrightminicircle1.png")} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  progressbar: {
    width: 392,
  },
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  drawnGraphicHereTypo: {
    textAlign: "left",
    fontFamily: FontFamily.hiraKakuStdW8,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  arrowLayout: {
    height: 75,
    width: 75,
    position: "absolute",
  },
  withEcofriendYou: {
    color: Color.colorBlack,
  },
  explore: {
    color: Color.colorDarkslategray_300,
  },
  withEcofriendYouContainer: {
    top: 216,
    left: 31,
    width: 333,
  },
  frameChild: {
    width: 354,
    height: 0,
  },
  onboarding16Inner: {
    top: 51,
    left: 1,
    paddingHorizontal: Padding.p_lgi,
    paddingVertical: Padding.p_lg,
    width: 392,
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
  },
  arrowLeftCircle: {
    left: 289,
    top: 738,
  },
  arrowRightMiniCircle: {
    left: 29,
    top: 739,
  },
  drawnGraphicHere: {
    top: 549,
    left: 47,
    color: Color.colorOrangered,
  },
  onboarding16: {
    backgroundColor: Color.colorYellowgreen_200,
    flex: 1,
    height: 852,
  },
});

export default Onboarding6;
