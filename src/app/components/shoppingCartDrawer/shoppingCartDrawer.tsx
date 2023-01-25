import React from 'react';
import { Box, Button, ButtonGroup, Grid } from '@mui/material';
import './shoppingCartDrawer.css';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../../redux/store';
import { addProductToShoppingCart, closeModal, emptyCart, openModal, removeAllProductFromShoppingCart, removeProductFromShoppingCart, toogleCartDrawer } from '../../redux/rootReducer';
import { IProduct } from '../main/products';
import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import LottieAnimation, { LottieAnimationsIds } from '../lottieAnimation/lottieAnimation';

const useStyles: any = makeStyles({
  paper: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  }
})

function ShoppingCartItem(props: {product: IProduct}){
  const dispatch = useDispatch()
  return (
    <div className='shoppingCartContainer'>
      <Grid container spacing={2}>
        <Grid item xs={5} className='shoppingCartGrid'>
          <h4 style={{textAlign: 'center'}}>{props.product.name}</h4>
        </Grid>
        <Grid item xs={5} className='shoppingCartGrid'>
          <h4 style={{textAlign: 'center'}}>${props.product.price}</h4>
        </Grid>
        <Grid item xs={2} className='shoppingCartGrid centerContainerHV'>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            className='trashIconButton'
            onClick={() => dispatch(removeAllProductFromShoppingCart(props.product))}
          >
            <DeleteIcon/>
          </IconButton>
        </Grid>
        <Grid item xs={12}>
          <ButtonGroup className='counterGroup' size="medium" aria-label="medium outlined button group">
            <Button onClick={() => dispatch(removeProductFromShoppingCart(props.product))} disabled={props.product.quantity <= 1} className='counterButton'>-</Button>
            <Button disabled className='counterResult'>{props.product.quantity}</Button>
            <Button onClick={() => dispatch(addProductToShoppingCart(props.product))} className='counterButton'>+</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </div>
  )
}

function ShoppingCartDrawer() {
  const classes = useStyles()
  const products: IProduct[] = useSelector(
    (state: RootState) => state.root.shoppingCart.products
  )
  const cartDrawerOpened = useSelector(
    (state: RootState) => state.root.shoppingCart.drawerOpened
  )
  const dispatch = useDispatch()
  const getTotal = () => {
    return products.reduce((a, b) => a + (b.price * b.quantity), 0).toFixed(2)
  }

  const closeResultModal = () => {
    dispatch(toogleCartDrawer())
    dispatch(emptyCart())
    dispatch(closeModal())
  }

  const openResultModal = () => {
    dispatch(openModal({
      content: (
        <div className='centerContainerHV'>
          <p style={{fontWeight: 'bold'}}>You purchease has been completed for ${getTotal()}</p>
          <LottieAnimation lastFrame={50} viewStyle={{height: 100, width: 100}} animationId={LottieAnimationsIds.GREEN_CHECK} loop={false}></LottieAnimation>
        </div>
      ),
      title: 'Purchase complete!',
      onCloseCallback: () => closeResultModal()
    }))
  }
  return (
    <Drawer
      anchor={'right'}
      open={cartDrawerOpened}
      onClose={() => dispatch(toogleCartDrawer())}
      classes={{paper: classes.paper}}
    >
      <Box
        sx={{ width: 400, paddingX: 2, paddingBottom: 5, height: '100%' }}
        role="presentation"
      >
        <h2>Shopping Cart</h2>
        {
          products.length === 0
          ? <h5>No products</h5>
          : <Box>
            {
              products.map(p => (
                <ShoppingCartItem key={p.id} product={p}></ShoppingCartItem>
              ))
            }
            <h2 style={{textAlign: 'right'}}>Total: ${getTotal()}</h2>
            <div className='centerContainerHV'>
              <Button className='buttonBuy' onClick={() => openResultModal()}>Complete purchase</Button>
            </div>
          </Box>
        }
      </Box>
    </Drawer>
  );
}

export default ShoppingCartDrawer;
