import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import reducerData from './reducer'
import createSagaMiddelware from 'redux-saga'
import { watchLoadData, watchLoadOutput, watchLoadOutputData } from "./saga";

let reducers = combineReducers({
    reducerData: reducerData

});

let sagaMiddelware = createSagaMiddelware();

let store = createStore(reducers, compose(applyMiddleware(sagaMiddelware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
sagaMiddelware.run(watchLoadData)
sagaMiddelware.run(watchLoadOutput)
sagaMiddelware.run(watchLoadOutputData)

window.store = store;

export default store;