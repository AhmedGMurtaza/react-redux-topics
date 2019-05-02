import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions/todoActions';

class TodoList extends React.Component{
    render(){
        const { tasks, onToggleTodo } = this.props;
        return(
            <ul className="tasks-list">
            {
                tasks.map((item,index)=>{
                    return (
                        <li 
                        className={item.status === 'COMPLETED'?'completed':''} 
                        onClick={()=>onToggleTodo(item.id,item.status)}
                        key={index.toString()}
                    >{item.text}</li>        
                    )
                })
            }
            </ul>
        )
    }
}

const filteredList = (tasks,activeFilter) => {
    switch(activeFilter){
        case 'FILTER_COMPLETED':
            return tasks.filter(item=>item.status === 'COMPLETED');  
        case 'FILTER_ACTIVE':
            return tasks.filter(item=>item.status === 'ACTIVE');
        default:
            return tasks;
    }
}

const mapStateToProps = todoState => {
    const { todos, visibilityFilters } = todoState;
    return {
        tasks:filteredList(todos, visibilityFilters.activeFilter)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onToggleTodo: (id, prevStatus) => dispatch(toggleTodo(id,prevStatus))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
