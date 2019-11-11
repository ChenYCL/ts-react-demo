import React from 'react';
import './index.scss';
export interface IconType {
    url: string;
    size?: number;
}

const Icon = (props: IconType) => {
    const { url, size } = props;
    return (
        <img
            style={{
                width: `${size}px`,
                height: `${size}px`,
            }}
            src={url}
            className="icon"
        />
    );
};

export default Icon;
