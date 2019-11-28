import React, { Fragment, useState } from 'react';
import { Props } from '../../types';
import './index.scss';

const Block = (props: Props): JSX.Element => {
    const [modalShow, useModalShow] = useState<boolean>(false);
    const handleSubmit = (e: React.MouseEventHandler): void => {
        useModalShow(true);
    };
    return (
        <div className="wrapper">
            <div className="content">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </div>
    );
};

export default Block;
