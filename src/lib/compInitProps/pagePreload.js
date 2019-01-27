import React from 'react'
import InitPageProps from '../util/initPageProps'
import {fingerprint} from '../util/fingerprint'
import ApplicationContext from '../applicationContext'

const initPageProps = new InitPageProps();
export const executeCompPreload = initPageProps.buildFoo;

/**
 * 每次页面变更时执行的数据加载方法。
 * @param path
 * @param foo
 * @returns {function(*=): function(*=): *}
 */
const pagePreload = (path, foo) => {
    return OriginComp => {
        const key = fingerprint(foo, OriginComp, path);
        initPageProps.registerFoo(path, key, foo);
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