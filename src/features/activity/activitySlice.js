import { createSlice } from "@reduxjs/toolkit";

export const activitySlice = createSlice({
    name: 'activities',
    initialState: {
        favorites: [],
    },
    reducers: {
        addFavorite: (state, action) => {
            const {key, activity, type} = action.payload;
            state.favorites[key] = {
                activity: activity,
                type: type,
            }
        },
        removeFavorite: (state, action) => {
            const {key} = action.payload;
            state.favorites.filter(fav => fav !== key);
        }
    }
});

export const selectFavActivities = (state) => state.activities.favorites;
export const {addFavorite, removeFavorite} = activitySlice.actions;
export default activitySlice.reducer;