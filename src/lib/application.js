import React from 'react'
import App from 'next/app'
import {Provider} from './applicationContext'
import {executeAppPreload} from "./compInitProps/appPreload";
import {executeCompPreload} from "./compInitProps/pagePreload";

class Application extends App {
    constructor(...props) {
        super(...props);
    }

    /**
     * 页面在进行真实渲染之前执行预处理数据的方法。
     * 1）服务端打开页面时候一定会渲染一次。
     * 2）前端首次打开时不会执行，后面每次切换内页都会执一次。
     * @param Component {React.Component} 当前页面在 ./pages/下的文件组件实例
     * @param router {Object} Nextjs自定义的路由对象。
     * @param router.asPath {String} 页面切换之前的地址，比如从/切换到/about这里就是/。当设置Link的asPath属性时这里显示的asPath指向的路径
     * @param router.pathname {String} 与asPath类似，但是记录的是真实路径。
     * @param ctx {Object} Nextjs定义的整个app的上下文，在客户端只有asPath、pathname和query3个属性，在服务端会有res和req。
     * @param ctx.asPath {String} 和router.asPath类似，但是显示的是切换之后的地址。
     * @param ctx.pathname {String} 与router.pathname类似。
     * @param ctx.query {String} URL上的查询参数，比如?q=abc, router.query={q:'abc'}。
     * @returns {Promise<{pageProps, appProps: *, compProps}>}
     */
    static async getInitialProps({Component, router, ctx}) {
        let pageProps = {}, appProps = {}, compProps = {};
        const getInitialProps = executeCompPreload(Component, ctx);
        if (getInitialProps) {
            const ret = await getInitialProps(ctx);
            compProps = ret.compProps;
            pageProps = ret.pageProps;
        }
        if (ctx && !ctx.req) {//前端,只有在服务端 ctx.req 和 ctx.res 才存在
            appProps = window.__NEXT_DATA__.props.appProps;//从页面上获取参数，__NEXT_DATA__就是nextjs渲染的异步数据
        } else {//服务端
            appProps = await executeAppPreload(ctx);
        }
        return {pageProps, appProps, compProps};
    }

    render() {
        const {appProps, compProps, Component, pageProps} = this.props;
        return (
            <Provider value={{appProps, compProps}}>
                <Component {...pageProps} />
            </Provider>
        );
    }
}

export default Application