import {createStore, applyMiddleware} from "redux";
import logger from 'redux-logger'
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';
import api from "./api";
import reducer from "./reducer";

const middleware = [thunk.withExtraArgument(api), logger]

const enhancers = applyMiddleware(...middleware)

const store = createStore(reducer, composeWithDevTools(enhancers))

export default store;
