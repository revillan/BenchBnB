import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store = window.store = configureStore(); //just for testing!
    ReactDOM.render(<div>React is working!</div>, root);
});
