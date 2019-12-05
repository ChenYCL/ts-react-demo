import React, { Fragment, useState } from 'react';
import './index.scss';
import cx from 'classnames';

const menu = [
    { name: 'Browse', key: 1 },
    { name: 'Playlists', key: 2 },
    { name: 'Custom Music', key: 3 },
    { name: 'Our Work', key: 4 },
    { name: 'Pricing', key: 5 },
];

const helpMenu = [
    { name: 'Help & Support', key: 0 },
    { name: 'About Musicbed', key: 1 },
    { name: 'Filmsupply', key: 2 },
    { name: 'Blog', key: 3 },
];

const Block: React.FC<Props> = (props: Props): JSX.Element => {
    const [modalShow, useModalShow] = useState<boolean>(false);

    return (
        <Fragment>
            <div className="Crumb-wrapper" onClick={() => useModalShow(!modalShow)}>
                <div className="content">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </div>
            <div className={cx('open-aside', { hide: !modalShow }, { show: modalShow })}>
                <div className="close" onClick={() => useModalShow(!modalShow)}>
                    X
                </div>
                <i className="ri-store-line shop-icon"></i>
                <div className="list-left">
                    {menu.map((item, key) => (
                        <div className="big-menu" key={key}>
                            {item.name}
                        </div>
                    ))}
                    <div className="email-live">Live Chat | (800)380-8154 | Email Us</div>
                    <div className="divider"></div>
                    {helpMenu.map((item, key) => (
                        <div className="sub-menu" key={key}>
                            {item.name}
                        </div>
                    ))}
                    <div className="divider"></div>
                    <div className="sub-menu">Log In</div>
                    <div className="sub-menu">Create an Account</div>
                </div>
            </div>
            <div className={cx('aside-cover', { hide: !modalShow }, { show: modalShow })}></div>
        </Fragment>
    );
};

export default Block;
