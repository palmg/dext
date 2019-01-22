import React from 'react'
import Link from "next/link";
import {withRouter} from "next/router";
import {getMenus} from './menu/db'
import serverPreload from '../../../lib/serverPreload'
const cn = require('classnames/bind').bind(require('./menus.scss'));

const Menu = props => {
    const {menus} = props,
        {pathname} = props.router;
    return (<ul>
        {menus.map(menu => (
            <li className={cn('li')} key={menu.key}>
                <Link href={menu.href}>
                    <a>{menu.name}</a>
                </Link>
            </li>
        ))}
    </ul>);
};

export default serverPreload('menus', getMenus)(withRouter(Menu))