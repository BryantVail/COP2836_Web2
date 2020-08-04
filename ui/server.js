
require('dotenv').config();

const express = require('express');

const app = express();

const enableHMR = (process.env.ENABLE_HMR || 'true') === 'true';

const UI_API_ENDPOINT = process.env.UI_API_ENDPOINT
  || 'http://localhost:3000/graphql';
const env = { UI_API_ENDPOINT };

const path = require('path');

const port = process.env.UI_SERVER_PORT || 8000;

if (enableHMR && (process.env.NODE_ENV !== 'production')) {
  console.log('Adding dev middleware, enabling HMR');
  /* eslint "global-require": "off" */
  /* eslint "import/no-extraneous-dependencies": "off" */
  const webpack = require('webpack');
  const devMiddleware = require('webpack-dev-middleware');
  const hotMiddleware = require('webpack-hot-middleware');

  const config = require('./webpack.config.js');
  config.entry.app.push('webpack-hot-middleware/client');
  config.plugins = config.plugins || [];
  config.plugins.push(new webpack.HotModuleReplacementPlugin());

  const compiler = webpack(config);
  app.use(devMiddleware(compiler));
  app.use(hotMiddleware(compiler));
}

app.use(express.static('public'));

app.get('/env.js', (req, res) => {
  res.send(`window.ENV = ${JSON.stringify(env)}`)
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

app.listen(port, () => {
  console.log(`UI started on port ${port}`);
})
