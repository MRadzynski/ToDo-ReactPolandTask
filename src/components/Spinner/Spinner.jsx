import React from 'react';
import { Grid } from '@material-ui/core';

import useStyles from './Spinner.styles';

const Spinner = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.spinner} />
    </Grid>
  );
};

export default Spinner;
