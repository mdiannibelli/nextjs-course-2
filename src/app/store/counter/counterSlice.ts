import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    count: number;
    isReady: boolean;
}

const initialState: CounterState = {
    count: 0,
    isReady: false
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        initCounterState(state, action:PayloadAction<number>) {
            if(state.isReady) return; // If the state of counter is initialized (true) return and do nothing

            state.count = action.payload;
            state.isReady = true;
        },
        incrementCounter(state) {
            state.count ++
        },
        decrementCounter(state) {
            if(state.count === 0) return;
            state.count --
        },
        resetCounter(state, action: PayloadAction<number>) { // Always change state with an action
            if(action.payload < 0) action.payload = 0;
            state.count = action.payload;
        },
    }
})

export const {incrementCounter, decrementCounter, resetCounter, initCounterState} = counterSlice.actions;
export default counterSlice.reducer;