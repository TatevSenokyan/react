import * as React from "react";
import Layout from './pages/Layout.jsx';
import HomePage from './pages/HomePage';
import {createBrowserRouter} from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
        {index: true, element: <HomePage/>},
    ],
  },
]);