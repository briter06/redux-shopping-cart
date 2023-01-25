import React from 'react';
import { Badge, Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './navBar.css';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../../redux/store';
import { toogleCartDrawer } from '../../redux/rootReducer';

function NavBar() {
  const numberOfProducts = useSelector(
    (state: RootState) => state.root.shoppingCart.products.length
  )
  const dispatch = useDispatch()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{flex:15}}>
            Shopping Cart
          </Typography>
          <div className='shoppingCartDrawerContainer'>
            
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              style={{flex: 1}}
              onClick={() => dispatch(toogleCartDrawer())}
            >
              <Badge badgeContent={numberOfProducts} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
