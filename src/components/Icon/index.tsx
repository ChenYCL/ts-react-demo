import React from 'react';
import * as CSS from 'csstype';
import './index.scss';
export interface IconType {
    url: string;
    key: number;
    size?: number;
    style?: CSS.Properties;
    readonly posi?: 'block' | 'inline-block';
}

const Icon = (props: IconType) => {
    const { url, size, style, posi } = props;
    return (
        <img
            style={{
                width: `${size}px`,
                height: `${size}px`,
                display: `${posi}`,
                ...style,
            }}
            src={url}
            className="icon"
        />
    );
};

export default Icon;
