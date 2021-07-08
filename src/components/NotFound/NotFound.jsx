import React from 'react';

import { Grid, Typography } from '@material-ui/core';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import useStyles from './NotFound.styles';

const NotFound = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Header title="Page not found !" />
      <Grid item container direction="column" className={classes.main}>
        <img
          src="https://i.imgur.com/lKJiT77.png"
          alt="dog"
          className={classes.image}
        />
        <Typography variant="h4" className={classes.text}>
          A Dog Ate this Page!
        </Typography>
      </Grid>
      <Footer />
    </Grid>
  );
};

export default NotFound;
