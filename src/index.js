import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if ('serviceWorker'  in navigator) {
  navigator.serviceWorker.register('./firebase-messaging-sw.js')
   .then(function(registration) {
    console.log('Registration was successful: ', registration)
   })
   .catch(function(e) {
    console.error('Registration has filed', e)
   })
}

serviceWorkerRegistration.register();

