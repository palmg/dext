import React from 'react'
import App from 'next/app'
import ApplicationContext from './applicationContext'
import {executeAsyncFoo} from "./util/serverInitProps";

class Application extends App {
    constructor(...props) {
        super(...props);
    }

    static async getInitialProps({Component, router, ctx}) {
        /**
         * app的getInitialProps会在服务端被调用一次，在前端每次切换页面时被调用。
         */
        let pageProps = {}, appProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        if (ctx && !ctx.req) {//前端,只有在服务端 ctx.req 和 ctx.res 才存在
            appProps = window.__NEXT_DATA__.props.appProps;
        } else {//服务端
            appProps = await executeAsyncFoo();
        }
        return {pageProps, appProps};
    }

    render(children) {
        const {appProps} = this.props;
        return (
            <ApplicationContext.Provider value={appProps}>
                {children}
            </ApplicationContext.Provider>
        );
    }
}

export default Application