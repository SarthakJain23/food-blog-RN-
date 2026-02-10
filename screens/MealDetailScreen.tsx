import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import IconButton from "../components/IconButton";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";

interface MealDetailScreenProps {
  route: { params: { mealId: string } };
}

const MealDetailScreen: React.FC<MealDetailScreenProps> = ({ route }) => {
  const { mealId } = route.params;
  const navigation = useNavigation();
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  if (!selectedMeal) {
    return (
      <View>
        <Text>Meal not found</Text>
      </View>
    );
  }

  const headerButtonPressHandler = () => {
    console.log("Header button pressed!");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon="star"
          color="white"
          onPress={headerButtonPressHandler}
        />
      ),
    });
  }, []);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal?.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails meal={selectedMeal} textStyle={styles.detailText} />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle text="Ingredients" />
          <List items={selectedMeal.ingredients} />
          <Subtitle text="Steps" />
          <List items={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
