import React, { Fragment, Component } from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import { withStyles }  from '@material-ui/core/styles'
import {Route, Link} from 'react-router-dom'
import { FormControl, InputLabel, Input, FormHelperText, TextField } from '@material-ui/core';
import { Button, Box } from '@material-ui/core';

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
  constructor(props) {
    super(props);
    this.state = {
      error: "",

      note: {
        title: "",
        text: "",
      }
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({
      ...this.state,
      note: {
        ...this.state.note,
        [name]: value
      }
    })
  }

  onSubmit(e) {
    // prevent default form submission
    e.preventDefault();
    this.setState({ error: ""});
    // persist the comments on server
    let { note } = this.state;
    console.log(note.title)

    fetch('api/add',  {
      method: "post",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
      .then(re => {
        this.setState({
          error: "Note has been added successfully."
        });

      })
      .catch(err => {
        this.setState({
          error: "Something went wrong while submitting note."
        });
      });

    this.setState({
      note: {
        title: "",
        text: "",
      }
    })
  }
  renderMessage() {
    return this.state.error ? (
      <div className="alert alert-danger">{this.state.error}</div>
    ) : null;
  }

  render(){
    const { classes } = this.props;
    return <Fragment>
      <Paper className={classes.leftPane}>
       <Box>
         <h1>Add a new note</h1>
           <TextField
                      id="standard-full-width"
                      style={{ margin: 0 }}
                      placeholder="Title here..."
                      helperText="Write your note title here"
                      fullWidth
                      margin="normal"
                      name="title"
                      type="text"
                      value={this.state.note.title}
                      onChange={this.handleChange}
                      InputLabelProps={{
                        shrink: false,
                      }}
                    />
          <TextField
                    id="standard-full-width"
                    multiline
                    rows="4"
                    variant="outlined"
                    style={{ margin: 0 }}
                    placeholder="Write note here..."
                    helperText="Write your actual note here"
                    fullWidth
                    margin="normal"
                    value={this.state.note.text}
                    onChange={this.handleChange}
                    name="text"
                    type="text"
                    InputLabelProps={{
                      shrink: false,
                    }}
                  />
          <Button color="inherit" onClick={this.onSubmit}>Add</Button>
         {this.renderMessage()}
        </Box>

      </Paper>
    </Fragment>
  }
}

export default withStyles(useStyles)(LeftPane)


