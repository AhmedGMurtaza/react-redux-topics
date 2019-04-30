let initialState = {
    activeFilter:'FILTER_ALL'
}
const visibilityFilters = (state = initialState,action) => {
    switch(action.type){
        case 'FILTER_ACTIVE':
        case 'FILTER_COMPLETED':
        case 'FILTER_ALL':            
            return{
                activeFilter:action.type
            };
        default:
            return state;
        
    }
}

export default visibilityFilters;