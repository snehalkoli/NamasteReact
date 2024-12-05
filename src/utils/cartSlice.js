import { createSlice } from "@reduxjs/toolkit";
// createSlice is a function which takes a configuration
//when we create a cartSlice the cartSlice will return an object in this cartSlice
/**cartSlice will  look like this:
 * {
 *  actions:{
 *   addItems:(state,action)=>{}, and we are taking out the actions by using cartSlice.actions
 * 
 * },
 * reducer:(state,action)=>{}, we are exporting these  reducers by using cartSlice.reducer
 * }
 * **/

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: ["burger","pizza","samosa","vadapav"] },
  reducers: {
    // modifys the state by using the action

    addItem: (state, action) => {
      //we are mutating the state which means we are directly modifying the state over here
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
