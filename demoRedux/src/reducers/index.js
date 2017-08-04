import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
    courses //now we can refer to this as state.courses 
    //because of the way we named this property (shortname property name ES6)
});

export default rootReducer;