import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    status: 'idle',
    isLoading: true,
    totalElements: 0,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loading(state, action){
            state.isLoading=action.payload;
        },
        add(state, action) {
            state.users = action.payload;
        },
        addOne(state, action) {
            state.users = [action.payload, ...state.users];
        },
        update(state, action) {
            state.users = state.users.map(item => item.id === action.payload.id ? action.payload : item);
        },
        remove(state, action) {
            state.users = state.users.filter(item => item.id !== action.payload);
        }
    }
});

export const { add, remove, addOne, update, loading } = userSlice.actions;

export default userSlice.reducer;