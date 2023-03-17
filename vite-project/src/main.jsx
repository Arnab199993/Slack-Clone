import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createRoot } from "react-dom/client";
import Routes from './Routes';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter(Routes)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,

)
