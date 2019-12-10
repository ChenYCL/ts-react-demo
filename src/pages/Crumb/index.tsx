import React, { Fragment, useState } from 'react';
import './index.scss';
import Crumb from '../../components/Crumb';
import Aside from '../../components/Aside';

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
            <Crumb useFunc={() => useModalShow(!modalShow)} />
            <Aside $useFunc={useModalShow} $state={modalShow} menu={menu} helpMenu={helpMenu} />
        </Fragment>
    );
};

export default Block;
