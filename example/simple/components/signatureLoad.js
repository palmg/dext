import React from 'react'
import {pagePreload} from 'dossr/initProps'

/**
 *
 * @param props
 * @return {*}
 * @constructor
 */
const SignatureLoad = props => {
    console.log(props)
    return (<p><span>组件3 : </span>{props.signatureLoad}</p>);
}
/**
 * 用高阶组件pagePreload包装一个异步加载过程。
 * pagePreload接收2个参数signature{String}、call{Function}
 * signature表示当前组件的包装签名，当指定的路径对应这个配时，高阶组件被激活，会调用call来获取数据被传递给子组件。
 * call中的执行需要返回一个promise
 */
export default pagePreload('component_load', async () => {
    const signatureLoad = await new Promise((resolve, reject) => {
        resolve('通过signature包装签名绑定异步加载数据。详见"./components/signatureLoad.js"。')
    });
    return {signatureLoad}
})(SignatureLoad)