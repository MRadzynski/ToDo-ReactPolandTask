import React from 'react';

import { Grid } from '@material-ui/core';

import Todo from '../Todo/Todo';

import useStyles from './TodoList.styles';

const TodoList = ({ todos, children, limit }) => {
  const classes = useStyles();

  return (
    <Grid item container direction="column" className={classes.root}>
      {children}
      <Grid
        container
        item
        direction="column"
        xs={11}
        sm={10}
        md={8}
        lg={6}
        xl={4}
      >
        {limit
          ? todos.map((todo, index) =>
              index < limit ? <Todo key={todo.id} todo={todo} /> : null
            )
          : todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
      </Grid>
    </Grid>
  );
};

export default TodoList;
