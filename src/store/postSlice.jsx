import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    totalElements: 0,
    isLoading: true,
    status: 'idle',
    error: null,
};

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        loading(state, action){
            state.isLoading=action.payload;
        },
        add(state, action) {
            state.posts = action.payload.content;
            state.totalElements=action.payload.totalElements;
        },
        addOne(state, action) {
            state.posts = [action.payload, ...state.posts];
        },
        update(state, action) {
            state.posts = state.posts.map(item => item.id === action.payload.id ? action.payload : item);
        },
        remove(state, action) {
            state.posts = state.posts.filter(item => item.id !== action.payload);
        }
    }
});

export const { add, remove, addOne, update, loading } = postSlice.actions;

export default postSlice.reducer;