import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import Button from "@/components/Buttons";
import FlexView from "@/components/FlexView";
import { ImageAndIconAssets } from "@/components/Icons";
import PageHeader from "@/components/PageHeader";
import { SafeRefreshableScrollView } from "@/components/SafeRefreshableScrollView";
import { Border, Color, FontFamily, FontSize, Gap, Padding, sxUtilities } from "@/GlobalStyles";
import { parseMDY, startOfDay } from "@/services/jstore";

const JournalPageMenu1 = () => {
  const navigation = useNavigation();
  const today = startOfDay(moment());

  return (
    <SafeRefreshableScrollView>
      <FlexView flexDirection="column" style={[styles.journalPageMenu1, sxUtilities.flexCol, { overflow: "hidden" }]} flex={1}>
        <View style={{ padding: Padding.p_mini }}>
          <PageHeader title="My Journal" subtitle={""} secondaryTitle={undefined} />
        </View>

        <Image style={[styles.imageIcon, { marginTop: 40 }]} contentFit="cover" source={ImageAndIconAssets.JournalPageIcon} />

        <View
          style={[
            sxUtilities.flexCol,
            sxUtilities.justifyContentStart,
            sxUtilities.alignItemsCenter,
            {
              marginTop: -50,
              height: "auto",
              backgroundColor: Color.colorGainsboro_300,
              borderRadius: 30,
              marginHorizontal: 30,
              padding: 20,
              minHeight: 200,
            },
          ]}
        >
          <FlexView
            flexDirection="column"
            style={[styles.lineParent, { padding: Padding.p_mini, gap: Gap.gap_sm }, sxUtilities.alignItemsCenter]}
          >
            <Text style={[styles.dateOfToday, styles.goodMorningTypo]}>{parseMDY(today)}</Text>

            <View
              style={[
                styles.frameChild,
                styles.frameChildPosition,
                { marginHorizontal: "auto" },
                sxUtilities.flexRow,
                sxUtilities.justifyContentBetween,
              ]}
            />

            <Button
              variant="outline"
              curve={4}
              style={{
                paddingHorizontal: 30,
                margin: "auto",
                height: 60,
              }}
              onPress={() => navigation.navigate("JournalPageType1")}
            >
              <Text style={styles.addNewEntry}>+ Add new entry</Text>
            </Button>
          </FlexView>
        </View>

        <Button
          variant="text"
          style={[{ bottom: 0, right: -30 }, sxUtilities.flexGrow1]}
          onPress={() => navigation.navigate("JournalPageType1")}
        >
          <Image
            style={[styles.addButtonIcon, { position: "absolute", right: 0, bottom: 0 }]}
            contentFit="cover"
            source={ImageAndIconAssets.FilledCirclePlus}
          />
        </Button>
      </FlexView>
    </SafeRefreshableScrollView>
  );
};

const styles = StyleSheet.create({
  lineParentLayout: {
    borderRadius: Border.br_11xl,
  },
  frameChildPosition: {
    // left: 23,
    // position: "absolute",
  },

  mainBodyLayout: {
    // height: 263,
    // width: 353,
    // position: "absolute",
  },
  frameItemLayout: {
    height: 73,
    width: 269,
    // position: "absolute",
  },
  home1Typo: {
    height: 15,
    color: Color.colorWhite,
    fontFamily: FontFamily.karlaRegular,
    fontSize: FontSize.size_smi_3,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    left: 0,
    textAlign: "center",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  glassLayout: {
    width: 24,
    position: "absolute",
  },
  textFlexBox: {
    color: Color.colorDarkslategray_300,
    height: 52,
    width: 57,
    top: 17,
    fontFamily: FontFamily.karlaRegular,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  imageIcon: {
    // left: 98,
    marginHorizontal: "auto",
    width: "90%",
    height: 345,
    top : -30, 
    // transform: "scale(2)",
    // position: "absolute",
  },
  profileAndHiType: {
    width: 346,
    height: 65,
  },
  frameChild: {
    // top: 141,
    borderStyle: "solid",
    borderColor: "#717171",
    borderTopWidth: 1,
    width: 307,
    height: 1,
  },
  frameItem: {
    borderRadius: Border.br_71xl,
    //left: 0,
    //top: 0,
    justifyContent: "center",
    alightItems: "center",
  },
  addNewEntry: {
    // top: 23,
    // left: 50,
    fontWeight: "500",
    //width: 173,
    //height: 27,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.helveticaNeueLight,
    // position: "absolute",
  },
  vectorParent: {
    //top: 164,
    left: 30,
    justifyContent: "center",
    alightItems: "center",
    flex: 1,
  },
  lineParent: {
    // date and add new entry grey box
    // left: 20,
    // top: 0,
    // height: 200,
    // // overflow: "hidden",
    // borderRadius: Border.br_11xl,
    // justifyContent: "center",
    // alightItems: "center",
    // flex: 1,
  },
  dateOfToday: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    textAlign: "center",
  },
  mainBody: {
    // left: 20,
    justifyContent: "center",
    alightItems: "center",
  },
  addButtonIcon: {
    // left: 279,
    // borderRadius: 66,
    width: 132,
    height: 132,
    // position: "absolute",
  },
  home1: {
    top: 31,
  },
  home3HomeHouseRoofShelteIcon: {
    height: "55.81%",
    bottom: "44.19%",
    left: "25.9%",
    right: "26.29%",
    width: "47.81%",
    maxWidth: "100%",
    top: "0%",
    position: "absolute",
  },
  home: {
    height: 43,
    width: 50,
  },
  vectorIcon: {
    height: "53.33%",
    width: "51.79%",
    right: "24.7%",
    bottom: "46.67%",
    left: "23.51%",
    top: "0%",
    maxWidth: "100%",
    position: "absolute",
  },
  connect1: {
    top: 30,
  },
  connect: {
    height: 45,
    width: 50,
  },
  magnifyingGlassGlassSearchIcon: {
    left: 13,
    height: 25,
    top: 0,
  },
  explore1: {
    top: 29,
  },
  explore: {
    height: 44,
    width: 50,
  },
  vectorIcon1: {
    height: "53.69%",
    bottom: "46.31%",
    left: "25.9%",
    right: "26.29%",
    width: "47.81%",
    maxWidth: "100%",
    top: "0%",
    position: "absolute",
  },
  navigationBar: {
    top: 729,
    backgroundColor: Color.colorDarkslategray_300,
    width: 393,
    height: 123,
    flexDirection: "row",
    paddingHorizontal: Padding.p_19xl,
    paddingVertical: Padding.p_mini,
    gap: Gap.gap_md,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  calendarChild: {
    left: 102,
    width: 85,
    height: 85,
    top: 0,
    position: "absolute",
  },
  text: {
    left: 116,
    fontSize: FontSize.size_21xl,
    height: 52,
    width: 57,
    top: 17,
    color: Color.colorWhite,
    fontFamily: FontFamily.karlaRegular,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  text1: {
    left: 38,
    fontSize: FontSize.size_17xl,
    color: Color.colorDarkslategray_300,
  },
  text2: {
    left: 0,
    fontSize: FontSize.size_xl,
  },
  text3: {
    left: 237,
    fontSize: FontSize.size_xl,
  },
  text4: {
    left: 194,
    fontSize: FontSize.size_17xl,
    color: Color.colorDarkslategray_300,
  },
  calendarItem: {
    top: 73,
    left: 133,
    height: 24,
  },
  calendar: {
    // top: 395,
    left: 49,
    width: 295,
    height: 97,
    // position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  journalPageMenu1: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
  },
});

export default JournalPageMenu1;
