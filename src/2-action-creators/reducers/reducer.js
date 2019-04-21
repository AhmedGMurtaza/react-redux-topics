export default (state = { value: 0}, action) => {
    switch(action.type){
        case 'ADD':
        return {
            value:action.payload
        };
        case 'SUBTRACT':
        return {
            value: action.payload
        };
        default:
            return state;
            break;

    }
}