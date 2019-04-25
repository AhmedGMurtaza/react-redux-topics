import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/addTodo';
import {PropTypes} from 'prop-types';

const Todo = ({dispatch}) => {
    let input;
    return (
        <div>
            <form 
                onSubmit={()=>{
                    console.log(input.value);
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

// Todo.propTypes = {
// }


/* 
    if we dont pass mapstatetoprops and dispatchtoprops it will pass {dispatch} func 
    as prop to the component by default 
*/
export default connect()(Todo);