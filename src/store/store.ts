import { configureStore } from "@reduxjs/toolkit";
import SidePanelReducer from "./UI/sidePanelSlice";
import toolbarReducer from "./UI/toolbarSlice";

export const store = configureStore({
    reducer: {
        sidpepanel: SidePanelReducer,
        toolbar: toolbarReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
