import  {combineReducers, createStore} from 'redux';
import section1Reducer from './section1Reducer';
import section2Reducer from './section2Reducer';
import section3Reducer from './section3Reducer';
import applicationsReducer from './applicationsReducer';

let reducers = combineReducers({
    section1: section1Reducer,
    section2: section2Reducer,
    section3: section3Reducer,
    applications: applicationsReducer
});
let store = createStore(reducers);

export default store;