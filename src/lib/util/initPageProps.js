import {fingerprint} from './fingerprint'

/**
 *
 * @constructor 默认构造 new InitProps()
 */
function InitPageProps() {
    const _this = this;
    this.pageDict = {};
    this.executeFoo = async function (Comp, router, req, res) {
        const pathname = router.pathname.replace(/ \//g, ''),
            methods = _this.pageDict[pathname];
        console.log(Comp);
        if (methods) {
            const initialPropsMethod = Comp.getInitialProps,
                innerFoo = ()=>{

                };
            if (initialPropsMethod) {

            } else {

            }
        }
        // const oriMethod = Component.getInitialProps,
        //     finger = fingerprint(Component),
        //     bindMethods = _this.pageDict[finger];
        // if(bindMethods){
        //     if (oriMethod) {
        //         Component.getInitialProps = async function (ctx) {
        //             const valueDict = {};
        //             const keys = Object.keys(_this.pageDict);
        //             for (let method of bindMethods) {
        //                 valueDict[method.key] = await method.foo(router, req, res);
        //             }
        //             const pageProps = oriMethod(ctx)
        //             return {dossrFlag:1, dossrInitPageProps: valueDict, pageProps};
        //         }
        //     } else {
        //         Component.getInitialProps = async function () {
        //             const valueDict = {};
        //             const keys = Object.keys(_this.pageDict);
        //             for (let method of bindMethods) {
        //                 valueDict[method.key] = await method.foo(router, req, res);
        //             }
        //             return {dossrFlag:1, dossrInitPageProps: valueDict};
        //         }
        //     }
        // }
    }
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