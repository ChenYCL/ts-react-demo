import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { addHandler, reduceHandler } from '../TestPage/actions';
import { R } from './requests';

interface IRON {
    count?: number;
    add?: () => void;
    reduce?: () => void;
}
const mapStateToProps = (state: any) => {
    return {
        count: state.countReducer,
    };
};

const mapActionsToProps = (dispatch: Dispatch) => ({
    add: () => dispatch(addHandler()),
    reduce: () => dispatch(reduceHandler()),
});

@(connect(mapStateToProps, mapActionsToProps) as any)
class Test extends React.PureComponent<IRON> {
    public componentDidMount(): void {
        R.list({ id: 186016, limit: 1 }).then((res) => console.log(res));
    }

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
