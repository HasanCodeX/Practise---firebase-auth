import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router'; // Use react-router (not react-router-dom)
import Root from './layout/root.jsx'; // ✅ Use .jsx


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // Use element with JSX
    children: [
      // Add child routes here if needed
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
