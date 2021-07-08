import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import Footer from '../Footer/Footer';

class ErrorBourdary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  containerStyle = {
    width: '100vw',
    height: '90vh',
    alignItems: 'center',
    justifyContent: 'center',
  };

  render() {
    if (this.state.hasErrored) {
      return (
        <Grid
          container
          direction="column"
          style={{
            width: '100vw',
          }}
        >
          <Grid container item direction="column" style={this.containerStyle}>
            <img
              width={'80%'}
              height={'70%'}
              src="https://i.imgur.com/U3vTGjX.png"
              alt="leaky boat"
            />
            <Typography variant="h4" align="center">
              There's a leak in this page!
            </Typography>
          </Grid>
          <Footer />
        </Grid>
      );
    }
    return this.props.children;
  }
}

export default ErrorBourdary;
