import { Switch } from "@rneui/themed";
import React, { useState } from "react";
import { StatusBar, StyleProp, StyleSheet, ViewStyle } from "react-native";

const NavigationBar2 = ({ style }) => {
  const [navigationBarValue, setNavigationBarValue] = useState(undefined);

  return <StatusBar style={style} name="Home" value={navigationBarValue} onValueChange={setNavigationBarValue} color="#0f4c45" />;
};

const styles = StyleSheet.create({});

export default NavigationBar2;
