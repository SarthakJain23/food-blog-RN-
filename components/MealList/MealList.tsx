import { FlatList, StyleSheet, View } from "react-native";
import Meal from "../../models/meal";
import MealItemCard from "./MealItemCard";

interface MealListProps {
  meals: Meal[];
  onPress: (mealId: string) => void;
}

const MealList: React.FC<MealListProps> = ({ meals, onPress }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealItemCard meal={item} onPress={() => onPress(item.id)} />
        )}
      />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
