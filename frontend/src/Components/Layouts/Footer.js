import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

function Footer() {
  return <AppBar position="static">
  <Toolbar>
    <IconButton edge="start"color="inherit" aria-label="menu">
    </IconButton>
  </Toolbar>
</AppBar>
}

export default Footer;