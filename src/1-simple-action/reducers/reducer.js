export default (state = { rotating:true},action) => {
    switch(action.type){
        case 'ROTATING':
            return {
                rotating:action.payload
            }
        default:
            return state;
            break;
    }
}