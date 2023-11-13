import { createSlice } from "@reduxjs/toolkit";
import {v4 as key} from 'uuid';

export const factSlice = createSlice({
    name: 'facts',
    initialState: {
        favorites: [],
    },
    reducers: {
        addFavorite: (state, action) => {
            const {fact} = action.payload;
            const id = key();
            state.favorites[id] = {fact: fact};
        },
        removeFavorite: (state, action) => {
            const {id} = action.payload;
            state.favorites.filter(fav => fav !== id);
        }
    }
});

export const selectFav = (state) => state.facts.favorites;
export const {addFavorite} = factSlice.actions;
export default factSlice.reducer;