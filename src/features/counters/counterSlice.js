import { createSlice } from "@reduxjs/toolkit";
import initialCounters from "../../data/inititalCounters";

const counterSlice = createSlice({
    name: "counters",
    initialState: initialCounters,
    reducers: {
        increment: (state, action) => {
            const counterIndex = state.findIndex(c => c.id === action.payload);
            state[counterIndex].value++;
        },
        decrement: (state, action) => {
             const counterIndex = state.findIndex(c => c.id === action.payload);
            state[counterIndex].value--;
        }
    }
});

export default counterSlice.reducer;
export const {increment, decrement} = counterSlice.actions;