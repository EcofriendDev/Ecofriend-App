import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { SafeRefreshableScrollView } from "@/components/SafeRefreshableScrollView";
import { Border, Color, FontFamily, FontSize } from "@/GlobalStyles";

const ArticlesPage2 = () => {
  const navigation = useNavigation();

  return (
    <SafeRefreshableScrollView>
      <View style={styles.articlesPage}>
        <View style={styles.articlesPageChild} />
        <View style={[styles.headerWithBackarrow, styles.rectangleViewPosition]}>
          <View style={[styles.profileAndHiType, styles.groupChild5Position]}>
            <Image style={styles.profileAndHiTypeChild} contentFit="cover" source={require("../assets/ellipse-26.png")} />
            <Text style={[styles.helloNathan, { marginLef: 10 }]}> Articles</Text>
          </View>
          <Pressable style={[styles.arrowRightMiniCircle, styles.categoriesPosition]} onPress={() => navigation.navigate("ExplorePage1")}>
            <Image style={[styles.icon, styles.iconLayout]} contentFit="cover" source={require("../assets/arrowrightminicircle.png")} />
          </Pressable>
          <Pressable style={styles.cogWorkLoadingCogGearSet} onPress={() => navigation.navigate("MyProfile1")}>
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/cogworkloadingcoggearsettingsmachine.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View style={[styles.groupChild, styles.groupShadowBox]} />
          <View style={[styles.groupItem, styles.groupChildBg]} />
        </View>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupInner, styles.groupLayout]} />
          <View style={[styles.rectangleView, styles.groupChildBg]} />
        </View>
        <View style={[styles.rectangleContainer, styles.groupViewLayout]}>
          <View style={styles.groupChild1} />
          <View style={styles.groupChildPosition} />
        </View>
        <View style={[styles.groupView, styles.groupViewLayout]}>
          <View style={styles.groupChild1} />
          <View style={styles.groupChildPosition} />
        </View>
        <View style={styles.component1}>
          <Image
            style={[styles.component1Child, styles.component1ChildPosition]}
            contentFit="cover"
            source={require("../assets/group-6874.png")}
          />
          <View style={[styles.component1Inner, styles.component1ChildPosition]}>
            <View style={[styles.groupChild5, styles.groupChildBg]} />
          </View>
          <Image style={styles.component1Item} contentFit="cover" source={require("../assets/group-6873.png")} />
          <Text style={[styles.deforestation, styles.plasticUseTypo]}>Deforestation</Text>
          <Text style={[styles.plasticUse, styles.plasticUseTypo]}>Plastic Use</Text>
          <Text style={[styles.categories, styles.plasticUseTypo]}>Categories</Text>
          <View style={[styles.component1Child1, styles.component1ChildPosition]} />
          <Text style={[styles.biodiversityLoss, styles.plasticUseTypo]}>{`Biodiversity
Loss`}</Text>
          <Image
            style={styles.cat1NatureHeadCatPetAniIcon}
            contentFit="cover"
            source={require("../assets/cat1natureheadcatpetanimalsfelyne.png")}
          />
        </View>
        <View style={styles.articlesPageItem} />
      </View>
    </SafeRefreshableScrollView>
  );
};

