import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
// import {PropTypes} from 'prop-types';

const Todo = ({dispatch}) => {
    console.log(dispatch)
    let input;
    return (
        <div>
            <form 
                onSubmit={(e)=>{
                    e.preventDefault();
                    dispatch(addTodo(input.value));
                }}
                >
                <input
                    type="text"
                    ref={node => input = node}
                />
                <button 
                    type="submit" 
                >Add</button>
            </form>
        </div>
    );
}

/* 
    if we dont pass mapstatetoprops and dispatchtoprops it will pass {dispatch} func 
    as prop to the component by default 
*/

export default connect()(Todo);