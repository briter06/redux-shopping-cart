import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import produce from "immer";
import { IProduct } from "../components/main/products";

interface IState {
    shoppingCart: {
        products: IProduct[]
        drawerOpened: boolean
    },
    modal: {
      content: any,
      opened: boolean,
      title: string,
      onCloseCallback?: any
    }
}

const initialState: IState = {
  shoppingCart: {
    products: [],
    drawerOpened: false
  },
  modal: {
    content: null,
    opened: false,
    title: ''
  }
};

export const rootSlice = createSlice({
  name: 'RootReducer',
  initialState: initialState,
  reducers: {
    addProductToShoppingCart: (state: IState, action: PayloadAction<IProduct>) => {
      return produce(state, newState => {
        if(action.payload){
          const existingProduct = newState.shoppingCart.products.find(p => p.id === action.payload.id)
          if(existingProduct){
            existingProduct.quantity++
          }else{
            action.payload.quantity = 1
            newState.shoppingCart.products.push(action.payload)
          }
        }
      })
    },
    removeProductFromShoppingCart: (state: IState, action: PayloadAction<IProduct>) => {
      return produce(state, newState => {
        if(action.payload){
          const existingProduct = newState.shoppingCart.products.find(p => p.id === action.payload.id)
          if(existingProduct){
            if(existingProduct.quantity <= 1){
              newState.shoppingCart.products = newState.shoppingCart.products.filter(p => p.id !== action.payload.id)
            }else{
              existingProduct.quantity--
            }
          }
        }
      })
    },
    removeAllProductFromShoppingCart: (state: IState, action: PayloadAction<IProduct>) => {
      return produce(state, newState => {
        if(action.payload){
          const existingProduct = newState.shoppingCart.products.find(p => p.id === action.payload.id)
          if(existingProduct){
            newState.shoppingCart.products = newState.shoppingCart.products.filter(p => p.id !== action.payload.id)
          }
        }
      })
    },
    emptyCart: (state: IState) => {
      return produce(state, newState => {
        newState.shoppingCart.products = []
      })
    },
    toogleCartDrawer: (state: IState) => {
      return produce(state, newState => {
        newState.shoppingCart.drawerOpened = !newState.shoppingCart.drawerOpened
      })
    },
    openModal: (state: IState, action: PayloadAction<{content: any, title: string, onCloseCallback?: any}>) => {
      return produce(state, newState => {
        newState.modal.content = action.payload.content
        newState.modal.opened = true
        newState.modal.title = action.payload.title
        newState.modal.onCloseCallback = action.payload.onCloseCallback
      })
    },
    closeModal: (state: IState) => {
      return produce(state, newState => {
        newState.modal.content = null
        newState.modal.opened = false
        newState.modal.title = ''
        newState.modal.onCloseCallback = undefined
      })
    },
  },
});

export const { addProductToShoppingCart, toogleCartDrawer, removeProductFromShoppingCart, removeAllProductFromShoppingCart, emptyCart, openModal, closeModal } = rootSlice.actions;
export default rootSlice.reducer;