const styles = StyleSheet.create({
  rectangleViewPosition: {
    left: 18,
    position: "absolute",
  },
  groupChild5Position: {
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  categoriesPosition: {
    left: "0%",
    top: "0%",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  groupChildLayout: {
    height: 213,
    width: 331,
    position: "absolute",
  },
  groupShadowBox: {
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    top: 0,
  },
  groupChildBg: {
    backgroundColor: Color.colorYellowgreen_200,
    borderRadius: Border.br_3xs,
  },
  groupLayout: {
    height: 390,
    width: 331,
    position: "absolute",
  },
  groupViewLayout: {
    height: 315,
    top: 1024,
    width: 157,
    position: "absolute",
  },
  component1ChildPosition: {
    bottom: "14.65%",
    top: "28.03%",
    width: "22.33%",
    height: "57.32%",
    position: "absolute",
  },
  plasticUseTypo: {
    fontFamily: FontFamily.karlaExtraBold,
    fontWeight: "800",
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  articlesPageChild: {
    top: 20,
    left: 139,
    backgroundColor: Color.colorBlack,
    width: 114,
    height: 37,
    position: "absolute",
    overflow: "hidden",
    borderRadius: Border.br_11xl,
  },
  profileAndHiTypeChild: {
    height: "73.85%",
    width: "14.16%",
    bottom: "26.15%",
    left: "85.84%",
    display: "none",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  helloNathan: {
    height: "72.31%",
    width: "84.39%",
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.hiraKakuStdW8,
    textAlign: "left",
    color: Color.colorBlack,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  goodMorning: {
    top: "55.38%",
    fontSize: FontSize.size_xl,
    fontWeight: "300",
    fontFamily: FontFamily.helveticaNeueLight,
    textAlign: "center",
    color: Color.colorBlack,
    left: "0%",
    display: "none",
    position: "absolute",
  },
  profileAndHiType: {
    height: "98.48%",
    width: "98.3%",
    left: "1.7%",
    top: "1.52%",
  },
  icon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  arrowRightMiniCircle: {
    right: "85.8%",
    bottom: "24.24%",
    width: "14.2%",
    height: "75.76%",
    position: "absolute",
  },
  cogWorkLoadingCogGearSet: {
    left: "88.35%",
    right: "-0.85%",
    bottom: "31.82%",
    width: "12.5%",
    height: "66.67%",
    top: "1.52%",
    position: "absolute",
  },
  headerWithBackarrow: {
    top: 87,
    width: 352,
    height: 66,
  },
  groupChild: {
    height: 213,
    width: 331,
    position: "absolute",
  },
  groupItem: {
    top: 32,
    left: 178,
    width: 138,
    height: 150,
    position: "absolute",
  },
  rectangleParent: {
    top: 361,
    left: 31,
  },
  groupInner: {
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    top: 0,
  },
  rectangleView: {
    top: 31,
    width: 295,
    height: 154,
    left: 18,
    position: "absolute",
  },
  rectangleGroup: {
    top: 604,
    left: 32,
  },
  groupChild1: {
    height: 211,
    width: 157,
    backgroundColor: Color.colorYellowgreen_200,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChildPosition: {
    height: 203,
    borderBottomLeftRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_3xs,
    top: 112,
    width: 157,
    backgroundColor: Color.colorGainsboro_200,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    position: "absolute",
  },
  rectangleContainer: {
    left: 32,
  },
  groupView: {
    left: 206,
  },
  component1Child: {
    right: "51.61%",
    left: "26.05%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupChild5: {
    height: "100%",
    width: "100%",
    left: "0%",
    top: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  component1Inner: {
    right: "25.81%",
    left: "51.86%",
  },
  component1Item: {
    top: "27.39%",
    right: "77.42%",
    bottom: "15.29%",
    left: "0.25%",
    width: "22.33%",
    height: "57.32%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  deforestation: {
    left: 5,
    fontSize: FontSize.size_xs,
    top: 139,
    fontWeight: "800",
  },
  plasticUse: {
    left: 117,
    fontSize: FontSize.size_xs,
    top: 139,
    fontWeight: "800",
  },
  categories: {
    fontSize: FontSize.size_5xl,
    left: "0%",
    top: "0%",
  },
  component1Child1: {
    left: "77.67%",
    backgroundColor: Color.colorYellowgreen_200,
    borderRadius: Border.br_3xs,
    right: "0%",
    bottom: "14.65%",
    top: "28.03%",
  },
  biodiversityLoss: {
    left: 218,
    fontSize: FontSize.size_xs,
    top: 139,
    fontWeight: "800",
  },
  cat1NatureHeadCatPetAniIcon: {
    top: 66,
    left: 232,
    width: 44,
    height: 44,
    position: "absolute",
    overflow: "hidden",
  },
  component1: {
    top: 164,
    left: 26,
    width: 403,
    height: 157,
    position: "absolute",
  },
  articlesPageItem: {
    top: 318,
    left: 1,
    borderStyle: "solid",
    borderColor: Color.colorLightgray_100,
    borderTopWidth: 1,
    width: 394,
    height: 1,
    position: "absolute",
  },
  articlesPage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 1882,
    overflow: "hidden",
    width: "100%",
  },
});

export default ArticlesPage2;
