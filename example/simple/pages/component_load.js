import React from 'react'
import {signature} from 'dossr/initProps'
import Menus from '../components/menus'
import PathLoad from '../components/pathLoad'
import CompLoad from '../components/compLoad'
import SignatureLoad from '../components/signatureLoad'

/**
 * 内页组件包装了一个组件，在组件中会装载数据。
 * @param props
 * @return {*}
 * @constructor
 */
const ComponentLoad = signature('component_load', props => (<div>
    <Menus/>
    <h2>Component_Load</h2>
        <p>这里有3个组件。</p>
        <p>组件1通过url来确定组件的数据是否需要加载。</p>
        <p>组件2通过绑定到页面组件来确定是否加载数据。</p>
        <p>组件3通过绑定到页面组件的签名来确定是否加载数据。</p>
    <hr/>
    <PathLoad/>
    <CompLoad/>
    <SignatureLoad />
</div>));

export default ComponentLoad