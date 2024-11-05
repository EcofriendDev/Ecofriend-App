import { useFocusEffect, useNavigation } from "@react-navigation/native";
import * as crypto from "expo-crypto";
import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import FlexView from "@/components/FlexView";
import PageHeader from "@/components/PageHeader";
import { SafeRefreshableScrollView } from "@/components/SafeRefreshableScrollView";
import { Border, Color, FontFamily, FontSize, Gap, sxUtilities } from "@/GlobalStyles";
import { useUserAtom } from "@/services/jstore";

const hashService = {
  compare: (hash, password) => crypto.digestStringAsync(crypto.CryptoDigestAlgorithm.SHA384, password).then((resHash) => resHash === hash),
  hash: (password) => crypto.digestStringAsync(crypto.CryptoDigestAlgorithm.SHA384, password),
};

const CreateAnAccount1 = () => {
  const navigation = useNavigation();
  const [user, setUser] = useUserAtom();
  const { control, watch, formState, getValues } = useForm({
    defaultValues: {
      username: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
  });

  useFocusEffect(() => {
    if (!user?.username) return;
    if (user?.signedIn) return navigation.navigate("Mainpage1");
    else return navigation.navigate("Login1");
  });

  const handleSubmit = async (form = getValues()) => {
    const { username, name, password, confirmPassword } = form;

    console.log({ form });

    if (!username || !name || !password || !confirmPassword) {
      Alert.alert("Error", "All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    // Proceed with form submission (e.g., API call)
    console.log("Form submitted:", form);

    const hashedPassword = await hashService.hash(password);

    setUser({
      username,
      name,
      password: hashedPassword,
      signedIn: true,
    });

    navigation.navigate("Onboarding3");
  };

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  return (
    <SafeRefreshableScrollView footer>
      <FlexView direction="column" style={styles.createAnAccount}>
        <View style={[{ paddingHorizontal: 30, marginVertical: 40, marginBottom: 10 }]}>
          <PageHeader title={"Sign Up"} settings={false}></PageHeader>
        </View>

        <FlexView style={[styles.rectangleGroup, sxUtilities.widthFull, sxUtilities.flexCol, { gap: Gap.gap_xs, padding: 40 }]}>
          <Controller
            control={control}
            name="name"
            rules={{ required: "Name is required" }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <Text style={[sxUtilities.inputLabel]}>Name</Text>
                <TextInput
                  style={[styles.frameChild2, styles.frameChildLayout, sxUtilities.input]}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              </>
            )}
          />
          <Controller
            control={control}
            name="username"
            rules={{ required: "Username is required" }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <Text style={[sxUtilities.inputLabel]}>Username</Text>
                <TextInput
                  style={[styles.rectangleTextinput, styles.frameChildLayout, sxUtilities.input]}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              </>
            )}
          />
          <Controller
            control={control}
            name="password"
            rules={{ required: "Password is required" }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <Text style={[sxUtilities.inputLabel]}>Password</Text>
                <TextInput
                  style={[styles.frameChild3, styles.frameChildLayout, sxUtilities.input]}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  secureTextEntry
                />
              </>
            )}
          />
          <Controller
            control={control}
            name="confirmPassword"
            rules={{ required: "Confirm Password is required" }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <Text style={[sxUtilities.inputLabel]}>Confirm Password</Text>
                <TextInput
                  style={[styles.frameChild3, styles.frameChildLayout, sxUtilities.input]}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  secureTextEntry
                />
              </>
            )}
          />
          <Pressable
            style={[
              styles.rectanglePressable,
              styles.frameChildLayout,
              sxUtilities.flexRow,
              sxUtilities.justifyContentCenter,
              sxUtilities.alignItemsCenter,
              { marginTop: 40 },
            ]}
            onPress={() => handleSubmit()}
          >
            <Text style={[styles.signUp1, styles.signTypo]}>Sign up</Text>
          </Pressable>
          <Pressable style={styles.alreadyHaveAnContainer} onPress={() => navigation.navigate("Login1")}>
            <Text style={[styles.text, styles.textTypo, { textAlign: "center" }]}>
              {`Already have an account? `}
              <Text style={styles.loginHere}>Login here</Text>
            </Text>
          </Pressable>
        </FlexView>
      </FlexView>
    </SafeRefreshableScrollView>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 63,
    width: 328,
    borderRadius: Border.br_26xl,
    backgroundColor: Color.colorWhite,
    left: 33,
    position: "absolute",
  },
  passwordTypo1: {
    color: Color.colorYellowgreen_200,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.hiraKakuStdW8,
    textAlign: "left",
    left: 33,
    position: "absolute",
  },
  frameChild1Layout: {
    height: 73,
    top: 514,
  },
  signTypo: {
    color: Color.colorYellowgreen_100,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontWeight: "700",
    fontFamily: FontFamily.helveticaNeueBold,
  },
  frameChildLayout: {
    width: "100%",
    borderRadius: Border.br_xs,
    justifyContent: "center",
    //left: 33,
    // position: "absolute",
    alignContent: "center",
    //left: 33,
    //position: "absolute",
  },
  passwordTypo: {
    color: Color.colorDarkslategray_300,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeueLight,
    fontWeight: "700",
    left: 33,
    position: "absolute",
  },
  signUp: {
    // top: 69,
    fontFamily: FontFamily.helveticaNeueBold,
    fontSize: FontSize.size_13xl,
    width: 326,
    textAlign: "left",
    fontWeight: "700",
    left: 33,
    color: Color.colorBlack,
    // position: "absolute",
  },
  frameChild: {
    top: 172,
  },
  frameItem: {
    top: 286,
  },
  frameInner: {
    top: 400,
  },
  username: {
    top: 141,
  },
  rectangleView: {
    top: 55,
  },
  name: {
    top: 24,
  },
  password: {
    top: 258,
  },
  confirmPassword: {
    top: 372,
  },
  frameChild1: {
    left: 49,
    width: 296,
    borderRadius: Border.br_xs,
    height: 78,
    top: 514,
    position: "absolute",
    backgroundColor: Color.colorYellowgreen_200,
  },
  signUp1: {
    //top: 536,
    //left: 156,
    fontSize: FontSize.size_xl,
    //top: 300,
    //left: 167,
    fontWeight: "500",
    color: Color.colorYellowgreen_100,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.helveticaNeueBold,
  },
  rectangleParent: {
    backgroundColor: Color.colorDarkslategray_100,
    height: 707,
    // width: 393,
    borderTopRightRadius: Border.br_11xl,
    borderTopLeftRadius: Border.br_11xl,
    left: 0,
    // top: 145,
    // position: "absolute",
    // overflow: "hidden",
  },
  rectangleTextinput: {
    backgroundColor: Color.colorGainsboro_100,
    width: 327,
    height: 63,
    // top: 172,
  },
  frameChild2: {
    backgroundColor: Color.colorGainsboro_100,
    width: 327,
    height: 63,
    // top: 286,
  },
  frameChild3: {
    backgroundColor: Color.colorGainsboro_100,
    width: 327,
    height: 63,
    // top: 400,
  },
  username1: {
    top: 141,
  },
  frameChild4: {
    backgroundColor: Color.colorGainsboro_100,
    width: 327,
    height: 63,
    top: 55,
  },
  firstName: {
    top: 24,
  },
  password1: {
    top: 258,
  },
  confirmPassword1: {
    top: 372,
  },
  rectanglePressable: {
    backgroundColor: Color.colorDarkslategray_300,
    height: 73,
    //top: 514,
    width: 327,
    paddingVertical: 10,
  },
  loginHere: {
    textDecoration: "underline",
  },
  text: {
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.hiraKakuStdW8,
  },
  alreadyHaveAnContainer: {
    textAlign: "center",
    width: "100%",
    // left: 66,
    // top: 601,
    // position: "absolute",
  },
  rectangleGroup: {
    backgroundColor: Color.colorWhite,
    height: 750,
    // width: 393,
    borderTopRightRadius: Border.br_11xl,
    borderTopLeftRadius: Border.br_11xl,
    // left: 0,
    // top: 145,
    // position: "absolute",
    // overflow: "hidden",
  },
  createAnAccount: {
    flex: 1,
    // width: "100%",
    // height: 852,
    backgroundColor: Color.colorYellowgreen_200,
  },
});

export default CreateAnAccount1;
