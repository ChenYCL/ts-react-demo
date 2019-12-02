import React from 'react';

import './index.scss';
import Block from '../../pages/Crumb';
import { NavLink } from 'react-router-dom';
// import cx from 'classnames';

export type navType = {
    name: string;
    key: number;
    routerName: string;
};

export interface IRON {
    nav: Array<navType>;
    color?: string;
    padding?: object;
}

class Header extends React.Component<IRON, { initState: string }> {
    static readonly state = {
        initState: 0,
    };

    public render() {
        const { nav, color, padding } = this.props;
        return (
            <header className="header">
                <div className="nav-menu-bread ">
                    <Block />
                </div>
                <div className="font-logo">MUSICBED</div>
                {nav.map((item) => (
                    <NavLink className="nav-link-item" key={item.key} to={`/${item.routerName}`}>
                        {item.name}
                    </NavLink>
                ))}
                <div className="login-sign">
                    <a className="help">Help</a>
                    <div className="login-create">
                        <a className="login-btn css-line" aria-current="false">
                            <p>Login</p>
                        </a>
                        <a className="create-btn">
                            <button type="submit">Create an Account</button>
                        </a>
                    </div>
                </div>
                <div>{/*  左侧导航条内容 */}</div>
            </header>
        );
    }
}

export default Header;
