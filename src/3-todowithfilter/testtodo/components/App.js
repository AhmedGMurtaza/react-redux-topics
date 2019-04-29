import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
// Actions
import {addTodo} from '../actions/todoActions';
import './styles.css';

const App = ({dispatch, tasks}) => {
    let taskInput;
    return(
        <Fragment>
            <form onSubmit={(e)=>{
                e.preventDefault();
                dispatch(addTodo(taskInput.value));
                }
            }>
                <input ref={node => taskInput = node} placeholder="Add your task here.."/>
                <button>Add</button>
            </form>
            <ul className="tasks-list">
                {
                    tasks.map((item,index)=><li key={index.toString()}>{item.text}</li>)
                }
            </ul>
            <div className="filters">
                <a href="#" onClick={(e)=>e.preventDefault()}>All</a>
                <a href="#" onClick={(e)=>e.preventDefault()}>Active</a>
                <a href="#" onClick={(e)=>e.preventDefault()}>Completed</a>
            </div>

        </Fragment>
    )
}

const mapStateToProps = todoState => {
    return {
        tasks:todoState
    }
}

export default connect(mapStateToProps)(App);