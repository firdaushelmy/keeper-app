const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'build')));
const port = process.env.PORT || '8080';
app.set('port', port);
const server = http.createServer(app);
// eslint-disable-next-line no-console
server.listen(port, () => console.log(`Running on localhost:${port}`));