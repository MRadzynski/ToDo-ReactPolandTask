import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Grid, Typography } from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';

import { green } from '@material-ui/core/colors';

import TodoList from '../../components/TodoList/TodoList';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

import useStyles from './Homepage.styles';
import { selectTodos } from '../../redux/todo/todo.selectors';

const Homepage = ({ todos }) => {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.container}>
      <Header title="Hi TestUser!">
        <Link to="/add-todo">
          <IconButton className={classes.button}>
            <AddIcon style={{ color: green[500] }} fontSize="large" />
          </IconButton>
        </Link>
      </Header>
      <TodoList todos={todos}>
        <Typography variant="h4" style={{ margin: '2rem 0 1rem 2rem' }}>
          Nearest Todos
        </Typography>
      </TodoList>
      <Footer />
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  todos: selectTodos(state),
});

export default connect(mapStateToProps)(Homepage);
