import {fingerprint} from './fingerprint'

/**
 *
 * @constructor 默认构造 new InitProps()
 */
function InitPageProps() {
    const _this = this;
    this.pageDict = {};
    this.buildFoo = function (Comp, router, req, res) {
        const pathname = router.pathname.replace(/ \//g, ''),
            methods = _this.pageDict[pathname],
            initialPropsMethod = Comp.getInitialProps,
            innerFoo = methods ? async () => {
                const compProps = {};
                for (let key of keys) {
                    compProps[key] = await methods(router, req, res);
                }
                return {compProps}
            } : () => {
                return false
            };
        if (initialPropsMethod && innerFoo) {
            return (cxt) => {
                const compProps = innerFoo(),
                    pageProps = initialPropsMethod();
                return {compProps, pageProps}
            }
        } else if (!initialPropsMethod && innerFoo) {
            return innerFoo;
        } else {
            return null;
        }
    };
}

/**
 *
 * @param path 要绑定的页面组件
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