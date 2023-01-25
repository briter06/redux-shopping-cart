import React from 'react';
import { Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './navBar.css';
import Typography from '@mui/material/Typography';
import { useSelector } from "react-redux";
import { RootState } from '../../redux/store';

function NavBar() {
  const numberOfProducts = useSelector(
    (state: RootState) => state.root.shoppingCart.products.length
  )
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            style={{flex:1}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{flex:10}}>
            Shopping Cart
          </Typography>
          <div className='shoppingCartContainer'>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              style={{flex: 1}}
            >
              <ShoppingCartIcon />
            </IconButton>
            <p style={{flex: 1}}>{numberOfProducts}</p>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
