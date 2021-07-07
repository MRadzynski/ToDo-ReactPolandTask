import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  Button,
  Card,
  CardContent,
  CardActions,
  Checkbox,
  Typography,
} from '@material-ui/core';

import { deleteTodo } from '../../redux/todo/todo.actions';

import useStyles from './Todo.styles';

const Todo = ({ todo, deleteTodo }) => {
  const classes = useStyles();

  const handleDelete = (e) => {
    const todoId = e.target.closest('button').id;

    deleteTodo(todoId);
  };

  return (
    <Card className={classes.card}>
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

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id) => dispatch(deleteTodo(id)),
});

export default connect(null, mapDispatchToProps)(Todo);
