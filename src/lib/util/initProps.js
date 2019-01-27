/**
 *
 * @constructor 默认构造 new InitProps()
 */
function InitProps() {
    const _this = this;
    this.fooDict = {};
    this.executeFoo = async function (ctx) {
        const valueDict = {};
        const keys = Object.keys(_this.fooDict);
        for (let key of keys) {
            valueDict[key] = await _this.fooDict[key](ctx);
        }
        return valueDict;
    }
}

InitProps.prototype.registerFoo = function (key, foo) {
    if ('function' === typeof foo) {
        this.fooDict[key] = foo;
    } else if (Promise.prototype[Symbol.toStringTag] === foo.constructor.prototype[Symbol.toStringTag]) {
        //直接注入一个promise
        this.fooDict[key] = () => foo
    } else {
        throw `Typeof ${foo.toString()} is unsupported!`
    }
};

export default InitProps