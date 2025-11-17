import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { colors, globalStyles } from "../Style/AppStyles";

//////////////////////////////////////////////////////
// 🔘 UNIVERSAL BUTTON COMPONENT
//////////////////////////////////////////////////////
export const UIButton = ({ title, onPress, style, textStyle }) => (
  <TouchableOpacity onPress={onPress} style={[globalStyles.mainButton, style]}>
    <Text style={[globalStyles.mainButtonText, textStyle]}>{title}</Text>
  </TouchableOpacity>
);

//////////////////////////////////////////////////////
// 🃏 UNIVERSAL CARD COMPONENT
//////////////////////////////////////////////////////
export const UICard = ({ children, style }) => (
  <View style={[globalStyles.roundedCard, style]}>
    {children}
  </View>
);

//////////////////////////////////////////////////////
// 📊 UNIVERSAL SCORE BAR
//////////////////////////////////////////////////////
export const ScoreBar = ({ value, max = 100 }) => {
  const width = `${(value / max) * 100}%`;

  return (
    <View style={{
      backgroundColor: "#301568",
      height: 12,
      borderRadius: 8,
      width: "95%",
      overflow: "hidden",
      marginVertical: 10,
    }}>
      <View style={{
        height: "100%",
        width,
        backgroundColor: colors.buttonBlue,
      }}/>
    </View>
  );
};
