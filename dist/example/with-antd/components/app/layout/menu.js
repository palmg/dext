import React from 'react'
import {Menu as M} from 'antd';
import {withRouter} from "next/router";
import {getMenus} from './menu/db'
import {Anchor} from 'dossr'
import {appPreload} from 'dossr/initProps'

const {Item} = M;

const Menu = props => {
    const {menus} = props,
        {pathname} = props.router;
    return (<M theme="dark"
               mode="horizontal"
               defaultSelectedKeys={
                   menus.filter(menu => menu.href.replace(/\?[a-zA-Z0-9=]+/, '') === pathname).map(menu => menu.key)
               }>
        {menus.map(menu => (
            <Item key={menu.key}>
                <Anchor href={menu.href}>
                    <a>{menu.name}</a>
                </Anchor>
            </Item>
        ))}
    </M>);
};

export default appPreload(getMenus)(withRouter(Menu))