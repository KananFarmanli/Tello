import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error:null,
    items: [],
}

const itemsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},

})

export const itemsReducer = itemsSlice.reducer