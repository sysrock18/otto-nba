import http from 'http';
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { green100, green500, green700 } from 'material-ui/styles/colors';

import Routes from './routes';
import Layout from '../source/components/layout';

function requestHandler(request, response) {
  const context = {};

  const muiTheme = getMuiTheme({
    palette: {
      primary1Color: green500,
      primary2Color: green700,
      primary3Color: green100,
    },
  }, {
    avatar: {
      borderColor: null,
    },
    userAgent: request.headers['user-agent'],
  });

  const html = renderToString(
    <MuiThemeProvider muiTheme={muiTheme}>
      <StaticRouter location={request.url} context={context}>
        <Routes />
      </StaticRouter>
    </MuiThemeProvider>
  );

  response.setHeader('Content-type', 'text/html');
  
  if (context.url) {
    response.writeHead(301, {
      Location: context.url,
    });
    response.end();
  }

  response.write(renderToStaticMarkup(
    <Layout
      title="Otto NBA"
      content={html}
    />)
  );
  response.end();
}

const server = http.createServer(requestHandler);

server.listen(3000);
