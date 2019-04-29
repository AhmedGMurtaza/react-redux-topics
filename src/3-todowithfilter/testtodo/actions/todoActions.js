let nextTodoId = 1;
export const addTodo = text => (
    {
        type:'ADD_TODO',
        status:'ACTIVE',
        id:(nextTodoId++).toString(),
        text
    }
)