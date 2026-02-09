import { Image, StyleSheet, Text, View } from "react-native";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";

interface MealDetailScreenProps {
  route: { params: { mealId: string } };
}

const MealDetailScreen: React.FC<MealDetailScreenProps> = ({ route }) => {
  const { mealId } = route.params;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  if (!selectedMeal) {
    return (
      <View>
        <Text>Meal not found</Text>
      </View>
    );
  }

  return (
    <View>
      <Image source={{ uri: selectedMeal?.imageUrl }} style={styles.image} />
      <Text>{selectedMeal.title}</Text>
      <MealDetails meal={selectedMeal} />
      <Text>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient, index) => (
        <Text key={index}>{ingredient}</Text>
      ))}
      <Text>Steps</Text>
      {selectedMeal.steps.map((step, index) => (
        <Text key={index}>{step}</Text>
      ))}
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
});
