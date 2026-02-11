import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import StackNavigator from "./navigators/StackNavigator";
import FavouritesContextProvider from "./store/context/favourites-context";
import { store } from "./store/redux/store";

const App: React.FC = () => {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <FavouritesContextProvider>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </FavouritesContextProvider>
      </Provider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {},
});
