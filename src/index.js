import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import configureStore from './store/store';
import routes from './routes'
const initialState = {};
const store = configureStore(initialState);
const persiststor = persistStore(store);
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persiststor}>
     {routes}
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
