import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Meal from "../models/meal";
import ShadowWrapper from "./ShadowWrapper";

interface MealItemCardProps {
  meal: Meal;
  onPress: () => void;
}

const MealItemCard: React.FC<MealItemCardProps> = ({ meal, onPress }) => {
  const details = [
    meal.duration,
    meal.complexity.toUpperCase(),
    meal.affordability.toUpperCase(),
  ];

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
          <View style={styles.details}>
            {details.map((detail, index) => (
              <Text key={index} style={styles.detailItem}>
                {detail}
              </Text>
            ))}
          </View>
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
  details: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
