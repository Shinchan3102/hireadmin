import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    banners: [],
    status: 'idle',
    error: null,
};

const bannerSlice = createSlice({
    name: 'banner',
    initialState,
    reducers: {
        add(state, action) {
            state.banners = action.payload;
        },
        addOne(state, action) {
            state.banners = [action.payload, ...state.banners];
        },
        update(state, action) {
            state.banners = state.banners.map(item => item.id === action.payload.id ? action.payload : item);
        },
        remove(state, action) {
            state.banners = state.banners.filter(item => item.id !== action.payload);
        }
    }
});

export const { add, remove, addOne, update } = bannerSlice.actions;

export default bannerSlice.reducer;