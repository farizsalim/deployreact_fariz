import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import counterReducer from "./counter/reducer"
import thunk from "redux-thunk";

let rootReducer = combineReducers({
    counter: counterReducer
});

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
let store = createStore(rootReducer,composeEnchancers(applyMiddleware(thunk)));

export default store;