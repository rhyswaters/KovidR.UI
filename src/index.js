import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import guessReducer from './store/reducers/guess';
import authReducer from './store/reducers/auth';
import {BrowserRouter} from 'react-router-dom';
import {Auth0Provider} from '@auth0/auth0-react';

const rootReducer = combineReducers({
    guess: guessReducer,
    auth: authReducer
});

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
    <Provider store={store}>
        <Auth0Provider
            domain="kovidr.eu.auth0.com"
            clientId="YitliL37v1bestq4a0QABfOCA5jgsUVt"
            redirectUri={window.location.origin}
            audience="https://api.kovidr.ie/guess"
            scope="read:guesses read:caseNumbers write:guesses">
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Auth0Provider>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
