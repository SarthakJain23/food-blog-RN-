import React from "react";
import { Platform, StyleProp, StyleSheet, View, ViewStyle } from "react-native";

interface ShadowWrapperProps {
  children: React.ReactNode;
  style: StyleProp<ViewStyle>;
}

const ShadowWrapper: React.FC<ShadowWrapperProps> = ({ children, style }) => {
  return <View style={[styles.shadowContainer, style]}>{children}</View>;
};

export default ShadowWrapper;

const styles = StyleSheet.create({
  shadowContainer: {
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
});
