import React from 'react';

import { Container } from '@material-ui/core';
import { Card, CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';

import useStyles from './TodoList.styles';

const TodoList = ({ todos }) => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h4">Nearest Todos</Typography>
      {todos?.map((todo) => (
        <Card key={todo.id} className={classes.card}>
          <CardContent className={classes.cardContainer}>
            <Checkbox />
            <CardContent className={classes.textContainer}>
              <Typography variant="h5">{todo.name}</Typography>
              <Typography variant="subtitle2">{todo.description}</Typography>
            </CardContent>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default TodoList;
