import React from 'react'
import InitPageProps from '../util/initPageProps'
import {fingerprint} from '../util/fingerprint'
import {Consumer} from '../applicationContext'
const initPageProps = new InitPageProps();
export const executeCompPreload = initPageProps.buildFoo;

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
        const key = fingerprint(OriginComp);
        console.log('comp:', OriginComp.toString());
        console.log('pre-finger:', key);
        initPageProps.register(register, key, foo);
        return props => {
            return (
                <Consumer>
                    {value => {
                        const _value = value['compProps'][key];
                        const params = Object.assign({}, props, _value);
                        console.log('finger:', key);
                        console.log('value:', value);
                        console.log('finger value"', _value);
                        return (<OriginComp {...params}/>)
                    }}
                </Consumer>)
        }
    }
};
export default pagePreload