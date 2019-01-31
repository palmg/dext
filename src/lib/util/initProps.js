/**
 *
 * @constructor 默认构造 new InitProps()
 */
function InitProps() {
    const _this = this;
    this.foolist = [];
    this.executeFoo = async function (ctx) {
        let valueDict = {}, value;
        for (let foo of _this.foolist) {
            value = await foo(ctx)
            valueDict = Object.assign(valueDict, value);
        }
        return valueDict;
    }
}

InitProps.prototype.registerFoo = function (foo) {
    if ('function' === typeof foo) {
        this.foolist.push(foo);
    } else if (Promise.prototype[Symbol.toStringTag] === foo.constructor.prototype[Symbol.toStringTag]) {
        //直接注入一个promise
        this.foolist.push(() => foo)
    } else {
        throw `Typeof ${foo.toString()} is unsupported!`
    }
};

export default InitProps