import { combineReducers } from 'redux';
import todos from './reducers/todoReducer';
import visibility from './reducers/visibilityReducer';

const todoApp = combineReducers({
    todos,
    visibility
});

export default todoApp;