import React from 'react';
import { connect } from 'react-redux';
import {addAction, subtractAction} from './actions/action-creator';

class Counter extends React.Component{
    render(){
        const { value, addAction, subtractAction } = this.props;
        return (
            <div>
                <h1>{value}</h1>
                <button onClick={()=>addAction(value)}>+</button>
                <button onClick={()=>subtractAction(value)}>-</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addAction: payload => dispatch(addAction(payload)),
        subtractAction: payload => dispatch(subtractAction(payload))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);