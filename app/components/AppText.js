import React from "react";
import { Text, Platform, StyleSheet } from "react-native";

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const customStyleText = Platform.select({
  ios: {
    fontSize: 18,
    fontFamily: "Avenir",
  },
  android: {
    fontSize: 18,
    fontFamily: "Roboto",
  },
});

const styles = StyleSheet.create({
  text: {
    ...customStyleText,
  },
});

export default AppText;
