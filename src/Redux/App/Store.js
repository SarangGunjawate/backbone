import { configureStore } from "@reduxjs/toolkit";
import SoftwareListReducer from '../Reducers/SoftwareListReducer'
import SoftwaretypeReducer from "../Reducers/SoftwaretypeReducer";


export const store = configureStore({
    reducer: {
        software: SoftwareListReducer,
        softwareType: SoftwaretypeReducer,
    }
})