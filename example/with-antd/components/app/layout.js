import React from 'react'
import {Layout as Lay} from "antd";
import Loading from './layout/loading'
import Menu from './layout/menu'
import {router} from 'dossr'

const {Header, Footer, Sider, Content} = Lay;

/**
 * 框架组件
 * @param props
 * @param props.onMenuClick {Function} 点击事件回调 (id, event)
 */
class Layout extends React.Component {
    render() {
        const {props} = this, {route} = props;
        return (<Lay  style={{height: '100%'}}>
            <Header style={{height: '46px'}}>
                <Menu/>
            </Header>
            <Content style={{position: 'relative', padding: '20px 45px'}}>
                {route.isPageRoute ? (<Loading/>) : this.props.children}
            </Content>
            <Footer style={{textAlign: 'center', background: '#001529', color: 'rgba(255, 255, 255, 0.65)'}}>
                模板案例
            </Footer>
        </Lay>);
    }
}

export default router(Layout)