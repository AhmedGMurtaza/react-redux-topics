import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';

// 1- SIMPLE ACTION
// import App from './1-simple-action/App';
// import configureStore from './1-simple-action/store';

// 2 - ACTION CREATORS
// import App from './2-action-creators/App';
// import configureStore from './2-action-creators/store';

// 3 - TODO (using dan example)
// import reducer from './3-todowithfilter/testtodo/reducers';
// import App from './3-todowithfilter/testtodo/components/App';
// const store = createStore(reducer);

// 4 - TYPING FOR KIDS
// import reducer from './4-typing-for-kids/reducers';
import App from './4-typing-for-kids/components/Game';
// const store = createStore(reducer);

// store.subscribe(function(){
//     console.log(store.getState());
// })

ReactDOM.render(
    // <Provider store={store} >
        <App words={["alphabets", "adidas", "mercedes", "kids"]}/>
    // </Provider>
    , document.getElementById('root'));
