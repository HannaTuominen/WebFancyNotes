import React, { Fragment, Component } from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import { withStyles }  from '@material-ui/core/styles'
import {Route, Link} from 'react-router-dom'
import { FormControl, InputLabel, Input, FormHelperText, TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';

const useStyles = theme => ({
  leftPane: {
    padding: "0 30px",
    height: 500
  },
  form: {
    padding: "20px",
  }
});

class LeftPane extends Component{

  render(){
    const { classes } = this.props;
    return <Fragment>
      <Paper className={classes.leftPane}>
        <FormControl className={classes.form}>
           <TextField
                      id="standard-full-width"
                      label="Title"
                      style={{ margin: 0 }}
                      placeholder="Title here"
                      helperText="Write your note title here"
                      fullWidth
                      margin="normal"
                      InputLabelProps={{
                        shrink: false,
                      }}
                    />
          <TextField
                    id="standard-full-width"
                    label="Note"
                    style={{ margin: 0 }}
                    placeholder="Write note here"
                    helperText="Write your actual note here"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: false,
                    }}
                  />
          <Button color="inherit">Add</Button>
        </FormControl>

      </Paper>
    </Fragment>
  }
}

export default withStyles(useStyles)(LeftPane)


