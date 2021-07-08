import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Grid, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import { green } from '@material-ui/core/colors';

import Header from '../../components/Header/Header';
import TodoList from '../../components/TodoList/TodoList';
import Footer from '../../components/Footer/Footer';

import { selectTodos } from '../../redux/todo/todo.selectors';

import { selectDisplayName } from '../../redux/user/user.selectors';

import useStyles from './Homepage.styles';

const Homepage = ({ todos, displayName }) => {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.container}>
      <Header title={`Hi ${displayName || ''}!`}>
        <Link to="/add-todo">
          <IconButton className={classes.button}>
            <AddIcon style={{ color: green[500] }} fontSize="large" />
          </IconButton>
        </Link>
      </Header>
      <TodoList todos={todos} limit={3}>
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
  displayName: selectDisplayName(state),
});

export default connect(mapStateToProps)(Homepage);
