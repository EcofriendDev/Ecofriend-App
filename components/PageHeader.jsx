import { useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleSheet, Text } from "react-native";

import Button from "@/components/Buttons";
import FlexView from "@/components/FlexView";
import { Icon, ImageAndIconAssets } from "@/components/Icons";
import { Color, FontSize, sxUtilities } from "@/GlobalStyles";

function PageHeader({ subtitle, title, secondaryTitle, back = false, settings = true }) {
  const navigation = useNavigation();

  return (
    <FlexView
      flexDirection="row"
      style={[sxUtilities.flexRow, sxUtilities.justifyContentBetween, sxUtilities.alignItemsCenter, { marginTop: 30 }]}
      gap={0}
      className="nfc-header"
    >
      {!!back && (
        <Button variant="text" onPress={() => navigation.goBack()}>
          <Icon iconAsset={ImageAndIconAssets.ArrowLeftMiniCircle} scale={2} />
        </Button>
      )}
      <FlexView flexDirection="coolumn" style={{ marginTop: 20 }}>
        <Text style={sxUtilities.heading1}>
          {title}
          {!!secondaryTitle && [
            <Text key="comma">, </Text>,
            <Text key="secondaryTitle" style={styles.nathan}>
              {secondaryTitle}
            </Text>,
          ]}
        </Text>
        <Text style={styles.PageHeader}>{subtitle}</Text>
      </FlexView>
      {settings ? (
        <Button variant="text" color={Color.transparent} onPress={() => navigation.navigate("MyProfile1")}>
          <Icon iconName="Settings" scale={2} />
        </Button>
      ) : (
        <></>
      )}
    </FlexView>
  );
}

const styles = StyleSheet.create({
  PageHeader: {
    fontWeight: "300",
    fontSize: FontSize.size_xl,
  },
  nathan: {
    color: Color.colorDarkslategray_300,
  },
});

export default PageHeader;
