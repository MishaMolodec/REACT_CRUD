import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {connect, Provider} from 'react-redux';
import {Window} from './components/window';
import {createStore} from 'redux';
import allReducers from './reducers/modal';

const appRoot = document.getElementById("app-root");
 export const modalRoot = document.getElementById("modal-root");
 export const PathBase =`http://localhost:3002/api/employees/`;

const store = createStore(allReducers);

function showmodal(state =[], action){
    if(action.type ==='CHANGE_STATE'){
        return[
            ...state,
            action.showModal,
        ]
    }
}


store.subscribe(()=>{
    console.log('subscribe', store.getState());
})
store.dispatch({
    type: 'CHANGE_STATE', showModal: 'true',toCreate: 'true',toUpdate: 'false',
    toDelete: 'false',

});
store.dispatch({
    type: 'CHANGE_STATE', showModal: 'false',

});
ReactDOM.render(
    <Provider store={store}>
        
    <Window  /></Provider>, appRoot);