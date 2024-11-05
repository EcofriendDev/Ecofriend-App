import { useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/themed";
import { Image } from "expo-image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import { Icon } from "@/components/Icons";
import { SafeRefreshableScrollView } from "@/components/SafeRefreshableScrollView";
import { Border, Color, FontFamily, FontSize, Gap, sxUtilities } from "@/GlobalStyles";
import { useUserAtom } from "@/services/jstore";

const MyProfile1 = () => {
  const navigation = useNavigation();
  const [user, setUser] = useUserAtom();
  const [showModal, setShowModal] = useState(null);
  const { control, getValues } = useForm({
    defaultValues: user,
  });

  if (!user?.name) {
    Alert.alert("Error", "no user", [
      { text: "logout", onPress: () => navigation.navigate("Login1") },
      { text: "back", onPress: () => navigation.goBack() },
    ]);
    return;
  }

  const logout = () => {
    setUser({ ...user, signedIn: false });
    navigation.navigate("Login1");
  };

  return (
    <SafeRefreshableScrollView>
      <View style={[styles.myProfile]}>
        <View
          style={[
            styles.myProfile1,
            styles.nameTypo,
            sxUtilities.flexRow,
            sxUtilities.justifyContentStart,
            Gap.gap_2xl,
            sxUtilities.alignItemsCenter,
          ]}
        >
          <Button type="clear" onPress={() => navigation.navigate("ExplorePage1")}>
            <Icon iconName="ArrowLeftMiniCircle" scale={2} />
          </Button>
          <Text style={sxUtilities.heading2}>My Profile</Text>
        </View>
        <View style={styles.usernameParent}>
          <Text style={[styles.username, styles.nameTypo]}>Username</Text>
          <Text style={[styles.name, styles.nameTypo]}>Name</Text>
          <Pressable style={[styles.frameChild, styles.frameLayout1]} onPress={logout} />
          <Text style={[styles.logOut, styles.logOutTypo]}>Log out</Text>
          <Pressable style={[styles.frameItem, styles.frameLayout1]} onPress={() => navigation.navigate("ChangePassword1")} />
          <Text style={[styles.changePassword, styles.logOutTypo]}>Change Password</Text>
          <TextInput
            value={user.username}
            style={[styles.nathantzhang, styles.nathanTypo]}
            placeholder="nathantzhang"
            placeholderTextColor="#000"
          />
          <TextInput value={user.name} style={[styles.nathan, styles.nathanTypo]} placeholder="Nathan" placeholderTextColor="#000" />
          <Image style={[styles.smallFabIcon, styles.smallIconLayout]} contentFit="cover" source={require("../assets/small-fab.png")} />
          <Image style={[styles.smallFabIcon1, styles.smallIconLayout]} contentFit="cover" source={require("../assets/small-fab.png")} />
          <View style={[styles.frameInner, styles.frameLayout]} />
          <View style={[styles.lineView, styles.frameLayout]} />
          <View style={[styles.frameChild1, styles.frameLayout]} />
        </View>
      </View>
    </SafeRefreshableScrollView>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  nameTypo: {
    textAlign: "left",
    fontWeight: "700",
    fontFamily: FontFamily.helveticaNeueLight,
  },
  frameLayout1: {
    height: 73,
    width: 328,
    borderWidth: 1,
    borderColor: Color.colorDarkslategray_300,
    borderStyle: "solid",
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  logOutTypo: {
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorDarkslategray_300,
    fontFamily: FontFamily.helveticaNeueLight,
    position: "absolute",
  },
  nathanTypo: {
    fontFamily: FontFamily.helveticaNeueLight,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  smallIconLayout: {
    height: 25,
    width: 25,
    borderRadius: Border.br_5xs_5,
    left: 339,
    position: "absolute",
    overflow: "hidden",
  },
  frameLayout: {
    height: 1,
    width: 394,
    borderTopWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    position: "absolute",
  },
  username: {
    top: 79,
    color: Color.colorDarkslategray_300,
    textAlign: "left",
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    left: 33,
  },
  name: {
    top: 179,
    left: 32,
    color: Color.colorDarkslategray_300,
    textAlign: "left",
    fontWeight: "700",
    fontSize: FontSize.size_lg,
  },
  frameChild: {
    top: 401,
    left: 33,
  },
  logOut: {
    top: 426,
    left: 162,
  },
  frameItem: {
    top: 304,
    left: 32,
  },
  changePassword: {
    top: 329,
    left: 112,
  },
  nathantzhang: {
    top: 121,
    left: 33,
  },
  nathan: {
    top: 221,
    left: 32,
  },
  smallFabIcon: {
    top: 121,
  },
  smallFabIcon1: {
    top: 221,
  },
  frameInner: {
    top: 64,
    left: 0,
    width: 394,
    borderTopWidth: 1,
    borderColor: Color.colorLightgray_100,
  },
  lineView: {
    top: 164,
    left: 0,
    width: 394,
    borderTopWidth: 1,
    borderColor: Color.colorLightgray_100,
  },
  frameChild1: {
    top: 264,
    left: 5,
  },
  usernameParent: {
    top: 145,
    borderRadius: Border.br_base,
    // width: 393,
    height: 707,
    backgroundColor: Color.colorWhite,
    left: 0,
  },
  myProfile1: {
    top: 69,
    fontSize: FontSize.size_13xl,
    color: Color.colorBlack,
    width: 326,
    textAlign: "left",
    fontWeight: "700",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  arrowRightMiniCircle: {
    left: "2.04%",
    top: "7.51%",
    right: "85.24%",
    bottom: "86.62%",
    width: "12.72%",
    height: "5.87%",
    position: "absolute",
  },
  myProfile: {
    backgroundColor: Color.colorYellowgreen_200,
    flex: 1,
    height: 852,
  },
});

export default MyProfile1;
