import React from 'react';

import { Grid } from '@material-ui/core';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import AddEditTodoForm from '../../components/AddEditTodoForm/AddEditTodoForm';

const AddTodo = () => {
  return (
    <Grid container>
      <Header title="Add ToDo" />
      <AddEditTodoForm />
      <Footer />
    </Grid>
  );
};

export default AddTodo;
