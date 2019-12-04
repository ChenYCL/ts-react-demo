import React from 'react';

interface AllProps {
    text: string;
    padding?: number;
}

type Props = AllProps;

const NotFound: React.FC<Props> = (props: Props) => {
    const { text = '页面未找到' } = props;
    return (
        <div>
            <i></i>
            <div>{text}</div>
        </div>
    );
};

export default NotFound;
