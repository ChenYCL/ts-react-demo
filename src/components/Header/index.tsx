import React from 'react';

import './index.scss';
import Block from '../../pages/Crumb';
import { NavLink, withRouter } from 'react-router-dom';
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
    history?: any;
    [key: string]: any;
}

class Header extends React.Component<IRON, { initState: string }> {
    static readonly state = {
        initState: 0,
    };

    public render() {
        const { nav, history } = this.props;
        return (
            <header className="header">
                <div className="nav-menu-bread ">
                    <Block />
                </div>
                <div className="font-logo" onClick={() => history.push('/home')}>
                    MUSICBED
                </div>
                {nav.map((item) => (
                    <NavLink className="nav-link-item" key={item.key} to={`${item.routerName}`}>
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
