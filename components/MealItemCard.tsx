import { Text, View } from "react-native";
import Meal from "../models/meal";

interface MealItemCardProps {
  meal: Meal;
}

const MealItemCard: React.FC<MealItemCardProps> = ({ meal }) => {
  return (
    <View>
      <Text>{meal.title}</Text>
    </View>
  );
};

export default MealItemCard;
