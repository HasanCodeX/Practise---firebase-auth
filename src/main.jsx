import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router'; // Using react-router (core package)
import Root from './layout/root.jsx';
import Home from './components/home/home.jsx';
import Login from './components/login/login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // Note: 'element' is correct (not 'Components')
    children: [
      {
        index: true,
        element: <Home />
      },
      { 
        path: "login",
        element: <Login />
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);