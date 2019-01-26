import React from 'react'
import App from 'next/app'
import ApplicationContext from './applicationContext'
import {executeAppPreload} from "./compInitProps/appPreload";
import {executeCompPreload} from "./compInitProps/pagePreload";

class Application extends App {
    constructor(...props) {
        super(...props);
    }

    static async getInitialProps({Component, router, ctx}) {
        /**
         * app的getInitialProps会在服务端被调用一次，在前端每次切换页面时被调用。
         */
        let pageProps = {}, appProps = {}, compProps = {};
        const route = {
                url: router.asPath, //全路径 abc/d?q=a
                pathname: router.route, //文档路径 abc/d
                query: router.query //查询内容 {a:'a'}
            }, req = ctx && ctx.req || false,
            res = ctx && ctx.res || false;
        Component.getInitialProps = executeCompPreload(Component, route, req, res);
        if (Component.getInitialProps) {
            const ret = await Component.getInitialProps(ctx);
            compProps = ret.compProps;
            pageProps = ret.pageProps;
        }
        if (ctx && !ctx.req) {//前端,只有在服务端 ctx.req 和 ctx.res 才存在
            appProps = window.__NEXT_DATA__.props.appProps;
        } else {//服务端
            appProps = await executeAppPreload(route, req, res);
        }
        return {pageProps, appProps, compProps};
    }

    render(children) {
        const {appProps, compProps} = this.props;
        return (
            <ApplicationContext.Provider value={{appProps, compProps}}>
                {children}
            </ApplicationContext.Provider>
        );
    }
}

export default Application