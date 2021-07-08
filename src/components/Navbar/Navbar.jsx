import React from 'react';
import { Link } from 'react-router-dom';

import { MenuList, MenuItem } from '@material-ui/core';
import Home from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

import useStyles from './Navbar.styles';

const Navbar = () => {
  const classes = useStyles();

  return (
    <MenuList className={classes.menu}>
      <MenuItem className={classes.menuItem}>
        <Link to="/list">
          <FormatListBulletedIcon htmlColor="#fff" />
        </Link>
      </MenuItem>
      <MenuItem className={classes.menuItem}>
        <Link to="/">
          <Home htmlColor="#fff" />
        </Link>
      </MenuItem>
      <MenuItem className={classes.menuItem}>
        <Link to="/settings">
          <SettingsIcon htmlColor="#fff" />
        </Link>
      </MenuItem>
    </MenuList>
  );
};

export default Navbar;
