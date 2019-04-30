import React from 'react';
import { addTodo } from '../actions/todoActions';
import { connect } from 'react-redux';


const AddTodo = ({dispatch}) => {
    let taskInput;
    return(
        <form onSubmit={(e)=>{
            e.preventDefault();
            if(taskInput.value.trim().length > 0){
                dispatch(addTodo(taskInput.value));
                taskInput.value = '';
                taskInput.focus();
            }
        }
        }>
            <input ref={node => taskInput = node} placeholder="Add your task here.."/>
            <button>Add</button>
        </form>
    );
}

export default connect()(AddTodo);