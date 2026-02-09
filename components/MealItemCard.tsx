import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Meal from "../models/meal";
import MealDetails from "./MealDetails";
import ShadowWrapper from "./ShadowWrapper";

interface MealItemCardProps {
  meal: Meal;
  onPress: () => void;
}

const MealItemCard: React.FC<MealItemCardProps> = ({ meal, onPress }) => {
  return (
    <ShadowWrapper style={styles.mealItem}>
      <Pressable
        android_ripple={{
          color: "#ccc",
        }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: meal.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{meal.title}</Text>
          </View>
          <MealDetails meal={meal} />
        </View>
      </Pressable>
    </ShadowWrapper>
  );
};

export default MealItemCard;

const styles = StyleSheet.create({
  mealItem: {
    backgroundColor: "white",
    borderRadius: 8,
    margin: 16,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
});
