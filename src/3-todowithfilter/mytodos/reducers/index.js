import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const todoApp = combineReducers({
  todos:todos,
  visibilityFilter:visibilityFilter,
});

// overall app state looks something like this:
// state = {
//   todos:[],
//   visibilityFilter:'SHOW_ALL'
// }

export default todoApp;
