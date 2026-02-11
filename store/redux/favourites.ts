import { createSlice } from "@reduxjs/toolkit";

interface FavouritesState {
  ids: string[];
}

const initialState: FavouritesState = {
  ids: [],
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addFavourite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavourite: (state, action) => {
      state.ids = state.ids.filter((mealId) => mealId !== action.payload.id);
    },
  },
});

export const { addFavourite, removeFavourite } = favouritesSlice.actions;
export default favouritesSlice.reducer;
