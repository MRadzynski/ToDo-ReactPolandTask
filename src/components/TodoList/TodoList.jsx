import React from 'react';

import { Grid } from '@material-ui/core';

import Todo from '../Todo/Todo';

import useStyles from './TodoList.styles';

const TodoList = ({ todos, children }) => {
  const classes = useStyles();

  return (
    <Grid item container direction="column" className={classes.root}>
      {children}
      <Grid container item direction="column">
        {todos?.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </Grid>
    </Grid>
  );
};

export default TodoList;
