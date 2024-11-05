import { useNavigation } from "@react-navigation/native";
import { Button, Icon as RNIcon } from "@rneui/themed";
import moment from "moment";
import { useEffect, useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, Text, TextInput, View } from "react-native";
import ReactNativeCalendarStrip from "react-native-calendar-strip";

import FlexView from "@/components/FlexView";
import { Icon } from "@/components/Icons";
import { SafeRefreshableScrollView } from "@/components/SafeRefreshableScrollView";
import { Border, Color, FontFamily, FontSize, Gap, Padding, sxUtilities } from "@/GlobalStyles";
import { startOfDay, useDateJournal } from "@/services/jstore";

const moodIcons = {
  veryHappy: "sentiment-very-satisfied",
  happy: "sentiment-satisfied",
  neutral: "sentiment-neutral",
  sad: "sentiment-dissatisfied",
  verySad: "sentiment-very-dissatisfied",
};

const QuestionFooter = () => (
  <View
    style={[
      { marginTop: 0, width: "100%" },
      styles.promptBoxChild,
      sxUtilities.flexRow,
      sxUtilities.justifyContentCenter,
      sxUtilities.alignItemsCenter,
    ]}
  >
    <Icon iconName="CircleDown" scale={1} />
  </View>
);

const PencilFab = () => (
  <View style={[styles.smallFab, styles.smallFabFlexBox, { padding: Padding.p_mini }, sxUtilities.centered]}>
    <Icon iconName="Pencil" />
  </View>
);

