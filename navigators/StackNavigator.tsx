import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealDetailScreen from "../screens/MealDetailScreen";
import MealsOverviewScreen from "../screens/MealsOverviewScreen";
import DrawerNavigator from "./DrawerNavigator";

const Stack = createNativeStackNavigator();

const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        contentStyle: { backgroundColor: "#3f2f25" },
      }}
    >
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{ headerShown: false, title: "All Categories" }}
      />
      <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={{
          title: "About the Meal",
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
