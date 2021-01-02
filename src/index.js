import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App.jsx';
import reportWebVitals from './reportWebVitals';

// React-redux
import { Provider } from "react-redux";
import rootReducer from "./store/reducers";
import { createStore } from "redux";

let store = createStore(rootReducer);

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
