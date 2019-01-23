const express = require('express'),
    next = require('next');

export default (middleware, port) => {
    //环境指示器
    const env = process.env.NODE_ENV !== 'production',
        // 创建一个服务端运行的Next app
        app = next({env}),
        // 请求处理器
        handle = app.getRequestHandler(),
        //端口
        p = port || 3000;
    app.prepare()
        .then(() => {
            const server = express();
            middleware && middleware.forEach(foo => {
                server.use((req, res, next) => {
                    foo(app, req, res, next)
                })
            });
            server.get('*', (req, res) => {
                return handle(req, res);
            });
            server.listen(p, (err) => {
                if (err) throw err;
                console.log(`> Ready on http://localhost:${p}`)
            })
        }).catch((ex) => {
        console.error(ex.stack);
        process.exit(1)
    });
}