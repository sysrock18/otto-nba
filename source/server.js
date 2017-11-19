import http from 'http';
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import Routes from './routes';
import Layout from '../source/components/layout';

function requestHandler(request, response) {
  const context = {};

  const html = renderToString(
    <StaticRouter location={request.url} context={context}>
      <Routes />
    </StaticRouter>
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
