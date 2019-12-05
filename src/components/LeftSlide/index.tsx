import React from 'react';
import './index.scss';

export interface list extends WithRouterName {
    title: string;
    key: number | string;
    icon?: string;
}

interface AllProps {
    typeList: list[];
}

type Props = AllProps;

class LeftSlide extends React.Component<Props, {}> {
    render() {
        const { typeList } = this.props;

        return (
            <div className="box">
                {typeList.map((item, index) => (
                    <div key={item.key} className="item">
                        {item.title}
                    </div>
                ))}
            </div>
        );
    }
}

export default LeftSlide;
