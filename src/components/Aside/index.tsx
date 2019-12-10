import React, { Fragment } from 'react';
import cx from 'classnames';
import { IProps } from './types';

const Aside: React.FC<IProps> = (props: IProps) => {
    const { $state, $useFunc, menu, helpMenu } = props;
    return (
        <Fragment>
            <div className={cx('open-aside', { hide: !$state }, { show: $state })}>
                <div className="close" onClick={() => $useFunc(!$state)}>
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
            <div className={cx('aside-cover', { hide: !$state }, { show: $state })}></div>
        </Fragment>
    );
};

export default Aside;
