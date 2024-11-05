import { Image } from "expo-image";
import * as React from "react";
import { StyleSheet, View } from "react-native";

import { Padding } from "@/GlobalStyles";

const Frame = () => {
  return (
    <View style={styles.groupParent}>
      <Image style={styles.frameChild} contentFit="cover" source={require("../assets/group-12.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  frameChild: {
    width: 354,
    height: 0,
  },
  groupParent: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    paddingHorizontal: Padding.p_lgi,
    paddingVertical: Padding.p_lg,
  },
});

export default Frame;
