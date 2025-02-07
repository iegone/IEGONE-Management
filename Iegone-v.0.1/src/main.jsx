import React from 'react'
import './index.css'
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from './router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
