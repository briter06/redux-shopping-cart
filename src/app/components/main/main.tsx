import React from 'react';
import NavBar from '../navBar/navBar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import './main.css';
import availableProducts, { IProduct } from './products';
import { useDispatch } from 'react-redux'
import { addProductToShoppingCart } from '../../redux/rootReducer';

function Main() {

  const [product, setProduct] = React.useState<IProduct>()
  const dispatch = useDispatch()

  return (
    <div className="App">
      <NavBar></NavBar>
      <Box
        component="form"
      >
        <h1 className='main_title'>Add a product</h1>
        <Autocomplete
          disablePortal
          id="combo-box-products"
          className='products_autocomplete'
          isOptionEqualToValue={ (option, value) => option.id === value.id }
          onChange={(event, newValue) => {
            setProduct(availableProducts.find(a => a.id === newValue?.id))
          }}
          value={product ? {label: product.name, id: product.id} :  null}
          options={availableProducts.map(o => ({label: o.name, id: o.id}))}
          renderInput={(params) => <TextField {...params} label="Product" />}
        />
        <Button variant="contained" disabled={!product} onClick={()=> {
          if(product){
            dispatch(addProductToShoppingCart(product))
            setProduct(undefined)
          }
        }}>Add</Button>
      </Box>
    </div>
  );
}

export default Main;
