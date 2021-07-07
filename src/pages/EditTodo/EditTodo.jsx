import React from 'react';
import { connect } from 'react-redux';

import { Grid } from '@material-ui/core';

import Header from '../../components/Header/Header';
import AddEditTodoForm from '../../components/AddEditTodoForm/AddEditTodoForm';
import Footer from '../../components/Footer/Footer';

import { selectTodoById } from '../../redux/todo/todo.selectors';

const EditTodo = ({ todo }) => {
  return (
    <Grid container direction="column">
      <Header title="Edit Todo" />
      <AddEditTodoForm todo={todo} edit />
      <Footer />
    </Grid>
  );
};

const mapStateToProps = (state, ownProps) => ({
  todo: selectTodoById(ownProps.match.params.id)(state),
});

export default connect(mapStateToProps)(EditTodo);
