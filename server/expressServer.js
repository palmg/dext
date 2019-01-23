const server = require('../dist/server'),
    cookie = require('./middleware/cookie'),
    pageCache = require('./middleware/pageCache')

server([cookie, pageCache], 3000);