import React, { useState } from "react";
import { KeyboardAvoidingView, RefreshControl, SafeAreaView, ScrollView } from "react-native";
import { useSWRConfig } from "swr";

import FlexView from "@/components/FlexView";
import FooterNav from "@/components/FooterNav";
import { Color, FontFamily, sxUtilities } from "@/GlobalStyles";

export const useRefreshControl = () => {
  const { mutate } = useSWRConfig();
  const [isLoading, setLoading] = useState(false);

  const refresh = () => {
    setLoading(true);
    console.log("refreshing");
    mutate((refreshingUrl) => {
      console.log({ refreshingUrl });
      return true;
    }).finally(() => setLoading(false));
  };
  const control = <RefreshControl refreshing={isLoading} onRefresh={refresh} />;

  return { isLoading, refresh, control };
};

export const RefreshableScrollView = (/** @type {{{children:ReactNode}}  */ { children }) => {
  const { control } = useRefreshControl();

  return (
    <KeyboardAvoidingView style={[sxUtilities.flex1, { height: "100%" }]}>
      <ScrollView refreshControl={control} contentContainerStyle={[sxUtilities.flexGrow1]}>
        <FlexView flex={1} style={[sxUtilities.flexGrow1]}>
          {children}
        </FlexView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export const SafeRefreshableScrollView = ({ children, footer = <FooterNav /> }) => {
  return (
    <FlexView style={{ fontFamily: FontFamily.helveticaNeueLight, backgroundColor: Color.colorWhite }} flex={1}>
      <SafeAreaView style={[sxUtilities.flex1, { height: "100%" }]}>
        <RefreshableScrollView>{children}</RefreshableScrollView>
      </SafeAreaView>
      {!!footer && footer}
    </FlexView>
  );
};
