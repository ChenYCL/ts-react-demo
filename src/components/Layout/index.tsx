import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';

import Header, { navType } from '../Header';
import Footer from '../Footer';
import Slide, { list } from '../LeftSlide';
import { Props } from '../../types';
import './index.scss';
import { connect } from 'react-redux';

const navData: navType[] = [
    { name: 'Browse', key: 0, routerName: 'songs' },
    { name: 'Playlists', key: 1, routerName: 'playlists' },
    { name: 'Pricing', key: 2, routerName: 'pricing' },
    { name: 'Our Work', key: 3, routerName: 'work' },
];

const typeList: list[] = [
    {
        title: 'Genre',
        key: 0,
        routerName: 'Genre',
    },
    {
        title: 'Mood',
        key: 1,
        routerName: 'Mood',
    },
    {
        title: 'Artist',
        key: 2,
        routerName: 'Artist',
    },
    {
        title: 'Attributes',
        key: 3,
        routerName: 'Attributes',
    },
    {
        title: 'Instrument',
        key: 4,
        routerName: 'Instrument',
    },
    {
        title: 'Advanced',
        key: 5,
        routerName: 'Advanced',
    },
    {
        title: 'Lyrical',
        key: 6,
        routerName: 'Lyrical',
    },
    {
        title: 'Instrumental',
        key: 7,
        routerName: 'Instrumental',
    },
];

const mapStateToProps = (state: any) => ({
    Songs: state.Songs,
});

interface P extends Props {
    [key: string]: any;
}

// eslint-disable-next-line react/prop-types
const Layout: React.FC<P> = ({ children, Songs, dispath }) => {
    const history = useHistory();
    const { location } = history;
    console.log(Songs, dispath);
    return (
        <Fragment>
            <Header nav={navData} />
            {!location.pathname.includes('songs') && (
                <main className="layout">
                    <section className="layout-content">{React.Children.only(children)}</section>
                    <Footer />
                </main>
            )}
            {location.pathname.includes('songs') && (
                <main className="layout-songs">
                    <div className="L">
                        <Slide typeList={typeList} />
                    </div>
                    <div className="R">
                        <section className="layout-content">{React.Children.only(children)}</section>
                        <Footer />
                    </div>
                </main>
            )}
            {/*<Loading/>*/}
        </Fragment>
    );
};

export default connect(mapStateToProps)(Layout);
