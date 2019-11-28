import React, { Fragment } from 'react';

import Header, { navType } from '../Header';
import Footer from '../Footer';
import { Props } from '../../types';
import './index.scss';

const navData: navType[] = [
    { name: 'Browse', key: 0 },
    { name: 'Playlists', key: 1 },
    { name: 'Pricing', key: 2 },
    { name: 'Our Work', key: 3 },
];

// eslint-disable-next-line react/prop-types
const Layout: React.FC<Props> = ({ children }) => {
    return (
        <Fragment>
            <Header nav={navData} />
            <main className="layout">
                {/*<Aside/>*/}
                <section className="layout-content">{React.Children.only(children)}</section>
                <Footer />
            </main>
            {/*<Loading/>*/}
        </Fragment>
    );
};

export default Layout;
