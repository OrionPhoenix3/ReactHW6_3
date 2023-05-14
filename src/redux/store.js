import { configureStore } from "@reduxjs/toolkit";
import filmsReducer from './reducers/filmsSlice.js'

export const store= configureStore({
    reducer: {
        films: filmsReducer
    }
})