import React, { Component } from 'react';

interface IVisible {
    visible: boolean;
}

//排除 IVisible
function withVisible<Self>(
    WrappedComponent: React.ComponentType<Self & IVisible>
): React.ComponentType<Omit<Self, 'visible'>> {
    // @ts-ignore
    // eslint-disable-next-line react/display-name
    return class extends Component<Self> {
        render() {
            return <WrappedComponent {...this.props} visible={true} />;
        }
    };
}
