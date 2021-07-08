import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';
import * as serviceWorker from './serviceWorkerRegistration';

import App from './App';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();
