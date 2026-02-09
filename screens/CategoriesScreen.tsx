import { NavigationProp, ParamListBase } from "@react-navigation/native";
import React from "react";
import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

interface CategoriesScreenProps {
  navigation: NavigationProp<ParamListBase>;
}

const CategoriesScreen: React.FC<CategoriesScreenProps> = ({ navigation }) => {
  const onCategoryPress = (categoryId: string) => {
    navigation.navigate("MealsOverview", { categoryId });
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CategoryGridTile
          category={item}
          onPress={() => onCategoryPress(item.id)}
        />
      )}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
