import { createSlice } from "@reduxjs/toolkit";

const initialState={
    data:[]
}
const restaurantSlice= createSlice({
    name:"Restaurant Details",
    initialState,
    reducers:{
        getRestaurantData:(state,action)=>{
            state.data = action.payload
        }
    }
})

export const {getRestaurantData}=restaurantSlice.actions
export default restaurantSlice.reducer;
