const express = require('express'),
    next = require('next'),
    middleware = require('./middleware/config')

const server = (middlewares = [], port = 3000) => {
    const env = process.env.NODE_ENV !== 'production',
        // 创建一个服务端运行的Next app
        app = next({env}),
        // 请求处理器
        handle = app.getRequestHandler();
    app.prepare()
        .then(() => {
            const server = express();
            middlewares.forEach(foo => {
                server.use((req, res, next) => {
                    foo(app, req, res, next)
                })
            });
            server.get('*', (req, res) => {
                return handle(req, res);
            });
            server.listen(port, (err) => {
                if (err) throw err;
                console.log(`> Ready on http://localhost:${port}`)
            })
        }).catch((ex) => {
        console.error(ex.stack);
        process.exit(1)
    });
};
server(middleware);