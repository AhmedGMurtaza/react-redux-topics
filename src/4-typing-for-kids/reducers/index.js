import { combineReducers } from 'redux';
import todos from './todo';
import visibilityFilters from './filters';

const reducers = combineReducers({
    todos,
    visibilityFilters
});

export default reducers;