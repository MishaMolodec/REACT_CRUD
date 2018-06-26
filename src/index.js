import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {connect, Provider} from 'react-redux';
import {Window} from './components/window';
import {createStore} from 'redux';
import allReducers from './reducers';

const appRoot = document.getElementById("app-root");
 export const modalRoot = document.getElementById("modal-root");
 export const PathBase =`http://localhost:3002/api/employees/`;

const store = createStore(allReducers,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());




store.subscribe(()=>{
    console.log('subscribe', store.getState());
})
store.dispatch({
    type: 'CHANGE_STATE', showModal: 'true',toCreate: 'true',toUpdate: 'false',
    toDelete: 'false',

});
store.dispatch({
    type: 'CHANGE_STATE', showModal: 'true',toCreate: 'false',toUpdate: 'true',
    toDelete: 'false',
});

store.dispatch({

  type: 'CHANGE_STATE',  showModal: 'true',toCreate: 'false',toUpdate: 'false',
    toDelete: 'true',
});

store.dispatch({

   type: 'CHANGE_STATE', showModal: 'false',toCreate: 'false',toUpdate: 'false',
    toDelete: 'false',
});
ReactDOM.render(
    <Provider store={store}>
        
    <Window  /></Provider>, appRoot);