import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";

import userReduce from "./reducers/userReduce";

import globalReduce from "./reducers/globalReduce";

const store = configureStore({
  reducer: {
    user: userReduce,
    global: globalReduce,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
