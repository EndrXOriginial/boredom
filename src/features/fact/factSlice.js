import { createSlice } from "@reduxjs/toolkit";

export const factSlice = createSlice({
    name: 'facts',
    initialState: {
        favorites: [],
    },
    reducers: {
        addFavorite: (state, action) => {
            const {activity, key, type} = action.payload;
            state.favorite[key] = {
                activity: activity,
                type: type,
            }
        },
        removeFavorite: (state, action) => {
            const {key} = action.payload;
            state.favorite.filter(fav => fav !== key);
        }
    }
});

export const selectFav = (state) => state.facts.favorites;
export const {addFavorite} = factSlice.actions;
export default factSlice.reducer;