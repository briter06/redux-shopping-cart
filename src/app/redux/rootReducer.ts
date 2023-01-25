import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";

interface IState {
    shoppingCart: {
        products: string[]
    }
}

const initialState: IState = {
  shoppingCart: {
    products: []
  }
};

export const rootSlice = createSlice({
  name: 'RootReducer',
  initialState: initialState,
  reducers: {
    addProductToShoppingCart: (state: IState, action) => {
        return produce(state, newState => {
            newState.shoppingCart.products.push(action.payload.productId)
        })
    }
  },
});

export const { addProductToShoppingCart } = rootSlice.actions;
export default rootSlice.reducer;