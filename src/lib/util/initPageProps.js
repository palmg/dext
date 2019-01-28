import {fingerprint} from './fingerprint'

let regComp;

/**
 * InitPageProps用于管理指定页面加载的时候向组件提供数据。组件分为2类方法：注册，执行
 * @constructor 默认构造 new InitPageProps()
 */
function InitPageProps() {
    const _this = this;
    /**
     *
     * @type {Object} {fingerprint(Comp): [{key, foo}]}}
     */
    this.compDict = {};

    /**
     * @type {Object} {pathname: [{key, foo}]}}
     */
    this.pathDict = {};

    this.buildFoo = function (Component, ctx) {
        const path = InitPageProps.replaceUrl(ctx.pathname);
        _this.prePath2CompDict(Component, path);
        const methods = _this.compDict[fingerprint(Component)],
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

/**
 * 对Path进行前置处理转换，将所有的页面路由方法绑定到compDict上。
 */
InitPageProps.prototype.prePath2CompDict = function (component, path) {
    const pathMethods = this.pathDict[path],
        finger = fingerprint(component)
    if (pathMethods) {
        const compMethods = this.compDict[finger];
        if (compMethods) {
            this.compDict[finger] = compMethods.concat(pathMethods)
        } else {
            this.compDict[finger] = pathMethods;
        }
        delete this.pathDict[path];
    }
};

/**
 * 返回一个通用方法。
 * @param pageMethod
 * @param compMethod
 * @return {*}
 */
InitPageProps.buildPagePropsMethod = function (pageMethod, compMethod) {
    const ret = async (ctx) => {
        const compProps = compMethod ? await compMethod(ctx) : {},
            pageProps = pageMethod ? await pageMethod(ctx) : {};
        return {compProps, pageProps}
    }
    return (!pageMethod && !compMethod) ? null : ret;
};

//===================================注册方法=======================================================
/**
 *
 * @param register {Function|String} 绑定组件页面url路径，或一个注册组件的方法。(register)=>{register(
 *   require.ensure([], require => {
 *       call(require('../../../pages/async/urlQueryLocal'))
 *   })
 * )}
 * @param key
 * @param foo
 */
InitPageProps.prototype.register = function (register, key, foo) {
    const _foo = this.wrapperPromise(foo);
    if ('string' === typeof register) {
        this.registerPath(register, key, foo)
    } else if ('function' === typeof register) {
        this.registerFunction(register, key, _foo);
    } else {
        throw "Type Error! Register Access String and Function!"
    }
};

InitPageProps.prototype.registerPath = function (path, key, foo) {
    const pathname = InitPageProps.replaceUrl(path),
        _methods = this.pathDict[pathname];
    if (_methods) {
        _methods.push({key, foo: foo})
    } else {
        this.pathDict[pathname] = [{key, foo: foo}];
    }
};

InitPageProps.prototype.registerFunction = function (register, key, foo) {
    const _this = this,
        _foo = _this.wrapperPromise(foo);
    register(Comp => {
        //Comp是对象
        const Component = Comp.default ? Comp.default : Comp;
        const _methods = _this.compDict[fingerprint(Component)];
        if (_methods) {
            _methods.push({key, foo: _foo})
        } else {
            this.compDict[fingerprint(Component)] = [{key, foo: _foo}];
        }
    })
};

/**
 * 如果传入的是一个promise，使用方法包装
 * @param foo
 * @return {function(): *}
 */
InitPageProps.prototype.wrapperPromise = function (foo) {
    if (Promise.prototype[Symbol.toStringTag] === foo.constructor.prototype[Symbol.toStringTag]) {
        return () => foo
    } else {
        return foo
    }
};

//========================tool
InitPageProps.replaceUrl = function (url) {
    return url.replace(/ |\//g, '');
}


export default InitPageProps