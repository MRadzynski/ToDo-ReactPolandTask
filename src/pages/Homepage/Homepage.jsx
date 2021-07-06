import React from 'react';
import { Link } from 'react-router-dom';

import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';

import { green } from '@material-ui/core/colors';

import Navbar from '../../components/Navbar/Navbar';
import TodoList from '../../components/TodoList/TodoList';

import useStyles from './Homepage.styles';

const Homepage = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.container}>
      <Grid item align="start" className={classes.header}>
        <Typography variant="h4" className={classes.title}>
          Hi TestUser !
        </Typography>
        <Link to="/add-todo">
          <IconButton size="large" className={classes.button}>
            <AddIcon style={{ color: green[500] }} fontSize="large" />
          </IconButton>
        </Link>
      </Grid>
      <Grid item container direction="column" className={classes.main}>
        <TodoList />
      </Grid>
      <Grid item container className={classes.footerNav}>
        <Navbar />
      </Grid>
    </Grid>
  );
};

export default Homepage;
