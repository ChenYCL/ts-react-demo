import React from 'react';
import { IProps } from './types';
import './index.scss';

const Crumb: React.FC<IProps> = (props: IProps) => {
    const { useFunc } = props;
    return (
        <div className="Crumb-wrapper" onClick={() => useFunc()}>
            <div className="content">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </div>
    );
};

export default Crumb;
