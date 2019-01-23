import React from 'react'
import {withRouter} from "next/router";
import {getMenus} from './menu/db'
import {Anchor, serverPreload} from 'dossr'
const cn = require('classnames/bind').bind(require('./menus.scss'));

const Menu = props => {
    const {menus} = props,
        {pathname} = props.router;
    return (<ul>
        {menus.map(menu => (
            <li className={cn('li')} key={menu.key}>
                <Anchor href={menu.href}>
                    <a>{menu.name}</a>
                </Anchor>
            </li>
        ))}
    </ul>);
};

export default serverPreload('menus', getMenus)(withRouter(Menu))