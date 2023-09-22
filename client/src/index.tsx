import React from 'react';
import { ConfigProvider,theme } from 'antd';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import reportWebVitals from './reportWebVitals';
import {Paths} from './paths';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Team } from './pages/Team';
import './index.css';

const container = document.getElementById('root')!;
const router = createBrowserRouter([
  {
    path:Paths.login,
    element: <Login/>
  },
  {
    path:Paths.register,
    element: <Register/>
  },
  {
    path:Paths.home,
    element: <h1>Home page</h1>
  },
  {
    path:Paths.team,
    element: <Team />
  },
  {
    path:Paths.game,
    element: <h1>Game page</h1>
  },
  {
    path:Paths.stats,
    element: <h1>stats page</h1>
  },
  {
    path:Paths.schedule,
    element: <h1>Schedule</h1>
  },
  
])
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider theme={{algorithm:theme.darkAlgorithm}}>
      <RouterProvider router={router}/>
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
