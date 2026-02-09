import { Pressable, StyleSheet, Text, View } from "react-native";
import Category from "../models/category";
import ShadowWrapper from "./ShadowWrapper";

interface CategoryGridTileProps {
  category: Category;
  onPress: () => void;
}

const CategoryGridTile: React.FC<CategoryGridTileProps> = ({
  category,
  onPress,
}) => {
  return (
    <ShadowWrapper style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
      >
        <View
          style={[styles.innerContainer, { backgroundColor: category.color }]}
        >
          <Text style={styles.title}>{category.title}</Text>
        </View>
      </Pressable>
    </ShadowWrapper>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
