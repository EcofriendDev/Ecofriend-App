import { FlatList, Image, StyleSheet, Text, View } from "react-native";

import { Border, Color, FontSize, sxUtilities } from "@/GlobalStyles";
import useClimateNews from "@/services/newsApi";

export const Recommendations = (
  /** @type {{direction:'vertical'|'horizontal'}}*/ { direction = "horizontal", scrollEnabled = direction !== "vertical" }
) => {
  const { news, isError, isLoading } = useClimateNews();

   // Filter out news items where urlToImage is null, undefined, or an empty string
  const filteredNews = news?.filter(item => item.title !== " The Origins of the Climate Haven Myth ");
  ;
  
  console.log({ isError, isLoading });
  return (
    <View className="nfc-recommendations">
      <Text style={[sxUtilities.heading2]}>Recommended for you</Text>

      <FlatList
        data={filteredNews}
        {...(direction === "horizontal" ? { [direction]: true } : {})}
        {...{ scrollEnabled }}
        contentContainerStyle={{ gap: 10 }}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => <NewsCard item={item} />}
      />
    </View>
  );
};
export function NewsCard({ item }) {
  return (
    <View style={{ display: "flex", flexDirection: "column", width: "45vw" }}>
      <Image source={{ uri: item.urlToImage }} contentFit="cover" style={{ width: "100%", height: 150, borderRadius: Border.br_base }} />
      <Text style={styles.newsItem}>{item.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  newsItem: {
    paddingVertical: 10,
    width :200, 
    fontSize: FontSize.size_sm,
    color: Color.colorGray_100,
  },
});
