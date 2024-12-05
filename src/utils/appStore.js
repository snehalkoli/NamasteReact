import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../utils/cartSlice"

const appStore = configureStore({
    // reducer is responsible to modify app store
    //reducer is a combination of different small small store
    //each slice we will have different reducers
    //the whole big reducer is our app reducer
    reducer:{
      cart:cartReducer,
    }
});
export default appStore;
