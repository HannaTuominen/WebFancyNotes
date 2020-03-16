import React, { Fragment, Component } from 'react'
import Paper from '@material-ui/core/Paper';
import { withStyles }  from '@material-ui/core/styles'

const useStyles = theme => ({
  rightPane: {
    padding: "0 30px",
    height: 500
  },
  noteImage: {
      padding: "0 10px",
     justifyContent: 'center',
     alignItems: 'center',
     width: '100%',
     height: '100%'
  },
});

class RightPane extends Component {

    render(){
    const { classes } = this.props;
        return <Fragment>
            <Paper className={classes.rightPane}>
                <img src={require('./right_pane_image.png')} className={classes.noteImage} alt="empty pink note"/>
            </Paper>
          </Fragment>
    }

}

export default withStyles(useStyles) (RightPane)