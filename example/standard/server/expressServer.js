const Server = require('dossr/server'),
    cookie = require('./middleware/cookie'),
    pageCache = require('./middleware/pageCache');

const server = new Server();