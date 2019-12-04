import React, { Fragment, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Header, { navType } from '../Header';
import Footer from '../Footer';
import Slide, { list } from '../LeftSlide';
import './index.scss';
import { connect } from 'react-redux';

const navData: navType[] = [
    { name: 'Browse', key: 0, routerName: '/home/songs' },
    { name: 'Playlists', key: 1, routerName: '/home/playlists' },
    { name: 'Pricing', key: 2, routerName: '/home/pricing' },
    { name: 'Our Work', key: 3, routerName: '/home/work' },
];

const mapStateToProps = (state: any) => ({
    Songs: state.Songs,
});

interface SongsType {
    categories: {
        [Propname: string]: any;
    };
    sub: [
        {
            activity: boolean;
            category: number;
            hot: boolean;
            imgId: number;
            imgUrl: string | null;
            name: string;
            resourceCount: number;
            resourceType: number;
            type: number;
        }
    ];
    all: {
        activity: boolean;
        category: number;
        hot: boolean;
        imgId: number;
        imgUrl: null | string;
        name: string;
        resourceCount: number;
        resourceType: number;
        type: number;
    };
}

type LayoutType = {
    children: React.ReactNode;
    Songs: {
        category: SongsType;
        [key: string]: any;
    };
    [key: string]: any;
};
type TypeList = list[];

const Layout = ({ children, Songs }: LayoutType) => {
    const [isLoading, setLoading] = useState<boolean>(true);
    const [typeList, setTypeList] = useState<TypeList>([]);

    const history = useHistory();
    const { location } = history;

    useEffect(() => {
        if (!Songs.category) return;
        const {
            category: { categories },
        } = Songs;
        let l: TypeList = [];
        for (let key in categories) {
            l.push({ title: categories[key], key: key, routerName: key });
        }
        setTypeList(l);
        setLoading(false);
    }, [Songs]);

    return (
        <Fragment>
            <Header nav={navData} history={history} />
            {!location.pathname.includes('songs') && (
                <main className="layout">
                    <section className="layout-content">{children}</section>
                    <Footer />
                </main>
            )}
            {location.pathname.includes('songs') && (
                <main className="layout-songs">
                    <div className="L">{!isLoading ? <Slide typeList={typeList} /> : <div>Loading...</div>}</div>
                    <div className="R">
                        <section className="layout-content">{children}</section>
                        <Footer />
                    </div>
                </main>
            )}
            {/*<Loading/>*/}
        </Fragment>
    );
};

export default connect(mapStateToProps)(Layout);
