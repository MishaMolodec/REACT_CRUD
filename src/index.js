import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Window} from './components/window';


const appRoot = document.getElementById("app-root");
 export const modalRoot = document.getElementById("modal-root");
 export const PathBase =`http://localhost:3002/api/employees/`;






ReactDOM.render(
    <Window  />, appRoot);