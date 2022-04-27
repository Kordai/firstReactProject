import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Redux/reduxStore';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

let rerenderEntireTree = () => {

  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <Provider store={store} >
          <App />
        </Provider>
      </React.StrictMode>
    </BrowserRouter>);
}
rerenderEntireTree();
store.subscribe(rerenderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
