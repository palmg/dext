import React from 'react'
import InitPageProps from '../util/initPageProps'
import {fingerprint} from '../util/fingerprint'
import ApplicationContext from '../applicationContext'

const initPageProps = new InitPageProps();
export const executeCompPreload = initPageProps.executeFoo;

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