import React from "react";
import {AppState} from "../../store";
import {Dispatch} from 'redux'
import {connect} from 'react-redux'
import {Add, Reduce} from "../../store/couter/actions";

interface IRON {
    count: number,
    add: () => void,
    reduce: () => void
}

class Test extends React.PureComponent<IRON> {
    public render() {
        const {count, add, reduce} = this.props;
        return (
            <div>
                <p>点击次数{count}</p>
                <button onClick={add}>+</button>
                <button onClick={reduce}>-</button>
            </div>
        )
    }
}

const mapStateToProps = (state:AppState)=> {
    console.log(state,'state');
    return {
        count:state.CounterReducer
    }
}

const mapActionsToProps = (dispatch: Dispatch) => ({
    add: () => dispatch(Add()),
    reduce: () => dispatch(Reduce())
})

export default connect(mapStateToProps, mapActionsToProps)(Test);
