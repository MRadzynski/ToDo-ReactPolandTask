import React from 'react';
import { Link } from 'react-router-dom';

import {
  Button,
  Card,
  CardContent,
  CardActions,
  Checkbox,
  Typography,
} from '@material-ui/core';

import useStyles from './Todo.styles';

const Todo = ({ todo }) => {
  const classes = useStyles();

  const handleDelete = (e) => {
    console.log(e.target.closest('button').id);
  };

  return (
    <Card key={todo.id} className={classes.card}>
      <CardContent className={classes.cardContainer}>
        <Checkbox disableRipple className={classes.checkbox} />
        <CardContent className={classes.contentContainer}>
          <Typography variant="h6">{todo.name}</Typography>
          <Typography variant="subtitle2">{todo.description}</Typography>
          <CardActions className={classes.linkContainer}>
            <Typography variant="button">
              <Link to={`/list/${todo.id}`} className={classes.link}>
                View
              </Link>
            </Typography>
            <Typography variant="button">
              <Link to={`/list/${todo.id}/edit`} className={classes.link}>
                Edit
              </Link>
            </Typography>
            <Typography>
              <Button
                id={todo.id}
                className={classes.link}
                onClick={handleDelete}
              >
                Delete
              </Button>
            </Typography>
          </CardActions>
        </CardContent>
      </CardContent>
    </Card>
  );
};

export default Todo;
