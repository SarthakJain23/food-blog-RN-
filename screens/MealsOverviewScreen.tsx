import { FlatList, StyleSheet, View } from "react-native";
import MealItemCard from "../components/MealItemCard";
import { MEALS } from "../data/dummy-data";

interface MealsOverviewScreenProps {
  route: any;
}

const MealsOverviewScreen: React.FC<MealsOverviewScreenProps> = ({ route }) => {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId),
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MealItemCard meal={item} />}
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
