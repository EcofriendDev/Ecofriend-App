import "@expo/metro-runtime";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import ArticlesPage2 from "@/screens/ArticlesPage2";
import ArticlesPage3 from "@/screens/ArticlesPage3";
import ChangePassword1 from "@/screens/ChangePassword1";
import CommunityPage from "@/screens/CommunityPage";
import ConnectPage from "@/screens/ConnectPage";
import CreateAnAccount1 from "@/screens/CreateAnAccount1";
import EcoHeroesPage from "@/screens/EcoHeroesPage";
import EmergencyResourcesPage from "@/screens/EmergencyResourcesPage";
import ExplorePage1 from "@/screens/ExplorePage1";
import Frame from "@/screens/Frame";
import HelpOutPage from "@/screens/HelpOutPage";
import Homepage1 from "@/screens/Homepage1";
import JournalPageMenu1 from "@/screens/JournalPageMenu1";
import JournalPageType1 from "@/screens/JournalPageType1";
import Login1 from "@/screens/Login1";
import Mainpage1 from "@/screens/Mainpage1";
import MyProfile1 from "@/screens/MyProfile1";
import Onboarding3 from "@/screens/Onboarding3";
import Onboarding4 from "@/screens/Onboarding4";
import Onboarding5 from "@/screens/Onboarding5";
import Onboarding6 from "@/screens/Onboarding6";
import Onboarding7 from "@/screens/Onboarding7";
import TherapyPage from "@/screens/TherapyPage";
import TitleIfUserHasDoneOnboardingBefore from "@/screens/TitleIfUserHasDoneOnboardingBefore";

const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  const [fontsLoaded, error] = useFonts({
    HelveticaNeueLight: require("./assets/fonts/HelveticaNeueLight.ttf"),
    "HiraKakuStd-W8": require("./assets/fonts/HiraKakuStd-W8.otf"),
    "Karla-Regular": require("./assets/fonts/Karla-Regular.ttf"),
    "Karla-ExtraBold": require("./assets/fonts/Karla-ExtraBold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 2000);

    return () => console.log("app closed");
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator initialRouteName="Homepage1" screenOptions={{ headerShown: false }}>
              <Stack.Screen name="CreateAnAccount1" component={CreateAnAccount1} options={{ headerShown: false }} />
              <Stack.Screen name="Login1" component={Login1} options={{ headerShown: false }} />

              <Stack.Screen name="Mainpage1" component={Mainpage1} options={{ headerShown: false }} />

              <Stack.Screen name="Homepage1" component={Homepage1} options={{ headerShown: false }} />
              <Stack.Screen name="ConnectPage" component={ConnectPage} options={{ headerShown: false }} />
              <Stack.Screen name="JournalPageMenu1" component={JournalPageMenu1} options={{ headerShown: false }} />
              <Stack.Screen name="ExplorePage1" component={ExplorePage1} options={{ headerShown: false }} />

              <Stack.Screen name="MyProfile1" component={MyProfile1} options={{ headerShown: false }} />
              <Stack.Screen name="Onboarding4" component={Onboarding4} options={{ headerShown: false }} />
              <Stack.Screen name="ArticlesPage2" component={ArticlesPage2} options={{ headerShown: false }} />
              <Stack.Screen name="CommunityPage" component={CommunityPage} options={{ headerShown: false }} />
              <Stack.Screen
                name="TitleIfUserHasDoneOnboardingBefore"
                component={TitleIfUserHasDoneOnboardingBefore}
                options={{ headerShown: false }}
              />
              <Stack.Screen name="EmergencyResourcesPage" component={EmergencyResourcesPage} options={{ headerShown: false }} />
              <Stack.Screen name="ArticlesPage3" component={ArticlesPage3} options={{ headerShown: false }} />
              <Stack.Screen name="TherapyPage" component={TherapyPage} options={{ headerShown: false }} />
              <Stack.Screen name="ChangePassword1" component={ChangePassword1} options={{ headerShown: false }} />
              <Stack.Screen name="Onboarding3" component={Onboarding3} options={{ headerShown: false }} />
              <Stack.Screen name="Onboarding5" component={Onboarding5} options={{ headerShown: false }} />
              <Stack.Screen name="JournalPageType1" component={JournalPageType1} options={{ headerShown: false }} />
              <Stack.Screen name="Onboarding6" component={Onboarding6} options={{ headerShown: false }} />
              <Stack.Screen name="Onboarding7" component={Onboarding7} options={{ headerShown: false }} />
              <Stack.Screen name="Frame" component={Frame} options={{ headerShown: false }} />
              <Stack.Screen name="EcoHeroesPage" component={EcoHeroesPage} options={{ headerShown: false }} />
              <Stack.Screen name="HelpOutPage" component={HelpOutPage} options={{ headerShown: false }} />
            </Stack.Navigator>
          ) : (
            <TitleIfUserHasDoneOnboardingBefore />
          )}
        </NavigationContainer>
      </GestureHandlerRootView>
    </>
  );
};
export default App;
