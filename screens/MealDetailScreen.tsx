import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect, useMemo } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "../components/IconButton";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import { useFavourites } from "../store/context/favourites-context";
import {
  addFavourite as reduxAddFavourite,
  removeFavourite as reduxRemoveFavourite,
} from "../store/redux/favourites";

interface MealDetailScreenProps {
  route: any;
}

const MealDetailScreen: React.FC<MealDetailScreenProps> = ({ route }) => {
  const { mealId } = route.params;
  const { ids, addFavourite, removeFavourite } = useFavourites();
  const favouritesMealIds = useSelector((state: any) => state.favourites.ids);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const isMealFavourite = useMemo(() => {
    return favouritesMealIds.includes(mealId) || ids.includes(mealId);
  }, [favouritesMealIds, ids, mealId]);

  if (!selectedMeal) {
    return (
      <View>
        <Text>Meal not found</Text>
      </View>
    );
  }

  const headerButtonPressHandler = () => {
    if (isMealFavourite) {
      removeFavourite(mealId);
      dispatch(reduxRemoveFavourite({ id: mealId }));
    } else {
      addFavourite(mealId);
      dispatch(reduxAddFavourite({ id: mealId }));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon="star"
          color={isMealFavourite ? "yellow" : "white"}
          onPress={headerButtonPressHandler}
        />
      ),
    });
  }, [headerButtonPressHandler, navigation, isMealFavourite]);

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
