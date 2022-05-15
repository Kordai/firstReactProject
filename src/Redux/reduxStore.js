import  {applyMiddleware, combineReducers, createStore} from 'redux';
import section1Reducer from './section1Reducer';
import section2Reducer from './section2Reducer';
import section3Reducer from './section3Reducer';
import applicationsReducer from './applicationsReducer';
import usersReducer from './usersReducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
    section1: section1Reducer,
    section2: section2Reducer,
    section3: section3Reducer,
    applications: applicationsReducer,
    users: usersReducer,
    form:formReducer
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;