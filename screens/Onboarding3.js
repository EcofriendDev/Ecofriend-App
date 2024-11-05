import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ProgressBar } from "react-native-paper";

import { Border, Color, FontFamily, FontSize, Padding } from "@/GlobalStyles";

const Onboarding3 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.onboarding13]}>
      <Text style={[styles.withEcofriendWeContainer, styles.nounTypo]}>
        <Text style={styles.withEcofriendWe}>{`With ecofriend, we will help you cope with `}</Text>
        <Text style={styles.ecoAnxiety}>eco-anxiety.</Text>
        <Text style={styles.withEcofriendWe}>{` `}</Text>
      </Text>
      <View style={[styles.ecoAnxietyDefinition, styles.ecoLayout]}>
        <Image
          style={[styles.ecoAnxietyDefinitionChild, styles.ecoLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-18.png")}
        />
        <Text style={[styles.ecoAnxiety1, styles.ecoAnxiety1Position]}>eco-anxiety</Text>
        <Text style={[styles.noun, styles.nounTypo]}>noun</Text>
        <Text style={[styles.extremeWorryAbout, styles.ecoAnxiety1Position]}>
          extreme worry about current and future harm to the environment caused by human activity and climate change.
        </Text>
      </View>
      <View style={styles.onboarding13Inner}>
        <Image style={styles.frameChild} contentFit="cover" source={require("../assets/group-1.png")} />
      </View>
      <View style={styles.onboarding13Inner}>
        <ProgressBar style={styles.progressbar} progress={0.9} />
      </View>
      <Pressable style={styles.arrowLeftCircle} onPress={() => navigation.navigate("Onboarding4")}>
        <Image style={[styles.icon, styles.iconLayout]} contentFit="cover" source={require("../assets/arrowleftcircle1.png")} />
      </Pressable>
      <View style={styles.onboarding13Child} />
      <Image
        style={[styles.onboarding13Item, styles.onboarding13Position]}
        contentFit="cover"
        source={require("../assets/polygon-2.png")}
      />
      <View style={styles.rectangleView} />
      <Image style={[styles.ellipseIcon, styles.ellipseIconPosition]} contentFit="cover" source={require("../assets/ellipse-181.png")} />
      <Image style={styles.onboarding13Child1} contentFit="cover" source={require("../assets/ellipse-19.png")} />
      <Image
        style={[styles.onboarding13Child2, styles.ellipseIconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-20.png")}
      />
      <Image
        style={[styles.onboarding13Child3, styles.onboarding13ChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <Image
        style={[styles.onboarding13Child4, styles.onboarding13Position]}
        contentFit="cover"
        source={require("../assets/ellipse-22.png")}
      />
      <Image
        style={[styles.onboarding13Child5, styles.onboarding13ChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-23.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  progressbar: {
    width: 392,
  },
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  nounTypo: {
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeueLight,
    position: "absolute",
  },
  ecoLayout: {
    height: 469,
    width: 527,
    position: "absolute",
  },
  ecoAnxiety1Position: {
    left: 98,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeueLight,
    position: "absolute",
  },
  onboarding13Position: {
    top: 410,
    position: "absolute",
  },
  ellipseIconPosition: {
    height: 47,
    top: 377,
    position: "absolute",
  },
  onboarding13ChildPosition: {
    height: 26,
    top: 422,
    position: "absolute",
  },
  withEcofriendWe: {
    color: Color.colorBlack,
  },
  ecoAnxiety: {
    color: Color.colorDarkslategray_300,
  },
  withEcofriendWeContainer: {
    top: 216,
    left: 31,
    fontSize: FontSize.size_11xl,
    width: 330,
    height: 110,
    fontWeight: "700",
  },
  ecoAnxietyDefinitionChild: {
    top: 0,
    left: 0,
  },
  ecoAnxiety1: {
    top: 106,
    fontSize: FontSize.size_21xl,
    fontWeight: "700",
  },
  noun: {
    top: 117,
    left: 329,
    fontSize: FontSize.size_13xl,
    fontStyle: "italic",
    color: Color.colorDarkslategray_300,
  },
  extremeWorryAbout: {
    top: 159,
    fontSize: FontSize.size_lg,
    width: 310,
  },
  ecoAnxietyDefinition: {
    top: 486,
    left: -67,
  },
  frameChild: {
    width: 354,
    height: 0,
  },
  onboarding13Inner: {
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
    overflow: "hidden",
  },
  arrowLeftCircle: {
    left: 289,
    top: 738,
    width: 75,
    height: 75,
    position: "absolute",
  },
  onboarding13Child: {
    top: 443,
    left: 184,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    backgroundColor: "#d9d9d9",
    width: 56,
    height: 54,
    borderRadius: Border.br_10xs,
    position: "absolute",
  },
  onboarding13Item: {
    left: 165,
    width: 94,
    height: 60,
    borderRadius: Border.br_10xs,
  },
  rectangleView: {
    top: 470,
    left: 199,
    backgroundColor: Color.colorBlack,
    width: 16,
    height: 27,
    position: "absolute",
  },
  ellipseIcon: {
    left: 32,
    width: 54,
  },
  onboarding13Child1: {
    top: 354,
    left: 59,
    width: 70,
    height: 70,
    position: "absolute",
  },
  onboarding13Child2: {
    left: 102,
    width: 63,
  },
  onboarding13Child3: {
    left: 282,
    width: 32,
  },
  onboarding13Child4: {
    left: 298,
    width: 42,
    height: 38,
  },
  onboarding13Child5: {
    left: 324,
    width: 37,
  },
  onboarding13: {
    backgroundColor: Color.colorYellowgreen_200,
    flex: 1,
    height: 852,
  },
});

export default Onboarding3;
