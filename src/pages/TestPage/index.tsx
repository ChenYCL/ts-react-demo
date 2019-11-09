import React from 'react';
import { AppState } from '../../store';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Add, Reduce } from '../../store/couter/actions';
import MHeader from '../../components/Header';

interface IRON {
    count: number;
    add: () => void;
    reduce: () => void;
}

const mapStateToProps = (state: AppState) => {
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
    list = [
        {
            name: '22',
            key: 1,
        },
        {
            name: '33',
            key: 2,
        },
    ];

    public render() {
        const { count, add, reduce } = this.props;
        return (
            <div>
                <p>点击次数{count}</p>
                <button onClick={add}>+</button>
                <button onClick={reduce}>-</button>
                <MHeader   nav={this.list}/>
            </div>
        );
    }
}

export default Test;
