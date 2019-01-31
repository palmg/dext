import React from 'react'
import InitProps from '../util/initProps'
import ApplicationContext from '../applicationContext'

const appInitProps = new InitProps();
export const executeAppPreload = appInitProps.executeFoo;

const appPreload = (foo) => {
    return OriginComp => {
        appInitProps.registerFoo(foo);
        return props => (
            <ApplicationContext.Consumer>
                {value => {
                    const params = Object.assign({}, props, value.appProps);
                    return (<OriginComp {...params}/>)
                }}
            </ApplicationContext.Consumer>)
    }
};

export default appPreload