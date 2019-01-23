import React from 'react'
import Loading from './layout/loading'
import Menu from './layout/menu'
import {router} from '../../src'

/**
 * 框架组件
 * @param props
 * @param props.onMenuClick {Function} 点击事件回调 (id, event)
 */
class Layout extends React.Component {
    render() {
        const {props} = this, {route} = props;
        return (<React.Fragment>
                <header style={{height: '46px'}}>
                    <Menu/>
                </header>
                <section style={{position: 'relative', padding: '50px'}}>
                    {route.isPageRoute ? (<Loading/>) : this.props.children}
                </section>
                <footer style={{textAlign: 'center', background: '#001529', color: 'rgba(255, 255, 255, 0.65)'}}>
                    模板案例
                </footer>
            </React.Fragment>);
    }
}

export default router(Layout)