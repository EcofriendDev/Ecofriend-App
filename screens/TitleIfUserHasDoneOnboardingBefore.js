import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Border, Color, FontFamily, FontSize } from "@/GlobalStyles";

const TitleIfUserHasDoneOnboardingBefore = () => {
  return (
    <View style={styles.titleIfUserHasDoneOnboar}>
      <Text style={styles.ecofriend}>ecofriend</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ecofriend: {
    // position: "absolute",
    top: 375,
    // left: 65,
    fontSize: FontSize.size_39xl,
    fontWeight: "700",
    fontFamily: FontFamily.helveticaNeueBold,
    color: Color.colorYellowgreen_200,
    textAlign: "center",
  },
  titleIfUserHasDoneOnboar: {
    backgroundColor: Color.colorDarkslategray_300,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default TitleIfUserHasDoneOnboardingBefore;
