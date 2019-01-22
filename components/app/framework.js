import React from 'react'
import Loading from './framework/loading'
import Menu from './framework/menu'
import router from '../../lib/router'

const cn = require('classnames/bind').bind(require('./application.scss'));

/**
 * 框架组件
 * @param props
 * @param props.onMenuClick {Function} 点击事件回调 (id, event)
 */
class Framework extends React.Component {
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

export default router.route(Framework)