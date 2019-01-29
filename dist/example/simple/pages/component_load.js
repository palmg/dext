import React from 'react'
import Menus from '../component/menus'
import PathLoad from '../component/pathLoad'
import CompLoad from '../component/compLoad'

/**
 * 内页组件包装了一个组件，在组件中会装载数据。
 * @param props
 * @return {*}
 * @constructor
 */
const ComponentLoad = props => (<div>
    <Menus/>
    <h2>Component_Load</h2>
    <p>这里有2个组件。组件1通过url来确定组件的数据是否需要加载。组件2通过绑定到页面组件来确定是否加载数据。</p>
    <hr/>
    <PathLoad />
    <CompLoad />
</div>);

export default ComponentLoad