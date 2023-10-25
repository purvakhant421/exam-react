import { combineReducers } from 'redux';
import categoryReducer from "./Category/Reducer/reducer";

const rootReducer = combineReducers({
    categoryReducer,
});

export default rootReducer;