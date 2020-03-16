import React, { Fragment, Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { withStyles }  from '@material-ui/core/styles'
import { Button } from '@material-ui/core';
import { positions } from '@material-ui/system';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
  header: {
    flexGrow: 1,
    padding: "10px"
  },
  title: {
    flexGrow: 1,
  },
});

class Header extends Component {

    render(){
        const { classes } = this.props;
        return <div className={classes.root}>
                 <AppBar position="static">
                   <Toolbar>
                     <Typography variant="h4" className={classes.title}>
                       Fancy Notes App
                     </Typography>
                     <Button color="inherit">Login</Button>
                   </Toolbar>
                 </AppBar>
               </div>
    }
}

export default withStyles(useStyles) (Header)