import { useFocusEffect, useNavigation } from "@react-navigation/native";
import * as crypto from "expo-crypto";
import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput } from "react-native";

import Button from "@/components/Buttons";
import FlexView from "@/components/FlexView";
import { SafeRefreshableScrollView } from "@/components/SafeRefreshableScrollView";
import { Border, Color, FontFamily, FontSize, sxUtilities } from "@/GlobalStyles";
import { useUserAtom } from "@/services/jstore";

const hashService = {
  compare: (hash, password) => crypto.digestStringAsync(crypto.CryptoDigestAlgorithm.SHA384, password).then((_hash) => _hash === hash),
  hash: (password) => crypto.digestStringAsync(crypto.CryptoDigestAlgorithm.SHA384, password),
};

const Login1 = () => {
  const navigation = useNavigation();
  const [user, setUser] = useUserAtom();

  const [username, setUsername] = useState(user.username);
  const [password, setPassword] = useState("");

  useFocusEffect(() => {
    if (!user?.username) return navigation.navigate("CreateAnAccount1");
    if (user?.signedIn) return navigation.navigate("Mainpage1");
  });

  // Function to handle the Sign in Press

  const handleSignIn = async () => {
    if (!username || !password) {
      Alert.alert("Error", "All fields are required.");
      return;
    }

    // Proceed with form submission (e.g., API call)

    const isCorrectPassword = await hashService.compare(user.password, password);

    console.log({ isCorrectPassword, user, password });

    if (!isCorrectPassword) {
      return Alert.alert("Error", "Invalid credentials");
    }

    setUser({ ...user, signedIn: true });

    navigation.navigate("Mainpage1");
  };

  return (
    <SafeRefreshableScrollView footer>
      <FlexView style={(styles.login, { backgroundColor: Color.colorYellowgreen_200 })} flex={1}>
        <Text style={[styles.login1, styles.textTypo]}>Login</Text>

        <FlexView style={[styles.rectangleGroup, sxUtilities.widthFull, { flex: 1 }, sxUtilities.widthFull, { padding: 30 }]} flex={1}>
          <Text style={[styles.username1, styles.username1Typo, { marginTop: 50 }]}>Username</Text>
          <TextInput
            style={[styles.rectangleTextinput, styles.frameChild2Layout, sxUtilities.widthFull, { padding: 10, marginTop: 10 }]}
            placeholder="Enter Username"
            value={username}
            onChangeText={(text) => setUsername(text)} // Update state with input
            paddingHorizontal={10} // Add horizontal paddin
          />

          {/* Password Input */}
          <Text style={[styles.password1, styles.username1Typo, { marginTop: 50 }]}>Password</Text>
          <TextInput
            style={[styles.frameChild2, styles.frameChild2Layout, sxUtilities.widthFull, { padding: 10, marginTop: 10 }]}
            placeholder="Enter Password"
            secureTextEntry={true} // Hides password characters
            value={password}
            onChangeText={(text) => setPassword(text)} // Update state with input
            paddingHorizontal={10} // Add horizontal paddin
          />

          {/* Labels for Username and Password */}

          <FlexView
            style={[sxUtilities.justifyContentCenter, sxUtilities.alignItemsCenter, { marginTop: 70 }]}
            direction="column"
            gap={15}
            flex={0}
          >
            {/* "Don't have an account?" Link */}
            <Button
              variant="solid"
              curve={0.5}
              style={[{ width: "100%" }]}
              onPress={handleSignIn} // Call handleSignIn on press
              disabled={!username || !password} // Disable if fields are empty
            >
              <Text style={{ color: Color.colorYellowgreen_200, fontSize: 20 }}>Sign in</Text>
            </Button>

            <Button
              variant="text"
              curve={0.5}
              style={[{ width: "100%", fontSize: 20, height: 20, padding: 0 }]}
              onPress={() => navigation.navigate("CreateAnAccount1")}
            >
              <Text style={{ fontWeight: "700", fontFamily: FontFamily.helveticaNeueBold, color: Color.colorBlack }}>
                Dont have an account? <Text style={{ textDecoration: "underline" }}>Sign up here</Text>
              </Text>
            </Button>
          </FlexView>
        </FlexView>
      </FlexView>
    </SafeRefreshableScrollView>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontWeight: "700",
    fontFamily: FontFamily.helveticaNeueBold,
  },
  frameLayout: {
    height: 63,
    width: 328,
    borderRadius: Border.br_26xl,
    backgroundColor: Color.colorWhite,
    left: 33,
    position: "absolute",
  },
  passwordTypo: {
    color: Color.colorYellowgreen_200,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.hiraKakuStdW8,
    textAlign: "left",
    left: 33,
    position: "absolute",
  },
  signTypo: {
    color: Color.colorYellowgreen_100,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    position: "absolute",
  },
  frameChild2Layout: {
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_mini,
    // left: 32,
    height: 63,
    width: 328,
    // position: "absolute",
  },
  username1Typo: {
    color: Color.colorDarkslategray_300,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.helveticaNeueLight,
    fontWeight: "700",
    // left: 32,
    textAlign: "left",
    // position: "absolute",
  },
  login1: {
    marginVertical: 70,
    fontSize: FontSize.size_13xl,
    left: 33,
    color: Color.colorBlack,
    fontWeight: "700",
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
    top: 514,
    left: 49,
    width: 296,
    height: 73,
    borderRadius: Border.br_xs,
    position: "absolute",
    backgroundColor: Color.colorYellowgreen_200,
  },
  signUp: {
    top: 536,
    left: 156,
    fontFamily: FontFamily.hiraKakuStdW8,
    color: Color.colorYellowgreen_100,
    fontSize: FontSize.size_xl,
  },
  rectangleParent: {
    backgroundColor: Color.colorDarkslategray_100,
    height: 707,
    width: 393,
    borderTopRightRadius: Border.br_11xl,
    borderTopLeftRadius: Border.br_11xl,
    left: 0,
    top: 145,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleTextinput: {
    // top: 118,
  },
  frameChild2: {
    // top: 232,
  },
  username1: {
    // top: 87,
  },
  password1: {
    // top: 204,
  },
  signUpHere: {
    textDecoration: "underline",
  },
  text: {
    fontSize: FontSize.size_sm,
  },
  dontHaveAnContainer: {
    left: 73,
    top: 433,
    position: "absolute",
  },
  rectanglePressable: {
    top: 346,
    backgroundColor: Color.colorDarkslategray_300,
    left: 32,
    height: 73,
    borderRadius: Border.br_xs,
    width: 328,
    position: "absolute",
    paddingVertical: 15, // Vertical padding to increase height
    paddingHorizontal: 30, // Horizontal padding to increase width
    borderRadius: 5,
    alignItems: "center", // Center text horizontally
    justifyContent: "center", // Center text vertically
    marginTop: 10,
  },
  signIn: {
    //top: 371,
    //left: 167,
    fontWeight: "500",
    color: Color.colorYellowgreen_100,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.helveticaNeueLight,
    textAlign: "center",
  },
  rectangleGroup: {
    backgroundColor: Color.colorWhite,
    // height: 747,
    width: 393,
    borderTopRightRadius: Border.br_11xl,
    borderTopLeftRadius: Border.br_11xl,

    overflow: "hidden",
  },
  login: {
    flex: 1,
    width: "100%",
    // height: 882,
    overflow: "hidden",
    backgroundColor: Color.colorYellowgreen_200,
  },
});

export default Login1;
