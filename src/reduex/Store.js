import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cartslice";
// import productReducer from "./ProductSlice"
const store = configureStore({
    reducer: {
        cart: cartReducer,

    }
})

export default store;