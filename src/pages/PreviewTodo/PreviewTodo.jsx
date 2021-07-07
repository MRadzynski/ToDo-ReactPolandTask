import React from 'react';
import { connect } from 'react-redux';

import { Grid } from '@material-ui/core';

import { selectTodoById } from '../../redux/todo/todo.selectors';

import Header from '../../components/Header/Header';
import TodoDetails from '../../components/TodoDetails/TodoDetails';
import Footer from '../../components/Footer/Footer';

const PreviewTodo = ({ todo }) => {
  return (
    <Grid container>
      <Header title="Todo Preview" />
      <TodoDetails todo={todo} />
      <Footer />
    </Grid>
  );
};

const mapStateToProps = (state, ownProps) => ({
  todo: selectTodoById(ownProps.match.params.id)(state),
});

export default connect(mapStateToProps)(PreviewTodo);
