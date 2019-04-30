import React, {Fragment} from 'react';

// Components
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import VisibilityFilters from './VisibilityFilters';

// Styles
import './styles.css';

const App = () => {
    return(
        <Fragment>
            <AddTodo />
            <TodoList />
            <VisibilityFilters />

        </Fragment>
    )
}

export default App;