const JournalPageType1 = () => {
  const navigation = useNavigation();
  const [[date, entry, journal, keyedJournal], [setDate, setEntry]] = useDateJournal();

  const csRef = useRef();

  const { control, reset, formState, watch, setValue } = useForm({
    defaultValues: entry,
  });

  useEffect(() => {
    return watch((formEntryUpdate) => {
      console.log({ formEntryUpdate });
      if (JSON.stringify(formEntryUpdate) === JSON.stringify(entry)) return;
      setEntry(formEntryUpdate);
    }).unsubscribe;
  }, []);

  const /**@type {{controlName:keyof import("../services/jstore").Entry,questionText,placeholder}[]} */ questions = [
      {
        controlName: "environmentalFactor",
        questionText: "What specific environmental news or events have impacted your mood today?",
        placeholder: "Type your response here",
      },
      {
        controlName: "worry",
        questionText: "What specific aspect of climate change is causing you the most anxiety right now?",
        placeholder: "I am most anxious about wildfires...",
      },
      {
        controlName: "smallSolution",
        questionText: "What small steps can you take today to reduce your environmental impact?",
        placeholder: "I used a metal straw instead of a plastic one when I drank my orange juice in the morning...",
      },
    ];

  return (
    <SafeRefreshableScrollView>
      <View style={[sxUtilities.flexCol, { minHeight: "200%" }, sxUtilities.flex1]}>
        <View
          className="nfc-header"
          style={[sxUtilities.flexRow, sxUtilities.justifyContentBetween, { width: "100%", padding: Padding.p_mini }]}
        >
          <View style={[styles.profileAndHiType, sxUtilities.flexCol]}>
            <Text style={[sxUtilities.heading1]}>My Journal</Text>
          </View>

          <Button type="clear" icon={<Icon iconName="Settings" scale={2} />} onPress={() => navigation.navigate("MyProfile1")} />
        </View>

        <Controller
          name="date"
          control={control}
          render={({ field }) => (
            <View style={sxUtilities.flexCol}>
              <ReactNativeCalendarStrip
                ref={csRef}
                scrollable
                onDateSelected={(v) => {
                  setDate(startOfDay(v));
                  reset({ date: startOfDay(v).toISOString(), ...keyedJournal[startOfDay(v).toISOString()] });
                }}
                daySelectionAnimation={{ type: "background" }}
                highlightDateContainerStyle={{ backgroundColor: Color.colorYellowgreen_200 }}
                style={{ height: 140, paddingTop: 20, paddingBottom: 10 }}
                calendarColor={"#white"}
                calendarHeaderStyle={[{ color: Color.colorDarkslategray_300 }, sxUtilities.heading3]}
                dateNumberStyle={{ color: "black" }}
                dateNameStyle={{ color: "black" }}
                iconContainer={{ flex: 0.1 }}
                selectedDate={moment(entry.date)}
              />
            </View>
          )}
        />

        <FlexView
          flex={0}
          style={[
            sxUtilities.flexCol,
            {
              gap: Gap.gap_xs,
              backgroundColor: Color.colorDarkslategray_300,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,

              padding: 20,
            },
          ]}
        >
          <View style={[sxUtilities.flexRow, sxUtilities.justifyContentBetween, sxUtilities.alignItemsCenter]}>
            <Text
              style={[
                styles.todaysMood,
                { position: "absolute", width: "100%", height: "100%", verticalAlign: "middle", paddingTop: 20 },
                sxUtilities.flexRow,
                sxUtilities.justifyContentCenter,
                sxUtilities.alignItemsCenter,
              ]}
            >
              Today’s Mood:
            </Text>
            <Button type="clear" onPress={() => navigation.navigate("JournalPageMenu1")} style={{}}>
              <Icon iconName="Close" scale={2} />
            </Button>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
            <Controller
              name="mood"
              control={control}
              render={({ field }) => (
                <>
                  {Object.keys(moodIcons).map((mood) => (
                    <View key={mood} style={{ borderRadius: Border.br_mini, overflow: "hidden" }}>
                      <RNIcon
                        borderRadius={10}
                        color={field.value == mood ? Color.colorDarkslategray_100 : Color.colorLightgray_200}
                        style={{
                          padding: 10,
                          borderRadius: 20,
                          transform: [{ scale: 1.5 }],
                          overflow: "hidden",
                          backgroundColor: field.value === mood ? Color.colorYellowgreen_200 : "transparent",
                        }}
                        name={moodIcons[mood]}
                        type="material"
                        onPress={() => {
                          const update = { ...entry, mood: mood };
                          reset(update);
                          setEntry(update);
                        }}
                      />
                    </View>
                  ))}
                </>
              )}
            />
          </View>

          <View style={[]}>
            <View style={[styles.groupChild, styles.groupChildLayout]} />
            <Controller
              control={control}
              name="moodDescription"
              render={({ field }) => (
                <TextInput
                  value={field.value}
                  onChangeText={field.onChange}
                  style={[styles.enterMoodHere, { position: "absolute" }]}
                  placeholder="Enter mood here"
                  placeholderTextColor="#000000"
                />
              )}
            />
          </View>

          <FlexView direction="column" gap={20} style={[{ marginTop: 20 }]} flex={1}>
            {questions.map(({ controlName, questionText, placeholder }) => (
              <FlexView
                flex={1}
                key={controlName}
                style={[{ backgroundColor: Color.colorWhite, borderRadius: Border.br_11xl, height: 200, overflow: "hidden" }]}
              >
                <View style={{ padding: Padding.p_lg }}>
                  <View style={[sxUtilities.flexRow, sxUtilities.justifyContentBetween]}>
                    <Text style={[sxUtilities.heading3, { flex: 2 }]}>{questionText}</Text>
                    <View>
                      <PencilFab />
                    </View>
                  </View>
                  <Controller
                    control={control}
                    name={controlName}
                    render={({ field }) => (
                      <TextInput
                        style={[styles.textResponse, { marginTop: 20, width: "100%" }]}
                        value={field.value}
                        onChangeText={field.onChange}
                        placeholder={placeholder}
                        placeholderTextColor="#9d9d9d"
                      />
                    )}
                  />
                </View>
                <QuestionFooter />
              </FlexView>
            ))}
          </FlexView>
        </FlexView>
      </View>
    </SafeRefreshableScrollView>
  );
};

