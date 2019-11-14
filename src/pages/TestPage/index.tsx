import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Add, Reduce } from '../../redux-model/couter/actions';

interface IRON {
    count?: number;
    add?: () => void;
    reduce?: () => void;
}
const mapStateToProps = (state: any) => {
    return {
        count: state.CounterReducer,
    };
};

const mapActionsToProps = (dispatch: Dispatch) => ({
    add: () => dispatch(Add()),
    reduce: () => dispatch(Reduce()),
});

@(connect(mapStateToProps, mapActionsToProps) as any)
class Test extends React.PureComponent<IRON> {
    public render() {
        const { count, add, reduce } = this.props;
        return (
            <div>
                <p>点击次数{count}</p>
                <button onClick={add}>+</button>
                <button onClick={reduce}>-</button>
            </div>
        );
    }
}

export default Test;
