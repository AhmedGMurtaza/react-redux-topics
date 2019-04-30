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
            return state;
        default:
            return state;
    }
}
export default todos;