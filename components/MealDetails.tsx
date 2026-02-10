import { StyleSheet, Text, View } from "react-native";
import Meal from "../models/meal";

interface MealDetailsProps {
  meal: Meal;
  textStyle?: any;
}

const MealDetails: React.FC<MealDetailsProps> = ({ meal, textStyle }) => {
  const details = [
    meal.duration,
    meal.complexity.toUpperCase(),
    meal.affordability.toUpperCase(),
  ];

  return (
    <View style={styles.details}>
      {details.map((detail, index) => (
        <Text key={index} style={[styles.detailItem, textStyle]}>
          {detail}
        </Text>
      ))}
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
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
