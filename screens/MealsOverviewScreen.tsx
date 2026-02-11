import { useLayoutEffect } from "react";
import MealList from "../components/MealList/MealList";
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

  return <MealList meals={displayedMeals} onPress={onMealPress} />;
};

export default MealsOverviewScreen;
