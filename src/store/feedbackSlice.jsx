import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    feedbacks: [],
    status: 'idle',
    isLoading: true,
    totalElements: 0,
    error: null,
};

const feedbackSlice = createSlice({
    name: 'feedback',
    initialState,
    reducers: {
        loading(state, action){
            state.isLoading=action.payload;
        },
        add(state, action) {
            state.feedbacks = action.payload.content;
            state.totalElements=action.payload.totalElements;
        },
        addOne(state, action) {
            state.feedbacks = [action.payload, ...state.feedbacks];
        },
        update(state, action) {
            state.feedbacks = state.feedbacks.map(item => item.id === action.payload.id ? action.payload : item);
        },
        remove(state, action) {
            state.feedbacks = state.feedbacks.filter(item => item.id !== action.payload);
        }
    }
});

export const { add, remove, addOne, update, loading } = feedbackSlice.actions;

export default feedbackSlice.reducer;