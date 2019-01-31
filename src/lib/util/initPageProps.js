import {fingerprint} from './fingerprint'
import {getClassSignature} from '../util/signatureClass'

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
        const path = InitPageProps.replaceUrl(ctx.pathname),
            signature = getClassSignature(Component),
            methods = (() => {
                let methodList = _this.compDict[signature] || [];
                methodList = methodList.concat(_this.pathDict[path] || []);
                return methodList
            })(),
            pageMethod = Component.getInitialProps,
            compMethod = methods ? async (ctx) => {
                let compProps = {}, props;
                for (let method of methods) {
                    props = await method(ctx);
                    compProps = Object.assign(compProps, props);
                }
                return compProps
            } : false;
        return InitPageProps.buildPagePropsMethod(pageMethod, compMethod);
    };
}

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
 * @param register {Function|String} 绑定组件页面url路径、页面组件的签名、或一个注册组件的方法。(register)=>{register(
 *   require.ensure([], require => {
 *       call(require('../../../pages/async/urlQueryLocal'))
 *   })
 * )}
 * @param foo 异步执行方法
 */
InitPageProps.prototype.register = function (register, foo) {
    const _foo = this.wrapperPromise(foo);
    console.log(register);
    if ('string' === typeof register) {
        register.match(/\//) ? this.registerPath(register, foo) : this.registerSignature(register, foo);
    } else if ('function' === typeof register) {
        this.registerFunction(register, _foo);
    } else {
        throw "Type Error! Register Access String and Function!"
    }
};

InitPageProps.prototype.registerPath = function (path, foo) {
    const pathname = InitPageProps.replaceUrl(path),
        _methods = this.pathDict[pathname];
    if (_methods) {
        _methods.push(foo)
    } else {
        this.pathDict[pathname] = [foo];
    }
};

InitPageProps.prototype.registerFunction = function (call, foo) {
    const _this = this,
        _foo = _this.wrapperPromise(foo);
    call(Comp => {
        //Comp是对象
        const Component = Comp.default ? Comp.default : Comp,
            signature = Component.prototype[Symbol.toStringTag];
        _this.registerSignature(signature, _foo);
    })
};

InitPageProps.prototype.registerSignature = function (signature, foo) {
    const _methods = this.compDict[signature];
    if (_methods) {
        _methods.push(foo)
    } else {
        this.compDict[signature] = [foo];
    }
}

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