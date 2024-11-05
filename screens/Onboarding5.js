import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ProgressBar } from "react-native-paper";

import { ImageAndIconAssets } from "@/components/Icons";
import { Border, Color, FontFamily, FontSize, Padding } from "@/GlobalStyles";

const Onboarding5 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.onboarding15]}>
      <Text style={[styles.withEcofriendYouContainer, styles.drawnGraphicHereTypo]}>
        <Text style={styles.withEcofriendYou}>{`With ecofriend, you can `}</Text>
        <Text style={styles.connect}>connect</Text>
        <Text style={styles.withEcofriendYou}> with climate-informed therapists and a community of friends.</Text>
      </Text>
      <View style={styles.onboarding15Inner}>
        <Image style={styles.frameChild} contentFit="cover" source={require("../assets/group-1.png")} />
      </View>
      <View style={styles.onboarding15Inner}>
        <ProgressBar style={styles.progressbar} progress={0.9} />
      </View>
      <Pressable style={[styles.arrowLeftCircle, styles.arrowLayout]} onPress={() => navigation.navigate("Onboarding6")}>
        <Image style={[styles.icon, styles.iconLayout]} contentFit="cover" source={require("../assets/arrowleftcircle.png")} />
      </Pressable>
      <Pressable style={[styles.arrowRightMiniCircle, styles.arrowLayout]} onPress={() => navigation.navigate("Onboarding4")}>
        <Image style={[styles.icon, styles.iconLayout]} contentFit="cover" source={require("../assets/arrowrightminicircle1.png")} />
      </Pressable>
      <Image style={[{ width: "100%", height: 820, top: 120, zIndex: -2 }]} contentFit="contain" source={ImageAndIconAssets.OnboardingCommunity} />
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
  connect: {
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
  onboarding15Inner: {
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
  onboarding15: {
    backgroundColor: Color.colorYellowgreen_200,
    flex: 1,
    height: 852,
  },
});

export default Onboarding5;
