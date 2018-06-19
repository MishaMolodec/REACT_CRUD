import {combineReducers} from 'redux';

import modalReducer from './modal';
import dataReducer from './data';
const allReducers = combineReducers({
    modal: modalreducers,
    data: dataReducer,
});

export default allReducers;