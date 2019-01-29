import React from 'react'
import {Anchor} from 'dossr'

const Style = {
    margin:'0 15px'
}

export default props => (<div>
    <Anchor href="/"><a style={Style}>首页</a></Anchor>
    <Anchor href="/page_load"><a style={Style}>页面加载</a></Anchor>
    <Anchor href="/component_load"><a style={Style}>组件加载</a></Anchor>
</div>)