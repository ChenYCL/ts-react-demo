import React, { Fragment } from 'react';

import Header, { navType } from '../Header';
import Footer from '../Footer';
import { Props } from '../../types';
import './index.scss';

class Layout extends React.Component<Props, {}> {
    navData: navType[] = [
        { name: 'Browse', key: 0 },
        { name: 'Playlists', key: 1 },
        { name: 'Pricing', key: 2 },
        { name: 'Our Work', key: 3 },
    ];

    render() {
        return (
            <Fragment>
                <Header nav={this.navData} />
                <main className="layout">
                    {/*<Aside/>*/}
                    <section className="layout-content">{this.props.children}</section>
                    <Footer />
                </main>
                {/*<Loading/>*/}
            </Fragment>
        );
    }
}

export default Layout;
