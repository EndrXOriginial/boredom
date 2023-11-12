import { createSlice } from "@reduxjs/toolkit";

export const factSlice = createSlice({
    name: 'facts',
    initialState: {
        favorites: [],
    },
    reducers: {
        addFavorite: (state, action) => {
            const {fact} = action.payload;
            const key = state.favorites.length;
            state.favorites[key] = {fact: fact}
        },
        removeFavorite: (state, action) => {
            const {key} = action.payload;
            state.favorites.filter(fav => fav !== key);
        }
    }
});

export const selectFav = (state) => state.facts.favorites;
export const {addFavorite} = factSlice.actions;
export default factSlice.reducer;