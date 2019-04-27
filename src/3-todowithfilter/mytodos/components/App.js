import React, { Component } from 'react';
import AddTodo from './AddTodo';
import VisibleTodoList from './visibleTodoList';
import Footer from './footer';

class App extends Component{
    render(){
        return(
            <div>
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </div>
        )
    }
}

export default App;