import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Button as RNButton } from "@rneui/themed";
import { Dimensions, StyleSheet, Text } from "react-native";

import FlexView from "@/components/FlexView";
import { Border, Color, FontFamily, FontSize, sxUtilities } from "@/GlobalStyles";
import { useUserAtom } from "@/services/jstore";

const Homepage1 = () => {
  const navigation = useNavigation();
  const [user] = useUserAtom();

  useFocusEffect(() => {
    if (user?.signedIn) return navigation.navigate("Mainpage1");
    if (!user?.username) return navigation.navigate("CreateAnAccount1");
    if (!user?.signedIn) return navigation.navigate("Login1");
  });

  return (
    //<SafeRefreshableScrollView footer={<View style={{ backgroundColor: Color.colorDarkslategray_300, height: 50 }}></View>}>
    <FlexView direction="column" style={[styles.homepage, sxUtilities.widthFull, { padding: 20 }]}>
      <Text style={styles.ecofriend}>ecofriend</Text>

      <FlexView direction="column" gap={20} style={[{ marginTop: 80 }]}>
        <RNButton
          type="solid"
          buttonStyle={{ backgroundColor: Color.colorYellowgreen_200, borderRadius: Border.br_base, height: 70 }}
          onPress={() => navigation.navigate("Login1")}
        >
          <Text style={[{ color: Color.colorWhite }, styles.signInTypo]}>Sign in</Text>
        </RNButton>
        <RNButton
          type="outline"
          onPress={() => navigation.navigate("CreateAnAccount1")}
          buttonStyle={{ borderColor: Color.colorYellowgreen_200, borderWidth: 1, borderRadius: Border.br_base, height: 70 }}
        >
          <Text style={[styles.createAnAccount, styles.signInTypo]}>Create an account</Text>
        </RNButton>
      </FlexView>
    </FlexView>
    // </SafeRefreshableScrollView>
  );
};

const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  wrapperLayout: {
    height: 73,
    width: 328,
    position: "absolute",
  },
  signInTypo: {
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.helveticaNeueBold,
  },
  ecofriend: {
    marginTop: 320,
    fontSize: FontSize.size_39xl,
    fontWeight: "700",
    textAlign: "center",
    fontFamily: FontFamily.helveticaNeueBold,
    color: Color.colorYellowgreen_200,
  },
  icon: {
    height: "100%",
    borderRadius: Border.br_xs,
    width: "100%",
  },
  wrapper: {},
  homepageChild: {
    top: 698,
    borderStyle: "solid",
    borderColor: Color.colorYellowgreen_200,
    borderWidth: 1,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorDarkslategray_300,
  },
  createAnAccount: {
    color: Color.colorYellowgreen_200,
    fontSize: FontSize.size_xl,
  },
  signIn: {
    top: 616,
    left: 164,
    color: Color.colorWhite,
  },
  homepage: {
    flex: 1,
    height: 900,
    // overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorDarkslategray_300,
  },
});

export default Homepage1;
