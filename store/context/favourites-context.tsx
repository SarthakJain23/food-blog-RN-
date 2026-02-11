import { createContext, useContext, useState } from "react";

type FavouritesContextType = {
  ids: string[];
  addFavourite: (id: string) => void;
  removeFavourite: (id: string) => void;
};

const FavouritesContext = createContext<FavouritesContextType>({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
});

interface FavouritesContextProviderProps {
  children: React.ReactNode;
}

const FavouritesContextProvider: React.FC<FavouritesContextProviderProps> = ({
  children,
}) => {
  const [favouriteMealIds, setFavouriteMealIds] = useState<string[]>([]);

  const addFavourite = (id: string) => {
    setFavouriteMealIds((currentFavIds) => [...currentFavIds, id]);
  };
  const removeFavourite = (id: string) => {
    setFavouriteMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id),
    );
  };

  const value: FavouritesContextType = {
    ids: favouriteMealIds,
    addFavourite,
    removeFavourite,
  };

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = () => {
  const context = useContext(FavouritesContext);
  if (!context) {
    throw new Error(
      "useFavourites must be used within a FavouritesContextProvider",
    );
  }
  return context;
};

export default FavouritesContextProvider;
