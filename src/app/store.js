import { configureStore } from "@reduxjs/toolkit";
import restaurantSlice from "../Components/restaurantSlice";


export const store=configureStore({
    reducer:{
        restaurants:restaurantSlice
    }
})


export default store;