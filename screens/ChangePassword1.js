import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import { Border, Color, FontFamily, FontSize } from "@/GlobalStyles";

const ChangePassword1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.changePassword}>
      <View style={styles.rectangleParent}>
        <Pressable style={[styles.frameChild, styles.frameLayout1]} onPress={() => navigation.navigate("MyProfile1")} />
        <Text style={styles.done}>Done</Text>
        <Pressable style={[styles.frameItem, styles.frameLayout1]} onPress={() => navigation.navigate("MyProfile1")} />
        <Text style={styles.back}>Back</Text>
        <TextInput style={[styles.frameInner, styles.frameLayout]} />
        <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
        <TextInput style={[styles.rectangleTextinput, styles.newPasswordPosition]} />
        <Text style={[styles.newPassword, styles.newPasswordPosition]}>New Password</Text>
        <TextInput style={[styles.frameChild1, styles.frameLayout]} />
        <Text style={[styles.confirmNewPassword, styles.passwordTypo]}>Confirm New Password</Text>
      </View>
      <Text style={[styles.changePassword1, styles.passwordTypo]}>Change Password</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout1: {
    height: 73,
    width: 328,
    borderWidth: 1,
    borderColor: Color.colorDarkslategray_300,
    borderStyle: "solid",
    borderRadius: Border.br_xs,
    left: 33,
    position: "absolute",
  },
  frameLayout: {
    height: 63,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_mini,
    width: 328,
  },
  passwordTypo: {
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeueLight,
  },
  newPasswordPosition: {
    left: 32,
    position: "absolute",
  },
  frameChild: {
    top: 402,
    backgroundColor: Color.colorDarkslategray_300,
  },
  done: {
    top: 427,
    color: Color.colorYellowgreen_200,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeueLight,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    left: 172,
    position: "absolute",
  },
  frameItem: {
    top: 499,
    backgroundColor: Color.colorWhite,
  },
  back: {
    top: 524,
    color: Color.colorDarkslategray_300,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeueLight,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    left: 172,
    position: "absolute",
  },
  frameInner: {
    top: 90,
    left: 33,
    position: "absolute",
  },
  password: {
    top: 62,
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    color: Color.colorDarkslategray_300,
    left: 33,
    position: "absolute",
  },
  rectangleTextinput: {
    top: 194,
    height: 63,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_mini,
    width: 328,
  },
  newPassword: {
    top: 166,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeueLight,
    fontSize: FontSize.size_lg,
    color: Color.colorDarkslategray_300,
  },
  frameChild1: {
    top: 298,
    left: 33,
    position: "absolute",
  },
  confirmNewPassword: {
    top: 270,
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    color: Color.colorDarkslategray_300,
    left: 33,
    position: "absolute",
  },
  rectangleParent: {
    top: 145,
    left: 0,
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    width: 393,
    height: 707,
    backgroundColor: Color.colorWhite,
    position: "absolute",
    overflow: "hidden",
  },
  changePassword1: {
    top: 69,
    left: 31,
    fontSize: FontSize.size_13xl,
    color: Color.colorBlack,
    width: 326,
    position: "absolute",
  },
  changePassword: {
    backgroundColor: Color.colorYellowgreen_200,
    flex: 1,
    width: "100%",
    height: 852,
  },
});

export default ChangePassword1;
