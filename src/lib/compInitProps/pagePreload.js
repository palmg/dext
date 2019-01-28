import React from 'react'
import InitPageProps from '../util/initPageProps'
import {fingerprint} from '../util/fingerprint'
import ApplicationContext from '../applicationContext'
const initPageProps = new InitPageProps();
export const executeCompPreload = initPageProps.buildFoo;

const cb = (comp)=>{
    console.log(UrlQueryLocal === comp.default)
}

/**
 * 每次页面变更时执行的数据加载方法。
 * @param register {Function|String} 一个页面的url路径或者一个注册组件的方法。(register)=>{register(
 *   require.ensure([], require => {
 *       call(require('../../../pages/async/urlQueryLocal'))
 *   })
 * )}
 * @param foo
 * @returns {function(*=): function(*=): *}
 */
const pagePreload = (register, foo) => {
    return OriginComp => {
        const key = fingerprint(foo, OriginComp, register);
        initPageProps.register(register, key, foo);
        return props => (
            <ApplicationContext.Consumer>
                {value => {
                    const params = Object.assign({}, props, value['compProps'][key]);
                    return (<OriginComp {...params}/>)
                }}
            </ApplicationContext.Consumer>)
    }
};
export default pagePreload