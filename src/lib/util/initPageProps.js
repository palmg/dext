import {fingerprint} from './fingerprint'


/**
 *
 * @constructor 默认构造 new InitPageProps()
 */
function InitPageProps() {
    const _this = this;
    /**
     *
     * @type {Object} [{key, foo}]
     */
    this.pageDict = {};
    this.buildFoo = function (Component, ctx) {
        const path = ctx.pathname.replace(/ \//g, ''),
            methods = _this.pageDict[path],
            pageMethod = Component.getInitialProps,
            compMethod = methods ? async (ctx) => {
                const compProps = {};
                for (let method of methods) {
                    compProps[method.key] = await method.foo(ctx);
                }
                return compProps
            } : false;
        return InitPageProps.buildPagePropsMethod(pageMethod, compMethod);
    };
}

InitPageProps.buildPagePropsMethod = function (pageMethod, compMethod) {
    const ret = async (ctx) => {
        const compProps = compMethod ? await compMethod(ctx) : {},
            pageProps = pageMethod ? await pageMethod(ctx) : {};
        return {compProps, pageProps}
    }
    return (!pageMethod && !compMethod) ? null : ret;
}
/**
 *
 * @param path 要绑定的页面组件路径
 * @param key
 * @param foo
 */
InitPageProps.prototype.registerFoo = function (path, key, foo) {
    path = path.replace(/ \//g, '');
    if ('function' === typeof foo) {
        //TODO
    } else if (Promise.prototype[Symbol.toStringTag] === foo.constructor.prototype[Symbol.toStringTag]) {
        //直接注入一个promise
        foo = () => foo
    } else {
        throw `Typeof ${foo.toString()} is unsupported!`
    }
    const _methodList = this.pageDict[path];
    if (_methodList) {
        _methodList.push({key, foo})
    } else {
        this.pageDict[path] = [{key, foo}];
    }
};

export default InitPageProps