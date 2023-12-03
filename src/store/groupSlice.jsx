import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    groups: [],
    page: 0,
    size: 10,
    totalElements: 0,
    isLoading: true,
    status: 'idle',
    error: null,
};

const groupSlice = createSlice({
    name: 'group',
    initialState,
    reducers: {
        loading(state, action){
            state.isLoading=action.payload;
        },
        add(state, action) {
            state.groups = action.payload.content;
            state.totalElements=action.payload.totalElements;
        },
        addOne(state, action) {
            state.groups = [action.payload, ...state.groups];
        },
        update(state, action) {
            state.groups = state.groups.map(item => item.id === action.payload.id ? action.payload : item);
        },
        remove(state, action) {
            state.groups = state.groups.filter(item => item.id !== action.payload);
        }
    }
});

export const { add, remove, addOne, update, loading } = groupSlice.actions;

export default groupSlice.reducer;