import React from "react";
import { View } from "react-native";

/** @typedef {{flexDirection:'column'|'row',gap:number,flex:number|null} & import("react").ComponentProps<typeof View>} FlexViewProps*/

const FlexView = (/** @type {Partial<FlexViewProps>} */ { children, flexDirection = "column", gap = 0, ...viewProps }) => {
  const /** @type {import("react-native").ViewStyle} */ style = [
      {
        display: "flex",
        gap,
        flex: viewProps.flex ?? 1,
        flexDirection,
      },
      ...(Array.isArray(viewProps?.style) ? viewProps.style : [viewProps.style]),
    ];

  return (
    <View {...viewProps} style={style}>
      {children}
    </View>
  );
};

export default FlexView;
