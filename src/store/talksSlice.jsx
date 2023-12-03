import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    talks: [],
    status: 'idle',
    isLoading: true,
    totalElements: 0,
    error: null,
};

const talksSlice = createSlice({
    name: 'talk',
    initialState,
    reducers: {
        loading(state, action){
            state.isLoading=action.payload;
        },
        add(state, action) {
            state.talks = action.payload.content;
            state.totalElements=action.payload.totalElements;
        },
        addOne(state, action) {
            state.talks = [action.payload, ...state.talks];
        },
        update(state, action) {
            state.talks = state.talks.map(item => item.id === action.payload.id ? action.payload : item);
        },
        remove(state, action) {
            state.talks = state.talks.filter(item => item.id !== action.payload);
        }
    }
});

export const { add, remove, addOne, update, loading } = talksSlice.actions;

export default talksSlice.reducer;