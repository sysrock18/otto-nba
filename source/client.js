import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { blue900, redA700 } from 'material-ui/styles/colors';

import Routes from './routes';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue900,
    accent1Color: redA700
  },
}, {
  avatar: {
    borderColor: null,
  },
  userAgent: navigator.userAgent, 
});

render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById('render-target'),
);
