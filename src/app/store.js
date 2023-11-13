import { configureStore } from "@reduxjs/toolkit";

import factReducer from '../features/fact/factSlice.js';
import dogPicReducer from '../features/dogPic/dogPicSlice.js';
import activityReducer from '../features/activity/activitySlice.js';

export default configureStore({
    reducer: {
        fact: factReducer,
        dogPic: dogPicReducer,
        activity: activityReducer
    }
})