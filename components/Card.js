import { Button, Card as RNCard } from "@rneui/themed";
import React from "react";

import { Border } from "@/GlobalStyles";

export default function Card(
  /** @type {{onPress:Function,import('react').PropsWithoutRef<typeof RNCard>}} */ { onPress, children, ...props }
) {
  return (
    <Button onPress={onPress} type="clear">
      <RNCard {...props} containerStyle={[{ minHeight: 160, borderRadius: Border.br_3xs, width: "100%", ...props?.containerStyle }]}>
        {children}
      </RNCard>
    </Button>
  );
}
