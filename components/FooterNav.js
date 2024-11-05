import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

import Button from "@/components/Buttons";
import FlexView from "@/components/FlexView";
import { Icon, ImageAndIconAssets } from "@/components/Icons";
import { Color } from "@/GlobalStyles";

function FooterNav() {
  const navigation = useNavigation();
  const navItems = [
    { label: "Home", icon: ImageAndIconAssets.Home, route: "Mainpage1" },
    { label: "Connect", icon: ImageAndIconAssets.Connect, route: "ConnectPage" },
    { label: "Explore", icon: ImageAndIconAssets.Explore, route: "ExplorePage1" },
    { label: "Journal", icon: ImageAndIconAssets.Journal, route: "JournalPageMenu1" },
  ];

  return (
    <FlexView flexDirection="row" style={[styles.navigationBar, { flexBasis: 80 }]} flex={0}>
      {navItems.map((item, index) => (
        <Button variant="text" key={index} buttonStyle={styles.navButton} onPress={() => navigation.navigate(item.route)}>
          <View style={{ display: "flex", flexDirection: "column", gap: 5, justifyContent: "center", alignItems: "center" }}>
            {/* <Image style={sxUtilities.navIcon} source={item.icon} /> */}
            <Icon iconAsset={item.icon} />
            <Text style={[styles.navText, { color: Color.colorWhite }]}>{item.label}</Text>
          </View>
        </Button>
      ))}
    </FlexView>
  );
}

const styles = StyleSheet.create({
  navigationBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 80,
    backgroundColor: Color.colorDarkslategray_300,
    width: "100%",
  },
  navButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 15,
  },
  navText: {
    fontSize: 12,
    color: "#000",
  },
});

export default FooterNav;
