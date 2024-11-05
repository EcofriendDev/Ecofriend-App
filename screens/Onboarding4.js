import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ProgressBar } from "react-native-paper";

import { ImageAndIconAssets } from "@/components/Icons";
import { Color, FontFamily, FontSize, Padding } from "@/GlobalStyles";

const Onboarding4 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.onboarding14, styles.iconLayout]}>
      <Text style={[styles.withEcofriendJournalContainer, styles.drawnGraphicHereFlexBox]}>
        <Text style={styles.withEcofriend}>{`With ecofriend, `}</Text>
        <Text style={styles.journal}>journal</Text>
        <Text style={styles.withEcofriend}>{` your `}</Text>
        <Text style={styles.thoughtsEmotions}>{`thoughts, emotions, `}</Text>
        <Text style={styles.withEcofriend}>{`&`}</Text>
        <Text style={styles.text1}>{` `}</Text>
        <Text style={styles.thoughtsEmotions}>stressors.</Text>
      </Text>
      <View style={styles.onboarding14Inner}>
        <Image style={styles.frameChild} contentFit="cover" source={require("../assets/group-1.png")} />
      </View>
      <View style={styles.onboarding14Inner}>
        <ProgressBar style={styles.progressbar} progress={0.9} />
      </View>
      <Pressable style={[styles.arrowLeftCircle, styles.arrowLayout]} onPress={() => navigation.navigate("Onboarding5")}>
        <Image style={[styles.icon, styles.iconLayout]} contentFit="cover" source={require("../assets/arrowleftcircle.png")} />
      </Pressable>
      <Pressable style={[styles.arrowRightMiniCircle, styles.arrowLayout]} onPress={() => navigation.navigate("Onboarding3")}>
        <Image style={[styles.icon, styles.iconLayout]} contentFit="cover" source={require("../assets/arrowrightminicircle1.png")} />
      </Pressable>
      <Image
        style={[{ width: "100%", height: 760, top: 120, zIndex: -2 }]}
        contentFit="contain"
        source={ImageAndIconAssets.OnboardingSketch}
      />
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
  drawnGraphicHereFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  arrowLayout: {
    height: 75,
    width: 75,
    position: "absolute",
  },
  withEcofriend: {
    color: Color.colorBlack,
  },
  journal: {
    color: Color.colorDarkslategray_300,
  },
  thoughtsEmotions: {
    color: Color.colorGray_300,
  },
  text1: {
    color: Color.colorOrangered,
  },
  withEcofriendJournalContainer: {
    top: 216,
    left: 31,
    fontSize: FontSize.size_11xl,
    fontWeight: "700",
    fontFamily: FontFamily.helveticaNeueLight,
  },
  frameChild: {
    width: 354,
    height: 0,
  },
  onboarding14Inner: {
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
    top: 546,
    left: 46,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.hiraKakuStdW8,
    color: Color.colorOrangered,
  },
  onboarding14: {
    backgroundColor: Color.colorYellowgreen_200,
    flex: 1,
    height: 852,
  },
});

export default Onboarding4;
