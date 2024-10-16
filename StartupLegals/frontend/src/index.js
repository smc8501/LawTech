import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home/Home';
import Login  from './pages/Login/Login';
import CreateContract from './pages/CreateContract/CreateContract';
import Dashboard from './pages/Dashboard/Dashboard'
import SignUp from './pages/SignUp/SignUp';

import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignContract from './pages/SignContract/SignContract';
import Test from './Test';


const router = createBrowserRouter([

  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/create_contract",
    element: <CreateContract/>,
  },

  {
    path: "/sign",
    element: <SignContract/>
  },
  {
    path: "/test",
    element: <Test/>
  },
{
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/signUp",
    element: <SignUp/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
