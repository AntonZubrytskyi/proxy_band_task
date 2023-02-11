import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {usersReducer, postsReducer, albumsReducer} from "./slices";

const rootReducer = combineReducers({
    usersReducer,
    postsReducer,
    albumsReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer,
});

type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setupStore>;
type AppDispatch = AppStore['dispatch'];

export type {
    RootState,
    AppStore,
    AppDispatch,
}

export {
    setupStore
};
