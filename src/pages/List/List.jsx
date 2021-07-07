import React from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';

import { selectTodos } from '../../redux/todo/todo.selectors';

import Header from '../../components/Header/Header';
import TodoList from '../../components/TodoList/TodoList';
import Footer from '../../components/Footer/Footer';

const List = ({ todos }) => {
  return (
    <Grid container direction="column">
      <Header title="List of all todos" />
      <TodoList todos={todos} />
      <Footer />
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  todos: selectTodos(state),
});

export default connect(mapStateToProps)(List);
