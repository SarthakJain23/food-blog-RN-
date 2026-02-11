import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FavouritesScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>FavouritesScreen</Text>
    </View>
  );
};

export default FavouritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
