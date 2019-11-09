import React from 'react';

// import cx from 'classnames';

export type navType = {
    name: string;
    key: number;
};

export interface IRON {
    nav: Array<navType>;
    color?: string;
    padding?: object;
}

class Header extends React.Component<IRON, { initState: string }> {
    static readonly state = {
        initState: 0,
    };

    public render() {
        const { nav, color, padding } = this.props;
        return (
            <ul>
                {nav.map((item) => (
                    <li key={item.key}>{item.name}</li>
                ))}
            </ul>
        );
    }
}

export default Header;
