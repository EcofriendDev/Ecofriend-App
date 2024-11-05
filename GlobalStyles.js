import { StyleSheet } from "react-native";

/* fonts */
export const FontFamily = {
  hiraKakuStdW8: "HiraKakuStd-W8",
  helveticaNeueLight: "HelveticaNeueLight",
  karlaRegular: "Karla-Regular",
  karlaExtraBold: "Karla-ExtraBold",
  robotoRegular: "Roboto-Regular",
};
/* font sizes */
export const FontSize = {
  size_xs: 12,
  size_xl: 20,
  size_lg: 18,
  size_base: 16,
  size_13xl: 32,
  size_smi_3: 12,
  size_mid_3: 17,
  size_11xl: 30,
  size_sm: 14,

  size_mini: 15,
  size_5xl: 24,
  size_39xl: 58,
  size_21xl: 40,
  size_17xl: 36,
  size_lgi_1: 19,
};
/* Colors */
export const Color = {
  colorYellowgreen_100: "#d8dd47",
  colorYellowgreen_200: "#94c74a",
  colorWhite: "#fff",
  colorBlack: "#000",
  colorDarkslategray_100: "#166057",
  colorDarkslategray_200: "#3f414e",
  colorDarkslategray_300: "#0f4c45",
  colorGainsboro_100: "#e8e8e8",
  colorGainsboro_200: "#e7e7e7",
  colorGainsboro_300: "#e6e6e6",
  colorOrangered: "#fe6520",
  colorBlanchedalmond: "#ffeccc",
  colorGray_100: "#939393",
  colorGray_200: "#8d8d8d",
  colorGray_300: "#000401",
  colorGray_400: "#010000",
  colorLightgray_100: "#cdcdcd",
  colorLightgray_200: "rgba(205, 205, 205, 0.8)",
  colorCadetblue: "#7eb1bf",
  transparent: "#0000",
};
/* Gaps */
export const Gap = {
  gap_md: 39,
  gap_sm: 20,
  gap_xs: 10,
  gap_lg: 50,
  gap_xl: 60,
  gap_2xl: 70,
};
/* Paddings */
export const Padding = {
  p_19xl: 38,
  p_mini: 15,
  p_5xs: 8,
  p_lgi: 19,
  p_lg: 18,
};
/* border radiuses */
export const Border = {
  br_11xl: 30,
  br_xs: 12,
  br_26xl: 45,
  br_3xs_6: 10,
  br_3xs: 10,
  br_mini: 15,
  br_9xl: 28,
  br_71xl: 90,
  br_5xs_5: 8,
  br_81xl: 100,
  br_base: 16,
  br_10xs: 3,
};

export const sxUtilities = StyleSheet.create({
  textMuted: { color: Color.colorGray_100 },
  textXs: { fontSize: FontSize.size_xs },
  textSm: { fontSize: FontSize.size_sm },
  textMd: { fontSize: FontSize.size_base },
  heading1: {
    fontWeight: "700",
    fontSize: FontSize.size_11xl,
  },
  heading2: {
    fontWeight: "700",
    fontSize: FontSize.size_xl,
  },
  heading3: {
    fontWeight: "700",
    fontSize: FontSize.size_lg,
  },
  heading4: {
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  heading5: {
    fontWeight: "700",
    fontSize: FontSize.size_sm,
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
  },
  flex1: {
    flex: 1,
  },
  flexGrow1: {
    flexGrow: 1,
  },
  flexCol: {
    display: "flex",
    flexDirection: "column",
  },
  alignItemsCenter: {
    alignItems: "center",
  },
  alignItemsStart: {
    alignItems: "flex-start",
  },
  alignItemsEnd: {
    alignItems: "flex-end",
  },
  justifyContentCenter: {
    justifyContent: "center",
  },
  justifyContentStart: {
    justifyContent: "flex-start",
  },
  justifyContentEnd: {
    justifyContent: "flex-end",
  },
  justifyContentBetween: {
    justifyContent: "space-between",
  },
  justifyContentAround: {
    justifyContent: "space-around",
  },
  justifyContentEvenly: {
    justifyContent: "space-evenly",
  },

  get textBase() {
    return this.textMd;
  },
  textLg: { fontSize: FontSize.size_lg },
  navIcon: {
    width: 24,
    height: 24,
  },
  input: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.helveticaNeueLight,
    backgroundColor: "#ededed",
    borderRadius: Border.br_base,
    paddingHorizontal: 10,
  },
  inputBg: {
    backgroundColor: "#9d9d9d",
  },
  inputLabel: {
    color: Color.colorDarkslategray_300,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.helveticaNeueLight,
    fontWeight: "700",
  },
  outline: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorBlanchedalmond,
  },
  centered: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  centeredSelf: {
    alignSelf: "center",
    margin: "auto",
  },
  get centeredSelfAbsolute() {
    return { ...this.centeredSelf, position: "absolute" };
  },
  widthFull: {
    width: "100%",
  },
});
