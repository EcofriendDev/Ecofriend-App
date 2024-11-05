import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { Border, Color } from "@/GlobalStyles";

/**
 * Button component that accepts children and a variant as outline or solid.
 *
 * @param {object & import("react").PropsWithoutRef<TouchableOpacity>} props - The properties object.
 * @param {React.ReactNode} props.children - The content to be displayed inside the button.
 * @param {'outline'|'solid'|'text'} props.variant - The variant of the button, either 'outline' or 'solid'.
 * @param {string?} props.color - The color to control the background or border color.
 * @param {Border[keyof typeof Border]} props.borderRadius - The border radius of the button.
 * @param {function} props.onPress - The function to be called when the button is pressed.
 * @param {'pill'|'rounded-square'} props.curve
 *
 *
 */
const Button = ({ children, variant, color, onPress, style, curve = 0.5 }) => {
  const isOutline = variant === "outline";

  return (
    <TouchableOpacity
      style={[
        styles.button,
        isOutline ? styles.outline : styles.solid,
        {
          //   borderColor: color,
          //   backgroundColor: isOutline ? "transparent" : color,
          borderRadius: 10 * curve,
        },
        { ...styles[variant] },
        { ...styles[curve] },

        { height: 70 },
        style,
      ]}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

// Button.propTypes = {
//   children: PropTypes.node.isRequired,
//   variant: PropTypes.oneOf(["outline", "solid"]).isRequired,
//   color: PropTypes.string.isRequired,
//   borderRadius: PropTypes.number,
// };

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 70,
    fontSize: 30,
  },
  outline: {
    backgroundColor: Color.transparent,
    borderColor: Color.colorDarkslategray_300,
    color: Color.colorDarkslategray_300,
  },
  solid: {
    backgroundColor: Color.colorDarkslategray_300,
    color: Color.colorWhite,
  },
  text: {
    fontSize: 16,
    color: Color.colorBlack,
    backgroundColor: Color.transparent,
    borderColor: Color.transparent,
  },
});

export default Button;
