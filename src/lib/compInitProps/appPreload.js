import React from 'react'
import InitProps from '../util/initProps'
import {fingerprint} from '../util/fingerprint'
import ApplicationContext from '../applicationContext'

const appInitProps = new InitProps();
export const executeAppPreload = appInitProps.executeFoo;

const appPreload = (foo) => {
    return OriginComp => {
        const key = fingerprint(foo, OriginComp);
        appInitProps.registerFoo(key, foo);
        return props => (
            <ApplicationContext.Consumer>
                {value => {
                    const params = Object.assign({}, props, value['appProps'][key]);
                    return (<OriginComp {...params}/>)
                }}
            </ApplicationContext.Consumer>)
    }
};

export default appPreload