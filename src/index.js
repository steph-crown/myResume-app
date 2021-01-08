import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App.jsx';
import reportWebVitals from './reportWebVitals';

// React-redux
import { Provider } from "react-redux";
import rootReducer from "./store/reducers";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
let store = createStore(rootReducer, applyMiddleware(...middlewares));

// Runs in background and listens for any redux action that'll be dispatched
sagaMiddleware.run(watcherSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
