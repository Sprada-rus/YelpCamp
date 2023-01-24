import {configureStore} from "@reduxjs/toolkit";
import campsReducer from "./campsReducer";

export const store = configureStore({
    reducer: {
        campsList: campsReducer
    }
})