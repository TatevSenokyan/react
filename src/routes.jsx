import * as React from "react";
import Layout from './pages/Layout.jsx';
import {createBrowserRouter} from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
]);