import initialState from './initialState';
import reducer from './reducer';
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
    reducer,
    devTools: true,
    preloadedState: initialState
})

export default store;