import React from 'react'
import {pagePreload} from '../../../src/initProps'

const LocalDataController = props => (<div>{props.view}</div>);

export default pagePreload(cb => {
    require.ensure([], require => {
        cb(require('../../../pages/async/urlQueryLocal'))
    })
}, new Promise((resolve, reject) => {
    resolve({view: '通过引入内面组件标记异步组装数据!!!'});
}))(LocalDataController)