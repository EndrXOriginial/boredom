import { createSlice } from "@reduxjs/toolkit";

export const dogPicSlice = createSlice({
    name: 'dogPic',
    initialState: {
        favorites: [],
    },
    reducers: {
        addFavorite: (state, action) => {
            const {id, image} = action.payload;
            state.favorites[id] = {src: image};
        },
        removeFavorite: (state, action) => {
            const {id} = action.payload;
            state.favorites.filter(fav => fav != id);
        }
    }
});

export const selectFavDogPics = (state) => state.dogPics.favorites;
export const {addFavorite, removeFavorite} = dogPicSlice.actions;
export default dogPicSlice.reducer;