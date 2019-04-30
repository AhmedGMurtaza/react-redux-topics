let nextTodoId = 1;
export const addTodo = text => (
    {
        type:'ADD_TODO',
        status:'ACTIVE',
        id:(nextTodoId++).toString(),
        text
    }
)

export const toggleTodo = (id, prevStatus) => {
    return {
        type:'TOGGLE_TODO',
        status:prevStatus === 'ACTIVE'?'COMPLETED':'ACTIVE',
        id
    }
}