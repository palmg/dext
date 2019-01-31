import React from 'react'
import {pagePreload} from 'dossr/initProps'

/**
 *
 * @param props
 * @return {*}
 * @constructor
 */
const PathLoad = props => (<p><span>组件1 : </span>{props.pathLoad}</p>);
/**
 * 用高阶组件pagePreload包装一个异步加载过程。
 * pagePreload接收2个参数path{String}、call{Function}
 * path表示当前组件对应的页面路径，当指定的路径对应这个配时，高阶组件被激活，会调用call来获取数据被传递给子组件。
 * call中的执行需要返回一个promise
 */
export default pagePreload('/component_load', async () => {
    const pathLoad = await new Promise((resolve, reject) => {
        resolve('通过url路径绑定异步加载数据。详见"./components/pathLoad.js"。')
    });
    return {pathLoad}
})(PathLoad)