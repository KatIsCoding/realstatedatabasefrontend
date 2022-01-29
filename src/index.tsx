import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pages from './pages';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Footer} from './components/Footer'
import {Header} from './components/Header'

//TODO: Add the properties and coincidences routes and pages
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Pages.App />} />
          <Route path="/people" element={<Pages.People />} />
        
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
