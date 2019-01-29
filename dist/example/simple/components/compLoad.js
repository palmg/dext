import React from 'react'
import {pagePreload} from 'dossr/initProps'

/**
 *
 * @param props
 * @return {*}
 * @constructor
 */
const CompLoad = props => {
    return (<p><span>组件2 : </span>{props.data}</p>);
};

/**
 * 用高阶组件pagePreload包装一个异步加载过程。
 * pagePreload接收2个参数 register{Function}、call{Function}。
 *
 * register是一个方法，在方法中用require.ensure进行组件加载包装，通过cb回调。这样这个组件就可以和'./page'中的一个组件进行绑定。
 *
 * path表示当前组件对应的页面路径，当指定的路径对应这个配时，高阶组件被激活，会调用call来获取数据被传递给子组件。
 * call中的执行需要返回一个promise
 */
export default pagePreload(cb=>{
    require.ensure([], require => {
        cb(require('../pages/component_load'))
    })
}, async () => {
    const data = await new Promise((resolve, reject) => {
        resolve('通过页面组件绑定异步加载数据。请打开"./components/compLoad.js"了解详情。')
    });
    return {data}
})(CompLoad)