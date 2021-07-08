import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

import { addTodo, editTodo } from '../../redux/todo/todo.actions';

import { Grid } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Add, Edit } from '@material-ui/icons';

import useStyles from './AddEditTodoForm.styles';

const AddTodoForm = ({ addTodo, editTodo, todo, edit }) => {
  const classes = useStyles();
  const history = useHistory();

  const [todoInfo, setTodoInfo] = useState({
    id: new Date().getTime().toString(),
    name: '',
    description: '',
    comments: '',
    timestamp: '',
    done: false,
  });

  useEffect(() => {
    if (edit && todo) {
      setTodoInfo(todo);
    }
  }, [edit, todo, setTodoInfo]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTodoInfo({ ...todoInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (edit) {
      editTodo(todoInfo);
      history.push(`/list/${todoInfo.id}`);
    } else {
      addTodo(todoInfo);
      setTodoInfo({
        id: new Date().getTime().toString(),
        name: '',
        description: '',
        comments: '',
        timestamp: '',
        done: false,
      });
    }
  };

  return (
    <Grid item container className={classes.root} sm={8} md={6} lg={4}>
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
        <Grid item container direction="column" xs={8} md={6}>
          <Button
            type="submit"
            startIcon={edit ? <Edit /> : <Add />}
            variant="contained"
            size="large"
            className={classes.button}
          >
            {edit ? 'EDIT TODO' : 'ADD TODO'}
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodo(todo)),
  editTodo: (todo) => dispatch(editTodo(todo)),
});

export default connect(null, mapDispatchToProps)(AddTodoForm);
