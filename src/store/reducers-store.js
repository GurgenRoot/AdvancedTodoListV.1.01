import {combineReducers, createStore,applyMiddleware} from "redux";
import {createTaskReducer} from "./createTaskReducer";
import { reducer as formReducer } from 'redux-form';
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {logger} from "redux-logger";

const rootReducer = combineReducers(
    {
        createTaskReducer,
        form: formReducer
    }
);

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));
export default store
