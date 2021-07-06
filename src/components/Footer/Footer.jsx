import React from 'react';
import { Grid } from '@material-ui/core';

import Navbar from '../Navbar/Navbar';

import useStyles from './Footer.styles';

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid container item className={classes.footerNav}>
      <Navbar />
    </Grid>
  );
};

export default Footer;
