import React from 'react';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import useStyles from './Header.styles';

const Header = ({ title, children }) => {
  const classes = useStyles();

  return (
    <Grid container item className={classes.header}>
      <Typography variant="h4" className={classes.title}>
        {title}
      </Typography>
      {children}
    </Grid>
  );
};

export default Header;
