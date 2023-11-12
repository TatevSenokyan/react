import React from 'react'
import ReactDOM from 'react-dom/client'
import {router} from './routes.jsx';
import {RouterProvider} from 'react-router-dom';
import {store} from './redux/store.js';
import {Provider} from 'react-redux';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <RouterProvider router={router} /> 
  </Provider>
)
