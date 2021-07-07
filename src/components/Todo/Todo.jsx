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
  Divider,
} from '@material-ui/core';

import { deleteTodo, toggleCompleteTodo } from '../../redux/todo/todo.actions';

import useStyles from './Todo.styles';

const Todo = ({ todo, deleteTodo, toggleCompleteTodo }) => {
  const classes = useStyles();

  const handleDelete = (e) => {
    const todoId = e.target.closest('button').id;

    deleteTodo(todoId);
  };

  const handleCompleteTodo = (e) => {
    const todoId = e.target.id;

    toggleCompleteTodo(todoId);
  };

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContainer}>
        <Checkbox
          id={todo.id}
          disableRipple
          checked={todo.done}
          className={classes.checkbox}
          onClick={handleCompleteTodo}
        />
        <CardContent className={classes.contentContainer}>
          <Typography
            variant="h6"
            className={todo.done ? classes.textCrossed : null}
          >
            {todo.name}
          </Typography>
          <Divider />
          <Typography
            variant="subtitle2"
            className={todo.done ? classes.textCrossed : null}
          >
            {todo.description}
          </Typography>
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
  toggleCompleteTodo: (id) => dispatch(toggleCompleteTodo(id)),
});

export default connect(null, mapDispatchToProps)(Todo);
