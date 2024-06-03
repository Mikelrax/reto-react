import React from 'react';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import style from './app.module.css';
import Home from './pages/home/home';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
const App = () => {
  return (
    <div className={style.global}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
