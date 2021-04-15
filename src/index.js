import DevTools from "react-async-devtools";
import React from 'react';
import ReactDOM from 'react-dom';
import './scss/style.scss'
import App from './components/App.jsx'
import registerServiceWorker from 'react-service-worker';


ReactDOM.render((
    // <BrowserRouter>
  <div className="container">
    <App />
  </div>
  // </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();