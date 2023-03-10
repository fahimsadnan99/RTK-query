import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Provider} from "react-redux"
import store from './Redux/store'
import {RouterProvider} from "react-router-dom"
import Router from './Router'
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
   <RouterProvider router={Router}></RouterProvider>
    </Provider>
  </React.StrictMode>,
)
