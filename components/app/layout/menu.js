import React from 'react'
import {withRouter} from "next/router";
import {getMenus} from './menu/db'
import {Anchor} from '../../../src'
import {appPreload} from '../../../src/initProps'

const Menu = props => {
    const {menus} = props;
    return (<ul>
        {menus.map(menu => {
            return (
                <li style={{display: 'inline-block', margin: '5px 5px'}} key={menu.key}>
                    <Anchor href={menu.href}>
                        <a>{menu.name}</a>
                    </Anchor>
                </li>
            )
        })}
    </ul>);
};

export default appPreload(getMenus)(Menu)