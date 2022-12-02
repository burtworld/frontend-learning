import { createAction, createSlice, createReducer } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  count: number;
}

const initialState: UserState = {
  count: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      // state.count += action.payload;
      state.count += 1;
    },
    decrement(state, action) {
      state.count -= 1;
    },
    incrementByCount(state, action) {
      state.count += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByCount } = userSlice.actions;

export default userSlice.reducer;