const styles = StyleSheet.create({
  promptLayout: {
    height: 227,
    width: "100%",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_11xl,
  },
  whatTypo1: {
    height: 45,
    color: Color.colorBlack,
    fontFamily: FontFamily.helveticaNeueLight,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  questionPosition: {
    top: 22,
    height: 45,
    left: 30,
    position: "absolute",
  },
  smallFabFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  whatTypo: {
    fontWeight: "700",
    textAlign: "left",
  },
  promptLayout1: {
    width: "100%",
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  textLayout: {
    height: 53,
    width: 289,
    position: "absolute",
  },
  groupChildLayout: {
    height: 43,
    width: "100%",
    // position: "absolute",
  },
  textFlexBox: {
    color: Color.colorDarkslategray_300,
    height: 52,
    width: 57,
    fontFamily: FontFamily.karlaRegular,
    textAlign: "center",
    top: 17,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  helloNathanPosition: {
    left: "0%",
    color: Color.colorBlack,
    fontFamily: FontFamily.helveticaNeueLight,
    // position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  exitX: {
    left: 24,
    top: 18,
    width: 42,
    height: 42,
    position: "absolute",
  },
  iUsedA: {
    top: 123,
    width: 295,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    height: 45,
    color: Color.colorBlack,
    fontFamily: FontFamily.helveticaNeueLight,
    left: 30,
  },
  stateLayer: {
    padding: Padding.p_5xs,
  },
  smallFab: {
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    backgroundColor: Color.colorYellowgreen_200,
    borderRadius: Border.br_xs,
    overflow: "hidden",
  },
  whatSmallSteps: {
    width: 253,
    top: 0,
    height: 45,
    color: Color.colorBlack,
    fontFamily: FontFamily.helveticaNeueLight,
    fontSize: FontSize.size_xl,
    position: "absolute",
    fontWeight: "700",
    left: 0,
  },
  questionHeading: {
    width: 307,
  },
  promptBoxChild: {
    height: 27,
    backgroundColor: Color.colorYellowgreen_200,
  },
  arrowDownCircleIcon: {
    top: 202,
    left: 163,
    position: "absolute",
    overflow: "hidden",
  },
  promptBox3: {
    top: 501,
    left: 25,
  },
  whatSpecificEnvironmental: {
    width: 288,
    top: 0,
    // height: 45,
    color: Color.colorBlack,
    fontFamily: FontFamily.helveticaNeueLight,
    fontSize: FontSize.size_xl,
    position: "absolute",
    fontWeight: "700",
    left: 0,
  },
  textResponse: {
    height: 53,
    width: 289,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.helveticaNeueLight,
    backgroundColor: "#ededed",
    borderRadius: Border.br_base,
    paddingHorizontal: 5,
  },
  promptBox1: {
    height: 200,
    left: 22,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    width: "100%",
    borderRadius: Border.br_11xl,
  },
  whatSpecificAspect: {
    top: 0,
    height: 45,
    color: Color.colorBlack,
    fontFamily: FontFamily.helveticaNeueLight,
    fontSize: FontSize.size_xl,
    position: "absolute",
    width: 295,
    fontWeight: "700",
    left: 0,
  },
  questionHeading2: {
    width: 295,
  },
  textResponseChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: "#ededed",
    top: 0,
    left: 0,
  },
  iAmMost: {
    left: 17,
    top: 17,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.helveticaNeueLight,
    position: "absolute",
  },
  textResponse1: {
    top: 114,
    left: 30,
    height: 53,
    width: 289,
  },
  promptBox2: {
    top: 365,
    left: 22,
  },
  todaysMood: {
    // top: 39,
    // left: 94,
    fontWeight: "500",
    width: 205,
    height: 29,
    textAlign: "center",
    color: Color.colorWhite,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.helveticaNeueLight,
    // position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorYellowgreen_200,
    borderRadius: Border.br_xs,
    // top: 0,
    // left: 0,
  },
  enterMoodHere: {
    top: 7,
    left: 21,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.helveticaNeueLight,
    // position: "absolute",
  },
  rectangleParent: {
    // top: 78,
    left: 22,
  },
  journalBody: {
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    backgroundColor: Color.colorDarkslategray_300,
    width: "100%",
    paddingVertical: 20,
  },
  floatingIsland: {
    top: 20,
    left: 139,
    backgroundColor: Color.colorBlack,
    width: 114,
    height: 37,
    position: "absolute",
    overflow: "hidden",
    borderRadius: Border.br_11xl,
  },
  calendarChild: {
    left: 105,
    width: 85,
    height: 85,
    top: 0,
    position: "absolute",
  },
  text: {
    left: 119,
    fontSize: FontSize.size_21xl,
    height: 52,
    width: 57,
    fontFamily: FontFamily.karlaRegular,
    textAlign: "center",
    color: Color.colorWhite,
    top: 17,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  text1: {
    left: 38,
    fontSize: FontSize.size_17xl,
    color: Color.colorDarkslategray_300,
  },
  text2: {
    fontSize: FontSize.size_xl,
    left: 0,
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
    left: "50%",
    transform: [{ translateX: -15 }],

    width: 25,
    height: 25,
    // position: "absolute",
  },

  journalPageType1: {
    flex: 1,
    width: "100%",
    backgroundColor: Color.colorDarkslategray_300,
    borderRadius: Border.br_11xl,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
});

export default JournalPageType1;
