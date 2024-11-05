import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import React, { useState } from "react";
import { FlatList, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";

import Button from "@/components/Buttons";
import Card from "@/components/Card";
import { ImageAndIconAssets } from "@/components/Icons";
import PageHeader from "@/components/PageHeader";
import { SafeRefreshableScrollView } from "@/components/SafeRefreshableScrollView";
import { Border, Color, FontFamily, FontSize, Padding, sxUtilities } from "@/GlobalStyles";
import { useUserAtom } from "@/services/jstore";
import useClimateNews from "@/services/newsApi";

const Recommendations = () => {
  const { news, isError, isLoading } = useClimateNews();
  const filteredNews = news?.filter((item) => item.url && item.url.trim() !== "");

  console.log({ isError, isLoading });
  
  return (
    <View className="nfc-recommendations">
      <View style={styles.recommendations}>
        <Text style={[sxUtilities.heading2]}>Recommended for you</Text>
      </View>

      <FlatList
        data={filteredNews}
        horizontal
        contentContainerStyle={{ gap: 10, display: "flex", flexDirection: "row" }}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => <NewsCard item={item} />}
      />
    </View>
  );
};

const JournalWidget = ({ navigation }) => (
  <View style={styles.journalWidget}>
    <Text style={sxUtilities.heading2}>My Journal</Text>
    <Text style={[styles.youHaventWritten, { paddingBottom: 10 }]}>You haven’t written in your journal today.</Text>
    <View style={styles.frameChild} />

    <Button
      variant="outline"
      curve={4}
      style={{ marginVertical: 10, width: "50%", height: 50, marginLeft: "auto" }}
      onPress={() => navigation.navigate("JournalPageType1")}
    >
      <Text style={[styles.addNewEntry, Padding.p_19xl]}>+ Add new entry</Text>
    </Button>
  </View>
);

const MoodTrack = ({ backgroundColor, children }) => {
  const [height] = useState(300 + Math.floor(Math.random) * 200);

  return (
    <View style={[styles.moodTrackWrapper, { backgroundColor, minHeight: height }]}>
      <Text style={styles.trackYourMood}>{children}</Text>
    </View>
  );
};

const Mainpage1 = () => {
  const navigation = useNavigation();
  const [user] = useUserAtom();

  const cards = [
    {
      title: "Converse with a community",
      bgColor: Color.colorYellowgreen_200,
      contentElement: <Text>Converse with a community</Text>,
    },
    {
      title: "Track your mood",
      bgColor: "#6cb38e",
      contentElement: <Text>Track your mood</Text>,
    },
    {
      title: "Call emergency numbers",
      bgColor: "#ffcf86",
      contentElement: <Text>Call emergency numbers</Text>,
    },
    {
      title: "Find ways to contribute",
      bgColor: Color.colorDarkslategray_300,
      contentElement: <Text>Find ways to contribute</Text>,
    },
    {
      title: "Be inspired by heroes",
      bgColor: Color.colorDarkslategray_200,
      contentElement: <Text>Be inspired by heroes</Text>,
    },
  ];

  const handleCardPress = (card) => {
    console.log(`Pressed card: ${card.title}`);
    if (card.title === "Converse with a community") {
      navigation.navigate("CommunityPage"); // Navigate to CommunityPage.js
    } else if (card.title === "Track your mood") {
      navigation.navigate("JournalPageType1");
    } else if (card.title === "Call emergency numbers") {
      navigation.navigate("EmergencyResourcesPage");
    } else if (card.title === "Find ways to contribute") {
      navigation.navigate("HelpOutPage");
    } else if (card.title === "Be inspired by heroes") {
      navigation.navigate("EcoHeroesPage");
    }
  };

  return (
    <SafeRefreshableScrollView>
      <View style={styles.mainpage1}>
        {/* header , image, recommendations, nav */}

        <PageHeader title={"Hello"} secondaryTitle={user?.name ?? ""} />
        <ImageBackground style={styles.drawingIcon} resizeMode="contain" source={ImageAndIconAssets.MainPageIcon} />

        <JournalWidget navigation={navigation} />

        <Recommendations />

        <View className="nfc-suggestions" style={{ marginTop: 20 }}>
          <Text style={[sxUtilities.heading2]}>What would you like to do?</Text>

          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {cards.map((card, index) => (
              <View key={index} style={{ width: "50%" }}>
                <Card containerStyle={{ backgroundColor: card.bgColor }}>
                  <Pressable onPress={() => handleCardPress(card)}>
                    <View style={{ justifyContent: "center", height: 100 }}>
                      <Text style={styles.cardTexttypo} textBreakStrategy="balanced">
                        {card.contentElement}
                      </Text>
                    </View>
                  </Pressable>
                </Card>
              </View>
            ))}
          </View>
        </View>
      </View>
    </SafeRefreshableScrollView>
  );
};

const styles = StyleSheet.create({
  mainpage1: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    borderRadius: Border.br_11xl,
    padding: Padding.p_mini,
  },
  drawingIcon: {
   width: "100%",
   height: 268,
  },
  journalWidget: {
    backgroundColor: Color.colorGainsboro_300,
    borderRadius: Border.br_mini,
    padding: 15,
    marginBottom: 10,
  },
  cardTexttypo: {
    color: Color.colorWhite,
    fontSize: FontSize.size_lgi_1,
    fontFamily: FontFamily.helveticaNeueBold,
  },
  youHaventWritten: {
    fontStyle: "italic",
    color: Color.colorGray_100,
    fontSize: FontSize.size_mini,
    paddingTop: 10,

    fontStyle: "italic",
    //width: 217,
    alignItems: "center",
    // display: "flex",
    color: Color.colorGray_100,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeueLight,
  },

  icon: {
    borderRadius: Border.br_71xl,
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  addNewEntry: {
    textAlign: "center",
    color: Color.colorBlack,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
  },
  myJournal: {
    fontWeight: "700",
    fontSize: FontSize.size_xl,
  },
  recommendations: {
    marginBottom: 20,
  },
  recommendedForYou: {
    fontWeight: "700",
    fontSize: FontSize.size_xl,
  },
  whatWouldYou: {
    fontWeight: "700",
    fontSize: FontSize.size_xl,
  },
  newsItem: {
    paddingVertical: 10,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_100,
  },
  profileAndHiType: {
    marginBottom: 20,
  },
  moodTrackWrapper: {
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    flexBasis: "50%",
    flex: "1",
  },
  trackYourMood: {
    color: Color.colorBlanchedalmond,
  },
  navigationBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: Padding.p_mini,
    backgroundColor: Color.colorDarkslategray_300,
    // position: "absolute",
    // bottom: 0,
  },
  navButton: {
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
  },
  navText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_smi_3,
  },

  cogButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  icon1: {
    width: 40,
    height: 40,
  },
});

export default Mainpage1;

function NewsCard({ item }) {
  if (item.title === "[Removed]") {
    return null; // Return null to render nothing
  }
  return (
    <View style={{ display: "flex", flexDirection: "column", width: "45vw" }}>
      <Image source={{ uri: item.urlToImage }} contentFit="cover" style={{ width: 200, height: 150, borderRadius: Border.br_base }} />
      <Text
        style={[
          styles.newsItem,
          { width: 200 }, // Use existing styles
        ]}
      >
        {item.title}
      </Text>
    </View>
  );
}
