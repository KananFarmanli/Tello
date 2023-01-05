import { configureStore } from "@reduxjs/toolkit";
import { itemsReducer } from "../reducer/itemsReducer";

export const store = configureStore({
    reducer: {
        products : itemsReducer,
    }
}) 