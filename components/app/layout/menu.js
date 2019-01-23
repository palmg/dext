import React from 'react'
import {withRouter} from "next/router";
import {getMenus} from './menu/db'
import {Anchor, serverPreload} from '../../../src'

const Menu = props => {
    const {menus} = props,
        {pathname} = props.router;
    return (<ul>
        {menus.map(menu => (
            <li style={{display:'inline-block', margin:'5px 5px'}} key={menu.key}>
                <Anchor href={menu.href}>
                    <a>{menu.name}</a>
                </Anchor>
            </li>
        ))}
    </ul>);
};

export default serverPreload('menus', getMenus)(withRouter(Menu))