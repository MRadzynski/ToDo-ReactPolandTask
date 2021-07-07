import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../../redux/todo/todo.actions';

import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { Grid } from '@material-ui/core';

import useStyles from './AddTodoForm.styles';

const AddTodoForm = ({ addTodo }) => {
  const classes = useStyles();

  const [todoInfo, setTodoInfo] = useState({
    id: new Date().getTime().toString(),
    name: '',
    description: '',
    comments: '',
    timestamp: '',
    done: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTodoInfo({ ...todoInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(todoInfo);
    setTodoInfo({
      id: new Date().getTime().toString(),
      name: '',
      description: '',
      comments: '',
      timestamp: '',
      done: false,
    });
  };

  return (
    <Grid item container className={classes.root}>
      <form autoComplete="off" className={classes.form} onSubmit={handleSubmit}>
        <TextField
          name="name"
          value={todoInfo.name || ''}
          variant="outlined"
          fullWidth
          label="Name"
          required
          onChange={handleChange}
        />
        <TextField
          name="description"
          value={todoInfo.description || ''}
          variant="outlined"
          label="Description"
          multiline
          rows={4}
          fullWidth
          onChange={handleChange}
          required
        />
        <TextField
          name="comments"
          value={todoInfo.comments || ''}
          variant="outlined"
          multiline
          rows={2}
          fullWidth
          label="Comments"
          onChange={handleChange}
        />
        <TextField
          name="timestamp"
          value={todoInfo.timestamp || ''}
          variant="outlined"
          type="datetime-local"
          placeholder={'dd.mm.rrrr --:--'}
          onChange={handleChange}
          required
        />
        <Button
          type="submit"
          startIcon={<Add />}
          variant="contained"
          size="large"
          className={classes.button}
        >
          Add ToDo
        </Button>
      </form>
    </Grid>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodo(todo)),
});

export default connect(null, mapDispatchToProps)(AddTodoForm);
