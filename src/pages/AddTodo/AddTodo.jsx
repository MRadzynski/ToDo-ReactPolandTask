import React from 'react';

import { Grid } from '@material-ui/core';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import AddTodoForm from '../../components/AddTodoForm/AddTodoForm';

const AddTodo = () => {
  return (
    <Grid container>
      <Header title="Add ToDo" />
      <AddTodoForm />
      <Footer />
    </Grid>
  );
};

export default AddTodo;
