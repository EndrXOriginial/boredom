import { createSlice } from "@reduxjs/toolkit";

export const factSlice = {
    name: 'facts',
    initialState: {
        favorite: {},
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
            state.favorite.filter(fav => fav.key !== key);
        }
    }
}

export const selectFav = (state) => state.facts.favorite;
export const {addFavorite} = factSlice.action;
export default factSlice.reducer;