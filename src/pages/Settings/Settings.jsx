import React from 'react';

import { Grid } from '@material-ui/core';

import Header from '../../components/Header/Header';
import SettingsGroups from '../../components/SettingsGroups/SettingsGroups';
import Footer from '../../components/Footer/Footer';

const Settings = () => {
  return (
    <Grid container>
      <Header title="Settings" />
      <SettingsGroups />
      <Footer />
    </Grid>
  );
};

export default Settings;
