/**
 * @format
 */


import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
// import reducer from './src/reducers/counterReducer';
// import userData from './src/reducers/userDataReducer'
// import cal2 from './src/reducers/counterReducer2';
import reducers from './src/reducers'
import thunk from 'redux-thunk';
import 'react-native-gesture-handler';

const store = createStore(
    reducers,
    compose(
        applyMiddleware(
            thunk,
        )
    )
);

const AppContainer = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => AppContainer);