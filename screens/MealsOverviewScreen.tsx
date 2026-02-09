import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItemCard from "../components/MealItemCard";
import { CATEGORIES, MEALS } from "../data/dummy-data";

interface MealsOverviewScreenProps {
  route: any;
  navigation: any;
}

const MealsOverviewScreen: React.FC<MealsOverviewScreenProps> = ({
  route,
  navigation,
}) => {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId),
  );

  const onMealPress = (mealId: string) => {
    navigation.navigate("MealDetail", { mealId });
  };

  useLayoutEffect(() => {
    const categoryTitle =
      CATEGORIES.find((cat) => cat.id === categoryId)?.title || "Meals";
    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealItemCard meal={item} onPress={() => onMealPress(item.id)} />
        )}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
