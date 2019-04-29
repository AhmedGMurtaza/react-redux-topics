import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// 1- SIMPLE ACTION
// import App from './1-simple-action/App';
// import configureStore from './1-simple-action/store';

// 2 - ACTION CREATORS
// import App from './2-action-creators/App';
// import configureStore from './2-action-creators/store';

// 3 - TODO (using dan example)
import reducer from './3-todowithfilter/testtodo/reducers';
import App from './3-todowithfilter/testtodo/components/App';
const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>
    , document.getElementById('root'));
