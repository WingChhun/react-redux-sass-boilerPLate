import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import rootReducer from "./rootReducer";
const middleware = [thunk, logger];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store;