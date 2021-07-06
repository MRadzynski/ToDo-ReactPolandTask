import React from 'react';
import { Link } from 'react-router-dom';

import { Grid } from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';

import { green } from '@material-ui/core/colors';

import TodoList from '../../components/TodoList/TodoList';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

import useStyles from './Homepage.styles';

const Homepage = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.container}>
      <Header title="Hi TestUser!">
        <Link to="/add-todo">
          <IconButton size="large" className={classes.button}>
            <AddIcon style={{ color: green[500] }} fontSize="large" />
          </IconButton>
        </Link>
      </Header>
      <Grid item container direction="column" className={classes.main}>
        <TodoList />
      </Grid>
      <Footer />
    </Grid>
  );
};

export default Homepage;
