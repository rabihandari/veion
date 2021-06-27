import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

console.log(`%c Connected to server: ${process.env.REACT_APP_HOST_URL}`, 'color: green');

ReactDOM.render(
    <App/>
    , document.getElementById("root")
);