import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';

function Header() {
  return (
    <AppBar
      title="OTTO-NBA"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
  );
}

export default Header;
