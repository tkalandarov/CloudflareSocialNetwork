import React from 'react';
import {render} from 'react-dom';

import App from './App';

import {createStore, applyMiddleware} from "redux";
import  {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {rootReducer} from "./redux/rootReducer";

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        <App/>
    </Provider>)

render(app, document.getElementById('root'));
