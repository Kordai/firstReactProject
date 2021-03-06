import  {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import section1Reducer from './section1Reducer';
import section2Reducer from './section2Reducer';
import section3Reducer from './section3Reducer';
import applicationsReducer from './applicationsReducer';
import usersReducer from './usersReducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import authReducer from './authReducer';

let reducers = combineReducers({
    section1: section1Reducer,
    section2: section2Reducer,
    section3: section3Reducer,
    applications: applicationsReducer,
    users: usersReducer,
    auth: authReducer,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
//let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;