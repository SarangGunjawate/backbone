import { configureStore } from "@reduxjs/toolkit";
import SoftwareListReducer from '../Reducers/SoftwareListReducer'


export const store = configureStore({
    reducer: {
        software: SoftwareListReducer,
    }
})