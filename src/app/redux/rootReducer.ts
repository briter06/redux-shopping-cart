import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import produce from "immer";
import { IProduct } from "../components/main/products";

interface IState {
    shoppingCart: {
        products: IProduct[]
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
    addProductToShoppingCart: (state: IState, action: PayloadAction<IProduct>) => {
        return produce(state, newState => {
          if(action.payload){
            newState.shoppingCart.products.push(action.payload)
          }
        })
    }
  },
});

export const { addProductToShoppingCart } = rootSlice.actions;
export default rootSlice.reducer;