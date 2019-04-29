import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';

// Components
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Filters from './Filters';
// Styles
import './styles.css';

const App = () => {
    return(
        <Fragment>
            <AddTodo />
            <TodoList />
            <Filters />

        </Fragment>
    )
}

export default App;