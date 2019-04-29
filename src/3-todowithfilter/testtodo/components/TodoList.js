import React from 'react';
import { connect } from 'react-redux';

const TodoList = ({tasks}) => {
    return(
        <ul className="tasks-list">
        {
            tasks.map((item,index)=><li key={index.toString()}>{item.text}</li>)
        }
        </ul>
    
    )
}


const mapStateToProps = todoState => {
    return {
        tasks:todoState.todos
    }
}

export default connect(mapStateToProps)(TodoList);
