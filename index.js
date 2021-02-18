const http = require('http');
const app = require("./api")

const PORT = 3001;

const server = http.createServer(app);

server.listen(PORT);