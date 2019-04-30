const todos = (state = [], action)=>{
    switch(action.type){
        case 'ADD_TODO':
        return [
            ...state,
            {
                text:action.text,
                id:action.id,
                status:action.status
            }
        ];
        case 'TOGGLE_TODO':
            return [
                ...toggleTodo(
                    state,
                    action.id,
                    action.status)
            ];
        default:
            return state;
    }
}
export default todos;

// toggle todo status
const toggleTodo = (state,id,nextStatus) => {
    let allTodos = state.map(todo=>{
        if(todo.id === id){
            todo.status = nextStatus;
        }
        return todo;
    });
    return allTodos;
}